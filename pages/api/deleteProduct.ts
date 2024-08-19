// Ajuste o caminho conforme necessário
import { db, storage } from '@/lib/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject, listAll } from 'firebase/storage';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.query as { id: string };

    try {
      // Deletar documento no Firestore
      await deleteProductDocument(id);

      // Deletar bucket no Firebase Storage
      await deleteProductBucket(id);

      await deleteCover(id);

      res.status(200).json({ message: "Produto e bucket deletados com sucesso." });
    } catch (error) {
      console.error("Erro ao deletar produto e bucket:", error);
      res.status(500).json({ error: "Erro ao deletar produto e bucket." });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}

const deleteProductDocument = async (id: string): Promise<void> => {
  try {
    const docRef = doc(db, 'products', id);
    await deleteDoc(docRef);
    console.log(`Documento com ID ${id} deletado do Firestore.`);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao deletar documento: ${error.message}`);
    } else {
      throw new Error(`Erro ao deletar documento: ${String(error)}`);
    }
  }
};

const deleteProductBucket = async (id: string): Promise<void> => {
  try {
    const bucketRef = ref(storage, id);

    const list = await listAll(bucketRef);
    console.log(list);
    const deletePromises = list.items.map((itemRef) => deleteObject(itemRef));
    await Promise.all(deletePromises);

    console.log(`Todos os objetos com o prefixo ${id} deletados do Firebase Storage.`);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('object-not-found')) {
        console.log(`Nenhum objeto encontrado com o prefixo ${id} no Firebase Storage. Nenhuma ação necessária.`);
      } else {
        throw new Error(`Erro ao deletar objetos: ${error.message}`);
      }
    } else {
      throw new Error(`Erro ao deletar objetos: ${String(error)}`);
    }
  }
};

const deleteCover = async (id: string): Promise<void> => {
  try {
    const imageRef = ref(storage, `/covers/${id}`);
    await deleteObject(imageRef);
    console.log(`Capa com ID ${id} deletada do Firebase Storage.`);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao deletar capa: ${error.message}`);
    } else {
      throw new Error(`Erro ao deletar capa: ${String(error)}`);
    }
  }
};
