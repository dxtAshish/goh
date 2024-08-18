import React from 'react'
import {Link} from "react-router-dom"
const Banner = () => {
  return (
    <section className="h-screen w-screen">
      <div className="relative flex h-[100%] w-screen lg:h-screen">
        <div data-aos="fade-right" data-aos-duration="200" className=" z-40 flex h-full w-[45%] items-center bg-white">
          <div className="absolute flex h-[35%] w-72 flex-col justify-evenly px-4 md:w-[80%] lg:static lg:mx-auto">
            <div data-aos="fade-right" data-aos-duration="600" className="font-serif text-5xl text-gray-600 sm:text-5xl md:text-5xl lg:my-5 lg:w-96 lg:text-4xl">The History Of Jewellery</div>
            <div data-aos="fade-left" data-aos-duration="700" className="my-6 mb-3 font-mono text-lg text-gray-500 sm:text-xl md:text-xl lg:my-0">From The Ancient Times To Modern Day</div>
            <div data-aos="fade-left" data-aos-duration="800" className="">
              <Link to={"/category"}><button className="mt-2 bg-black px-4 py-2 text-3xl text-white sm:px-12 lg:px-12 lg:py-4 lg:text-xl hover:bg-slate-800 ">Shop Now &rarr;</button></Link>
            </div>
          </div>
        </div>
        <div className="flex h-full w-[55%]">
          <div data-aos="fade-left" data-aos-duration="1500" className="h-full w-full bg-[url('https://wpbingosite.com/wordpress/eldy/wp-content/uploads/2023/05/slider-15.jpg')] bg-center md:w-1/2 md:bg-center"></div>
          <div data-aos="fade-left" data-aos-duration="1000" className="hidden h-full w-full bg-[url('https://wpbingosite.com/wordpress/eldy/wp-content/uploads/2023/05/slider-14.jpg')] bg-cover md:block md:w-1/2 md:bg-center"></div>
        </div>
      </div>
    </section>

  )
}

export default Banner