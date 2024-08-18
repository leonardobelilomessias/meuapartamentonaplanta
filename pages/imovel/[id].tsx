
import { Layout } from "@/components/Layout";
import { DefaultCard } from "@/components/shared/CardContainer";
import { ContainerToFixHeader } from "@/components/shared/ContainerToFixHeader";
import { DefaultContainer } from "@/components/shared/DefaultContainer";
import { ScreenHouse } from "@/ScreenHouse";
import { useRouter } from "next/router";

export default function imovel(){
    const router = useRouter();
    const resulRouter = router.query;
    const goback = router.back
    const id = resulRouter.id as string;
    return(
        <Layout>
            
            <ScreenHouse id={id}/>
            
        </Layout>
    )
}