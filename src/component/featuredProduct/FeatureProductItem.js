import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import "../../img/products/f1.jpg"
const FeatureProductItem = (props) => {
  const {
    image,
    title,
    _id,
    price
  } = props.productData


  // const [image_url, setImage_url] = useState()

  // useEffect(() => {
  //   if(image){
  //     const url = image.split(",")[0]
  //     setImage_url(url)
  //   }
  // }, [])
  
  // const changeImage = (data)=>{
  //   if(data){
  //   if(image){
  //     const url = image.split(",")[1]
  //     if(url){
  //       setImage_url(url)
  //     }
      
  //   }}
  //   else{
  //     const url = image.split(",")[0]
  //     if(url){
  //       setImage_url(url)
  //     }
      
  //   }
  // }
  

  return (
    <Link className={`pro ${props.productsTypeChanging?"animate-pulse opacity-100":""} `} to={`/product/${_id}`} style={{ "textDecoration": "none"}}>
      <div className={` h-[200px] lg:h-[300px]  ${props.productsTypeChanging?"animate-pulse opacity-100":""}`}>
        <img className='h-[100%] object-contain' src={image.split(",")[0]} alt={_id} title={title} />
      </div>
      <div className="des">
        {/* <span>adidas</span> */}
        <h5>{title.slice(0,50)}...</h5>
        <div className="star">
          <span className="material-symbols-rounded">star</span>
          <span className="material-symbols-rounded">star</span>
          <span className="material-symbols-rounded">star</span>
          <span className="material-symbols-rounded">star</span>
        </div>
        <h4>₹ {price}.00 /-</h4>
        <span style={{ "letterSpacing": "3px", "fontSize": "15px" }} >free Delivery</span>
      </div>
      

    </Link>
  )
}

export default FeatureProductItem