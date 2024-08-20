// components/VideoPlayer.tsx

import React, { useEffect, useRef, useState } from 'react';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  width?: number;
  height?: number;
}

export const VideoReactWithIFrameLib: React.FC<VideoPlayerProps> = ({  width = 640, height = 264 }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [play, setPlay] = useState(false);

  const url = "https://www.youtube.com/watch?v=22nd99SLgNA"
  const videoId = new URL(url).searchParams.get('v') || '';

  return (
    <>
      <Player
    
      playsInline
      fluid={false}
      width={width}
      height={height}
      
      src={`https://www.youtube.com/watch?v=${videoId}`} // Passando URL do vídeo do YouTube
    >
      <div className="video-container">
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Player>
    
    </>
  
  );
};


