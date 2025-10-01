import { useRef, useState } from "react"
import detail from "../assets/svg/detail.svg"
import sevalino from "../assets/foto-kasual/sevalino.png" 
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"


function Team() {
  const scrollRef = useRef(null)
  const [isGrabbing, setIsGrabbing] = useState(false)

  const onMouseDown = (e) => {
    setIsGrabbing(true)
    scrollRef.current.startX = e.pageX - scrollRef.current.offsetLeft
    scrollRef.current.scrollLeftStart = scrollRef.current.scrollLeft
  }

  const onMouseLeave = () => setIsGrabbing(false)
  const onMouseUp = () => setIsGrabbing(false)

  const onMouseMove = (e) => {
    if (!isGrabbing) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - scrollRef.current.startX) * 1.2 // kecepatan drag
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeftStart - walk
  }

  return (
    <section className='w-full px-30 py-25 justify-start items-center font-jakarta space-y-25'>
      <h2 className='text-5xl'>
        Tim Kecil Yang Penuh Dedikasi, Menciptakan Solusi Digital Dengan{" "}
        <span className='font-bold italic text-primary'>
          Kualitas Tinggi & Sentuhan Hangat
        </span>
      </h2>

<div className="relative">
        {/* Tombol kiri */}
        <button className="btn-prev absolute top-1/2 -left-6 z-20 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow hover:bg-primary/80 transition">
          <FaChevronLeft size={18}/>
        </button>

        {/* Tombol kanan */}
        <button className="btn-next absolute top-1/2 -right-6 z-20 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow hover:bg-primary/80 transition">
          <FaChevronRight size={18}/>
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          aria-haspopup={true}
          navigation={{
            prevEl: ".btn-prev",
            nextEl: ".btn-next"
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
          className="!px-5"
        >
            <SwiperSlide>
              <TeamCard 
                name={"Sevalino Elfata"} 
                role={"Founder & Project Manager"} 
                photo={sevalino} 
                slug={'sevalino-elfata'} 
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard 
                name={"Sevalino Elfata"} 
                role={"Founder & Project Manager"} 
                photo={sevalino} 
                slug={'sevalino-elfata'} 
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard 
                name={"Sevalino Elfata"} 
                role={"Founder & Project Manager"} 
                photo={sevalino} 
                slug={'sevalino-elfata'} 
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard 
                name={"Sevalino Elfata"} 
                role={"Founder & Project Manager"} 
                photo={sevalino} 
                slug={'sevalino-elfata'} 
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard 
                name={"Sevalino Elfata"} 
                role={"Founder & Project Manager"} 
                photo={sevalino} 
                slug={'sevalino-elfata'} 
              />
            </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

function TeamCard({ name, role, photo, slug }) {
  return (
    <div
      className='bg-cover bg-no-repeat bg-center w-full max-w-xs h-[420px] rounded-xl overflow-hidden'
      style={{ backgroundImage: `url(${photo})` }}
    >
      <div className="w-full h-full flex flex-col justify-between items-start p-7 text-white bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.1)_15%,rgba(0,0,0,0.1)_60%,rgba(0,0,0,0.5)_100%)]">
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
