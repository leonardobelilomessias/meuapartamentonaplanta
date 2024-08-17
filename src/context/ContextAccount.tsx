import { getFinanceProfile } from "@/lib/getFinanceProfile";
import { signInUser } from "@/lib/signinUser";
import { getStorageFinanceProfile, removeStorageFinanceProfile, saveStorageFinanceProfile } from "@/lib/storage/storageFinancePofile";
import { getStorageUser, removeStorageUser, saveStorageUser } from "@/lib/storage/storageUser";
import { IFormInputFinance, IUser } from "@/types/types";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useId, useState } from "react";
interface ILoginInputs {
    email: string;
    password: string;
  
  }
interface IDataUser{
    id:string
    user:IUser
    dataFinanceProfile:IFormInputFinance
    loginUser:(data:ILoginInputs)=>Promise<void>
    logOutUser:()=>void
    updateDataFinance:(id:string)=> Promise<void>
    handleUserchange:()=> Promise<void>

}



 const TasksContext = createContext({} as IDataUser);

function AccountCountext({children}:{children:ReactNode}){

const [user, setUser] = useState({}as IUser)
const [userChange, setUserChange] = useState(false)
const router = useRouter()
const [userId,setUserId]= useState("")
const [dataFinanceProfile,setDataFinanceProfile] = useState({} as IFormInputFinance)
async function HandleGetDataFinance(id:string){
  const data = await getStorageFinanceProfile(id)
  if(data){
    console.log('handlege get data finance',data)
    saveStorageFinanceProfile(data)
    setDataFinanceProfile(data)
  }
}
async function HandleGetUser(id:string){
  const data = await getStorageUser(id)
  if(data){
    
    saveStorageUser(data)
    setUser(data)
  }
}
async function updateDataFinance(id:string){
  removeStorageFinanceProfile()
  const data = await getStorageFinanceProfile(id)
  if(data){
    saveStorageFinanceProfile(data)
    setDataFinanceProfile(data)

  }

}
async  function handleUserchange(){
  removeStorageUser()
  const data = await getStorageUser(userId)
  console.log('user change', data)
  if(data){
    saveStorageUser(data)
    setUser(data)
  }

 }

 async function HandleAllDataOnInitialize(){
  if (typeof window !== 'undefined') {
    // Obter dados do localStorage
    const idUserstoredData = localStorage.getItem('userId');
    if (idUserstoredData) {
    await   HandleGetDataFinance(idUserstoredData)
    await   HandleGetUser(idUserstoredData)
    setUserId(idUserstoredData);
    }
  }
 }

useEffect(() => {
    // Verifica se estamos no lado do cliente
  return()=>{
    HandleAllDataOnInitialize()
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
    HandleGetDataFinance(resp.uid)
    HandleGetUser(resp.uid)
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
          removeStorageFinanceProfile()
          setDataFinanceProfile({})
          setUserId("")
          removeStorageUser()
          setUser({})
        }
      };
      deleteData()

    
}

    return(
        <TasksContext.Provider value={{user:user,id:userId,loginUser:loginUser,logOutUser:logOutUser, dataFinanceProfile:dataFinanceProfile,updateDataFinance:updateDataFinance,handleUserchange:handleUserchange}}>
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