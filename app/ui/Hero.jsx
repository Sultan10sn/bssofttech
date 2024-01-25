'use client'

import { useAnimation, useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const Hero = () => {

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
            <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline"> Partner with BS to enrich your</span>
                            <span className="block text-red-700 xl:inline">online business</span>
                        </h1>
                        <p
                            className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            with a strong team of experienced developers, <b /> BS-SOFTTECH Technologies helps fortune 500 companies & start-ups build robust software & products using niche technologies.

                        </p>
                    </div>

                    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="img" />
                    </div>

                </div>

            </section>
        </motion.div>
    )
}

export default Hero