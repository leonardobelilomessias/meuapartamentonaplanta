import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Certifique-se de que este caminho está correto
import { FirebaseError } from 'firebase/app';
interface IUser{
    nome?: string;
    phone?: string;
    email?: string;
    id?: string;
  }
// Função para buscar o perfil financeiro pelo ID do usuário
export const getUserById = async (userId: string): Promise<IUser | null | FirebaseError> => {
  try {
    // Obter a referência ao documento
    const profileRef = doc(db, 'users', userId);

    // Buscar o documento
    const docSnapshot = await getDoc(profileRef);

    if (docSnapshot.exists()) {
      // O documento foi encontrado, retornar os dados
      return docSnapshot.data() as IUser;
    } else {
      // Documento não encontrado
      console.log('Perfil financeiro não encontrado');
      return null;
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Lidar com erros específicos do Firebase
      console.error("Erro ao buscar perfil usuario:", error.code, error.message);
      throw error;
    } else {
      // Lidar com outros tipos de erros (caso ocorra)
      console.error("Erro desconhecido:", error);
      throw error;
    }
  }
};