import { useEffect, useState } from 'react';
import { collectionGroup, getDocs, getFirestore, query, where, QuerySnapshot, DocumentData } from 'firebase/firestore';
import {  db } from './firebase'; // Supondo que você tenha exportado a instância do app do Firebase

// Definindo a estrutura dos dados dos subdocumentos (ajuste conforme necessário)
interface Subdocumento {
  id: string;
  nome?: string;
  valor?: number;
  ativo?: boolean;
  // Adicione outros campos que seu subdocumento possa ter
}

export async  function  getFavoritesById  ()  {


      // Coleções aninhadas são consultadas usando collectionGroup
      const subdocsRef = collectionGroup(db, 'users'); // Substitua 'colecao_aninhada' pelo nome da sua coleção aninhada
      const q = query(subdocsRef, where('id', '==', '1234'));

      try {
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
        const matchingSubdocuments: Subdocumento[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data() as Subdocumento;
          matchingSubdocuments.push(data);
        });
        return matchingSubdocuments

        
      } catch (error) {
        console.error('Erro ao buscar subdocumentos:', error);
      }





};


