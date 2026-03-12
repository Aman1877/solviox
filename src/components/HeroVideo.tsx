import React, { useEffect, useState } from "react";

interface HeroVideoProps {
  src: string;
  poster: string;
  delayMs?: number;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  src,
  poster,
  delayMs = 1200,
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!navigator.onLine) {
      setHasError(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setShouldLoad(true);
    }, delayMs);

    const handleOffline = () => {
      setHasError(true);
      setShouldLoad(false);
    };

    window.addEventListener("offline", handleOffline);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("offline", handleOffline);
    };
  }, [delayMs]);

  return (
    <>
      <img
        className="video-hero-video"
        src={poster}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
      />

      {shouldLoad && !hasError && (
        <video
          className="video-hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={poster}
          onError={() => {
            setHasError(true);
            setShouldLoad(false);
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
};

export default HeroVideo;
