"use client";

import PageHero from "../components/PageHero"
import Wrapper from "../components/Wrapper"
import Image from "next/image"
import romer from "../public/romer.png"
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useRef, useEffect} from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const imgRef = useRef(null);
  const triggerImage = useRef(null);

  useEffect(() => {
    const imageElement = imgRef.current;
    const element = triggerImage.current;
    gsap.fromTo(imageElement, {height: 0}, {height: "85%", duration: 2, scrollTrigger: {
      trigger: element
    }})
  })

  return (
    <main>
      <PageHero title="Welcome">
        <p className="text-4xl md:text-6xl tracking-tighter font-medium md:max-w-2xl md:mr-8">I'm glad you're here!</p>
      </PageHero>

      <section className="py-12 border-b-2 border-black">
        <Wrapper>
          <div className="sm:grid sm:grid-cols-2">
            <div className="mb-8 sm:mb-0 sm:mr-8 md:mr-36 relative" ref={triggerImage}>
              <div className="bg-black w-full absolute -z-10 bottom-0" ref={imgRef}></div>
              <Image alt="Romer" src={romer} />
            </div>
            <div className="my-auto pr-24">
              <p className="uppercase font-bold tracking-tight">About me</p>
              <p className="uppercase mb-8 tracking-tight">Romer Bormann</p>
              <h3 className="text-2xl font-medium">I am a webdeveloper and student from the Netherlands. I have a passion for new technologies and making beautiful websites.</h3>
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  )
}
