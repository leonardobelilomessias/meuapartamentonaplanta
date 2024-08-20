
// components/YouTubePlayer.tsx

import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // Importa o CSS do video-react




export function VideoIframe(){
const urlaws = "https://canp.s3.amazonaws.com/vespa.mp4"
const urlGoogle ="https://drive.google.com/file/d/1LHjqylK-uVOx-nX0Ji1bQtJvc9qIRq3E/preview"
const urlyoutube ="https://www.youtube.com/watch?v=CN-TD1Lx7Us"
const videoId = "CN-TD1Lx7Us"
  return (
    <>
 <iframe
          width={420}
          height={230}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&playsinline=1`}
          title="YouTube video player"
          frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </>
  
  );
};


