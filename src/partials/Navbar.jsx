import bannerLogo from '../assets/banner-logo.svg'
import NavbarLinkButton from '../components/NavbarLinkButton'

function Navbar() {
  return (
    <nav className='flex items-center justify-between shadow-lg py-3 px-5'>
      <img src={bannerLogo} alt="The Developer's Hangout Logo" className="h-12" />
      <div className="space-x-4 flex flex-row">
        <NavbarLinkButton href="#home" />
      </div>
    </nav>
  )
}

export default Navbar