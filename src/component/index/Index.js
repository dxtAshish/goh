import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { categoriesFetchActive, getHome } from '../../actions'
import Banner from '../banner/Banner'
import CarouselItem from '../banner/CarouselItem'
import Masthead from '../banner/Masthead'
import Category from '../category/Category'
import FeaturedProducts from '../featuredProduct/FeaturedProducts'
import NewArrival from '../featuredProduct/NewArrival'
import BannerCarousel from '../banner/BannerCarousel'


const Index = ({
  products_array,
  categories_array,
  banners,
  products_home,

  getHome,
  categoriesFetchActive
}) => {

  useEffect(() => {
    getHome()
    categoriesFetchActive()

  }, [])


  return (
    <div>
      <Helmet>
        <title>Guarantee Ornament House | Jewellery</title>
        <meta name='title' content='Guarantee Ornament House (Shop the Exclusive) jewellery' />
        <meta name="description" content="Shop Online Jewllery , and get them delivered at our doorstep with our free and fast delivery. Shop online precious jewellery only on Guarantee Ornament House" />
        <meta name="keywords" content="Jewellery ,Precious jewellery, Fashion jewellery, Gold ,Diamond,Silver, MangalSutra,Chain, Ear ring , Necklace " />
      </Helmet>
      <BannerCarousel banners={banners} />

      {/* <Banner /> */}
      <CarouselItem categories_array={categories_array} />
      <NewArrival onHomeProducts = {true} products_home={products_home} />
      <FeaturedProducts />
      <NewArrival />
      
      <Masthead />
      
    </div>
  )
}

const mapStateToProps = (state) => {
  const {
    products_array,
    categories_array,
    banners,
    products_home
  } = state.variables
  return {
    products_array,
    categories_array,
    banners,
    products_home
  }
}

const mapActionsToProps = {
  getHome,
  categoriesFetchActive
}

export default connect(mapStateToProps, mapActionsToProps)(Index)