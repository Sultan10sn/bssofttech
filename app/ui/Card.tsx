import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useAnimation, motion, useInView } from "framer-motion";
import Image from 'next/image';




const Card = ({ id, title, desc, desc2, desc3, img }: { id: number, title: string, desc: string, desc2: string, desc3: string, img: string }) => {


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
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image className="rounded-t-lg" src={img} alt="logo" width={700} height={600} />
                <div className="p-5">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 f
                ont-normal text-gray-700 dark:text-gray-400">{desc}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc2}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc3}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Card