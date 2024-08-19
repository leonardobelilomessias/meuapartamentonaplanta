import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { Fields, Files, File } from 'formidable';
import uploadImageCover from '@/lib/uploadCover';

// Configuração para desabilitar o parser de corpo interno do Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

interface FormidableFile extends File {
    filepath: string;
    newFilename: string;
    mimetype: string;
  }

// Define a interface para os campos do formulário
interface FormidableFields extends Fields {
  bucket: string[];
}

// Define a interface para arquivos do formulário
interface FormidableFiles  {
  files: File | File[];
}

// Manipulador de requisições da API
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = formidable({ multiples: true });

  form.parse(req, async (err: any, fields: Fields, files: Files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'File upload failed' });
    }

    const typedFields = fields as FormidableFields;
    const typedFiles = files as FormidableFiles | Files;

    let fileArray: File[] = [];

    if (typedFiles.files) {
      if (Array.isArray(typedFiles.files)) {
        fileArray = typedFiles.files;
      } else if (typedFiles.files instanceof File) {
        fileArray = [typedFiles.files];
      }
    }

    const { bucket } = typedFields;

    if (!bucket || bucket.length === 0) {
      return res.status(400).json({ error: 'Bucket is required and must be a non-empty array' });
    }

    try {
      if (fileArray.length === 0) {
        return res.status(400).json({ error: 'No files were uploaded' });
      }
      const fileFormidableArray = fileArray[0] as FormidableFile
      const url = await uploadImageCover(fileFormidableArray, typedFields);
      return res.status(200).json({ url });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to upload image' });
    }
  });
}
