import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { Files, Fields } from 'formidable';
import uploadImage from '@/lib/uploadImage';

// Configuração para desabilitar o parser de corpo interno do Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

// Atualize a interface para garantir que todos os campos necessários estejam presentes
interface FormidableFile {
  filepath: string;
  newFilename: string;
  mimetype: string; // Garantindo que mimetype seja string, não null
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields: Fields, files: Files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'File upload failed' });
    }

    // 'files' deve ser um objeto cujas chaves são os nomes dos campos do formulário
    // e os valores são arquivos ou arrays de arquivos
    const fileArray = files.files ? (Array.isArray(files.files) ? files.files : [files.files]) : [];

    try {
      const uploadPromises = fileArray.map((file) => {
        // Garantindo que todos os campos necessários estejam presentes e corretos
        if (file && 'filepath' in file && 'newFilename' in file && 'mimetype' in file) {
          return uploadImage(file as FormidableFile, fields);
        }
        throw new Error('Invalid file data');
      });
      const urls = await Promise.all(uploadPromises);
      return res.status(200).json({ urls });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to upload images' });
    }
  });
}
