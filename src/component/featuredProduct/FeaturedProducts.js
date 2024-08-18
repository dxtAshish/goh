import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import FeatureProductItem from "./FeatureProductItem"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const FeaturedProducts = ({
  products_array,
  new_products_arrival,
  categoriesall_array

}) => {


  const [productsType, setProductsType] = useState("Featured")
  const [productsTypeChanging, setProductsTypeChanging] = useState(false)
  useEffect(() => {
    if (productsTypeChanging) {
      setTimeout(() => {
        setProductsTypeChanging(false)
      }, 3000)
    }
  }, [productsTypeChanging])

  const changeProductsType = (type) => {
    setProductsType(type)
    setProductsTypeChanging(true)
  }


  const CustomPrevArrow = ({ onClick }) => (
    <button className=" absolute hidden lg:block left-2 bg-black opacity-30 lg:-left-2 top-[40%]" onClick={onClick}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.0711 31.4143L15.1421 19.4853L27.0711 7.55628"
          stroke="#ffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  // Define your custom right arrow component
  const CustomNextArrow = ({ onClick }) => (
    <button className=" absolute hidden lg:block  bg-black opacity-30 right-4 top-[40%]" onClick={onClick}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9289 31.4143L24.8579 19.4853L12.9289 7.55628"
          stroke="#ffff"
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    ltr: true,
    prevArrow: <CustomPrevArrow />, // Replace with your custom left arrow component
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        centerMode: true,
        rtl: true,
        settings: {
          slidesToShow: 1,
          centerPadding: '25',
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section id="product1" className=" lg:py-20 py-5 bg-[ #F9F9F9] ">
      {/* {/* <h2 data-aos="fade-right" data-aos-duration="500" style={{ fontSize: "46px", "lineBreak": "54px" }}>Featured Products</h2> */}
      {/* <p data-aos="fade-right" data-aos-duration="500">Summer Collection New Morden Design</p> */}
      <div className=' border-b-[0.2px] my-5  border-gray-400  w-11/12 mx-auto'>
        {/* <div className=' lg:w-1/4 w-11/12  flex justify-between mx-auto items-center '>
          <div onClick={() => { changeProductsType("Featured") }} className={`py-2 hover:border-b-2 ${productsType == "Featured" && "border-b-2"} border-black font-serif text-lg font-thin italic `}>Featured Product</div>
          <div onClick={() => { changeProductsType("NewArrival") }} className={`py-2 hover:border-b-2 ${productsType == "NewArrival" && "border-b-2"} border-black font-serif text-lg font-thin italic  `}>New Arrival</div>
        </div> */}
        <div className='text-3xl font-bold text-black'>SHOP BY CATEGORY</div>
      </div>
      <div className='flex  lg:flex-row flex-col w-screen lg:w-screen lg:justify-between lg:items-center'  >
        {/* <div className=" py-16 lg:py-0 h-fit z-40 lg:flex w-fit mx-auto lg:h-full lg:w-[25%]  items-center bg-white">
          <div className=" flex h-[35%] lg:w-72 flex-col justify-evenly px-4 lg:static  lg:mx-auto">
            <div className=" text-center lg:text-left w-72 lg:w-full font-serif text-4xl text-gray-600 sm:text-xl  lg:my-5 lg:text-4xl">Best Collection 2023</div>
            <div className=" text-center lg:text-left w-72 lg:w-full my-6 mb-3 font-mono text-lg text-gray-500 sm:text-xl md:text-xl lg:my-0">From The Ancient Times To Modern Day</div>
            <div className="text-center lg:text-left">
              <div to={"/category"}><button className="mt-2 bg-black px-8 py-2.5 text-xl text-white sm:px-12 lg:px-12 lg:py-4 lg:text-xl hover:bg-slate-800 ">Shop Now &rarr;</button></div>
            </div>
          </div>
        </div> */}

        {/* <Slider {...settings} className="pro-inner-container lg:w-[85%] lg:mx-auto lg:px-5 px-2  ">
            { productsType == "Featured"&& products_array ? products_array.map((product) => {
              return <FeatureProductItem productsTypeChanging = {productsTypeChanging} key={product._id} productData={product} />
            }):new_products_arrival && new_products_arrival.map((product) => {
              return <FeatureProductItem productsTypeChanging = {productsTypeChanging} key={product._id} productData={product} />
            })}
          </Slider>  */}
        <Slider {...settings} className="pro-inner-container lg:w-[85%] lg:mx-auto lg:px-5 px-2  ">
          {categoriesall_array && categoriesall_array.map((value, index) => {
            return <Link key={index} className={`pro `} to={`/products/${value.title}`} style={{ "textDecoration": "none" }}>
              <div className={` h-[200px] lg:h-[400px] `}>
                <img className='h-[100%] object-cover ' src={value.image} alt={value._id} title={value.title} />
              </div>
              <div className="des">
                {/* <span>adidas</span> */}
                <div className='text-2xl text-black font-bold uppercase text-center'>{value.title}</div>
              </div>


            </Link>
          })
          }
        </Slider>



      </div>
      {/* <div data-aos="fade-left" data-aos-duration="500" >
        <Slider {...settings} className="pro-inner-container lg:px-10 px-2  ">
          {products_array && products_array.map((product) => {
            return <FeatureProductItem key={product._id} productData={product} />
          })} </Slider>
      </div> */}




    </section>

  )
}
const mapStateToProps = (state) => {
  const {
    products_array,
    categories_array,
    new_products_arrival,
    categoriesall_array
  } = state.variables
  return {
    products_array,
    categories_array,
    new_products_arrival,
    categoriesall_array
  }
}
export default connect(mapStateToProps)(FeaturedProducts)