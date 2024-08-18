import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addToCart, productFetch } from '../../actions'
import FeatureProductItem from '../featuredProduct/FeatureProductItem'

const ProductUrl = ({
    productData,
    products_array,
    cart,
    cart_products,

    productFetch,
    addToCart
}) => {

    const {
        title,
        price,
        full_price,
        main_image,
        image,
        category,
        description,
        description_short,
        metal,
        stock,
        sku,
        bullet_point
    } = productData

    const { id } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0)
        productFetch(id)

    }, [id])

    useEffect(() => {
        {
            image &&
                setProductImage(image.split(",")[0])
        }
    }, [productData])



    useEffect(() => {
        console.log(cart, cart_products)
        // localStorage.setItem("cart",cart)
        // localStorage.setItem("cart_products",cart_products)
    }, [cart])

    const [showBuyNow, setShowBuyNow] = useState(false)

    const [productImage, setProductImage] = useState()

    return (
        <>
            <Helmet>
                <title>{`${!title ? "" : title}`} | Guarantee Ornament House</title>
                <meta name='title' content={`  ${!title ? "" : ""} ${!description_short ? "" : ""} ${!description ? "" : ""} Guarantee Ornament House (Shop the Exclusive) jewellery`} />
                <meta name="description" content={`${description ? description : "Shop Online Jewllery , and get them delivered at our doorstep with our free and fast delivery. Shop online precious jewellery only on Guarantee Ornament House"}`} />
                <meta name="keywords" content={`${description ? description + " " + description_short + " " + title : "Shop Online Jewllery , and get them delivered at our doorstep with our free and fast delivery. Shop online precious jewellery only on Guarantee Ornament House"}`} />
            </Helmet>
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <div className='h-[600px]'>
                        <img src={productImage ? productImage : ""} width="100%" className=' h-[100%] object-contain' id="MainImg" alt={"main-image"} />
                    </div>
                    <div className="small-img-group">
                        {/* <div className="small-img-col" onClick={() => { setProductImage(main_image) }}>
                            <img src={main_image} width="100%" className="small-img" alt={`product-image+${main_image}`} />
                        </div> */}
                        {image && image.split(",").map((url, index) => {
                            return <div className="small-img-col" key={index} onClick={() => { setProductImage(url) }}>
                                <img src={url} width="100%" className="small-img" alt={`product-image+${index}`} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="single-pro-details">
                    {/* <h6></h6> */}
                    <h4>{title}({sku})</h4>
                    <div className='flex items-center '>
                    <h2>₹ {price}.00/- </h2>
                    <strike className='text-lg font-semibold text-gray-500 mx-4 '>₹ {full_price}.00/- </strike>
                    <div className='text-green-600 hidden lg:block text-sm font-bold'>({full_price&& Math.round(((full_price-price)/full_price)*100)+"% Off"})</div>
                    </div>
                   
                    {/* <input type="number" value="1"/> */}
                    <div style={{ "display": "flex" }}>
                        {stock > 0 ?
                            <div style={{ "display": "flex" }}><button className="normal" onClick={() => { addToCart(productData, cart, cart_products); setShowBuyNow(true) }} >Add To Cart</button>
                                <Link to={'/cart'} ><button className="normal" style={{ "display": showBuyNow ? "block" : "none" }}>Buy now</button></Link></div> : <button className="normal"  >Out Of Stock</button>}
                    </div>

                    <h4>Product Detials</h4>
                    {/* <span>{description_short && description_short}</span> */}
                    <span>{description && description}</span>
                    <br />
                    <br />
                    <ul>
                        {bullet_point && bullet_point.split(",").map((value, index) => {
                            return <div><li key={index} >{value}</li></div>
                        })}
                    </ul>
                </div>
            </section>
            <br /><br /><br />
            <hr />
            <section id="product1" className="section-p1">
                <h2 style={{ "fontSize": "25px" }}>Recommended Products</h2>
                {/* <p>Summer Collection New Morden Design</p> */}

                <div className="pro-inner-container">
                    {products_array && products_array.map((data, index) => { return <FeatureProductItem productData={data} key={index} /> })}


                </div>
            </section>


        </>
    )
}

const mapStateToProps = (state) => {
    const {
        productData,
        products_array,
        cart,
        cart_products
    } = state.variables
    return {
        cart,
        cart_products,
        productData,
        products_array
    }
}
const mapActionsToProps = {
    productFetch,
    addToCart
}


export default connect(mapStateToProps, mapActionsToProps)(ProductUrl)