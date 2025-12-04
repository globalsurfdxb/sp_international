import { useRef, useState } from "react";
import { assets } from "../../assets";
export default function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative w-full max-w-[1238px] mx-auto cursor-pointer group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={togglePlay}
    >
      <video ref={videoRef} src={src} poster={poster} className="w-full h-[200px] md:h-[300px] xl:h-[523px] object-cover" />
      {
        !isPlaying && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        )
      }
      {/* Play / Pause Overlay Icon */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none
        ${(isHovering || !isPlaying) ? "opacity-100" : "opacity-0"}`}
      >
        {!isPlaying ? (
          <img src={assets.vdoPlayIcon} className="w-10 h-10 xl:w-[75px] xl:h-[75px]" alt="" />
        ) : (
          <img src={assets.vdoPauseIcon} className="w-10 h-10 xl:w-[75px] xl:h-[75px]" alt="" />
        )}
      </div>
    </div>
  );
}
