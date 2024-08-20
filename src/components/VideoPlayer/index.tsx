// components/VideoPlayer.tsx

import React, { useEffect, useRef, useState } from 'react';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';
import { VideoReactLib } from './VideoReactLib';
import { ReactPlayerLib } from './ReactPlayerLib';
import { VideoIframe } from './VideoIframe';
import { IVideoParams } from '@/types/types';


export function VideoPlayer ({width,height}:IVideoParams) {

  return (
    <>
    {/* <ReactPlayerLib  /> */}
    {/* <VideoIframe/> */}
    <VideoReactLib {...{width,height}}  />
    </>
  
  );
};


