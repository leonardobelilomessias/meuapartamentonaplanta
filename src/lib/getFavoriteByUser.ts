import { useEffect, useState } from 'react';
import { collectionGroup, getDocs, getFirestore, query, where, QuerySnapshot, DocumentData, collection, doc } from 'firebase/firestore';
import {  db } from './firebase'; // Supondo que você tenha exportado a instância do app do Firebase

// Definindo a estrutura dos dados dos subdocumentos (ajuste conforme necessário)
interface Subdocumento {
  id: string;
  nome?: string;
  valor?: number;
  ativo?: boolean;
  // Adicione outros campos que seu subdocumento possa ter
}

export async  function  getFavoritesByUser  (id:string)  {

  try {
    // Referência à subcoleção 'favorites' dentro do documento do usuário
    const favoritesCollectionRef = collection(db, "users", id, "favorites");

    // Consulta dos documentos na subcoleção 'favorites'
    const favoritesSnapshot = await getDocs(favoritesCollectionRef);

    // Verificar se há documentos
    if (favoritesSnapshot.empty) {
      console.log("Nenhum documento encontrado na subcoleção 'favorites'.");
      return [];
    }

    // Mapeamento dos resultados
    const favoritesList = favoritesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log("Favoritos encontrados:", favoritesList);
    return favoritesList;
  } catch (error) {
    console.error("Erro ao buscar favoritos: ", error);
    throw error;
  }
};


