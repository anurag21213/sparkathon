import React from 'react'

import arrival1 from '../assets/arrival1.jpg'
import arrival2 from '../assets/arrival2.jpg'
import arrival3 from '../assets/arrival3.jpg'

function Card({ image, price, desc, discount }) {

    return (
        <div className='w-[300px]  '>
            {
                discount?<h3 className='absolute text-white text-2xl font-bold p-1'><span className='text-yellow-400'>20%</span> Discount</h3>:<h3 className='absolute p-1 text-white text-2xl font-bold'><span className='text-yellow-400'>New</span> Arrival</h3>
            }
            
            <img src={image} className='w-[100%] h-[70%] overflow-hidden' />
            <p className='my-2'>{desc}</p>
            <div className='flex items-center justify-between w-[100%] my-3'>
                <button className='bg-blue-500 text-white text-xl w-[100px] h-[50px] rounded-lg flex items-center justify-center'>Cart</button>
                <button className='bg-blue-500 text-white text-xl outline-none w-[100px] h-[50px] rounded-lg'>Buy Now</button>
            </div>

        </div>
    )
}

const FreshArrivals = () => {

    const cardData = [
        {
            image: arrival1,
            price: 20,
            desc: "se these Tailwind CSS product list components to build storefront and category pages for your online store with",
            
            discount: true
        },
        {
            image: arrival2,
            price: 20,
            desc:"se these Tailwind CSS product list components to build storefront and category pages for your online store with",
            
            discount: true
        },
        {
            image: arrival1,
            price: 30,
            desc:"se these Tailwind CSS product list components to build storefront and category pages for your online store with",
            
            discount: false
        },
    ]

    return (
        <div className='max-w-[80%] mx-auto'>
            <h2 className='text-2xl font-semibold'><span className='text-yellow-400 text-3xl '>Fresh</span> Arrivals</h2>

            <div className='flex items-center justify-between gap-2 my-5'>
                {
                    cardData.map((item, index) => <Card image={item.image} key={index} price={item.price} desc={item.desc}  discount={item.discount} />)
                }
            </div>


        </div>
    )
}

export default FreshArrivals
