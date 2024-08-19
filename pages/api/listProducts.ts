import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Define a interface para o produto
interface Product {
  id: string;
  [key: string]: any; // Permite adicionar outras propriedades do produto
}

// Define a interface para a resposta da API
interface ApiResponse {
  error?: string;
  [key: string]: any; // Permite adicionar outras propriedades
}

// Manipulador de requisições da API
export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[] | ApiResponse>) {
  if (req.method === 'GET') {
    try {
      const productsCol = collection(db, 'products');
      const productSnapshot: QuerySnapshot = await getDocs(productsCol);
      
      // Mapeia os documentos e inclui o ID junto com os dados
      const productList: Product[] = productSnapshot.docs.map(doc => ({
        id: doc.id, // Inclui o ID do documento
        ...doc.data() // Inclui os dados do documento
      })) as Product[];
      
      return res.status(200).json(productList);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
