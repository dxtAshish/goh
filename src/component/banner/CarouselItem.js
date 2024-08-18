import React from 'react'
import { Link } from 'react-router-dom'

const CarouselItem = ({
    categories_array
}) => {

    return (
        <div className="lg:py-24 py-10">
            <div  data-aos="fade-right" data-aos-duration="200" className="px-1 text-center md:px-24">
                <div className="mb-3 font-serif text-2xl md:text-4xl">The Beauty Of Jewellery</div>
                <div className="text-base font-thin">Jewelry has the power to captivate like no other. Its allure is timeless, and its beauty knows no bounds. Crafted with precision and adorned with exquisite gems, each piece tells a unique story. From dazzling diamonds that sparkle like stars in the night sky to the rich, warm glow of gold, jewelry has a way of making every moment special.</div>
            </div>
            <div className="flex flex-col px-3 md:w-full md:flex-row md:justify-evenly">
                {categories_array&&categories_array.map((value,index)=>{
                    return <Link to={`/products/${value.title}`} key={index} data-aos="fade-right" data-aos-duration="500" className="my-10 flex flex-col justify-around md:w-[29%] overflow-hidden">
                    <div className="img h-full  overflow-hidden ">
                        <img className="w-full hover:scale-100 transition-transform lg:hover:scale-105" src={value.image} alt={value.title} title={value.title} />
                    </div>
                    <div className="mx-auto flex h-24 w-fit flex-col justify-around text-center">
                        <div className="font-mono text-lg">{value.title}</div>
                        <div to={`/products/${value.title}`} className="text-base font-thin">Shop Now</div>
                    </div>
                </Link>

                })}
                
                {/* <div className="my-10 flex flex-col justify-around md:w-[25%]">
                    <div className="img h-full">
                        <img className="w-full" src="https://wpbingosite.com/wordpress/eldy/wp-content/uploads/2023/05/banner-25.jpg" alt="" />
                    </div>
                    <div className="mx-auto flex h-24 w-fit flex-col justify-around text-center">
                        <div className="font-mono text-lg">Minimalist Gold Ring</div>
                        <div className="text-base font-thin">Shop Now</div>
                    </div>
                </div>
                <div className="my-10 flex flex-col justify-around md:w-[25%]">
                    <div className="img h-full">
                        <img className="w-full" src="https://wpbingosite.com/wordpress/eldy/wp-content/uploads/2023/05/banner-25.jpg" alt="" />
                    </div>
                    <div className="mx-auto flex h-24 w-fit flex-col justify-around text-center">
                        <div className="font-mono text-lg">Minimalist Gold Ring</div>
                        <div className="text-base font-thin">Shop Now</div>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default CarouselItem