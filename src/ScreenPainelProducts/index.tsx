import { DialogModal } from "@/components/modal/DialogModal";
import { DefaultCard } from "@/components/shared/CardContainer";
import { DefaultContainer } from "@/components/shared/DefaultContainer";
import { useUserData } from "@/context/ContextAccount";
import { getFavoritesById } from "@/lib/getFavoriteById";
import { getFavoritesByUser } from "@/lib/getFavoriteByUser";
import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { title } from "process";
import { useEffect, useState } from "react";

interface IProductsResponse{
    id:string
    title:string
    cover:string
}
export function ScreenPainelProducts(){
    const [idToDelete,setIdToDelete] = useState('')
    const [indexToRemove, setIndexToRemove] = useState<null| number>(null)
    const [openModal,setOpenModal] = useState(false)
    const router = useRouter()
    const {id} = useUserData()
    const [products,setProducts] = useState([] as IProductsResponse[] )

    async function listFavorites(){
        const ProductsList = await axios.get('/api/listProducts')
         setProducts(ProductsList.data as IProductsResponse[])
    }
    async  function handleDeletProduct(id:string, index:number){
        setIndexToRemove(index)
        setIdToDelete(id)
        setOpenModal(true)    
    }
    async function requestDelete(){
        console.log('id ao deletar',  idToDelete)
        console.log('index ao deletar',  indexToRemove)
        try{
            
            await axios.delete(`/api/deleteProduct?id=${idToDelete}`)
            setProducts(()=>products.filter((product,index)=>(product.id !==idToDelete)))
        }
        catch(e){
            console.log(e)
        }
}
    useEffect(()=>{
        return()=>{
            listFavorites()
        }
    },[])
    return(
    

        <DefaultCard >
            <DialogModal message="Deseja realmente deletar esse produto. As alteções não serão revertidas" openModal={openModal} setOpenModal={setOpenModal} title="Deletar Produto" ExecFunction={requestDelete}/>
                <h1>Painel produtos</h1>
                {
                    products.map((item,index)=>(
                        <Box sx={{display:"flex", flexDirection:{xs:'column',sm:"row"},gap:{xs:0,sm:4}, m:1,p:1}}>
                            <Box>
                                <Image alt={item.title} width={150} height={100} src={item.cover}/>
                            </Box>
                            <Stack gap={2} >
                                <Typography fontWeight={'bold'} fontSize={"1.5rem"} >{item.title}</Typography>
                                <Box sx={{display:"flex", flexDirection:"row",gap:4}}>
                                    <Link href={`/editar-produto/${item.id}`}>
                                    <Button variant="contained">
                                        <Typography>Editar</Typography>
                                    </Button>
                                    </Link>
                                    <Button onClick={()=>handleDeletProduct(item.id, index)} variant="contained">
                                        <Typography>Excluir</Typography>
                                    </Button>
                                </Box>
                            </Stack>
                        <Divider sx={{mt:2}} />
                        </Box>
                
                    ))
                }
        </DefaultCard>

    )
}