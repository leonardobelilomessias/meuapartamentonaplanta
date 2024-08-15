
import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { blue } from "@mui/material/colors";
import { useUserData } from "@/context/ContextAccount";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from "@mui/material";

const defaultTheme = createTheme();
export  function Layout({ children }:{children:ReactNode}) {
  const {id}=useUserData()
  const router = useRouter();

  useEffect(() => {
    if (!id) {
      // Redireciona para a página de login se o ID estiver vazio
      router.push('/login2');
    }
  }, [id, router]);

  if (!id) {
    // Retorna null ou um loader enquanto redireciona
    return null;
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      
    <div style={{backgroundColor:"white"}}>
      <Header/>
      <main >{children}</main>
      <Footer/>
    </div>
    </ThemeProvider>
  )
}