// pages/api/getPosts.ts
import { admin } from '@/lib/firebaseadm';
import type { NextApiRequest, NextApiResponse } from 'next';
const db = admin.firestore();

const PAGE_SIZE = 10; // Número de posts por página

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { startAfter } = req.query; // Recebe o ID do último post da página anterior
  try {
    let query = db.collection('posts').orderBy('title', 'asc').startAfter('bacada').limit(5);
    
    // if (startAfter) {
    //   const lastDoc = await db.collection('posts').doc(startAfter as string).get();
    //   console.log('start after veio',query)
    //   query =  query.startAfter(lastDoc);
    // }
    
    const snapshot = await query.get();
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const lastVisible = snapshot.docs[snapshot.docs.length - 1];

    res.status(200).json({
      posts,
      lastVisible: lastVisible ? lastVisible.id : null, // Passa o ID do último documento
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}