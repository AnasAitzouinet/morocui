"use client";

import NavBar from '@/components/NavBar';
import React from 'react'
import { Badge } from "@/components/ui/badge"
import Animator from '@/components/Wrappers/Animator';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Menu() {
    return (
        <main
            className='flex flex-col xl:block xl:gap-x-2 gap-y-3 p-3  relative'>
            {/* <Animator /> */}
            <motion.div
                className='w-full h-full absolute object-cover'
                initial={{ position: 'absolute', zIndex: 100, backgroundColor: '#000', left: 0, top: 0, width: '100vw', height: '100vh' }}
                animate={{ width: '0' }}
                transition={{ duration: 0.8, delay: 0.5 }}
            />
            <img src="./bg.jpg" alt="" className='w-full h-full fixed object-cover' />
            <div className='h-[25rem] md:h-[47rem] lg:h-[57rem] xl:h-screen xl:w-1/2 rounded-2xl
            xl:fixed xl:top-0 xl:left-0 xl:p-2 relative
            '>
                <NavBar />
                <img
                    className='w-full h-full  object-cover rounded-2xl'
                    src='./menus.jpg'
                />
                <h1 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 text-6xl  text-white'>
                    MENU
                </h1>
            </div>

            <div className='border rounded-xl border-gray-300/20 px-2 py-8
             xl:w-1/2  xl: z-50
             xl:absolute  xl:top-1.5  xl:right-1'>
                <div className='flex justify-center items-center gap-x-2 '>
                    <Badge className='uppercase font-thin bg-neutral-950 border border-gray-300/10 rounded-md py-1'>couscous</Badge>
                    <Badge className='uppercase font-thin bg-neutral-950 border border-gray-300/10 rounded-md py-1'>tajin</Badge>
                    <Badge className='uppercase font-thin bg-neutral-950 border border-gray-300/10 rounded-md py-1'>seffa</Badge>
                </div>

                {/* Menu  */}
                <div className='py-5 space-y-5  flex flex-col justify-center items-center gap-y-5 '>
                    <div className='flex flex-col justify-center items-center -space-y-5  py-5'>
                        <h2 className='text-4xl text-white text-center'>Tajin</h2>
                        <svg
                            className='w-1/4'
                            width="883" height="74" viewBox="0 0 883 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M695 37L189 37" stroke="white" stroke-width="3" stroke-linecap="square" />
                            <circle cx="711.5" cy="36.5" r="10" stroke="white" stroke-width="3" />
                            <path d="M811.92 11C795.317 27.1253 783.752 32.8536 759 37C783.752 41.1464 795.317 46.8747 811.92 63L857 37L811.92 11Z" stroke="white" stroke-width="3" />
                            <path d="M851 22C838.5 30.5 835.5 32.5 820 37C834 40.5 839.5 44.5 852 52.5L879.5 37L851 22Z" stroke="white" stroke-width="3" />
                            <path d="M726.181 17.7601C723.733 0.6856 746.832 -2.58867 754.917 8.29689C759.111 13.9453 759.951 20.4246 757.504 26.5418C756.036 30.2122 752.6 33.0601 749.408 34.4825C746.216 35.9049 739.791 36.9644 736 37C739.791 37.0356 746.216 38.0782 749.408 39.5006C752.6 40.9231 756.036 43.771 757.504 47.4413C759.951 53.5585 759.111 60.0378 754.917 65.6862C746.832 76.5718 723.733 73.2975 726.181 56.2231M726.181 17.7601C726.251 18.2488 726.342 18.7489 726.454 19.2603M726.181 17.7601C726.225 18.2669 726.318 18.7685 726.454 19.2603M726.181 17.7601C726.171 17.6557 726.164 17.5512 726.159 17.4465M726.454 19.2603C726.481 19.3794 726.508 19.4992 726.537 19.6196M726.454 19.2603C728.147 25.3724 736.475 29.9768 740.568 24.3693C743.46 20.407 740.811 14.5557 734.539 15.1291M726.181 56.2231C726.251 55.7343 726.342 55.2342 726.454 54.7228M726.181 56.2231C726.225 55.7162 726.318 55.2147 726.454 54.7228M726.181 56.2231C726.171 56.3274 726.164 56.4319 726.159 56.5366M726.454 54.7228C726.481 54.6037 726.508 54.4839 726.537 54.3636M726.454 54.7228C728.147 48.6107 736.475 44.0063 740.568 49.6138C743.46 53.5761 740.811 59.4275 734.539 58.8541" stroke="white" stroke-width="3" />
                            <path d="M737 37C733.066 37 725.367 37 726.042 37" stroke="white" stroke-width="3" />
                            <circle cx="172" cy="37.4831" r="10" transform="rotate(180 172 37.4831)" stroke="white" stroke-width="3" />
                            <path d="M71.58 62.9831C88.1829 46.8578 99.7477 41.1295 124.5 36.9831C99.7477 32.8367 88.1829 27.1083 71.58 10.9831L26.5 36.9831L71.58 62.9831Z" stroke="white" stroke-width="3" />
                            <path d="M32.5 51.9831C45 43.4831 48 41.4831 63.5 36.9831C49.5 33.4831 44 29.4831 31.5 21.4831L4 36.9831L32.5 51.9831Z" stroke="white" stroke-width="3" />
                            <path d="M157.319 56.223C159.767 73.2975 136.668 76.5718 128.583 65.6862C124.389 60.0378 123.549 53.5585 125.996 47.4413C127.464 43.7709 130.9 40.923 134.092 39.5006C137.284 38.0782 143.709 37.0187 147.5 36.9831C143.709 36.9475 137.284 35.9049 134.092 34.4824C130.9 33.06 127.464 30.2121 125.996 26.5418C123.549 20.4246 124.389 13.9453 128.583 8.29687C136.668 -2.58869 159.767 0.685575 157.319 17.76M157.319 56.223C157.249 55.7343 157.158 55.2342 157.046 54.7228M157.319 56.223C157.275 55.7162 157.182 55.2146 157.046 54.7228M157.319 56.223C157.329 56.3274 157.336 56.4319 157.341 56.5366M157.046 54.7228C157.019 54.6037 156.992 54.4839 156.963 54.3635M157.046 54.7228C155.353 48.6107 147.025 44.0063 142.932 49.6138C140.04 53.5761 142.689 59.4274 148.961 58.854M157.319 17.76C157.249 18.2488 157.158 18.7489 157.046 19.2603M157.319 17.76C157.275 18.2668 157.182 18.7684 157.046 19.2603M157.319 17.76C157.329 17.6557 157.336 17.5512 157.341 17.4464M157.046 19.2603C157.019 19.3794 156.992 19.4992 156.963 19.6195M157.046 19.2603C155.353 25.3724 147.025 29.9768 142.932 24.3693C140.04 20.407 142.689 14.5556 148.961 15.129" stroke="white" stroke-width="3" />
                            <path d="M146.5 36.9831C150.434 36.9831 158.133 36.9831 157.458 36.9831" stroke="white" stroke-width="3" />
                        </svg>
                    </div>
                    {/* Menu item */}
                    <div className='flex flex-col justify-center items-center gap-y-4
                        md:flex-row md:w-3/4 md:gap-x-5
                    '>
                        <img src="./menus.jpg" alt="" className='w-3/4 md:w-1/4 rounded-lg object-cover aspect-square ' />

                        <div className='w-3/4 md:w-full flex flex-col '>
                            <div className='text-white text-2xl flex justify-between items-center md:w-full '>
                                <p className=''>Seffa</p>
                                <p>150dh</p>
                            </div>
                            <p className='text-gray-400  '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                            </p>
                            <Button
                                variant={'ghost'}
                                className=' text-white my-2 border '>
                                Order Now
                            </Button>
                        </div>
                    </div>
                    {/* Menu item */}
                    <div className='flex flex-col justify-center items-center gap-y-4
                        md:flex-row md:w-3/4 md:gap-x-5
                    '>
                        <img src="./menus.jpg" alt="" className='w-3/4 md:w-1/4 rounded-lg object-cover aspect-square ' />

                        <div className='w-3/4 md:w-full flex flex-col '>
                            <div className='text-white text-2xl flex justify-between items-center md:w-full '>
                                <p className=''>Seffa</p>
                                <p>150dh</p>
                            </div>
                            <p className='text-gray-400  '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                            </p>
                            <Button
                                variant={'ghost'}
                                className=' text-white my-2 border '>
                                Order Now
                            </Button>
                        </div>
                    </div>

                </div>

                {/* Menu  */}
                <div className='py-5 space-y-5  flex flex-col justify-center items-center gap-y-5 '>

                    <div className='flex flex-col justify-center items-center -space-y-5   py-5'>
                        <h2 className='text-4xl text-white text-center'>couscous</h2>
                        <svg
                            className='w-1/4'
                            width="883" height="74" viewBox="0 0 883 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M695 37L189 37" stroke="white" stroke-width="3" stroke-linecap="square" />
                            <circle cx="711.5" cy="36.5" r="10" stroke="white" stroke-width="3" />
                            <path d="M811.92 11C795.317 27.1253 783.752 32.8536 759 37C783.752 41.1464 795.317 46.8747 811.92 63L857 37L811.92 11Z" stroke="white" stroke-width="3" />
                            <path d="M851 22C838.5 30.5 835.5 32.5 820 37C834 40.5 839.5 44.5 852 52.5L879.5 37L851 22Z" stroke="white" stroke-width="3" />
                            <path d="M726.181 17.7601C723.733 0.6856 746.832 -2.58867 754.917 8.29689C759.111 13.9453 759.951 20.4246 757.504 26.5418C756.036 30.2122 752.6 33.0601 749.408 34.4825C746.216 35.9049 739.791 36.9644 736 37C739.791 37.0356 746.216 38.0782 749.408 39.5006C752.6 40.9231 756.036 43.771 757.504 47.4413C759.951 53.5585 759.111 60.0378 754.917 65.6862C746.832 76.5718 723.733 73.2975 726.181 56.2231M726.181 17.7601C726.251 18.2488 726.342 18.7489 726.454 19.2603M726.181 17.7601C726.225 18.2669 726.318 18.7685 726.454 19.2603M726.181 17.7601C726.171 17.6557 726.164 17.5512 726.159 17.4465M726.454 19.2603C726.481 19.3794 726.508 19.4992 726.537 19.6196M726.454 19.2603C728.147 25.3724 736.475 29.9768 740.568 24.3693C743.46 20.407 740.811 14.5557 734.539 15.1291M726.181 56.2231C726.251 55.7343 726.342 55.2342 726.454 54.7228M726.181 56.2231C726.225 55.7162 726.318 55.2147 726.454 54.7228M726.181 56.2231C726.171 56.3274 726.164 56.4319 726.159 56.5366M726.454 54.7228C726.481 54.6037 726.508 54.4839 726.537 54.3636M726.454 54.7228C728.147 48.6107 736.475 44.0063 740.568 49.6138C743.46 53.5761 740.811 59.4275 734.539 58.8541" stroke="white" stroke-width="3" />
                            <path d="M737 37C733.066 37 725.367 37 726.042 37" stroke="white" stroke-width="3" />
                            <circle cx="172" cy="37.4831" r="10" transform="rotate(180 172 37.4831)" stroke="white" stroke-width="3" />
                            <path d="M71.58 62.9831C88.1829 46.8578 99.7477 41.1295 124.5 36.9831C99.7477 32.8367 88.1829 27.1083 71.58 10.9831L26.5 36.9831L71.58 62.9831Z" stroke="white" stroke-width="3" />
                            <path d="M32.5 51.9831C45 43.4831 48 41.4831 63.5 36.9831C49.5 33.4831 44 29.4831 31.5 21.4831L4 36.9831L32.5 51.9831Z" stroke="white" stroke-width="3" />
                            <path d="M157.319 56.223C159.767 73.2975 136.668 76.5718 128.583 65.6862C124.389 60.0378 123.549 53.5585 125.996 47.4413C127.464 43.7709 130.9 40.923 134.092 39.5006C137.284 38.0782 143.709 37.0187 147.5 36.9831C143.709 36.9475 137.284 35.9049 134.092 34.4824C130.9 33.06 127.464 30.2121 125.996 26.5418C123.549 20.4246 124.389 13.9453 128.583 8.29687C136.668 -2.58869 159.767 0.685575 157.319 17.76M157.319 56.223C157.249 55.7343 157.158 55.2342 157.046 54.7228M157.319 56.223C157.275 55.7162 157.182 55.2146 157.046 54.7228M157.319 56.223C157.329 56.3274 157.336 56.4319 157.341 56.5366M157.046 54.7228C157.019 54.6037 156.992 54.4839 156.963 54.3635M157.046 54.7228C155.353 48.6107 147.025 44.0063 142.932 49.6138C140.04 53.5761 142.689 59.4274 148.961 58.854M157.319 17.76C157.249 18.2488 157.158 18.7489 157.046 19.2603M157.319 17.76C157.275 18.2668 157.182 18.7684 157.046 19.2603M157.319 17.76C157.329 17.6557 157.336 17.5512 157.341 17.4464M157.046 19.2603C157.019 19.3794 156.992 19.4992 156.963 19.6195M157.046 19.2603C155.353 25.3724 147.025 29.9768 142.932 24.3693C140.04 20.407 142.689 14.5556 148.961 15.129" stroke="white" stroke-width="3" />
                            <path d="M146.5 36.9831C150.434 36.9831 158.133 36.9831 157.458 36.9831" stroke="white" stroke-width="3" />
                        </svg>
                    </div>
                    {/* Menu item */}
                    <div className='flex flex-col justify-center items-center gap-y-4
                        md:flex-row md:w-3/4 md:gap-x-5
                    '>
                        <img src="./menus.jpg" alt="" className='w-3/4 md:w-1/4 rounded-lg object-cover aspect-square ' />

                        <div className='w-3/4 md:w-full flex flex-col '>
                            <div className='text-white text-2xl flex justify-between items-center md:w-full '>
                                <p className=''>Seffa</p>
                                <p>150dh</p>
                            </div>
                            <p className='text-gray-400  '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                            </p>
                            <Button
                                variant={'ghost'}
                                className=' text-white my-2 border '>
                                Order Now
                            </Button>
                        </div>
                    </div>
                    {/* Menu item */}
                    <div className='flex flex-col justify-center items-center gap-y-4
                        md:flex-row md:w-3/4 md:gap-x-5
                    '>
                        <img src="./menus.jpg" alt="" className='w-3/4 md:w-1/4 rounded-lg object-cover aspect-square ' />

                        <div className='w-3/4 md:w-full flex flex-col '>
                            <div className='text-white text-2xl flex justify-between items-center md:w-full '>
                                <p className=''>Seffa</p>
                                <p>150dh</p>
                            </div>
                            <p className='text-gray-400  '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                            </p>
                            <Button
                                variant={'ghost'}
                                className=' text-white my-2 border '>
                                Order Now
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
