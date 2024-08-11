import React from 'react'

const Header = () => {
    return (
        <header className='w-screen  p-5 bg-blue-500 text-white font-semibold'>
            <nav className='flex items-center justify-evenly'>
                <h2 className='font-medium text-2xl '><span className='text-yellow-400 text-4xl '>Ai</span>Mart</h2>
                <div className='text-black'>
                    <input className='w-[250px] h-[40px] rounded-lg outline-none focus:outline-none p-2' placeholder='Search Products...' />
                </div>

                <ul className='flex items-center justify-evenly p-1 '>
                    <li className='mx-3'>Home</li>
                    <li className='mx-3'>AI Assistant</li>
                    <li className='mx-3'>Contact</li>
                    <li className='mx-3'>Login</li>
                </ul>
            </nav>


        </header>
    )
}

export default Header
