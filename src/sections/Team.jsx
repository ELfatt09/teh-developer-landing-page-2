import detail from "../assets/svg/detail.svg"
import sevalino from "../assets/foto-kasual/sevalino.png" 
import { Link } from 'react-router-dom'

function Team() {
  return (
    <section className='w-full px-30 py-25 justify-start items-center font-jakarta space-y-25'>
      <h2 className='text-5xl'>
        Tim Kecil Yang Penuh Dedikasi, Menciptakan Solusi Digital Dengan <span className='font-bold italic text-primary'>
          Kualitas Tinggi & Sentuhan Hangat
        </span>
      </h2>
      <div className='flex flex-wrap gap-7'>
        <TeamCard name={"Sevalino Elfata"} role={"Founder & Project Manager"} photo={sevalino} slug={'sevalino-elfata'} />
        <TeamCard name={"Sevalino Elfata"} role={"Founder & Project Manager"} photo={sevalino} slug={'sevalino-elfata'} />
        <TeamCard name={"Sevalino Elfata"} role={"Founder & Project Manager"} photo={sevalino} slug={'sevalino-elfata'} />
        <TeamCard name={"Sevalino Elfata"} role={"Founder & Project Manager"} photo={sevalino} slug={'sevalino-elfata'} />
      </div>
    </section>
  )
}

function TeamCard({ name, role, photo, slug }) {
  return (
    <div className='bg-cover bg-no-repeat bg-center w-full max-w-xs h-[420px] rounded-xl overflow-hidden' style={{ backgroundImage: `url(${photo})` }}>
      <div class="w-full h-full flex flex-col justify-between items-start p-7 text-white bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.1)_15%,rgba(0,0,0,0.1)_60%,rgba(0,0,0,0.5)_100%)]">
        <div className='w-full flex justify-end items-center'>
          <Link to={`/portofolio/${slug}`} className='bg-white rounded-md p-2'>
            <img src={detail} alt="" className="w-3 h-auto" />
          </Link>
        </div>
        <div className='flex flex-row space-x-5 w-full'>
        <h3 className='text-2xl font-bold w-2/3'>{name}</h3>
        <p className='text-xs w-1/3'>{role}</p>
        </div>

      </div>
    </div>
  )
}

export default Team