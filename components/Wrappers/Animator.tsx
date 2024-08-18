"use client";
import React from 'react'
import { motion } from 'framer-motion'
export default function Animator() {
    return (
        <>

            <motion.img
                initial={{ width: "50%", height: "auto", position: "absolute", zIndex: 100, backgroundColor: "#000", left: 0, top: "-10rem" }}
                animate={{ width: "50%", height: "auto", zIndex: 50, left: "-50vw", top: "-10rem" }}
                transition={{ duration: 0.8, delay: 0.5, type: "tween" }}

                src="./left.svg" alt="" className='absolute left-0 -top-40 z-50 w-1/2 h-auto object-cover object-top' />
            <motion.img
                initial={{ width: "50%", height: "auto", position: "absolute", top: "-10rem", right: "0", zIndex: 100, backgroundColor: "#000" }}
                animate={{ width: "50%", height: "auto", top: "-10rem", right: "-50vw", zIndex: 50 }}
                transition={{ duration: 0.8, delay: 0.5, type: "tween" }}

                src="./right.svg" alt="" />
        </>
    )
}
