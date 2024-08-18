"use client";
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import Cards from '@/components/Wrappers/Cards';
import { Facebook, Instagram, Twitch } from 'lucide-react';
import React from 'react';
import Animator from '@/components/Wrappers/Animator';

const Items = [
  {
    image: './Menu.jpg',
    button: 'Menu',
    href: '/',
  },
  {
    image: './aboutus.jpg',
    button: 'About us',
    href: '/',
    objectPosition: 'object-center'
  },
  {
    image: 'https://images.pexels.com/photos/2531176/pexels-photo-2531176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    button: 'Contact us',
    href: '/'
  }
];

export default function HeroSection() {
  return (
    <main
      className='flex flex-col lg:h-screen lg:overflow-hidden relative
      lg:space-y- xl:flex-row justify-center items-center xl:gap-x-5
     p-3 gap-y-5'>
      <Animator />

      {/* Left side of the door */}
      {/* <motion.div
        initial={{ width: "50vw", height: "100vh", position: "absolute", zIndex: 100, backgroundColor: "#000" , left: 0, top: 0 }}
        animate={{ width: "50vw", height: "100vh", zIndex: 50 , left:"-50vw" }}
        transition={{ duration: 0.8 , delay: 0.5 }}
      />

      {/* Right side of the door */}
      {/* <motion.div
        initial={{ width: "50vw", height: "100vh", position: "absolute", top: 0, right: "0", zIndex: 100, backgroundColor: "#000" }}
        animate={{ width: "50vw", height: "100vh", top: 0, right: "-50vw", zIndex: 50 }}
        transition={{ duration: 0.8 , delay: 0.5 }}
      /> */}

      <div className='h-[25rem] md:h-[47rem] lg:h-[57rem] xl:h-full rounded-2xl relative'>
        <NavBar />
        <video
          className='w-full h-full object-cover rounded-2xl'
          autoPlay
          loop
          muted
          src='./homeVideo.mp4'
        />
        <div className='absolute text-white z-20 bottom-10 left-1/2 w-full transform -translate-x-1/2
          lg:left-5 lg:bottom-5 lg:translate-x-0 
        '>
          <h1 className=' text-4xl text-center lg:text-start lg:text-[5rem] lg:py-10'>
            Embrace the taste
          </h1>
          <p className='text-4xl text-center lg:text-start lg:text-[8rem]'>
            <span className=''>of</span> Moroccan
            <span className='text-4xl text-center'>
              {' '} Cuisine
            </span>
          </p>
        </div>
        <svg width="212" height="101" viewBox="6 0 335 70" className='absolute -z-0 -bottom-1 -right-1 hidden lg:flex' xmlns="http://www.w3.org/2000/svg">
          <path d="M65.5 82C65.5 58.804 84.304 40 107.5 40H338.5V124H65.5V82V82Z" fill="#0a0a0a" />
          <path d="M0.668832 124.956C25.6775 123.331 54.7763 117.711 63.1222 94.0799C64.1256 91.2387 64.822 88.2173 65.0866 85.0311C67 62 66 123.994 66 123.994L0 125L0.668832 124.956Z" fill="#0a0a0a" />
          <path d="M300.176 40C319.991 40 336.395 25.0862 336.796 5.2752V5.2752C337.254 -17.3233 336.796 40 336.796 40H288H300.176Z" fill="#0a0a0a" />
        </svg>
        <div className='absolute -bottom-1 right-0 z-40  justify-center items-center pr-2 gap-x-2 pt-2 hidden lg:flex'>
          <Button
            size={"icon"}
            className='rounded-full bg-transparent border border-gray-300/10'
          >
            <Twitch className='text-gray-300/40 p-1' />
          </Button>
          <Button
            size={"icon"}
            className='rounded-full bg-transparent border border-gray-300/10'
          >
            <Instagram className='text-gray-300/40 p-1' />
          </Button>
          <Button
            className='rounded-full bg-transparent border border-gray-300/10'
            size={"icon"}
          >
            <Facebook className='text-gray-300/40 p-1' />
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-y-5 lg:hidden'>
        {
          Items.map((i) => (
            <Cards
              key={i.button}
              image={i.image}
              button={i.button}
              href='/'
              objectPosition={i.objectPosition}
            />
          ))
        }
      </div>

      <div className='lg:flex lg:gap-x-2 lg:justify-center lg:items-center h-full xl:grid xl:grid-rows-3 xl:gap-y-5 hidden'>
        {
          Items.map((i) => (
            <Cards
              key={i.button}
              image={i.image}
              button={i.button}
              href='/'
              objectPosition={i.objectPosition}
            />
          ))
        }
      </div>

      <div className='w-full py-5 border border-gray-300/40 rounded-xl flex justify-center items-center xl:hidden '>
        <h1 className='text-2xl text-white font-'>
          Qitchen
        </h1>
      </div>
    </main>
  );
}
