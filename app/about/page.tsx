'use client'

import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import { useAnimation, motion, useInView } from "framer-motion";
import { lusitana } from '../ui/font'

const page = () => {

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

        <div className='flex flex-col p-4'>
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex-1 flex items-center justify-center'>
                        <Image
                            src='/us.jpg'
                            width={1000}
                            height={760}
                            className=' hidden md:block'
                            alt='screenshot of the dashbord'
                        />
                        <Image
                            src='/us.jpg'
                            width={300}
                            height={500}
                            className='block md:hidden'
                            alt='screenshot of the dashbord'
                        />
                    </div>
                    <div className='flex-1 flex flex-col justify-center items-center'>

                        <p className={`${lusitana.className} text-center text-md font-semibold`}>BS SOFTTECH LTD: Your Trusted Partner for Software Development, Cybersecurity, and IT Training BS SOFTTECH LTD is a leading technology company that provides comprehensive IT solutions to businesses of all sizes. We are passionate about helping our clients achieve their goals through innovative
                            software development, robust cybersecurity protection, and specialized IT training and much more.</p>
                        <div className='flex gap-11 mt-4'>
                            <motion.div
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                variants={squareVariants}
                                transition={{ duration: 0.5, delay: 0.30 }}
                            >
                                <div className='flex flex-col items-center justify-center'>
                                    <Image
                                        src='/s.png'
                                        width={100}
                                        height={100}
                                        className=' hidden md:block rounded-full'
                                        alt='screenshot of the dashbord'
                                    />
                                    <p className={`${lusitana.className} hidden md:block text-gray-900 mt-2 text-sm font-bold`}>Sultan A Muhd</p>
                                    <p className={`${lusitana.className} hidden md:block text-gray-900 mt-2 text-sm font-bold`}>CO-FOUNDER/CTO</p>
                                </div>
                            </motion.div>
                            <motion.div
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                variants={squareVariants}
                                transition={{ duration: 0.5, delay: 0.30 }}
                            >
                                <div className='flex flex-col items-center justify-center'>
                                    <Image
                                        src='/b2.jpg'
                                        width={85}
                                        height={100}
                                        className=' hidden md:block rounded-full'
                                        alt='screenshot of the dashbord'
                                    />
                                    <p className={`${lusitana.className} hidden md:block text-gray-900 mt-2 text-sm font-bold`}>Bilal A Muhd</p>
                                    <p className={`${lusitana.className} hidden md:block sm:text-gray-900 mt-2 text-sm font-bold`}>FOUNDER/CEO</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </motion.div>
            <div className='flex justify-center gap-4 items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <Image
                        src='/s.png'
                        width={100}
                        height={100}
                        className='block md:hidden rounded-full'
                        alt='screenshot of the dashbord'
                    />
                    <p className={`${lusitana.className} block md:hidden text-gray-900 mt-2 text-sm font-bold`}>Sultan A muhd</p>
                    <p className={`${lusitana.className} block md:hidden text-gray-900 mt-2 text-sm font-bold`}>CO-FOUNDER/CTO</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <Image
                        src='/b2.jpg'
                        width={85}
                        height={100}
                        className='block md:hidden rounded-full'
                        alt='screenshot of the dashbord'
                    />
                    <p className={`${lusitana.className} block md:hidden text-gray-900 mt-2 text-sm font-bold`}>Bilal A Muhd</p>
                    <p className={`${lusitana.className} block md:hidden sm:text-gray-900 mt-2 text-sm font-bold`}>FOUNDER/CEO</p>
                </div>
            </div>
        </div>

    )
}

export default page