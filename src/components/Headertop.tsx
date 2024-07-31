import React from 'react'

import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Headertop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex justify-between items-center'>
          <div className='hidden lg:flex- gap-1'>
            <div className='header_top__icon_wrapper'>
              <BsFacebook />
            </div>
            <div className='header_top__icon_wrapper'>
              <BsFacebook />
            </div>
            <div className='header_top__icon_wrapper'>
              <BsInstagram />
            </div>
            <div className='header_top__icon_wrapper'>
              <BsLinkedin />
            </div>
          </div>

          <div className='text-gray-500 text-[12px]'>
            <b>GRATIS BIAYA ADMIN</b> THIS WEEK ORDER OVER Rp.1000.0000
          </div>


          <div className='flex-gap-4'>
            <select
            className='text-gray-500 text-[12px] w-[70px]'
            name='currency'
            id='currency'
            >
              <option value="USD $">USD</option>
              <option value="EUR €">EUR</option>
              <option value="IDR Rp">IDR</option>
            </select>

            <select
            className='text-gray-500 text-[12px] w-[70px]'
            name='language'
            id='language'
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headertop;