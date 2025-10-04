import logo from '../assets/banner-logo.svg'
import textpict from '../assets/tehdevfooter.png'

export default function Footer() {
    return (
        <section className="w-full px-5 lg:px-30 pb-25 justify-start items-center font-jakarta space-y-25">
            <div className="bg-white rounded-xl shadow-xl p-6 space-y-8">
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
                    <div className="grid grid-cols-2 mb-20">
                        <div className='space-y-8 text-tertiary'>
                            <div className='w-40'>
                                <img src={logo} alt="" />
                            </div>
                            <div>
                                <h1>
                                    Kami membantu bisnis kecil dan menengah memiliki website & aplikasi profesional tanpa ribet. Dengan desain yang cantik, teknologi yang cepat, dan layanan yang hangat seperti secangkir teh yang tepat waktu
                                </h1>
                            </div>
                        </div>

                        <div className='flex flex-wrap justify-between items-center px-18 gap-8'>
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

                    <div className='flex justify-between text-tertiary'>
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
            </div>
        </section>
    )
}