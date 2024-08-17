import React, { useState, useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import sevilha1 from '@/img/houses/sevilha1.jpg'
import sevilha2 from '@/img/houses/sevilha2.jpg'
import { Box, useMediaQuery } from "@mui/material";
import theme from "@/theme";
import { Height } from "@mui/icons-material";

export function CarouselHouse() {
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, [sliderRef1, sliderRef2]);
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,

  };
  const settingsFirst = {
    className: "slider variable-width ",
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true
  };
  function getSizeScreen(){
      const matchesXs = useMediaQuery(theme.breakpoints.up('xs'));
      const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
      const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
      const matcheslg = useMediaQuery(theme.breakpoints.up('lg'));
      console.log(matchesXs)
      if (matchesSm){
        return{width:700,height:330}
      }
      return{width:300,height:190}
  }
  return (
    <div className="slider-container">
      <Slider asNavFor={nav2 || undefined} ref={sliderRef1} {...settingsFirst}  >
        <div>
        <Image height={getSizeScreen().height} width={getSizeScreen().width} alt='image' src={sevilha1} style={{alignSelf:"center"}} />

        </div>
        <div>
        <Image height={getSizeScreen().height} width={getSizeScreen().width} alt='image' src={sevilha2} style={{alignSelf:"center"}} />
        </div>
        <div>
        <Image height={getSizeScreen().height} width={getSizeScreen().width} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </div>
        <div>
        <Image height={getSizeScreen().height} width={getSizeScreen().width} alt='image' src={sevilha2} style={{alignSelf:"center"}} />
        </div>
        <div>
        <Image height={getSizeScreen().height} width={getSizeScreen().width} alt='image' src={sevilha1} style={{alignSelf:"center"}} />
        </div>
        <div>
        <Image height={getSizeScreen().height}width={getSizeScreen().width} alt='image' src={sevilha2} style={{alignSelf:"center"}} />
        </div>
      </Slider>

      <Box sx={{marginTop:'3rem',}}>

      <Slider
      {...settings}
      asNavFor={nav1 || undefined}
      ref={sliderRef2}
      slidesToShow={3}
      swipeToSlide={true}
      focusOnSelect={true}
      >
        <div>
        <Image height={50} width={120} alt='image' src={sevilha1}  />
        </div>
        <div>
        <Image height={50} width={120} alt='image' src={sevilha2}  />
        </div>
        <div>
        <Image height={50} width={120} alt='image' src={sevilha1}  />
        </div>
        <div>
        <Image height={50} width={120} alt='image' src={sevilha2}  />
        </div>
        <div>
        <Image height={50} width={120} alt='image' src={sevilha1}  />
        </div>
        <div>
        <Image height={50} width={120} alt='image' src={sevilha2} />
        </div>
      </Slider>
          </Box>
    </div>
  );
}
