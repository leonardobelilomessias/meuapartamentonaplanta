// components/VideoPlayer.tsx


import 'video.js/dist/video-js.css';
import ReactPlayer from 'react-player';



export function ReactPlayerLib(){
const urlaws = "https://canp.s3.amazonaws.com/vespa.mp4"
const urlGoogle ="https://drive.google.com/file/d/1LHjqylK-uVOx-nX0Ji1bQtJvc9qIRq3E/preview"
const urlyoutube ="https://www.youtube.com/watch?v=CN-TD1Lx7Us"
  return (
    <>
    {/* dont allow url google */}
    <ReactPlayer url={urlyoutube}  controls={true}  />
    </>
  
  );
};


