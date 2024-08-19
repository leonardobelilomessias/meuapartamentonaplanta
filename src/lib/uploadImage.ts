import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import fs from "fs/promises";
import { storage } from "./firebase";
import sharp from 'sharp';
import { Fields } from 'formidable';

// Define os tipos para o campo 'file' de 'formidable'
interface FormidableFile {
  filepath: string;
  newFilename: string;
  mimetype: string;
}

const uploadImage = async (file: FormidableFile, fields: Fields): Promise<string> => {
    
  let { bucket } = fields;
  if (!bucket || !Array.isArray(bucket)) {
    throw new Error('Bucket is required and must be an array');
  }

  const tempPath = file.filepath;
  
  // Lê o arquivo temporário
  const fileBuffer = await fs.readFile(tempPath);
  
  // Redimensiona a imagem
  const resizedImageBuffer = await sharp(fileBuffer)
    .resize({ width: 800, height: 561 })
    .toBuffer();
  
  // Cria uma referência para o armazenamento do Firebase
  const storageRef = ref(storage, `${bucket[0]}/${file.newFilename}`);
  
  // Faz o upload da imagem
  const snapshot = await uploadBytes(storageRef, resizedImageBuffer, {
    contentType: file.mimetype,
  });
  
  // Obtém a URL de download da imagem
  const url = await getDownloadURL(snapshot.ref);
  return url;
};

export default uploadImage;
