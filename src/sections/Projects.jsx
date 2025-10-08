import React from 'react'
import arrow from '../assets/svg/arrow.svg'
import Project from '../components/project'
import SectionWrapper from '../partials/SectionWrapper'
import { projectsData } from '../data/projects'

function Projects() {
  return (
    <SectionWrapper>
          <h2 className='text-3xl md:text-5xl lg:text-6xl tracking-[-3%]'>Project Terakhir <span className='font-bold italic text-primary'>
               Tim Teh Developer
          </span>
          </h2>
          <div className='flex flex-col space-y-9'>
              {projectsData.map((project, index) => (
                  <ProjectCard 
                      key={index}
                        order={index + 1 + (index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th')
}                      tags={project.tags}
                      title={project.title}
                      image={project.image}
                      link={project.link}
                      slug={project.slug}
                        type={project.type}
                      description={project.description}
                        directionIsRight={index % 2 === 0}
                  />
                        ))}
              
          </div>
      </SectionWrapper>
  )
}

function ProjectCard({ order, tags, title, image, slug, link, description, directionIsRight, type }) { 
    return (
        <div className={`flex ${directionIsRight ? 'flex-row' : 'flex-row-reverse'}  md:space-x-7 w-full}`}>
            <div className={`w-fit hidden lg:flex flex-col space-y-3 ${directionIsRight ? 'items-end' : 'items-start'}`}>
                <div className="flex flex-col space-y-0 w-full">
                    <p className='text-3xl italic font-light'>{order}</p>
                    <p className='text-6xl italic font-medium text-primary'>Project</p>
                </div>
                <img src={arrow} alt="" className={`h-20 w-auto mx-4 ${directionIsRight ? '' : 'scale-x-[-1]'} '' `} />
            </div>
            <div className='w-full'>
                <Project picture={image} name={title} type={type} description={description} tag={tags} link={link} />

            </div>
        </div>
    );      
}

export default Projects