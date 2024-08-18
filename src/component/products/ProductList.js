import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
// import '../../infinitescroll.css'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { productsFetchByOrder, productsFetchMore } from '../../actions'
import Loader from "../Loader"
import ProductItem from './ProductItem'



const Filters = ({
    categoriesall_array,
    displaySortBar,
    displayFilterBar,
    selectedCheckBox,

    productsFetchByOrder,
    setDisplaySortBar,
    setDisplayFilterBar,
    handleCheckboxChange
}) => {


    return (
        <form class="hidden lg:block lg:w-[25%]">
            <h3 class="sr-only">Categories</h3>
            <div class="border-b border-gray-200 py-6">
                <h3 class="-my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                        <span class="font-medium text-gray-900">Categories</span>
                        <span class="ml-6 flex items-center">
                            {/* <!-- Expand icon, show/hide based on section open state. --> */}
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                            {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div class="pt-6" id="filter-section-0">
                    <div class="space-y-4">
                        {categoriesall_array && categoriesall_array.map((value, index) => {
                            return <div class="flex items-center" key={index}>
                                <Link to={`/products/${value.title}`}><input checked={selectedCheckBox == value.title} onChange={() => { handleCheckboxChange(value.title) }} id="filter-color-0" name={value.title} value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" /></Link>
                                <label for="filter-color-0" class="ml-3 text-sm text-gray-600">{value.title}</label>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div class="border-b border-gray-200 py-6">
            </div>
            <div class="border-b border-gray-200 py-6">
                <h3 class="-my-3 flow-root">
                </h3>
            </div>
        </form>
    )
}


const ProductList = ({
    products_array,
    currentPage,
    pages,
    categoriesall_array,
    displayBar,
    displayFilterBar,
    displaySortBar,


    productsFetchMore,
    productsFetchByOrder,
    setDisplayBar,
    setDisplayFilterBar,
    setDisplaySortBar
}) => {

    const { category, order } = useParams()
    const [page, setPage] = useState(2)

    const [selectedCheckBox, setSelectedCheckBox] = useState(category)
    const handleCheckboxChange = (value) => {
        setSelectedCheckBox(value);
    };
    const fetchmore = () => {
        if (page !== currentPage) {
            if (order === undefined) {
                setPage(page + 1)
                productsFetchMore(category, page, products_array)
            }
            else {
                setPage(page + 1)
                productsFetchMore(category, page, products_array, order)
            }
        }
    }

    useEffect(() => {
        setPage(2)
    }, [order])



    return (

        <div class="bg-white">
            <div>

                <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">

                    <div class={`fixed inset-0 bg-black bg-opacity-25  ${!displayBar ? "hidden" : ""}`}></div>
                    <div class={`fixed inset-0 z-40 flex  ${!displayBar ? "hidden" : ""}`}>

                        <div class="relative mt-10 ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                            <div class="flex items-center justify-between px-4">
                                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                <button onClick={() => { setDisplayBar(false); setDisplayFilterBar(false); setDisplaySortBar(false) }} type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                    <span class="sr-only">Close menu</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            {/* <!-- Filters for categories --> */}
                            <form class={`mt-4 border-t border-gray-200 ${displayFilterBar ? "" : "hidden"}`}>
                                <div class="border-t border-gray-200 px-4 py-6">
                                    <h3 class="-mx-2 -my-3 flow-root">
                                        {/* <!-- Expand/collapse section button --> */}
                                        <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                            <span class="font-medium text-gray-900">Category</span>
                                        </button>
                                    </h3>
                                    {/* <!-- Filter section, show/hide based on section state. --> */}
                                    <div class="pt-6" id="filter-section-mobile-1">
                                        <div class="space-y-6">

                                            {categoriesall_array && categoriesall_array.map((value, index) => {
                                                return <Link to={`/products/${value.title}`} class="flex items-center" key={index}>
                                                    <input id="filter-mobile-category-1" onChange={() => { handleCheckboxChange(value.title) }} checked={selectedCheckBox == value.title} value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-category-1" class="ml-3 min-w-0 flex-1 text-gray-500">{value.title}</label>
                                                </Link>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- Filters for Sorting --> */}
                            <form class={`mt-4 border-t border-gray-200 ${displaySortBar ? "" : "hidden"}`}>
                                <div class="border-t border-gray-200 px-4 py-6">
                                    <h3 class="-mx-2 -my-3 flow-root">
                                        {/* <!-- Expand/collapse section button --> */}
                                        <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                            <span class="font-medium text-gray-900">Sorting</span>
                                        </button>
                                    </h3>
                                    {/* <!-- Filter section, show/hide based on section state. --> */}
                                    <div class="pt-6" id="filter-section-mobile-1">
                                        <div class="space-y-6">

                                            <Link to={`/products/${category}/hightolow`} class="flex items-center">
                                                <input checked={order === "hightolow"} id="filter-mobile-category-1" value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-mobile-category-1" class="ml-3 min-w-0 flex-1 text-gray-500">High To Low</label>
                                            </Link>
                                            <Link to={`/products/${category}/lowtohigh`} class="flex items-center">
                                                <input checked={order === "lowtohigh"} id="filter-mobile-category-1" value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-mobile-category-1" class="ml-3 min-w-0 flex-1 text-gray-500">Low To High</label>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <main class="mx-auto w-screen  lg:px-12">
                    <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 class="text-4xl mx-auto lg:mx-0 font-bold tracking-tight text-gray-900 uppercase">{category}</h1>
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

                                <div onMouseLeave={() => { setDisplaySortBar(false) }} class={`absolute ${displaySortBar ? "" : "hidden"}  right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div class="py-1" role="none">
                                        <Link to={`/products/${category}/lowtohigh`} class=" cursor-pointer text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</Link>
                                        <Link to={`/products/${category}/hightolow`} onClick={() => { productsFetchByOrder(category, 1, "hightolow") }} class="cursor-pointer text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</Link>
                                    </div>
                                </div>
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
                            <Filters productsFetchByOrder={productsFetchByOrder} categoriesall_array={categoriesall_array} selectedCheckBox={selectedCheckBox} handleCheckboxChange={handleCheckboxChange} />
                            {/* <!-- Product grid --> */}
                            {/* <div class=""> */}
                            {/* <!-- Your content --> */}
                            <div className='pro-container lg:w-[70%] w-full'>

                                {products_array &&
                                    <InfiniteScroll
                                        className='infinite-scroll overflow-x-hidden'
                                        dataLength={products_array.length}
                                        next={fetchmore}
                                        hasMore={pages != currentPage}
                                        loader={<h2 className='text-center w-fit mx-auto'><Loader /></h2>}

                                    >

                                        <div className="pro-inner-container2">

                                            {products_array && products_array.map((product) => { return <ProductItem productData={product} /> })}

                                        </div>

                                    </InfiniteScroll>
                                }
                                {!products_array && <div class="flex justify-center items-center h-screen">
                                    <p class="text-gray-600 text-lg">No products found.</p>
                                </div>}


                            </div>
                            {/* </div> */}
                        </div>
                    </section>
                </main>
            </div>
        </div>

    )
}


const mapStateToProps = (state) => {
    const {
        products_array,
        currentPage,
        pages,
        categoriesall_array
    } = state.variables

    return {
        products_array,
        currentPage,
        pages,
        categoriesall_array
    }
}
const mapActionsToProps = {
    productsFetchMore,
    productsFetchByOrder
}


export default connect(mapStateToProps, mapActionsToProps)(ProductList, Filters)