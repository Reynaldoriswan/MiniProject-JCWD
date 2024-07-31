import React from 'react'
import { ProductCard } from './ProductCard'

const productsData = [
    
    {
        img: "/images/Sunset.jpg",
        title: "SUNSET PARTY AT BALI",
        desc: "FINS BEACH CLUB",
        "rating": 3,
        price : "50.000"
    },
    {
        img: "/images/jakarta-event.jpg",
        title: "JAKARTA AQUASCAPE",
        desc: "DREAMVILLE",
        rating: 3,
        price : "50.000"
    },
    {
        img: "/images/gias.jpg",
        title: "GIAS ICE BSD",
        desc: "Tangerang Selatan",
        rating: 5,
        price : "50.000"
    },
    {
        img: "/images/beach.jpg",
        title: "BEACH EVENT",
        desc: "PANTAI INDAH KAPUK",
        rating: 3,
        price : "50.000"
    },
  
]

export const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>


            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 
            lg:grid-col-3 xl:grid-cols-4 gap xl:gap-x-20 xl:gap-y-10'>

         {productsData.map((item, index) => (
            <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price} 
            />
         ))}

            </div>

        </div>
    </div>
  )
}

export default NewProducts  