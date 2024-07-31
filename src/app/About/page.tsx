/* eslint-disable @next/next/no-img-element */
"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <section id='home' className='py-5'>
            <div className='container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row'>
                <div className='mb-14 lg:mb-0 lg:w-1/2'>
                    <h1 className='max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center
                    lg:text-5xl lg:text-left lg:leading-tight mb-5'>
                        A Great Event is only as good is its tools.
                    </h1>
                    <p className='max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md'>
                        We are different. Growlight is the only sass business platform that lets you run your bussiness on one
                        platform.
                    </p>
                    <div className='flex justify-center mt-14 lg:justify-start'>
                        <button type='button' className='text-white bg-green-400 font-medium rounded-lg px-5 py-4 text-center
                        hover:bg-green-500 hover:drop-shadow-md transition duration-300 ease-in-out'>
                         <Link href="/About/Learn">Learn More</Link>   
                        </button>
                         <button type='button' className=' ml-4 text-gray-900 bg-gray-200 font-medium rounded-lg px-5 py-4 text-center
                        hover:bg-gray-300 hover:drop-shadow-md transition duration-300 ease-in-out'>Contact Us</button>
                    </div>
                </div>

             <div className='lg:w-1/2'>
                <Image className='ml-auto' src="/images/Event.jpg" alt='event-image' width={600} height={600} />
             </div>

            </div>
        </section>
    );
}