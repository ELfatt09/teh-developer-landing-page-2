import React from 'react'
import { motion } from 'motion/react'
import { FiArrowRight } from 'react-icons/fi'

function Project({picture, name, type, description, tag, link}) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-start items-center">
                        <motion.div 
                    className="bg-[#363231] rounded-lg p-4 w-full flex flex-col md:flex-row gap-6">
                        {/* Gambar */}
                            <img 
                                src={picture} 
                                alt=""
                                className="rounded-lg h-full w-auto max-h-[300px] object-cover"
                            />

                        {/* Desc */}
                        <div className="space-y-4">
                           {/* Label (tags) */}
                                <div className="flex h-fit gap-2 flex-wrap">
                                {tag?.map((t, i) => (
                                    <div
                                    key={i}
                                    className="text-white text-xs md:text-base bg-primary px-4 py-2 rounded-full"
                                    >
                                    <h1>{t}</h1>
                                    </div>
                                ))}
                                </div>

                            {/* Title */}
                            <div className="text-white text-2xl md:text-4xl font-semibold px-2">
                                <h1>{name}</h1>
                                <h2 className='text-xl md:text-3xl text-gray-300'>{type}</h2>
                            </div>

                            <div className="text-xs text-white w-full max-w-md md:text-sm px-2 text-justidy">
                                <p>{description}</p>
                            </div>

                            <div className="text-white border border-white w-fit py-2 rounded-full px-1">
                                <motion.a
                                    href={link}
                                    className="relative flex items-center justify-center bg-[#363231] text-white px-6 py-3 rounded-full cursor-pointer w-40"
                                    initial="rest"
                                    whileHover="hover"
                          
                                    animate="rest"
                                    >
                                    {/* Text */}
                                    <motion.span
                                        variants={{
                                            rest: {
                                            clipPath: "inset(0 100% 0 0)", // ketutup full dari kanan
                                            },
                                            hover: {
                                            clipPath: "inset(0 0% 0 0)", // kebuka full
                                            transition: { duration: 0.4, ease: "ease" },
                                            },
                                        }}
                                        className="absolute w-fit bg-primary px-2 py-1 left-0 rounded-full overflow-hidden"
                                        >
                                        Lihat Detail
                                        </motion.span>

                                    {/* Arrow */}
                                    <motion.span
                                        variants={{
                                        rest: { x: -20 },
                                        hover: { x: 100, transition: { duration: 0.4 } }, // geser full ke kanan
                                        }}
                                        className="absolute bg-white rounded-full text-black left-6"
                                    >
                                        <FiArrowRight size={30} />
                                    </motion.span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                    </div>
  )
}

export default Project