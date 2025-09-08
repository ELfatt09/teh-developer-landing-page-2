import { motion } from "motion/react"
import { useState } from "react"

function NavbarLinkButton({ href }) {
  const [isHover, setIsHover] = useState(false)
  return (
    <motion.div onHoverStart={() => setIsHover(true)} onHoverEnd={() => setIsHover(false)}>
      <a href={href} className={`px-4 py-2 rounded-md  `}>
        Link
      </a>
      <motion.div layoutId="underline" className={`bg-black h-1 ${isHover ? 'w-full' : 'w-0'}`} />
    </motion.div>
  )
}

export default NavbarLinkButton