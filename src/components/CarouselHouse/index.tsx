
import ImageGallery from "react-image-gallery";

import sevilha1 from '@/img/houses/sevilha1.jpg'
import sevilha2 from '@/img/houses/sevilha2.jpg'
import { Box } from "@mui/material";
import styles from './style.module.css'
const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
export default function CarouselHouse() {

  return (
    <Box sx={{height:300}}   >
        <div className={styles.customcarousel }>oi
            <ImageGallery items={images} />;
        </div>
      oi
    </Box>
  )
}
