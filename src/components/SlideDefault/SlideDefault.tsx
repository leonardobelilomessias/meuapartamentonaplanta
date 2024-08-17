import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import tvImage from "@/img/reward/tv.jpg" 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation,EffectFade } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const numbers =[0,1,2,3] 
export default function SlideDefault() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation,]}
        className="mySwiper"
        
      >

        
        {numbers.map((number,key)=>(
          <Box key={key}>

          <SwiperSlide key={key}  style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
            <Typography variant="h4" textAlign={"center"} fontWeight={"bold"} color={'primary'}>Comprou Ganhou!!</Typography>
            <Image src={tvImage} alt="" width={285} height={200} ></Image>
            <Typography variant="body2" fontWeight={"bold"} color={'GrayText'}>Na compra do seu apartamento com um de nossos agentes você ganha um Smart tv 32 polegadas </Typography>
          </SwiperSlide>
          </Box>
        ))}
      </Swiper>
      
    </>
  );
}

function SwiperItem(){
  return(<SwiperSlide  >Slide 1</SwiperSlide>)
}