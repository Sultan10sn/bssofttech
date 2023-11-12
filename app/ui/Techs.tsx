import { useAnimation, motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const Techs = () => {

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
            <div className='mt-8'>
                <div className='grid grid-cols-3 gap-1 md:grid-cols-6 md:gap-4'>
                    <div className='border border-blue-100 w-24 h-24 rounded-md'>
                        <Image
                            src={'/Google.jpeg'}
                            width={90}
                            height={100}
                            alt='dell'
                        />
                    </div>
                    <div className='border border-blue-100 w-24 h-24 w rounded-md'>
                        <Image
                            src={'/js.png'}
                            width={90}
                            height={100}
                            alt='dell'
                        />
                    </div>
                    <div className='border border-blue-100 w-24 h-24 rounded-md'>
                        <Image
                            src={'/java.jpeg'}
                            width={100}
                            height={100}
                            alt='dell'
                        />
                    </div>
                    <div className='border border-blue-100 w-24 h-24 rounded-md'>
                        <Image
                            src={'/react.png'}
                            width={100}
                            height={100}
                            alt='dell'
                        />
                    </div>
                    <div className='border border-blue-100 w-24 h-24 rounded-md'>
                        <Image
                            src={'/node.jpeg'}
                            width={100}
                            height={100}
                            alt='dell'
                        />
                    </div>
                    <div className='border border-blue-100 w-24 h-24 rounded-md'>
                        <Image
                            src={'/vscode.png'}
                            width={100}
                            height={100}
                            alt='dell'
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Techs