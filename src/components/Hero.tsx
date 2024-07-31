"use client";

import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {

  var settings = {
    dots: true,
    ifinitie: true,
    slidesToShow: 1,
    slidesToScroll : 1,
    autoplay: true,
    pausesOnHover: false,
  };

  const slideData = [
    {
      id:0,
      img: "/images/Event.3.jpg",
      title:"Trending Item",
      mainTitle: "EXPLORE THE EVENT",
      price: "Rp.150.000",
    },
    {id:1,
      img: "/images/Event.1.jpg",
      title: "Trending Accesssoris",
      mainTitle: "GET YOUR TIKCKETS NOW",
      price: "Rp.200.000",
    },
    {id:2,
      img:"/images/banner-1.png",
      title: "Sale Offer",
      mainTitle: "BOOK NOW",
      price: "Rp.300.000",
    },
  ];

  return <div>
    <div className='container pt-6 lg:pt-0'>
      <Slider {...settings}>
        {slideData.map((item)=> (
          <Slide 
          key={item.id}
          img={item.img}
          title={item.title}
          mainTitle={item.mainTitle}
          price={item.price} 
          />
        ))}
      </Slider>
    </div>
  </div>

}

export default Hero;

