import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { blue } from "@mui/material/colors";

 
export  function Layout({ children }:{children:ReactNode}) {
  return (
    <div style={{backgroundColor:"#f7f9fc"}}>
      <Header/>
      <main >{children}</main>
      <Footer/>
    </div>
  )
}