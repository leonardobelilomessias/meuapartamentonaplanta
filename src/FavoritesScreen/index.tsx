import { DefaultCard } from "@/components/shared/CardContainer";
import { DefaultContainer } from "@/components/shared/DefaultContainer";
import { useUserData } from "@/context/ContextAccount";
import { getFavoritesById } from "@/lib/getFavoriteById";
import { getFavoritesByUser } from "@/lib/getFavoriteByUser";
import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function FavoritesScreen(){
    const {id} = useUserData()
    const [favorites,setFavorites] = useState([] )
    async function listFavorites(){
        const favoritesList = await getFavoritesByUser(id)
        console.log('favorites', favorites, id)
         setFavorites(favoritesList as [])
    }
    useEffect(()=>{
        return()=>{
            listFavorites()
        }
    },[])
    return(
    

        <DefaultCard >
                <h1>Favoritos</h1>
                {
                    favorites.map((item)=>(
                        <Box>
                            <Typography>Favorite</Typography>
                        </Box>
                    ))
                }
        </DefaultCard>

    )
}