import logo from '../assets/banner-logo.png'
import textpict from '../assets/tehdevfooter.png'
import SectionWrapper from '../partials/SectionWrapper'
import { servicesData } from '../data/services'

export default function Footer() {
    return (
    <SectionWrapper>
                <div className="bg-primary w-full text-white rounded-xl flex flex-col justify-center items-center space-y-12 py-10 md:py-20">
                    <div className="space-y-4 flex flex-col justify-center items-center">
                        <div className="text-center text-3xl md:text-5xl font-semibold">
                    <h1>Siap Punya Website Atau Aplikasi?</h1>
                </div>
                <div className="text-lg md:text-2xl font-light w-full max-w-3/4 text-center">
                    <p>Banyak bisnis kecil sudah tumbuh dengan solusi digital dari Teh Developer. Yuk, mulai sekarang!</p>
                </div>
                    </div>
                    <a href=""
                    className="text-primary bg-white px-4 py-2 text-lg cursor-pointer rounded-lg">
                        Mulai Sekarang
                    </a>
                </div>

                <div>
                    <img src={textpict} alt="" className='w-full h-auto' />
                </div>

                <div className='space-y-4 bg-[#F0F0F0] p-8 rounded-xl shadow-xl'>
                    <div className="flex flex-col lg:flex-row mb-20 gap-10 justify-between">
                        <div className='w-full max-w-md space-y-8 text-tertiary'>
                            <div className='w-40'>
                                <img src={logo} alt="" />
                            </div>
                            <div>
                                <h1>
                                    Kami membantu bisnis kecil dan menengah memiliki website & aplikasi profesional tanpa ribet. Dengan desain yang cantik, teknologi yang cepat, dan layanan yang hangat seperti secangkir teh yang tepat waktu
                                </h1>
                            </div>
                        </div>

                        <div className='flex flex-wrap justify-between items-center  gap-8'>
                            <div>
                                <h1 className='text-xl font-semibold mb-2'>Layanan</h1>
                            <ul className='space-y-3'>
                                {servicesData.map((service, index) => (
                                <li className='text-tertiary'>
                                        <h2>{ service.title }</h2>
                                </li>                                ))}
                            
                            </ul>
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold mb-2'>Layanan</h1>
                                <ul className='space-y-3'>
                                <li className='text-tertiary'>
                                    <h2>UI/UX Design</h2>
                                </li>
                                <li className='text-tertiary'>
                                    <h2>UI/UX Design</h2>
                                </li>
                                <li className='text-tertiary'>
                                    <h2>UI/UX Design</h2>
                                </li>
                                <li className='text-tertiary'>
                                    <h2>UI/UX Design</h2>
                                </li>
                            </ul>
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold mb-2'>Layanan</h1>
                                <ul className='space-y-3'>
                                <li className='text-tertiary'>
                                    <h2>UI/UX Design</h2>
                                </li>
                                <li className='text-tertiary'>
                                    <h2>UI/UX Design</h2>
                                </li>
                                <li className='text-tertiary'>
                                    <h2>UI/UX Design</h2>
                                </li>
                                <li className='text-tertiary'>
                                    <h2>UI/UX Design</h2>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <hr className='text-tertiary bg-tertiary' />

                    <div className='flex flex-wrap gap-5 justify-between text-tertiary'>
                        <div>
                            <h1>&copy;2025 Teh Developer All Right Reserved</h1>
                        </div>

                        <div className='flex flex-wrap gap-4'>
                            <div>
                                <a href=""
                                   className='underline cursor-pointer'>
                                    Privacy Policy
                                </a>
                            </div>
                            <div>
                                <a href=""
                                   className='underline cursor-pointer'>
                                    Privacy Policy
                                </a>
                            </div>
                            <div>
                                <a href=""
                                   className='underline cursor-pointer'>
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </SectionWrapper>
    )
}