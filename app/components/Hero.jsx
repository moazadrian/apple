'use client'
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  useGSAP(()=> {
    gsap.to('#hero', {
      opacity: 1,
      delay: 2,
    })
    gsap.to('#cta', {
      opacity: 1,
      y: -50,
      delay: 2,
    })
  }, [])
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className="h-5/6 w-full flex-center flex-col">
      <p id='hero' className='hero-title'>iPhone 15 Pro</p>
      <div className="md:w-10/12 w-9/12 pointer-events-none">
      <video className='max-sm:hidden pointer-events-none' src={require('../../public/assets/videos/hero.mp4')} autoPlay muted loop/>
      <video className='sm:hidden' src={require('../../public/assets/videos/smallHero.mp4')} autoPlay muted loop/>
      </div>
      </div>
      <div className="flex flex-col items-center opacity-0 translate-y-20" id='cta'>

      <a href="#highlights" className='btn'>Purchase</a>
      <p className='font-normal text-xl'>From $199/m or $999</p>
      </div>
    </section>
  )
}

export default Hero