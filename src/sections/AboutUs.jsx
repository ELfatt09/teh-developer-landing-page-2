import React from 'react'
import aboutUs from '../assets/about-us.svg'

function AboutUs() {
return (
    <section className='w-full px-30 py-25 flex flex-row justify-between items-center font-jakarta space-x-15'>
        <div className='w-full max-w-md'>
            
            <img src={aboutUs} alt='about-us' className='w-full h-auto' />
            <div className='absolute p-2 flex flex-col gap-2 -translate-y-30 rounded-r-lg bg-white '>
                <p className='text-2xl font-bold leading-[1.2]'>
                    Marketing & Designer
                    <br />
                    <span className='text-lg text-primary'>Teh Developer</span>
                </p>
            </div>
        </div>
        <div className='w-fit max-w-4xl flex flex-col justify-end items-end tracking-[-3%] space-y-9 text-end '>
            <h2 className='text-6xl'>
                Kami Adalah Solusi Digital
                yang
                <span className='text-secondary font-bold italic'> Hangat & Profesional</span>
            </h2>
            <div className='w-full flex flex-row space-x-5'>
                <p className='w-full text-xl text-black/50'>
                    Dengan semangat kerja keras dan secangkir teh, kami membantu bisnis Anda tumbuh melalui website, aplikasi, dan desain yang cantik, cepat, dan mudah digunakan.
                </p>
                <div className='w-1 h-content bg-primary'></div>
            </div>
            <ul className='grid grid-cols-2 gap-6  w-fit'>
                {['Design UI/UX Menarik', 'Pengalaman Pengguna Terbaik', 'Pengerjaan Cepat', 'Kualitas Terbaik', 'Kemudahan Penggunaan', 'Solusi Terbaik',].map((item, index) => (
                    <Item key={index}>{item}</Item>
                ))}
            </ul>

        </div>
    </section>
)
}

export default AboutUs

function Item({ children }) {
    return (
        <li className='text-gray-500 w-full text-xl flex items-center gap-2 text-start'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {children}
        </li>
    )
}
