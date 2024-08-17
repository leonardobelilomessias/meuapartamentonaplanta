import { Divider, Paper } from "@mui/material";
import HorizontalScroll from "../HorizontalScroll";
import { CardHouse } from "../CardHouse";

export function HousesHighlights({title}:{title:string}){
    return(<div>
            <Paper sx={{p:'0.5rem',mb:4,mt:4, pb:'4rem', pt:'1rem'}}>
            <Divider textAlign="left"> <h3>{title}</h3></Divider>
               
               <HorizontalScroll>
                <CardHouse/>
                <CardHouse/>
                <CardHouse/>

               </HorizontalScroll>
            </Paper>
            </div>)
}