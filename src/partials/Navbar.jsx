import bannerLogo from '../assets/banner-logo.svg'
import NavbarLinkButton from '../components/NavbarLinkButton'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

function Navbar() {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 10);
  });
});
  return (
    <motion.nav
      layout
      animate={{ width: scroll ? "95%" : "100%", transition: { duration: 0.3, ease: "easeInOut" } }}
      className={`sticky flex ${scroll ? "bg-white/50 top-5 rounded-2xl" : "bg-white top-0 rounded-none"} backdrop-blur-lg items-center justify-between shadow-lg py-3 px-20 mx-auto`}>
      <img src={bannerLogo} alt="The Developer's Hangout Logo" className="h-12" />
      <div className="space-x-8 flex flex-row w-full justify-end">
        <NavbarLinkButton href="#home" >Beranda</NavbarLinkButton>
        <NavbarLinkButton href="#features" >Tentang Kami</NavbarLinkButton>
        <NavbarLinkButton href="#pricing" >Layanan</NavbarLinkButton>
        <NavbarLinkButton href="#keunggulan" >Keunggulan</NavbarLinkButton>
        <NavbarLinkButton href="#contact" >Kontak</NavbarLinkButton>
      </div>
    </motion.nav>
  )
}

export default Navbar