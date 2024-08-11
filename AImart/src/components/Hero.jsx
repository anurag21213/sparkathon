import React from 'react'

import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/p4.jpg'

const Hero = () => {
    return (
        <div className='columns-2 mx-auto gap-2 p-5 max-w-[80%]'>
            <div className='bg-gray-200 font-normal p-3 rounded-xl my-2 flex-col items-center  '>
                <h2 className='text-3xl font-semibold '>AiMart is revolutionalizing platform for enhancing user experice using AI.</h2>
                <p>General description goes here....</p>
            </div>
            <img src={pic3} />
            <img src={pic2} />
            <img src={pic4} className='rounded-xl '/>
        </div>
    )
}

export default Hero
