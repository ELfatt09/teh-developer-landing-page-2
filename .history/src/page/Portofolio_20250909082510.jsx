import React, {useState} from "react";
import { motion } from "motion/react"
import { LuSparkles } from "react-icons/lu";


import { team } from "../data/team";

export default function Portofolio({id}) {
    const [selected, setSelected] = useState(team[0]);

    return (
        <section className="w-full">
            {/* Upper */}
            <div className="flex justify-between px-12 pt-4">
                <div className="">
                    <h1>It's Me</h1>
                </div>

                <div className="flex gap-4">
                    <div className="border-t">
                        <div className="font-bold text-xl">
                            <h1>About Me</h1>
                        </div>
                        <div className="w-full max-w-[10rem] text-gray-500">
                            <p>{selected.about}</p>
                        </div>
                    </div>

                    <div className="border-t">
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
                <div className="grid grid-cols-3 w-full">
                    {/* Left */}
                        <div className="w-2/3 px-12">
                            <div className="space-y-4">
                                <div className="text-4xl">
                                    <h1>Hello! <span className="font-bold">I'm {selected.name}</span></h1>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="inline-block h-[.5px] w-16 bg-black"></span>
                                    <h1 className="flex items-center gap-4">{selected.role} <LuSparkles /></h1>
                                </div>

                                <div>
                                    <p>{selected.quotes}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="bg-black px-4 py-2 text-white w-fit rounded-full border border-black hover:bg-transparent hover:text-black transition">
                                        <a href="">Let's Talk</a>
                                    </div>

                                    <div>
                                        <a href="">Download CV</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/* Right */}
                        <div className="w-1/3 flex justify-center items-center">
                            <div>
                                <img src={selected.photo} alt="" className="w-[31vw] h-auto" />
                            </div>

                            <div className="flex flex-col gap-2">
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

            <div className="inline-block bg-black w-full h-24">

            </div>

        </section>
    );
};