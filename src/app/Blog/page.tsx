import Image from 'next/image'
import React from 'react'

export default function Blog() {
    return (
            <div className='text-center py-10'>
                <h5>Testimonial</h5>
                <h1 className='text-4xl w-96 mx-auto leading-normal font-bold mb-12'>
                    Read What Others Have To Say
                    </h1>
                    <div className='flex max-w-5xl mx-auto gap-8'>
                        <div className='bg-grey-100 p-8 rounded-xl mix-blend-luminosity'>
                         <Image className='h-50 mx-auto ' src="/images/profile1.jpg" alt='profile' width={300} height={300} />
                         <h4 className='uppercase text-xl font-bold'>Jessica</h4>
                         <p className='text-sm leading-7 my-3 text-black opacity-50'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur voluptatum.
                        </p>
                        <button className='bg-btn_primary py-2.5 px-8 rounded-full'>
                            Get in Touch
                        </button>
                        </div>
                    </div>
            </div>
    )
}