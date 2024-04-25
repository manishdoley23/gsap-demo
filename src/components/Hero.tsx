"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const smallHeroVideo =
  "https://video-storage-pom.s3.ap-south-1.amazonaws.com/iphone-website/smallHero.mp4";
const heroVideo =
  "https://video-storage-pom.s3.ap-south-1.amazonaws.com/iphone-website/hero.mp4";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(heroVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("reisze", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#hero",
      {
        y: 150,
      },
      {
        y: 0,
        opacity: 100,
        delay: 1,
      }
    );
    gsap.to("#cta", {
      y: 0,
      opacity: 1,
      delay: 1,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            loop
            muted
            playsInline={true}
            key={videoSrc}
            src={videoSrc}
          />
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
