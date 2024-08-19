
import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { blue } from "@mui/material/colors";
import { useUserData } from "@/context/ContextAccount";
import { useRouter } from "next/router";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import { ContainerToFixHeader } from "./shared/ContainerToFixHeader";
import { AsideMenu } from "./AsideMenu";
import { gray } from "@/LandingPage/getLPTheme";

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
      <ContainerToFixHeader>
      <Box  sx={{display:{xs:"none", md:"flex"},width:{md:"20%",lg:'13%',xl:'13%',sm:"13%"}, borderRight:`solid 1px ${gray[200]}`,   }}>

        <AsideMenu/>
      </Box>
      <Box sx={{ width:{xs:"100%",md:"80%",lg:"87%"}}} >
      <Container maxWidth="lg">
        {children}
      </Container>
      </Box>
      </ContainerToFixHeader >
      <Footer/>
    </div>
    </ThemeProvider>
  )
}