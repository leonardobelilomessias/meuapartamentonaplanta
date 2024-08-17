
import CarouselHouse from "@/components/CarouselHouse";
import { Layout } from "@/components/Layout";
import { DefaultCard } from "@/components/shared/CardContainer";
import { DefaultContainer } from "@/components/shared/DefaultContainer";
import { useRouter } from "next/router";

export  function ScreenHouse({id}:{id:string}){
    return(

            <DefaultContainer>
                <DefaultCard>
                    <CarouselHouse/>
                    <h1>Sevilha {id}</h1>
                    teste
                </DefaultCard>
            </DefaultContainer>

    )
}