import { useEffect } from 'react';
import { collection, doc, setDoc, getFirestore } from 'firebase/firestore';
import { db } from './firebase';
 // Supondo que você tenha exportado a instância do app do Firebase

export  async function createFavorite  (user_id:string) {


    // Referência para a coleção aninhada dentro do documento principal
    const nestedCollectionRef = collection(db, 'users', user_id, 'favorites');

    // Dados do documento a ser inserido na coleção aninhada
    const nestedDocData = {
      id:"1234",
      nome: 'Documento Aninhado 1234',
      valor: 42,
      ativo: true
    };

    // Inserindo o documento na coleção aninhada

      try {
        const newDocRef = doc(nestedCollectionRef);
        await setDoc(newDocRef, nestedDocData);
        console.log('Documento aninhado inserido com sucesso!');
      } catch (error) {
        console.error('Erro ao inserir documento aninhado: ', error);
      }

}
    



