import { NextApiRequest, NextApiResponse } from 'next';

import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Tipo para a resposta da API
interface ApiResponse {
  error?: string;
  message?: string;
  [key: string]: any; // Permite adicionar outras propriedades
}

// Manipulador de requisições da API
export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method === 'GET') {
    const { id } = req.query;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: 'ID is required and must be a string' });
    }

    try {
      const docRef = doc(db, 'products', id.trim());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        res.status(200).json({...docSnap.data(),id:id});
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
