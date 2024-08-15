import { signInUser } from "@/lib/signinUser";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useId, useState } from "react";
interface ILoginInputs {
    email: string;
    password: string;
  
  }
interface IDataUser{
    id:string
    name:string
    loginUser:(data:ILoginInputs)=>Promise<void>
    logOutUser:()=>void

}



 const TasksContext = createContext({} as IDataUser);

function AccountCountext({children}:{children:ReactNode}){
const router = useRouter()
const [userId,setUserId]= useState("")
const [userName,setUserName]= useState("")
useEffect(() => {
    // Verifica se estamos no lado do cliente
    if (typeof window !== 'undefined') {
      // Obter dados do localStorage
      const storedData = localStorage.getItem('userId');
      console.log(storedData)
      if (storedData) {
        setUserId(storedData);
        console.log("user id",userId)
        console.log("store data",storedData)
      }
    }
  }, []);
  const saveUserId = (id:string) => {
    if (typeof window !== 'undefined') {
      // Salvar dados no localStorage
      localStorage.setItem('userId', id);
      setUserId(id);
    }
  };
async function loginUser(data:ILoginInputs) {
    const resp = await signInUser(data)
    setUserId(resp.uid)
    setUserName(String(resp.displayName))
    saveUserId(resp.uid)
    if(resp.uid){
        router.push("/")
    }
}
  function logOutUser() {
    const deleteData = () => {
        if (typeof window !== 'undefined') {
          // Deleta o item do localStorage
          localStorage.removeItem('userId');
          setUserId("")
        }
      };
      deleteData()
    
}

    return(
        <TasksContext.Provider value={{id:userId,name:userName,loginUser:loginUser,logOutUser:logOutUser}}>
            {children}
        </TasksContext.Provider>
    )
}

export function AccontProvider({children}:{children:ReactNode}){
    
    return(
        <AccountCountext>
            {children}
        </AccountCountext>
    )
}

export const useUserData = ()=>useContext(TasksContext)