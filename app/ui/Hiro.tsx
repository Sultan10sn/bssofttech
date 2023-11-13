'use client'

import React, { useEffect, useRef } from 'react'
import { useAnimation, motion, useInView } from "framer-motion";
import Image from "next/image";

const Hiro = () => {

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
    )
}

export default Hiro