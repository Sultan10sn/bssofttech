'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import AboutTech from './ui/AboutTech'
import Itemlist from './ui/Itemlist'
import Techs from './ui/Techs'
import { useAnimation, motion, useInView } from "framer-motion";

export default function Home() {

  const squareVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const ref = useRef(null)
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <main className="flex min-h-screen items-center flex-col justify-between">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className='clip-style z-10 w-screen h-80 md:h-screen'>
          <Image
            src='/computer.png'
            layout='fill'
            objectFit='cover'
            alt='screenshot of the dashbord'
          />
        </div>
      </motion.div>
      <AboutTech />
      <Itemlist />
      <Techs />
    </main>
  )
}
