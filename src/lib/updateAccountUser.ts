import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase'; // Certifique-se de que este caminho está correto
import { FirebaseError } from 'firebase/app';
import { IUser } from '@/types/types';

// Interface para os dados financeiros
interface IFormInputFinance {
  renda?: number; // Agora os campos são opcionais
  entrada?: number;
  saldoFgts?: number;
  estadoCivil?: string;
  filhosDependentes?: string;
  trabalho3Anos?: string;
  primeiroImovel?: string;
  financiamento?: string;
  dataNascimento?: Date | null; 
  tipoRenda:string // Agora é opcional
}

// Função para atualizar o perfil financeiro
export const updateAccountUser = async (
   {name, id, phone, email}:{name:string, phone:string,email:string,id:string}
): Promise<void | FirebaseError | any> => {
  try {
    // Obter a referência ao documento
    console.log('ola')
    const profileRef = doc(db, 'users', id);
    console.log(profileRef)
    // Atualizar o documento com os novos dados
    await updateDoc(profileRef, {
      name,email,phone // Usa a sintaxe spread para incluir apenas os campos fornecidos
    });

  } catch (error) {
    if (error instanceof FirebaseError) {
      // Lidar com erros específicos do Firebase
      console.error("Erro ao atualizar perfil financeiro:", error.code, error.message);
      throw error;
    } else {
      // Lidar com outros tipos de erros (caso ocorra)
      console.error("Erro desconhecido:", error);
      return error;
    }
  }
};
