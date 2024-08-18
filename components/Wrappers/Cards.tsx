"use client";

import { cn } from '@/lib/utils';
import React from 'react'
import { Button } from '../ui/button';
import { ArrowBigRight, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface Props {
    image: string;
    button: string;
    href: string;
    large?: boolean;
    className?: string;
    objectPosition?: string;
}

export default function Cards({ image, button, href, large, className, objectPosition }: Props) {
    const [hover, setHover] = React.useState(false);
    const router = useRouter();
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => router.push(href)}

            style={{
                display: large ? 'none' : 'block'
            }}
            className={cn('h-[25rem] md:h-[50rem] lg:h-[20rem] xl:h-full cursor-pointer rounded-2xl relative', className)}>
            <img
                className={`w-full h-full object-cover rounded-2xl z-10 transition-all duration-300
                   
                    ${objectPosition ? objectPosition : ' object-top'}
                    ${!hover ? 'filter brightness-75' : 'filter brightness-100'}
                    `}
                src={image}
                alt='image'
            />

            <svg width="202" height="100" viewBox="6 0 335 70" className='absolute -bottom-1 -right-1 z-0' xmlns="http://www.w3.org/2000/svg">
                <path d="M65.5 82C65.5 58.804 84.304 40 107.5 40H338.5V124H65.5V82V82Z" fill="#0a0a0a" />
                <path d="M0.668832 124.956C25.6775 123.331 54.7763 117.711 63.1222 94.0799C64.1256 91.2387 64.822 88.2173 65.0866 85.0311C67 62 66 123.994 66 123.994L0 125L0.668832 124.956Z" fill="#0a0a0a" />
                <path d="M300.176 40C319.991 40 336.395 25.0862 336.796 5.2752V5.2752C337.254 -17.3233 336.796 40 336.796 40H288H300.176Z" fill="#0a0a0a" />
            </svg>
            <div
                onClick={() => router.push(href)}
                className='absolute bottom-0 right-0 flex  justify-center items-center gap-x-2 cursor-pointer'>
                <p className={` font-thin transition-all duration-300 text-2xl
                    ${!hover ? 'text-gray-300/70' : 'text-gray-100'} 
                    `}>
                    {button}
                </p>
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    className={`
                    rounded-full border w-8 h-8 p-1.5  hover:bg-gray-300/70 text-gray-300/40
                        ${!hover ? 'border-gray-300/40 ' : 'text-gray-300/70'}
                    `}>
                    <ArrowRight />
                </Button>
            </div>
        </div>
    )
}
