import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

 
export  function Layout({ children }:{children:ReactNode}) {
  return (
    <div style={{}}>
      <Header/>
      <main >{children}</main>
      <Footer/>
    </div>
  )
}