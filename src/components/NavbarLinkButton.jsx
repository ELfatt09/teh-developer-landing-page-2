import { motion } from "motion/react"
import { useState } from "react"
import { Link } from "react-router-dom"

function NavbarLinkButton({ href, children }) {
  const [isHover, setIsHover] = useState(false)
  return (
    <motion.div onHoverStart={() => setIsHover(true)} onHoverEnd={() => setIsHover(false)} className="group flex flex-col items-center space-y-1 cursor-pointer">
      <Link to={href} className={` px-1 rounded-md overflow-hidden whitespace-nowrap h-7 font-medium text-lg font-jakarta  flex flex-col items-center justify-start`}>
        <motion.div animate={{ height: isHover ? "0%" : "100%" }} className="overflow-hidden whitespace-nowrap flex items-end justify-end">
          {children}
        </motion.div>
        <motion.div animate={{ height: isHover ? "100%" : "0%" }} className="font-bold text-primary bg-transparent">
          {children}
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default NavbarLinkButton