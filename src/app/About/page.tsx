/* eslint-disable @next/next/no-img-element */
"use client";
import styles from './about.module.css';
import FAQ from '@/components/FAQ';

export default function About() {
    return (
        <>
        <h1 className='font-semibold text-center my-10 text-3xl'>About EventManagement</h1>
        <div className={styles.about}>
        <div className={styles.aboutSect}>
            <p className='text-justify'>Tim kami akan merancang acara sesuai dengan kebutuhan anda dan membuka
                diskusi dengan untuk bertukar seputar ide rancangan acara yang akan
                diselenggarakan nanti. Beberapa perusahaan telah mempercayakan EO
                kami untuk menyelenggarakan event bazzar serta kegiatan outbound dan
                kami juga sebagai EO profesional selalu menentukan venue yang tepat untuk
                acara Anda. <br/>

                Kami tidak hanya berkontribusi untuk acara perkantoran saja,tapi kami juga
                memberikan acara meriah untuk berbagai kalangan seperti anak-anak/sekolah dan-lain-lain
            </p>
        </div>
         <img className={styles.eventImg} src='/images/Event.jpg' alt='event-image' />
       </div>

            <div className='h-auto w-fit mx-auto flex flex-wrap items-center 
            justify-center px-4 sm:px-0 pt-5 sm:pt-0 relative p-10 rounded-lg justify-items-center'>
                   
                    <div className='border shadow w-full lg:my-10 sm:w-72 h-96 pb-3'>
                        <div className='card-secondary absolute flex items-center 
                        justify-center inset-0 text-white font-bold'></div>

                        <div className='items-card relative sm:max-w-max w-full'>
                            <img className='w-full' src='/images/Sunset.jpg' alt='' />
                            <p className='px-2 bg-gray-500 rounded-sm absolute bottom-3 left-3
                            bg-opacity-80 text-white'>$20 to come</p>
                            <img className='w-14 h-14 absolute -bottom-7 right-2 border rounded-full border-gray-400' 
                            src='/images/profile1.jpg' alt='profile' />
                        </div>  
                        
                        <div className='items-card p-3 bg-white border-gray-500'>
                            <p>Sunset in Canada</p>
                            <p className='text-black text-sm mt-3 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas architecto magnam ab amet 
                                aut nostrum, veniam facere? Esse molestiae amet voluptates? Dolor exercitationem dolores quaerat consequuntur 
                                et aliquid  eveniet!</p>
                        </div>
                    </div>

                    <div className='card border shadow w-full lg:my-10 sm:w-72 h-96 pb-3 ml-0 sm:ml-5 mt-5 sm:mt-0'>
                        <div className='items-card relative sm:max-w-max w-full'>
                            <img className='w-full' src='/images/Sunset.jpg' alt='' />
                            <p className='px-2 bg-gray-500 rounded-sm absolute bottom-3 left-3
                            bg-opacity-80 text-white'>$20 to come</p>
                            <img className='w-14 h-14 absolute -bottom-7 right-2 border rounded-full border-gray-400' 
                            src='/images/profile1.jpg' alt='profile' />
                        </div>  
                    
                        <div className='items-card p-3 bg-white border-gray-500'>
                            <p>Sunset in California</p>
                            <p className='text-black text-sm mt-3 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas architecto magnam ab amet 
                                aut nostrum, veniam facere? Esse molestiae amet voluptates? Dolor exercitationem dolores quaerat consequuntur 
                                et aliquid  eveniet!</p>
                        </div>
                </div>

                <div className='card border shadow w-full lg:my-10 sm:w-72 h-96 pb-3 ml-0 sm:ml-5 mt-5 sm:mt-0'>
                        <div className='items-card relative sm:max-w-max w-full'>
                            <img className='w-full' src='/images/Sunset.jpg' alt='' />
                            <p className='px-2 bg-gray-500 rounded-sm absolute bottom-3 left-3
                            bg-opacity-80 text-white'>$20 to come</p>
                            <img className='w-14 h-14 absolute -bottom-7 right-2 border rounded-full border-gray-400' 
                            src='/images/profile1.jpg' alt='profile' />
                        </div>  
                    
                        <div className='items-card p-3 bg-white border-black'>
                            <p>Sunset in Melbourne</p>
                            <p className='text-black text-sm mt-3 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas architecto magnam ab amet 
                                aut nostrum, veniam facere? Esse molestiae amet voluptates? Dolor exercitationem dolores quaerat consequuntur 
                                et aliquid  eveniet!</p>
                        </div>
                </div>
            </div>

            <h1 className='text-center font-bold mb-4 font-sans text-lg'>Most Asked Question</h1>
            
            <div className='w-full h-screen bg-gradient-to-r from -indigo-500 to-blue-600'>
               <div className='p-4'>
                <FAQ />
            </div>
            </div>
       </>
    );
}