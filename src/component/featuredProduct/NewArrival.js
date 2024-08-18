import React from 'react'
import { connect } from 'react-redux'
import FeatureProductItem from './FeatureProductItem'

const NewArrival = ({ new_products_arrival, onHomeProducts,products_home }) => {
  return (
    <section id="product1" className="section-p1">
      <h2 data-aos="fade-right" data-aos-duration="500" style={{ "fontSize": "46px", "lineBreak": "54px" }}>{!onHomeProducts? "NEW ARRIVAL":"IN THE SPOTLIGHT"}</h2>
      <p data-aos="fade-right" data-aos-duration="500">Summer Collection New Morden Design</p>
      {!onHomeProducts ?
        <div data-aos="fade-left" data-aos-duration="500" className="pro-inner-container" >
          {new_products_arrival && new_products_arrival.map((product, key) => {
            return <FeatureProductItem productData={product} key={key} />
          })}


        </div> :
        <div data-aos="fade-left" data-aos-duration="500" className="pro-inner-container" >
          {products_home && products_home.map((product, key) => {
            return <FeatureProductItem productData={product} key={key} />
          })}


        </div>
      }
    </section>
  )
}
const mapStateToProps = (state) => {
  const {
    new_products_arrival,
    categories_array
  } = state.variables
  return {
    new_products_arrival,
    categories_array
  }
}
export default connect(mapStateToProps)(NewArrival)