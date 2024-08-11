import { CardHouse } from "../../componnets/CardHouse";
import HorizontalScroll from "../../componnets/HorizontalScroll";
import { WarningItem } from "../../componnets/WarningItem";

export function HomeComponent(){
    return(
        <>
            <h2 style={{marginBottom:0}}>Bem vindo  Leonardo !</h2>
            <p style={{margin:0}}>Confira o que preparamos para você.</p>
            <div>
            <h3>Seu Poder de Compra</h3>
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