import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { categoriesFetchActive } from '../../actions'

import CategoryItem from './CategoryItem'

const Category = ({
    categoriesall_array,

    categoriesFetchActive
}) => {


    useEffect(() => {
        window.scrollTo(0, 0)
        categoriesFetchActive()
    }, [])


    return (

        <>
            <Helmet>
                <title>Categories | Guarantee Ornament House</title>
                <meta name='title' content='Guarantee Ornament House (Shop the Exclusive) jewellery' />
                <meta name="description" content="Shop Online Jewllery , and get them delivered at our doorstep with our free and fast delivery. Shop online precious jewellery only on Guarantee Ornament House" />
                <meta name="keywords" content="Jewellery ,Precious jewellery, Fashion jewellery, Gold ,Diamond,Silver, MangalSutra,Chain, Ear ring , Necklace " />

            </Helmet>
            <section id='blog'>
                {categoriesall_array && categoriesall_array.map((value, index) => {
                    // console.log(value,33,categoriesall_array)
                    return <CategoryItem categoryData={value} key={index} />
                })}

            </section>
        </>
    )
}
const mapStateToProps = (state) => {
    const {
        categoriesall_array
    } = state.variables
    return {
        categoriesall_array
    }
}
const mapActionsToProps = {
    categoriesFetchActive
}
export default connect(mapStateToProps, mapActionsToProps)(Category)