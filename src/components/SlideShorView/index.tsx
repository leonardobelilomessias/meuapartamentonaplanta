import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import sevilha1 from '@/img/houses/sevilha1.jpg'
import sevilha2 from '@/img/houses/sevilha2.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function SlideShortView() {
  return (
    <>
      <Swiper
        style={{display:"flex", alignItems:"center", alignContent:'center', justifyContent:'center', justifyItems:"center",}}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
        <Image height={200} width={280} alt='image' src={sevilha2} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
        <Image height={200} width={280} alt='image' src={sevilha1} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
        <Image height={200} width={280} alt='image' src={sevilha2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
