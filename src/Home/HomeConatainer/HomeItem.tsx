import { CardHouse } from "../../componnets/CardHouse";
import HorizontalScroll from "../../componnets/HorizontalScroll";
import { InfoItem } from "../../componnets/InfoItem";
import { WarningItem } from "../../componnets/WarningItem";

export function HomeComponent(){
    return(
        <>
            <h1 style={{marginBottom:0}}>Bem vindo  Leonardo !</h1>
            <p style={{margin:0}}>Confira o que preparamos para você.</p>
            <div>
                 <InfoItem/>
                <WarningItem/>
            </div>
            <div>
                <h3>Últimos Lancamentos</h3>
               <HorizontalScroll>
                <CardHouse/>
                <CardHouse/>
                <CardHouse/>

               </HorizontalScroll>
                
            </div>
            <div>
                <h3>Perfeito para você</h3>
                <HorizontalScroll>
                <CardHouse/>
                <CardHouse/>
                <CardHouse/>

               </HorizontalScroll>
            </div>


        </>
    )
}