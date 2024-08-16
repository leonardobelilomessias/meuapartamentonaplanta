import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import { INewPost } from "@/types/types";


export const createNewPost = async (data:INewPost) => {
    try {
      // Referencia a coleção onde o documento será adicionado
      const docRef = await addDoc(collection(db, "posts"), {
        title: data.title,
        message: data.message,
        name:data.name,
        id:data.id,
        created_at: data.created_at,
        updated_at:data.updated_at
      });
      console.log("Documento adicionado com ID: ", docRef.id);
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
    }
  };