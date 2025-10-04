import bannerLogo from '../assets/banner-logo.svg'
import Logo from '../assets/Logo.svg'
import NavbarLinkButton from '../components/NavbarLinkButton'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

function Navbar() {

  const [open, setOpen] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 20);
  });
});
  return (
    <>
    <motion.nav
      layout
      animate={{ width: scroll ? "80%" : "100%", borderRadius: scroll ? "1rem" : "none", transition: { duration: 0.5, ease: "easeInOut" } }}
      className={`fixed ${scroll ? "bg-white/80 top-5 " : "bg-white top-0"} backdrop-blur-lg items-center justify-between shadow-lg py-3 px-20 mx-auto z-50 hidden lg:flex`}>
      <img src={bannerLogo} alt="The Developer's Hangout Logo" className="h-12" />
      <div className="space-x-8 flex flex-row w-full justify-end">
        <NavbarLinkButton href="#home" >Beranda</NavbarLinkButton>
        <NavbarLinkButton href="#features" >Tentang Kami</NavbarLinkButton>
        <NavbarLinkButton href="#pricing" >Layanan</NavbarLinkButton>
        <NavbarLinkButton href="#keunggulan" >Keunggulan</NavbarLinkButton>
        <NavbarLinkButton href="#contact" >Kontak</NavbarLinkButton>
      </div>
      </motion.nav>
      <motion.nav
      className={`flex flex-col lg:hidden fixed bg-white/80 z-50 backdrop-blur-lg w-screen  shadow-lg top-0`}>
        <div className='justify-between items-center px-5 py-3 flex flex-row w-full'>
          <img src={Logo} alt="The Developer's Hangout Logo" className="h-8 md:hidden " />
          <img src={bannerLogo} alt="The Developer's Hangout Logo" className="h-12 hidden md:block " />
        <button onClick={() => setOpen(!open)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
        </div>
        <motion.div initial={{ height: 0 }} animate={{ height: open ? "auto" : 0 }} className='overflow-hidden flex flex-col'>
          <MobileNavLinkButton href="#home" >Beranda</MobileNavLinkButton>
          <MobileNavLinkButton href="#features" >Tentang Kami</MobileNavLinkButton>
          <MobileNavLinkButton href="#pricing" >Layanan</MobileNavLinkButton>
          <MobileNavLinkButton href="#keunggulan" >Keunggulan</MobileNavLinkButton>
          <MobileNavLinkButton href="#contact" >Kontak</MobileNavLinkButton>
        </motion.div>

      </motion.nav>
    </>
  )
}


function MobileNavLinkButton({ href, children }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <motion.div
      onClick={() => {
        setIsClicked(true)
        setTimeout(() => setIsClicked(false), 1000)
      }}
      className={`py-2 w-full transition-colors duration-300 ${isClicked ? "bg-gray-400/20" : "hover:bg-gray-400/0 "}`}>
      <NavbarLinkButton href={href}>{children}</NavbarLinkButton>
    </motion.div>
  )
};

export default Navbar