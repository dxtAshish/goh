import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ProductList from './ProductList'
import { categoriesFetchActive, productsFetch, productsFetchByOrder } from "../../actions"
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import banner from "../../img/banner/b1.jpg"
const Products = ({
    products_array,
    category_banner,

    productsFetch,
    productsFetchByOrder,
    categoriesFetchActive
}) => {


    const [displaySortBar, setDisplaySortBar] = useState(false)
    const [displayFilterBar, setDisplayFilterBar] = useState(false)
    const [displayBar, setDisplayBar] = useState(false)
    const { category, order } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(order, 22)
        if (order === undefined) {
            productsFetch(category)
        }
        else {
            productsFetchByOrder(category, 1, order)
        }
    }, [category, order])
    useEffect(() => {
        categoriesFetchActive()
        productsFetch(category)
    }, [])

    return (

        <div>
            <Helmet>
                <title>{category} | Guarantee Ornament House</title>
                <meta name='title' content={`Guarantee Ornament House (Shop the Exclusive) jewellery ${category}`} />
                <meta name="description" content="Shop Online Jewllery , and get them delivered at our doorstep with our free and fast delivery. Shop online precious jewellery only on Guarantee Ornament House" />
                <meta name="keywords" content="Jewellery ,Precious jewellery, Fashion jewellery, Gold ,Diamond,Silver, MangalSutra,Chain, Ear ring , Necklace " />
            </Helmet>
            {category_banner ?
                <section id="page-header" style={{ "backgroundImage": `url(${category_banner})` }}>
                    {/* <h2>#stayhome</h2>

                    <p>Save more with coupons & up to 70% off!
                    </p> */}
                </section>
                : <section id="page-header" style={{ "backgroundImage": `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2W4v1VzuCkhXGp0MFB70p3Jmtl-Y1kqMrA&usqp=CAU"})` }}>
                    <h2>#stayhome</h2>

                    <p>Save more with coupons & up to 70% off!
                    </p>
                </section>}

            <section className='  ' id='product1'>
                <ProductList displayBar={displayBar} setDisplayBar={setDisplayBar} displaySortBar={displaySortBar} setDisplaySortBar={setDisplaySortBar} displayFilterBar={displayFilterBar} setDisplayFilterBar={setDisplayFilterBar} />
            </section>
            <div class="fixed lg:hidden bg-white bottom-0 flex w-screen justify-between z-50 py-2">
                <div class="w-full text-center text-lg" onClick={() => { setDisplaySortBar(true); setDisplayBar(true); setDisplayFilterBar(false) }}>Sort</div>
                <div class="w-full text-center text-lg" onClick={() => { setDisplayFilterBar(true); setDisplayBar(true); setDisplaySortBar(false) }}>Filter</div>
            </div>

        </div>


    )
}

const mapStateToProps = (state) => {
    const {
        products_array,
        category_banner
    } = state.variables

    return {
        products_array,
        category_banner
    }
}
const mapActionsToProps = {
    productsFetch,
    productsFetchByOrder,
    categoriesFetchActive
}


export default connect(mapStateToProps, mapActionsToProps)(Products)
