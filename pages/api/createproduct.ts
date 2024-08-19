import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Definindo a interface para o produto
interface Product {
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  neighborhood: string;
  zip: string;
  bedrooms: string;
  bathrooms: string;
  garages: string;
  area: string;
  amenities: Record<string, boolean>; // Ajuste o tipo conforme a estrutura do seu objeto amenities
  slug?: string;
  createdAt?: any; // Pode ser do tipo Timestamp do Firebase
  updatedAt?: any; // Pode ser do tipo Timestamp do Firebase
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const product: Product = req.body;
      product.createdAt = new Date();
      product.updatedAt = new Date();
      const docId = await addProduct(product);
      res.status(200).json({ id: docId });
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      res.status(500).json({ error: 'Failed to add product' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

const addProduct = async (product: Product): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'products'), product);
    console.log('Documento criado com ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
    throw error;
  }
};
