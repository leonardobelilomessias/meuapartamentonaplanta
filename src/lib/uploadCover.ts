import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import fs from "fs/promises";

import { doc, getDoc, updateDoc, DocumentData } from "firebase/firestore";
import { Fields, File } from 'formidable';
import { db, storage } from "@/lib/firebase";

// Define o tipo para o arquivo 'file' de 'formidable'
interface FormidableFile extends File {
  filepath: string;
  newFilename: string;
  mimetype: string;
}

interface FieldsWithBucket extends Fields {
  bucket: string[];
}

const uploadImageCover = async (file: FormidableFile, fields: FieldsWithBucket): Promise<string> => {
    //console.log('fild em uploadcover',fields.bucket)
  const { bucket } = fields;

  if (!bucket || bucket.length === 0) {
    throw new Error('Bucket is required and must be a non-empty array');
  }

  const fileBuffer = await fs.readFile(file.filepath);
  const storageRef = ref(storage, `covers/${bucket[0]}`);
  const snapshot = await uploadBytes(storageRef, fileBuffer, {
    contentType: file.mimetype,
  });

  const url = await getDownloadURL(snapshot.ref);

  const docRef = doc(db, 'products', bucket[0]);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error('Document does not exist');
  }

  const product: DocumentData = docSnap.data() || {};
  product.cover = url;
  await updateDoc(docRef, product);

  return url;
};

export default uploadImageCover;
