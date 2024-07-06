"use client";
import styles from './about.module.css'

export default function About() {
    return (
        <>
        <h1 className='font-semibold text-center mt-10 text-3xl'>About EventManagement</h1>
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
         <img className={styles.eventImg} src='/images/Event.jpg' />
       </div>

                <div className='border- shadow w-72 h-96'>
                    <div className='relative max-w-max'>
                        <img src='/images/Sunset.jpg' alt='' />
                        <p className='px-2 bg-gray-500 rounded-sm absolute bottom-3 left-3
                        bg-opacity-80 text-white'>$20 to come</p>
                        <img className='w-14 h-14 absolute -bottom-7 right-2 border rounded-full border-gray-400' 
                        src='/images/profile1.jpg' alt='' />
                    </div>  
                    
                    <div className='p-3'>
                        <p>Sunset in California</p>
                        <p className='text-gray-400 text-sm mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas architecto magnam ab amet 
                            aut nostrum, veniam facere? Esse molestiae amet voluptates? Dolor exercitationem dolores quaerat consequuntur 
                            et aliquid  eveniet!</p>
                    </div>
                </div>
       </>
    );
}