import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { changeVariable } from '../actions/variables';
import { Link } from 'react-router-dom';
const DropDown = ({
    display_dropdown,
    categories_array,

    changeVariable
}) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false
    };
    return (
        // <div className={`  fixed top-14 z-50 hidden ${display_dropdown ? "lg:block" : "lg:hidden"}  `} onMouseLeave={() => { changeVariable("display_dropdown", false) }} >
        //     <Slider {...settings} className={`  w-screen  bg-white top-0 `}>
        //         {categories_array && categories_array.map((value, index) => {
        //             return <Link to={`/products/${value.title}`}  className="w-[400px] cursor-pointer h-[500px] p-5" key={index}>
        //                 <div className=' w-[90%] h-[70%] '>
        //                     <img className="rounded-lg w-full h-full" src={value.image} alt={value.title} />
        //                 </div>
        //                 <div className="p-2 h-[20%]">
        //                     <b className="font-medium">{value.title[0].toUpperCase()+value.title.slice(1)}</b>
        //                     <div className="text-gray-500">Shop Now</div>
        //                 </div>
        //             </Link>
        //         })}

        //     </Slider>
        // </div>
        <div  onMouseLeave={()=>{changeVariable("display_dropdown",false)}} className={` top-20 left-[10%] hidden ${display_dropdown ? "lg:block" : "lg:hidden"} z-50 fixed flex h-2/3 shadow-lg w-5/6 bg-white`}>
            <Slider {...settings} className={` w-full  bg-white top-0 `}>
                {categories_array && categories_array.map((value, index) => {
                    return <Link to={`/products/${value.title}`} className=" text-center w-[300px] cursor-pointer h-[400px] p-5" key={index}>
                        <div className=' w-[80%] h-[100%]  mx-auto  '>
                            <img className="rounded-lg w-full h-full object-cover" src={value.image} alt={value.title} />
                        </div>
                        <div className="p-2 h-[20%]">
                            <b className="font-medium">{value.title[0].toUpperCase() + value.title.slice(1)}</b>
                            <div className="text-gray-500">Shop Now</div>
                        </div>
                    </Link>
                })}
            </Slider>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {
        display_dropdown,
        categories_array
    } = state.variables
    return {
        display_dropdown,
        categories_array
    }
}
const mapActionsToProps = {
    changeVariable
}
export default connect(mapStateToProps, mapActionsToProps)(DropDown)