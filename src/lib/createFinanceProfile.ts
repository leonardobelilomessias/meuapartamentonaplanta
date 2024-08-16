
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
interface IFormInputFinance {
    renda: number;
    entrada: number;
    saldoFgts: number;
    estadoCivil: string;
    filhosDependentes: string;
    trabalho3Anos: string;
    primeiroImovel: string;
    financiamento: string;
    dataNascimento:  null |Date | any;
    tipoRenda:string
  }
export const createFinanceProfile = async (id:string): Promise<void| FirebaseError| any> => {
  try {
    

    // Salvar dados adicionais no Firestore
    await setDoc(doc(db, "finance_profile", id), {
        renda: 0,
        entrada: 0,
        saldoFgts: 0,
        estadoCivil: 'solteiro',
        filhosDependentes: 'nao',
        trabalho3Anos: 'nao',
        primeiroImovel: 'nao',
        financiamento: 'nao',
        dataNascimento:  null,
        tiporenda:'formal'
    });

    
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