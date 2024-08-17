// Example usage

import { admin } from "./firebaseadm";


const db = admin.firestore();

export const getPostsByAdm = async () => {
  try {
    const snapshot = await db.collection('posts').get();
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return posts
    console.log(posts);
  } catch (error) {
    console.error('Error getting posts:', error);
  }
};


