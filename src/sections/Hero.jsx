import React from 'react'

function Hero() {
  return (
    <div className="h-[100rem] bg-gradient-to-r from-[#ffbc00] to-[#ff7506] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <p className="mt-4 text-2xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          sagittis lacus vel augue laoreet, sed dictum sapien mattis. Aenean
          lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </div>
    </div>
  )
}

export default Hero