import { motion } from "motion/react"
import { useState } from "react"
import { Link } from "react-router-dom"

function NavbarLinkButton({ href, children }) {
  const [isHover, setIsHover] = useState(false)
  return (
    <motion.div onHoverStart={() => setIsHover(true)} onHoverEnd={() => setIsHover(false)} className="flex flex-col items-center space-y-1 cursor-pointer">
      <Link to={href} className={` px-1 rounded-md  font-medium text-lg font-jakarta `}>
        {children}
      </Link>
      <motion.div
        animate={{ width: isHover ? "100%" : "0%" }} transition={{ duration: 0.3, ease: "easeInOut" }} layoutId="underline" className={`bg-primary h-1 rounded-full`} />
    </motion.div>
  )
}

export default NavbarLinkButton