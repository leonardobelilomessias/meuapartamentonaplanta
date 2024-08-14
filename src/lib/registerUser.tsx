
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { FirebaseError } from "firebase/app";
interface IFormInputs {
  name:string
  email: string;
  password: string;
  phone: string;
}

export const registerUser = async (data: IFormInputs): Promise<void| FirebaseError| any> => {
  try {
    const { email, password, phone, name } = data;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Salvar dados adicionais no Firestore
    await setDoc(doc(db, "users", user.uid), {
      id:user.uid,
      name,
      email,
      phone,
    });

    console.log("Usuário registrado com sucesso:", user);
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error
      // Lidar com erros específicos do Firebase
     // console.error("Erro ao registrar:", error.code, error.message);
    } else {
      IIRFilterNode
      return error
      // Lidar com outros tipos de erros (caso ocorra)
      //console.error("Erro desconhecido:", error);
    }
  }
};