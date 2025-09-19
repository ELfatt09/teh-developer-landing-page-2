import React from 'react'
import arrow from '../assets/svg/arrow.svg'

function Projects() {
  return (
    <section className='w-full px-30 py-25 justify-start items-center font-jakarta space-y-25'>
          <h2 className='text-6xl tracking-[-3%]'>Project Terakhir <span className='font-bold italic text-secondary'>
               Tim Teh Developer
          </span>
          </h2>
          <div className='flex flex-col'>
              <Project order={'1st'} tags={['Lorem Ipsum', 'Dolor Sit', 'Amet']} title={'lorem ipsum'} image={'https://placehold.co/300x500'} slug={'lorem-ipsum'} link={'https://lorem-ipsum.com'} description={'lorem ipsum dolor sit amet'} directionIsRight={true} />
          </div>
      </section>
  )
}

function Project({ order, tags, title, image, slug, link, description, directionIsRight }) { 
    return (
        <div className={`flex ${directionIsRight ? 'flex-row' : 'flex-row-reverse'} space-x-7 w-full}`}>
            <div className={`w-fit flex flex-col space-y-3 ${directionIsRight ? 'items-end' : 'items-start'}`}>
                <div className="flex flex-col space-y-0 w-full">
                    <p className='text-3xl italic font-light'>{order}</p>
                    <p className='text-6xl italic font-medium text-secondary'>Project</p>
                </div>
                <img src={arrow} alt="" className={`h-20 w-auto mx-4 ${directionIsRight ? '' : 'scale-x-[-1]'} '' `} />
            </div>
            <div className={`bg-stone-800 w-full h-fit p-4 rounded-4xl flex ${directionIsRight ? 'flex-row' : 'flex-row-reverse'} justify-start items-center space-x-14`}>
                <img src={image} alt="" className="object-cover w-full h-full max-w-[310px] max-h-[440px] overflow-hidden rounded-3xl" />
                <div className={`flex flex-col space-y-3`}>
                    <div className='flex flex-row space-x-2'>
                        {tags.map((tag, index) => (
                            <p key={index} className=" bg-primary text-white px-4 py-3 text-xl rounded-full font-normal">{tag}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
            )
            
}

export default Projects