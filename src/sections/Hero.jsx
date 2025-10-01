import { motion } from 'motion/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
return (
    <div className="w-full py-10 font-jakarta">
        <div className="flex flex-col lg:flex-row w-full h-full justify-center items-start space-y-20">
            <div className="w-full lg:w-1/2 px-5 md:px-20 flex flex-col justify-center items-center lg:justify-start space-y-6 md:space-y-14">
                <h1 className="text-4xl text-center lg:text-start md:text-6xl tracking-tight font-bold leading-[1.3] ">
                    Punya Website Kini Sesantai <br />
                    <span className='text-primary'>
                        Menikmati Teh
                    </span>
                </h1>
                <p className="text-base md:text-xl text-gray-600 w-full max-w-3/4 text-center md:text-start">
                    Dapatkan website profesional, Aplikasi web dan bantuan IT untuk usaha Anda tanpa perlu coding atau desain rumit. Mudah, cepat, dan terjangkau.
                </p>
                <Link to="/contact" className="w-fit px-4 py-2 md:px-7 md:py-3 bg-primary hover:font-bold ease-in-out text-white rounded-lg font-semibold text:base md:text-xl hover:bg-white hover:text-secondary border-3 border-primary shadow-none  transition-all duration-500">Layanan Kami</Link>
            </div>
            <div className="w-full lg:w-1/2 h-full px-5 md:px-20 flex flex-col  items-end">
            <div className='absolute px-4 py-3 md:px-6 md:py-5 rounded-e-4xl rounded-tl-4xl flex flex-col gap-2  -translate-y-5 translate-x-5 bg-secondary text-white '>
                <p className='text-sm md:text-xl font-semibold leading-[1.2]'>
                        Digitalisasi Bisnis Anda 
                        <br />
                    Dari Sekarang!!
                </p>
            </div>
                <img src='https://placehold.co/500x400' className='w-full h-auto rounded-3xl ' />
            </div>
    </div>
    </div>
)
}



export default Hero
