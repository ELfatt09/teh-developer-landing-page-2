import React, {useState} from "react";
import { AnimatePresence, motion } from "motion/react"

import { PiSparkleFill } from "react-icons/pi";
import { LuSparkle } from "react-icons/lu";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

import { team } from "../data/team";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}


export default function ProfilePortofolio() {
     const [selected, setSelected] = useState(team[0]);
         const hoverAnim = {
        rest: { x: 0 },
        hover: { x: 8, transition: { duration: 0.3, ease: "easeOut" } },
      };
    
      const arrowAnim = {
        rest: { opacity: 0, x: -15 },
        hover: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
      };

      const combined = {
  ...fadeInUp,
  ...hoverAnim,
};

    return(
         <motion.section
      className="w-full font-jakarta"
      initial="hidden"
      animate="visible"
    >
      {/* Upper */}
      <div className="flex justify-between px-16 pt-4">
        <motion.div
          className="text-2xl h-fit font-medium border-b mb-1"
          variants={fadeInUp}
        >
          <motion.h1 variants={fadeInUp}>It's Me</motion.h1>
        </motion.div>

        <div className="flex gap-8" variants={fadeInUp}>
      {/* About Me */}
      <motion.div
        variants={fadeInUp}
        custom={3}
      >
         <motion.a
        href="#portfolio"
        className="cursor-pointer"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div className="flex items-center gap-2">
          <motion.span variants={arrowAnim}>
            <FiArrowRight className="text-black" />
          </motion.span>
          <motion.h1
            className="font-bold text-xl"
            variants={combined}
          >
            About Me
          </motion.h1>
        </div>
        <p className="w-full ml-6 max-w-[10rem] text-gray-500">{selected.about}</p>
      </motion.a>
      </motion.div>

      {/* Contact Me */}
      <motion.div
        variants={fadeInUp}
        custom={5}
      >
        <motion.a
        href={`mailto:${selected.mail}`}
        className="cursor-pointer"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={fadeInUp}
      >
        <div className="flex items-center gap-2">
          <motion.span variants={arrowAnim}>
            <FiArrowRight className="text-black" />
          </motion.span>
          <motion.h1
            className="font-bold text-xl"
            variants={hoverAnim}
          >
            Contact Me
          </motion.h1>
        </div>
        <h2 className="w-full ml-6 max-w-[10rem] text-gray-500">{selected.mail}</h2>
      </motion.a>
      </motion.div>
    </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-3 w-full h-[78vh] overflow-hidden">
        {/* Left */}
        <motion.div
          className="col-span-2 px-16 h-[75%]"
          variants={fadeInUp}
          custom={6}
        >
          <div className="flex flex-col justify-between h-full">
            <motion.div className="space-y-4" variants={fadeInUp} custom={7}>
              <motion.h1
                className="text-6xl font-light"
                variants={fadeInUp}
                custom={8}
              >
                Hello! <span className="font-bold">I'm {selected.name}</span>
              </motion.h1>

              <motion.div
                className="flex items-center gap-4"
                variants={fadeInUp}
                custom={9}
              >
                <span className="inline-block h-[.5px] w-36 bg-black"></span>
                <h1 className="flex items-center gap-4 text-[1.4rem] font-normal">
                  {selected.role} <PiSparkleFill />
                </h1>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-2xl w-full max-w-2/3"
              variants={fadeInUp}
              custom={10}
            >
              {selected.quotes}
            </motion.p>

            <motion.div className="text-xl" variants={fadeInUp} custom={11}>
              <h1 className="flex items-center gap-4">
                <IoMdCheckmark /> Kode yang bersih dan efisien
              </h1>
              <h1 className="flex items-center gap-4">
                <IoMdCheckmark /> Kode yang bersih dan efisien
              </h1>
              <h1 className="flex items-center gap-4">
                <IoMdCheckmark /> Kode yang bersih dan efisien
              </h1>
            </motion.div>

            <motion.div
              className="flex items-center text-xl w-full max-w-[40%] justify-between"
              variants={fadeInUp}
              custom={12}
            >
              <motion.a
                href=""
                className="bg-black px-4 py-2 text-white w-fit rounded-full border border-black hover:bg-transparent hover:text-black transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>

              <motion.a
                download="cv-ibnu.pdf"
                href={selected.cv}
                className="flex gap-2 items-center border-b-2 pb-2"
                whileHover={{ x: 5 }}
              >
                Download CV <FaArrowDownLong className="pt-1" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="col-span-1 flex justify-start -ml-28 items-center h-[80%]"
          variants={fadeInUp}
          custom={13}
        >
          <div className="relative mb-[40rem] w-[31vw] h-auto">
            <AnimatePresence mode="popLayout">
                <motion.img
                key={selected.id} // penting biar setiap foto dianggap elemen baru
                src={selected.photo}
                alt={selected.name}
                className="absolute top-0 left-0 w-full h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            </AnimatePresence>
        </div>

          <div className="flex absolute right-16 top-[20%] flex-col gap-2">
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
                variants={fadeInUp}
                custom={14 + i}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom black bar */}
      <motion.div
        className="bg-black font-semibold uppercase text-2xl flex justify-between px-20 items-center h-20"
        variants={fadeInUp}
        custom={10}
      >
        <h1 className="flex text-white items-center gap-2">
          <LuSparkle className="text-white" /> Fullstack Developer
        </h1>
        <h1 className="flex text-white items-center gap-2">
          <LuSparkle className="text-white" /> UI / UX Designer
        </h1>
        <h1 className="flex text-white items-center gap-2">
          <LuSparkle className="text-white" /> front-end dev
        </h1>
        <h1 className="flex text-white items-center gap-2">
          <LuSparkle className="text-white" /> back-end dev
        </h1>
      </motion.div>
            </motion.section>
    )
}