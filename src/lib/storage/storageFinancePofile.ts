import { IFormInputFinance } from "@/types/types";
import { getFinanceProfile } from "../getFinanceProfile";

export async function getStorageFinanceProfile(id:string){
    if (typeof window !== 'undefined') {
        // Obter dados do localStorage
        const storedData = localStorage.getItem('finance_profile')       
        if (storedData) {
          console.log('pelo storage')
            return JSON.parse(storedData)
        }else{      
          const data =  await getFinanceProfile(id)     
          console.log('fora do storage',data)
          return data
        }
      }
}

export const saveStorageFinanceProfile = (data:string) => {
    if (typeof window !== 'undefined') {
      // Salvar dados no localStorage
      const dataString = JSON.stringify(data)
      localStorage.setItem('finance_profile', dataString);
    }
  };

  export const removeStorageFinanceProfile = () => {
      localStorage.removeItem('finance_profile');
  };