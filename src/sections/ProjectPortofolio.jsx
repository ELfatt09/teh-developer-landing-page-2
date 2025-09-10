import { team } from "../data/team";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default function ProjectPortofolio() {
    const [selected, setSelected] = useState(team[0]);

    return (
         <section className="w-full h-fit pt-12 font-jakarta">
                {/* Upper */}
                <div className="flex items-center px-20 justify-between">
                    <div className="text-4xl">
                        <h1>Project <span className="text-primary italic font-semibold">Terakhir Kami</span></h1>
                    </div>

                    <div className="flex gap-2">
                                {team.map((person, i) => (
                                  <motion.img
                                    key={person.id}
                                    src={person.menuPhoto}
                                    alt={person.name}
                                    onClick={() => setSelected(person)}
                                    className={`w-12 h-12 object-cover rounded-sm cursor-pointer border-2 ${
                                      selected.id === person.id ? "border-primary" : "border-black"
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                  />
                                ))}
                            </div>
                </div>

                {/* Content */}
                <div className="w-full h-fit flex flex-col space-y-8 py-12 px-12">
                    {/* Upper Project */}
                    <div className="w-full flex justify-start items-center">
                        <motion.div 
                    className="bg-[#363231] rounded-lg p-4 w-[70%] flex gap-6">
                        {/* Gambar */}
                        <div className="w-fit">
                            <img 
                                src={selected.project[0].picture} 
                                alt=""
                                className="rounded-lg w-70 object-cover"
                            />
                        </div>

                        {/* Desc */}
                        <div className="space-y-4">
                           {/* Label (tags) */}
                                <div className="flex h-fit gap-2 flex-wrap">
                                {selected.project[0].tag?.map((t, i) => (
                                    <div
                                    key={i}
                                    className="text-white bg-primary px-4 py-2 rounded-full"
                                    >
                                    <h1>{t}</h1>
                                    </div>
                                ))}
                                </div>

                            {/* Title */}
                            <div className="text-white text-2xl font-semibold px-2">
                                <h1>{selected.project[0].name}</h1>
                                <h1>{selected.project[0].type}</h1>
                            </div>

                            <div className="text-white w-full max-w-md text-sm px-2 text-justidy">
                                <p>{selected.project[0].description}</p>
                            </div>

                            <div className="text-white border border-white w-fit py-2 rounded-full px-1">
                                <motion.a
                                    href="#"
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

                    {/* Down Project */}
                    <div className="w-full flex justify-end">
                        <motion.div 
                    className="bg-[#363231] rounded-lg p-4 w-[70%] flex justify-end gap-6">
                        {/* Desc */}
                        <div className="space-y-4 flex flex-col items-end">
                           {/* Label (tags) */}
                                <div className="flex h-fit gap-2 flex-wrap">
                                {selected.project[1].tag?.map((t, i) => (
                                    <div
                                    key={i}
                                    className="text-white bg-primary px-4 py-2 rounded-full"
                                    >
                                    <h1>{t}</h1>
                                    </div>
                                ))}
                                </div>

                            {/* Title */}
                            <div className="text-white flex flex-col items-end text-2xl font-semibold px-2">
                                <h1>{selected.project[1].name}</h1>
                                <h1>{selected.project[1].type}</h1>
                            </div>

                            <div className="text-white w-full max-w-md text-sm px-2 text-right">
                                <p>{selected.project[1].description}</p>
                            </div>

                            <div className="text-white border border-white w-fit py-2 rounded-full px-1">
                                <motion.a
                                    href="#"
                                    className="relative flex items-center justify-center bg-[#363231] text-white px-6 py-3 rounded-full cursor-pointer w-40"
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    >
                                    {/* Text */}
                                    <motion.span
                                        variants={{
                                            rest: {
                                            clipPath: "inset(0 0% 0 100%)", // ketutup full dari kanan
                                            },
                                            hover: {
                                            clipPath: "inset(0 0% 0 0)", // kebuka full
                                            transition: { duration: 0.4, ease: "ease" },
                                            },
                                        }}
                                        className="absolute w-fit bg-primary px-2 py-1 right-0 rounded-full overflow-hidden"
                                        >
                                        Lihat Detail
                                        </motion.span>

                                    {/* Arrow */}
                                    <motion.span
                                        variants={{
                                        rest: { x: 100 },
                                        hover: { x: -20, transition: { duration: 0.4 } }, // geser full ke kanan
                                        }}
                                        className="absolute bg-white rounded-full text-black left-6"
                                    >
                                        <FiArrowLeft size={30} />
                                    </motion.span>
                                </motion.a>
                            </div>
                        </div>

                        {/* Gambar */}
                        <div className="w-fit">
                            <img 
                                src={selected.project[1].picture} 
                                alt=""
                                className="rounded-lg w-70 object-cover"
                            />
                        </div>
                    </motion.div>
                    </div>
                </div>
            </section>
    )
}