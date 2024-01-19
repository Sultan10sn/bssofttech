'use client'

import React, { useEffect, useRef } from 'react'
import { lusitana } from './font'
import { useAnimation, motion, useInView } from "framer-motion";

const AboutTech = () => {

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
            transition={{ duration: 0.5, delay: 0.40 }}
        >
            <div className='px-9'>
                <h1 className={`${lusitana.className} text-sm md:text-lg text-gray-900 font-bold pb-4`}>ABOUT RECONNAISSANCE TECHNOLOGIES</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <div className="w-full bg-gray-200 rounded-full h-1 mb-0.5 dark:bg-gray-700">
                                <div className="bg-red-700 h-1 rounded-full dark:bg-blue-500" style={{ width: "90%" }}></div>
                            </div>
                            <div className={`${lusitana.className} sm:text-sm md:text-base font-bold text-gray-700 dark:text-white flex justify-between`}>
                                web Technology
                                <h1>90%</h1>
                            </div>
                        </div>
                        <div>
                            <div className="w-full bg-gray-200 rounded-full h-1 mb-0.5 dark:bg-gray-700">
                                <div className="bg-red-700 h-1 rounded-full dark:bg-blue-500" style={{ width: "90%" }}></div>
                            </div>
                            <div className={`${lusitana.className} sm:text-sm md:text-base font-bold text-gray-700 dark:text-white flex justify-between`}>
                                Special Training
                                <h1>90%</h1>
                            </div>
                        </div>
                        <div>
                            <div className="w-full bg-gray-200 rounded-full h-1 mb-0.5 dark:bg-gray-700">
                                <div className="bg-red-700 h-1 rounded-full dark:bg-blue-500" style={{ width: "90%" }}></div>
                            </div>
                            <div className={`${lusitana.className} sm:text-sm md:text-base font-bold text-gray-700 dark:text-white flex justify-between`}>
                                EnterPrise Software
                                <h1>90%</h1>
                            </div>
                        </div>
                    </div>
                    <div className={`${lusitana.className} text-gray-900 font-bold leading-2`}>
                        Armed with a strong team of experienced developers, <b /> BS-SOFTTECH Technologies helps fortune 500 companies & start-ups build robust software & products using niche technologies.
                    </div>

                    <div className={`${lusitana.className} text-gray-900 font-bold leading-2`}>
                        At BS SOFTTECH Technologies, we possess the skills and expertise to tackleyour toughest business problems at scale. We also implore the use of Machine Learning & AI technologies to provide better customer-centric solutions.
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default AboutTech