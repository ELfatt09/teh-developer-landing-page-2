
import LayananBackground from '../assets/layanan/layanan-bg.svg';
import PenTool from '../assets/icon/pen-tool.svg'

function Layanans() {
    return (
        <section className="h-fit px-30 py-25">
            <div className="w-full flex justify-between items-center mb-20">
                <h1 className="capitalize text-6xl font-normal">kami menyediakan <br /> <span className="capitalize italic font-semibold text-primary">layanan</span> dalam</h1>

                <div className="bg-black text-white flex items-center justify-center px-4 py-2 h-fit rounded-md hover:bg-transparent border border-black hover:text-black text-2xl transition">
                    <a href="">Hubungi Kami</a>
                </div>
            </div>

            <div className='relative h-[52vh]'>
                <Layanan background={LayananBackground} icon={PenTool} layanan={'Graphic Design'} description={'Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} />
            </div>
        </section>
    );
}

function Layanan({ background, icon, layanan, description }) {
    return (
        <div className="w-full max-w-2xl h-full">
            <img src={background}
                alt="Layanan Backround" 
                className='absolute inset-0 z-0'/>

            <div className='relative flex flex-col justify-between h-full w-full px-10 py-8'>
                <img src={icon} 
                    alt="Icon Layanan" 
                    className='w-20'/>

                <div>
                    <div className='text-4xl mb-2 font-semibold'>
                        <h1>{layanan}</h1>
                    </div>

                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layanans