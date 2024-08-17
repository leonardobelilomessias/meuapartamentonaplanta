import { collection, query, orderBy, startAfter, limit, getDocs, startAt } from "firebase/firestore";  
import { db } from "./firebase";


export const fetchPosts = async (pageSize: number, lastVisible?: any) => {

  const postsQuery = query(
    collection(db, "posts"),
    orderBy("created_at", 'desc'),
    limit(pageSize)


  );
  console.log('pagesize',pageSize)
  const snapshot = await getDocs(postsQuery);
  console.log(snapshot.docs)
  const posts = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  const lastDoc = snapshot.docs[snapshot.docs.length - 1];

  return {
    posts,
    lastVisible: lastDoc
  };
};
