import React from 'react';
import designicon from './../assets/service-icons/Design.svg';
import detail from "../assets/svg/detail.svg"


function Services() {
  return (
       <section className='w-full px-30 py-25 justify-start items-center font-jakarta space-y-25'>
          <div className='w-full flex flex-row justify-between items-start'>
            <h2 className='text-6xl tracking-[-3%] leading-tight'>Kami Menyediakan
              <br />
            <span className='font-bold italic text-secondary'>
               Layanan
          </span> Dalam
              </h2>
              <a href='#contact' className='w-fit p-4 text-white bg-black rounded-lg font-bold text-xl'>
                  Hubungi Kami
              </a>
          </div>
          <div className='w-full flex flex-wrap gap-6 justify-center'>
              <ServiceCard title='UI/UX Design' description='Desain website atau aplikasi yang menarik dan memukau pengguna.' icon={designicon} />
              <ServiceCard title='UI/UX Design' description='Desain website atau aplikasi yang menarik dan memukau pengguna.' icon={designicon} />
              <ServiceCard title='UI/UX Design' description='Desain website atau aplikasi yang menarik dan memukau pengguna.' icon={designicon} />
              <ServiceCard title='UI/UX Design' description='Desain website atau aplikasi yang menarik dan memukau pengguna.' icon={designicon} />
            </div>
      </section>
  )
}

function ServiceCard({ title, description, icon }) { 
    return (
        <div className='w-full max-w-lg bg-white shadow-xl rounded-3xl  flex flex-col space-y-15'>
            <div className='w-full flex justify-between items-start'>
                <img src={icon} alt={title} className='h-15 w-15 ml-7 mt-7' />
                <a href='#contact' className='shadow-lg w-fit p-5 text-white bg-black rounded-2xl font-bold text-lg'>
                    <img src={detail} alt="" className="w-7 h-auto" style={{filter: "invert(1) sepia(1)"}} />
                </a>
            </div>
            <div className='w-full flex flex-col space-y-3 px-5 py-10'>
                <h3 className='text-4xl font-semibold'>{title}</h3>
                <p className='text-md text-gray-500 leading-tight'>{description}</p>
            </div>
        </div>
    );
}

export default Services