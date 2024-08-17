import { IFormInputFinance, IUser } from "@/types/types";
import { getFinanceProfile } from "../getFinanceProfile";
import { getUserById } from "../getUserById";

export async function getStorageUser(id:string){
    if (typeof window !== 'undefined') {
        // Obter dados do localStorage
        const storedData = localStorage.getItem('user')       
        if (storedData) {
            return JSON.parse(storedData)
        }else{      

          const data =  await getUserById(id)     
          return data
        }
      }
}

export const saveStorageUser = (data:IUser) => {
    if (typeof window !== 'undefined') {
      // Salvar dados no localStorage
      const dataString = JSON.stringify(data)
      localStorage.setItem('user', dataString);
    }
  };

  export const removeStorageUser = () => {
      localStorage.removeItem('user');
  };