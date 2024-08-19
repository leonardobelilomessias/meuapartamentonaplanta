import { db } from "@/lib/firebase";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  [key: string]: any;
};

type UpdatedData = Data & {
  updatedAt: any;
  id?: string; // Campo id opcional
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { docId, data }: { docId: string; data: Data } = req.body;

      // Verifique se os dados necessários estão presentes
      if (!docId || !data) {
        return res.status(400).json({ error: 'Dados insuficientes' });
      }

      // Atualiza o documento no Firestore
      const docRef = doc(db, 'products', docId);
      const updatedData: UpdatedData = { ...data, updatedAt: serverTimestamp() };
      await updateDoc(docRef, updatedData);

      // Adiciona o campo id ao objeto retornado
      updatedData.id = docId;

      // Responde com sucesso e retorna o objeto atualizado com o id
      return res.status(200).json( updatedData );
    } catch (error) {
      console.error('Erro ao atualizar o documento:', error);

      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(500).json({ error: 'Erro ao atualizar o documento' });
    }
  } else {
    // Método não permitido
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
