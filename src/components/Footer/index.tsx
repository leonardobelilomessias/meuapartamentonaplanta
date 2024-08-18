import { blue } from "@mui/material/colors";
import Copyright from "../../Copyright";

export function Footer(){
    return(
        <div style={{ backgroundColor:blue[900], width:"100%", padding:'2rem', zIndex:999, position:"absolute"}}>
        <Copyright  />
        </div>
    )
}