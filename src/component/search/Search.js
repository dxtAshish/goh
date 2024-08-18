import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ProductList from '../products/ProductList'
import { categoriesFetchActive, productsFetch, productsFetchByOrder, searchProducts } from "../../actions"
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import banner from "../../img/banner/b1.jpg"
import { changeVariable } from '../../actions/variables'
import ProductItem from '../products/ProductItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import video from "../../assets/ring.gif"
const Search = ({
    products_array,
    category_banner,
    searched_products,

    productsFetch,
    productsFetchByOrder,
    categoriesFetchActive,
    searchProducts,
    changeVariable
}) => {


    const [displaySortBar, setDisplaySortBar] = useState(false)
    const [displayFilterBar, setDisplayFilterBar] = useState(false)
    const [displayBar, setDisplayBar] = useState(false)
    const { query } = useParams()

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     console.log(order, 22)
    //     // if (order === undefined) {
    //         // productsFetch(category)
    //     // }

    // }, [category, order])
    useEffect(() => {
        categoriesFetchActive()
        // productsFetch(category)
        searchProducts(query)

    }, [])
    

    return (

        <div>
            <Helmet>
                <title> Guarantee Ornament House</title>
                <meta name='title' content={`Guarantee Ornament House (Shop the Exclusive) jewellery`} />
                <meta name="description" content="Shop Online Jewllery , and get them delivered at our doorstep with our free and fast delivery. Shop online precious jewellery only on Guarantee Ornament House" />
                <meta name="keywords" content="Jewellery ,Precious jewellery, Fashion jewellery, Gold ,Diamond,Silver, MangalSutra,Chain, Ear ring , Necklace " />
            </Helmet>
            {category_banner ?
                <section id="page-header" style={{ "backgroundImage": `url(${category_banner})` }}>
                    {/* <h2>#stayhome</h2>

                    <p>Save more with coupons & up to 70% off!
                    </p> */}
                </section>
                : <section id="page-header" style={{ "backgroundImage": `url(${video})` }}>
                    <h2>#stayhome</h2>

                    <p>Save more with coupons & up to 70% off!
                    </p>
                </section>}

            <section className='  ' id='product1'>
                {/* <ProductList displayBar={displayBar} setDisplayBar={setDisplayBar} displaySortBar={displaySortBar} setDisplaySortBar={setDisplaySortBar} displayFilterBar={displayFilterBar} setDisplayFilterBar={setDisplayFilterBar} /> */}
                <main class="mx-auto w-screen  lg:px-12">
                    <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 class="text-4xl mx-auto lg:mx-0 font-bold tracking-tight text-gray-900 uppercase">{query}</h1>
                        <div class="lg:flex items-center hidden ">
                            <div class="relative inline-block text-left">
                                <div onMouseEnter={() => { setDisplaySortBar(true) }} >
                                    <button type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                        Sort
                                        <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>

                                {/* <div onMouseLeave={() => { setDisplaySortBar(false) }} class={`absolute ${displaySortBar ? "" : "hidden"}  right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div class="py-1" role="none">
                                        <Link to={`/products/${query}/lowtohigh`} class=" cursor-pointer text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</Link>
                                        <Link to={`/products/${query}/hightolow`} onClick={() => { productsFetchByOrder(category, 1, "hightolow") }} class="cursor-pointer text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</Link>
                                    </div>
                                </div> */}
                            </div>
                            <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span class="sr-only">View grid</span>
                                <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                <span class="sr-only">Filters</span>
                                <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <section aria-labelledby="products-heading" class="pb-24 pt-6">
                        <h2 id="products-heading" class="sr-only">Products</h2>
                        <div class="flex justify-between  ">
                            {/* <!-- Filters --> */}
                            {/* <Filters productsFetchByOrder={productsFetchByOrder} categoriesall_array={categoriesall_array} selectedCheckBox={selectedCheckBox} handleCheckboxChange={handleCheckboxChange} /> */}
                            {/* <!-- Product grid --> */}
                            {/* <div class=""> */}
                            {/* <!-- Your content --> */}
                            <div className='pro-container lg:w-[90%] w-full mx-auto'>

                                {searched_products&&
                                    // <InfiniteScroll
                                    //     className='infinite-scroll overflow-x-hidden'
                                    //     dataLength={products_array.length}
                                    //     next={fetchmore}
                                    //     hasMore={pages != currentPage}
                                    //     loader={<h2 className='text-center w-fit mx-auto'><Loader /></h2>}

                                    // >

                                        <div className="pro-inner-container3">

                                            {searched_products && searched_products.map((product,index) => { return <ProductItem key={index} productData={{image:product.images,title:product.name,_id:product.objectID,price:product.price,full_price:product.full_price}} /> })}

                                        </div>

                                    // </InfiniteScroll>
                                }
                                {!searched_products && <div class="flex justify-center items-center h-screen">
                                    <p class="text-gray-600 text-lg">No products found.</p>
                                </div>}


                            </div>
                            {/* </div> */}
                        </div>
                    </section>
                </main>
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
        category_banner,
        searched_products

    } = state.variables

    return {
        products_array,
        category_banner,
        searched_products

    }
}
const mapActionsToProps = {
    productsFetch,
    productsFetchByOrder,
    categoriesFetchActive,
    searchProducts,
    changeVariable
}


export default connect(mapStateToProps, mapActionsToProps)(Search)