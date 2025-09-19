import { motion } from 'motion/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
return (
    <div className="w-full py-10 font-jakarta">
        <div className="flex flex-row">
            <div className="w-3/5 px-20 flex flex-col justify-center space-y-14">
                <h1 className="text-7xl tracking-tight font-bold leading-[1.3] ">
                    Punya Website Kini Sesantai <br />
                    <span className='text-primary'>
                        Menikmati Teh
                    </span>
                </h1>
                <p className="text-xl text-gray-600">
                    Dapatkan website profesional, Aplikasi web dan bantuan IT untuk usaha Anda tanpa perlu coding atau desain rumit. Mudah, cepat, dan terjangkau.
                </p>
                <Link to="/contact" className="w-fit px-7 py-3 bg-primary hover:font-bold ease-in-out text-white rounded-lg font-semibold text-xl hover:bg-white hover:text-secondary border-3 border-primary shadow-none  transition-all duration-500">Layanan Kami</Link>
            </div>
            <div className="w-2/5 h-full px-20 flex flex-col justify-center items-center">
                <img src='https://placehold.co/400x600' className='w-2/3 h-auto' />
            </div>
    </div>
    </div>
)
}



export default Hero