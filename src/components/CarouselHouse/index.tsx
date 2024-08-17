import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import sevilha1 from '@/img/houses/sevilha1.jpg'
import sevilha2 from '@/img/houses/sevilha2.jpg'


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

export default function CarouselHouse() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{

        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha2} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha2} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:30, display:'flex', flexDirection:"column", alignContent:"center", alignItems:"center"} }>
          <Image height={200} width={280} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
