import React, {useState} from "react";
import { motion } from "motion/react"

import { PiSparkleFill } from "react-icons/pi";
import { LuSparkle } from "react-icons/lu";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";



import { team } from "../data/team";

export default function Portofolio({id}) {
    const [selected, setSelected] = useState(team[0]);

    return (
        <>
            <section className="w-full font-jakarta">
                {/* Upper */}
                <div className="flex justify-between px-16 pt-4">
                    <div className="text-2xl h-fit font-medium border-b mb-1">
                        <h1>It's Me</h1>
                    </div>

                    <div className="flex gap-4">
                        <div className="border-t-2">
                            <div className="font-bold text-xl">
                                <h1>About Me</h1>
                            </div>
                            <div className="w-full max-w-[10rem] text-gray-500">
                                <p>{selected.about}</p>
                            </div>
                        </div>

                        <div className="border-t-2">
                            <div className="font-bold text-xl">
                                <h1>Contact Me</h1>
                            </div>
                            <div className="w-full max-w-[10rem] text-gray-500">
                                <h2>{selected.mail}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                    <div className="grid grid-cols-3 w-full h-[78vh] overflow-hidden">
                        {/* Left */}
                            <div className="col-span-2 px-16 h-[75%]">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="space-y-4">
                                        <div className="text-6xl">
                                        <h1 className="font-light">Hello! <span className="font-bold">I'm {selected.name}</span></h1>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className="inline-block h-[.5px] w-36 bg-black"></span>
                                        <h1 className="flex items-center gap-4 text-[1.4rem] font-normal">{selected.role} <PiSparkleFill /></h1>
                                    </div>
                                    </div>

                                    <div className="text-2xl w-full max-w-2/3">
                                        <p>{selected.quotes}</p>
                                    </div>

                                    <div className="text-xl">
                                        <div>
                                            <h1 className="flex items-center gap-4"><IoMdCheckmark /> Kode yang bersih dan efisien</h1>
                                        </div>
                                        <div>
                                            <h1 className="flex items-center gap-4"><IoMdCheckmark /> Kode yang bersih dan efisien</h1>
                                        </div>
                                        <div>
                                            <h1 className="flex items-center gap-4"><IoMdCheckmark /> Kode yang bersih dan efisien</h1>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-xl w-full max-w-[40%] justify-between">
                                        <div className="bg-black px-4 py-2 text-white w-fit rounded-full border border-black hover:bg-transparent hover:text-black transition">
                                            <a href="">Let's Talk</a>
                                        </div>

                                        <div className="">
                                            <a download='cv-ibnu.pdf' 
                                                href={selected.cv}
                                                className="flex gap-2 items-center"
                                                >Download CV <FaArrowDownLong className="pt-1" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        {/* Right */}
                            <div className="col-span-1 flex justify-start -ml-28 items-center h-[80%]">
                                <div className="relative">
                                    <img src={selected.photo} alt="" className="w-[31vw] h-auto" />
                                </div>

                                <div className="flex absolute right-16 top-[20%] flex-col gap-2">
                                    {team.map((person) => (
                                        <img
                                        key={person.id}
                                        src={person.menuPhoto}
                                        alt={person.name}
                                        onClick={() => setSelected(person)}
                                        className={`w-12 h-12 object-cover rounded-sm cursor-pointer border-2 ${
                                            selected.id === person.id
                                            ? "border-primary"
                                            : "border-black"
                                        }`}
                                        />
                                    ))}
                                </div>
                            </div>
                    </div>
                {/* Content End */}
                        <div className="bg-black font-semibold uppercase text-2xl flex justify-between px-20 items-center h-20">
                            <div>
                                <h1 className="flex text-white items-center gap-2"><LuSparkle className="text-white" /> Fullstack Developer</h1>
                            </div>
                            <div>
                                <h1 className="flex text-white items-center gap-2"><LuSparkle className="text-white" /> UI / UX Designer</h1>
                            </div>
                            <div>
                                <h1 className="flex text-white items-center gap-2"><LuSparkle className="text-white" /> front-end dev</h1>
                            </div>
                            <div>
                                <h1 className="flex text-white items-center gap-2"><LuSparkle className="text-white" /> back-end dev</h1>
                            </div>
                        </div>
            </section>

            <section className="w-full h-[100vh]">
                {/* Upper */}
                <div>
                    <div>
                        <h1>Project <span className="text-primary">Terakhir Kami</span></h1>
                    </div>
                </div>
            </section>
        </>
    );
};