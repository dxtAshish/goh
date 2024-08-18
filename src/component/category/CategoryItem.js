import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = (props) => {
  const {
    title,image,description
  }=props.categoryData
  
  return (
    <Link to={`/products/${title}`} className="blog-box" style={{"fontSize":"30px"}}>
      <div className="blog-img">
        <img src={image&&image.split(",")[0]}alt=""/>
      </div>
      <div className="blog-details">
        <h4>{title}</h4>
        {/* <p>{description}</p> */}
        {/* <a href="#">CONTINUE READING</a> */}
      </div>
      {/* <h1>13/01</h1> */}
    </Link>
  )
}

export default CategoryItem