"use client";

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import Animator from './Wrappers/Animator';
export default function NavBar() {
    const [crossed, setCrossedState] = useState(false)
    const router = useRouter();

    return (
        <div
            className='absolute text-white flex justify-center items-center px-2 gap-x-4 border border-gray-300/10 bg-neutral-950 
            xl:left-4 xl:translate-x-0 xl:justify-start
            top-4 left-1/2 transform -translate-x-1/2  h-16 w-3/4 lg:w-auto rounded-xl z-40 '
        >
            <Button
                size={"icon"}
                onClick={() => setCrossedState(!crossed)}
                className={
                    'flex   cursor-pointer bg-neutral-950 flex-col items-center justify-center rounded-lg border border-gray-300/30    '
                }>
                <motion.div
                    style={{
                        width: '20px',
                        borderTop: '2px solid white',
                        transformOrigin: 'center'
                    }}
                    initial={{ translateY: '-3px' }}
                    animate={
                        crossed ? { rotate: '45deg', translateY: '1px' } : { translateY: '-3px', rotate: '0deg' }
                    }
                    transition={{ bounce: 0, duration: 0.1 }}
                />
                <motion.div
                    transition={{ bounce: 0, duration: 0.1 }}
                    style={{
                        width: '20px',
                        borderTop: '2px solid white',
                        transformOrigin: 'center'
                    }}
                    initial={{ translateY: '3px' }}
                    animate={
                        crossed
                            ? { rotate: '-45deg', translateY: '-1px' }
                            : { translateY: '3px', rotate: '0deg', scaleX: 1 }
                    }
                />
            </Button>
             <p className='text-2xl cursor-pointer'
                onClick={() => router.push('/')}
                >
                Morocui
            </p>
            <Button
                variant={"ghost"}
                onClick={() => router.push('/Menu')}
                className='uppercase rounded-lg  z-50 hidden md:block'>
                Menu
            </Button>
            <Button
                variant={"ghost"}
                className='uppercase rounded-lg  z-50 hidden md:block'>
                About us
            </Button>
            <Button
                variant={"ghost"}
                className='uppercase rounded-lg  z-50 hidden lg:block'>
                Contact us
            </Button>
            <Button className='uppercase rounded-lg border border-gray-300/40 z-50'>
                Order Now
            </Button>
        </div>
    )
}

