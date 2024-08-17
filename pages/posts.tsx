import { ArrowBack, People } from "@mui/icons-material";
import { Box, Button, Container, Divider, Pagination, Paper, Rating, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { fetchPosts } from "@/lib/getPost";
import { useEffect, useState } from "react";
import { INewPost } from "@/types/types";
import { converteTimestampFireStore } from "@/utils/date";
import { Layout } from "@/components/Layout";
export default function posts(){
    return(
        <Layout>
    <Container maxWidth="lg" style={{minHeight:'100vH', marginTop:'2rem'}} >
        <Forum></Forum>
        </Container>
        </Layout>
    )
}


function ItemPost({title, description,name, date, id}:{id:string,title:string, description:string, name:String, date:string | undefined}){
    return(
        <>
        <Box sx={{borderWidth:0.5,borderColor:"", border:" blue", marginBottom:"4px", p:1}}>
            <Link href={`/post/${id}`} style={{textDecoration:"none"}}>
            <Typography color={'primary'} variant="body1">{truncateText(description,500)}
            </Typography>
        <Box  sx={{flexDirection:"row"}}>
            <Typography  variant="caption" sx={{mr:4}} color={'GrayText'}>
                {`@`}{name}
            </Typography>
            <Typography  variant="caption" color={'GrayText'}>
               {date}
            </Typography>
         </Box>
            </Link>
        </Box>
            <Divider/>
        </>
    )
}


function Forum(){
    const [page, setPage] = useState(1)
    const [amountPosts,setAmountPosts] =useState(0)
    useEffect(()=>{
      loadposts()
    },[])
    const [posts,setPosts] = useState([] as INewPost[])
    const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        const  data  = await fetchPosts(amountPosts +3)
        const mypost  = data.posts as INewPost[]
        setPosts(data.posts as INewPost[])
        console.log('value page ', value)
        setPage(()=> page+1);
      };
    async function loadposts(){
        const  data  = await fetchPosts(amountPosts+3)
        const mypost  = data.posts as INewPost[]
        setAmountPosts(amountPosts+3)
        setPosts(data.posts as INewPost[])
    }
    

    return(
        <>
        <Paper sx={{p:2}}>
        <Link href={'/'}>
                <Button  sx={{mb:4}} variant="text"><ArrowBack   fontSize="small"/>  Voltar</Button>
        </Link>
        <div style={{display:"flex",flexDirection:"column",  justifyContent:"space-between", padding:'1rem' }}>
        <Link style={{alignSelf:"end"}} href={'/novo-post'}>
            <Button style={{alignSelf:"end"}} size="small" variant="contained">Novo Topico</Button>
        </Link>
        <Typography variant="h5" sx={{margin:0,p:0,  fontWeight:"bold", display:"flex" ,alignItems:'center', alignContent:"center"}}>Conversas 
           <Typography ml={1} >{` (152)`}</Typography> 
        </Typography>
        </div>
        <div style={{display:'flex', flexDirection:"column"}}>
          { 
            posts.map((post,key)=>(
                <ItemPost id={post.id as string}  key={key} title="titulo" description={post?.message as string} name={post.name as string} date={converteTimestampFireStore(post.created_at)} />
            ))
          }
         <Link style={{ display:"flex", textDecoration:'none',  alignContent:"center", alignItems:"center", justifyContent:"center", fontWeight:"bold"}} href={'/posts'}>

            <Button sx={{mt:2,mb:0}} onClick={()=>{loadposts()}} > Carregar Mais Posts</Button> 
         </Link>
        </div>
</Paper>
        </>
    )
}




const truncateText = (text:string, maxLength:number) => {
    if(!text) return""
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }

    return text;
  };

