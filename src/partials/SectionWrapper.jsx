import React from 'react'

function SectionWrapper({children, id}) {
  return (
        <section id={id} className='w-full px-5 md:px-10 py-10 lg:px-20 md:py-25 flex flex-col font-jakarta space-y-15 lg:space-x-15'>
            {children}
      </section>
  )
}

export default SectionWrapper