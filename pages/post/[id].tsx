import { Layout } from "@/components/Layout";
import { PostCard } from "@/components/Post/PostCard";
import { PostContainer } from "@/components/Post/PostContainer";
import { PostContent } from "@/components/Post/PostContent";
import { PostFooter } from "@/components/Post/PostFooter";
import { PostHeader } from "@/components/Post/PostHeader";
import { getPostById } from "@/lib/getPostById";
import { IPost } from "@/types/types";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function post(){
    const router = useRouter();
    const resulRouter = router.query;
    const goback = router.back
    const id = resulRouter.id as string;
    async function fetchPost(){
        console.log('id',id)
        const data = await getPostById(id) as IPost
        setPost(data)
        console.log(data)
    }
    useEffect(()=>{
        return()=>{
            if(id ){
                fetchPost()
            }
        }

    },[])
    const [post,setPost]  = useState({} as IPost)
    return(
        <Layout>
        <PostContainer>
            <PostCard>
            
                <Button  sx={{mb:4}} onClick={()=> goback()} variant="text"><ArrowBack   fontSize="small"/>  Voltar</Button>
        
                <PostHeader name={post.name} title={post.title}/>
                <PostContent message={post.message} />
                <PostFooter/>
            </PostCard>
        </PostContainer>
        </Layout>
    )
}