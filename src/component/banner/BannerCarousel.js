import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const BannerCarouselItem = ({ image, key, title }) => {
  return (
    <Link to={`/products/${title}`} className="bg-cover bg-center lg:py-10 w-screen   ">
      <img src={image} className="w-full h-full object-cover" alt={"banner" + key} title={title} />
    </Link>

  )
}


const BannerCarousel = ({ banners }) => {

  const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-arrow custom-prev-arrow" onClick={onClick}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.0711 31.4143L15.1421 19.4853L27.0711 7.55628"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  // Define your custom right arrow component
  const CustomNextArrow = ({ onClick }) => (
    <button className="custom-arrow custom-next-arrow" onClick={onClick}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9289 31.4143L24.8579 19.4853L12.9289 7.55628"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // prevArrow: <CustomPrevArrow />, // Replace with your custom left arrow component
    // nextArrow: <CustomNextArrow />
  };


  return (
    <div >
      <Slider {...settings}>
        {/* {banners&&banners.map((value,index)=>{
                console.log(banners,40)
                return <BannerCarouselItem key={index} image={value.banner_image} title={value.title} />
            })} */}
        <Link to={"/products/Necklace"}><img style={{width:"100%"}} src="https://res.cloudinary.com/do99yykzs/image/upload/v1702663188/vllfltwnmgsshnnpda4a.webp" alt="" /></Link>
        <Link to={"/products/EarRing"}><img style={{width:"100%"}} src="https://res.cloudinary.com/do99yykzs/image/upload/v1702662810/j5rgmixorl49wij5xtvs.webp" alt="" /></Link>
        <Link to={"/products/ring"}><img style={{width:"100%"}} src="https://res.cloudinary.com/do99yykzs/image/upload/v1702665015/vzyvmq2hnxzxitczwyeb.webp" alt="" /></Link>

        {/* <BannerCarouselItem /> */}
        {/* <BannerCarouselItem /> */}
        {/* <BannerCarouselItem /> */}
      </Slider>
    </div>
  )
}

export default BannerCarousel