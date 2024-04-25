"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 100,
      delay: 1,
    });
    gsap.to(".link", {
      y: 0,
      opacity: 100,
      delay: 1,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <Image
                src={"/assets/images/watch.svg"}
                alt="watch"
                className="ml-2"
                width={18}
                height={15}
              />
            </p>
            <p className="link">
              Watch the event
              <Image
                src={"/assets/images/right.svg"}
                alt="right"
                className="ml-2"
                width={10}
                height={10}
              />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
