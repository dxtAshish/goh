import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {

    const {
        _id,
        category,
        description,
        description_short,
        main_image,
        image,
        is_active,
        metal,
        onHome,
        full_price,
        price,
        sku,
        stock,
        title,
    } = props.productData
    return (
        <Link to={`/product/${_id}`} className="pro" style={{ "textDecoration": "none" }}>
            {/* <div className="pro" > */}
            <div className=' h-[200px] lg:h-[330px]'>
                <img className='h-[100%] object-contain' src={image&&image.split(",")[0]} alt={image ? title : ""} />
            </div>
            <div className="des">
                <h5 className=' py-2'>{title}</h5>
                {/* <h5>{description && description.slice(0, 25) + ".."}</h5> */}
                {/* <div className="star">
                    <span className="material-symbols-rounded">star</span>
                    <span className="material-symbols-rounded">star</span>
                    <span className="material-symbols-rounded">star</span>
                    <span className="material-symbols-rounded">star</span>
                </div> */}
                <div className="flex items-center justify-between w-32  lg:w-4/6 ">
                    <div className=' font-bold text-[#088178]'>₹{price}.00</div>
                    <strike>₹{full_price}.00</strike>
                    
                    <div className='text-green-600 hidden lg:block text-xs'>{full_price&& Math.round(((full_price-price)/full_price)*100)+"% Off"}</div>
                </div>

                <span style={{ "letterSpacing": "3px", "fontSize": "15px" }} >Free Delivery</span>
            </div>
            {/* <Link to={`/product/${_id}`}><span className="material-symbols-outlined h-fit w-fit bottom-2">
                shopping_cart
            </span></Link> */}
            {/* </div> */}
        </Link>
    )
}

export default ProductItem