import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useLocation, useParams, useNavigate, json } from 'react-router-dom'
import { categoriesFetchActive, checkAuthorization, getCartProduct, getHome, searchProducts } from '../actions'
import { changeVariable } from '../actions/variables';

const Search = ({ searched_products, search, setSearch }) => {
    useEffect(() => {
        if (searched_products == []) {
            setSearch(!search)
        }
    }, [searched_products])

    return (
        <>
            <ul className="absolute mt-2 h-96 w-80 left-0 overflow-y-scroll  rounded-lg border border-gray-300 bg-white">
                {searched_products == [] ? <></> : searched_products.map((value, index) => {
                    return <Link className='my-5' onClick={() => { setSearch(!search) }} to={`/product/${value.objectID}`} key={index}><div className='flex justify-around items-center'>
                        <li className="px-6 py-2 hover:bg-gray-100">{value.name.slice(0, 30)}...</li>
                        <div><img className='w-10 h-10' src={value.images} alt="" /></div>
                    </div></Link>

                })}

                {/* <li className="px-4 py-2 hover:bg-gray-100">Result 2</li>
                <li className="hover-bg-gray-100 px-4 py-2">Result 3</li> */}

            </ul>
        </>
    )
}


const Navbar = ({
    cart_products,
    display_dropdown,
    categoriesall_array,
    categories_array,
    searched_products,

    getCartProduct,
    categoriesFetchActive,
    changeVariable,
    getHome,
    checkAuthorization,
    searchProducts

}) => {


    const [search, setSearch] = useState(false)
    const [searchData, setSearchData] = useState("")

    const location = useLocation()
    const navigate = useNavigate()

    const [is_mobile, setis_mobile] = useState(false)

    const [sideBar, setSideBar] = useState(false)
    const [sideBarDropDown, setSideBarDropDown] = useState(false)


    const [cart, setCart] = useState()

    useEffect(() => {
        if (localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", [])
            localStorage.setItem("cart_products", [])
        }
        getHome()
        checkAuthorization()
    }, [])


    useEffect(() => {
        // if(!localStorage.getItem("cart"))
        console.log(cart, 40)
        setCart(localStorage.getItem("cart_products") === '' ? "" : JSON.parse(localStorage.getItem("cart_products")).length)
    }, [localStorage.getItem("cart_products")])

    useEffect(() => {
        setis_mobile(false)
        setSideBar(false)
        setSideBarDropDown(false)
    }, [location])


    useEffect(() => {
        if (searchData.length > 3) {
            searchProducts(searchData)
        }

    }, [searchData])

    const navigateToSearch = (event) => {
        if (event.key == "Enter") {
            navigate(`/search/${searchData}`)
        }
    }

    return (
        <div className='top-0 sticky z-50 bg-white'>

            <div className="hidden  h-20 items-center justify-between px-2 shadow lg:flex">
                <Link to={"/"} className="w-[30%] font-serif text-xl font-thin italic">Guarantee Ornament House</Link>
                <div className="w-[30%] font-serif text-lg font-thin italic">
                    <div className="flex justify-between">
                        <Link to={"/"} className={`cursor-pointer border-black py-1 ${location.pathname == "/" ? "border-b-2" : ""} hover:border-b-2`} onMouseOver={() => { changeVariable("display_dropdown", false) }}>Home</Link>
                        <div className="cursor-pointer border-black py-1 hover:border-b-2" onMouseOver={() => { changeVariable("display_dropdown", true) }} >Shop</div>
                        <Link to={"/category"} className={`cursor-pointer border-black py-1 ${location.pathname == "/category" ? "border-b-2" : ""} hover:border-b-2`} onMouseOver={() => { changeVariable("display_dropdown", false) }}>Category</Link>
                        <Link to={"/contact"} className={`cursor-pointer ${location.pathname == "/contact" ? "border-b-2" : ""} border-black py-1 hover:border-b-2`} onMouseOver={() => { changeVariable("display_dropdown", false) }}>Contact us</Link>
                    </div>
                </div>
                <div className="w-[30%] font-serif text-lg font-thin italic">
                    <div className="float-right flex items-center justify-evenly">
                        {!search ?
                            <Link onClick={() => { setSearch(!search) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="28" viewBox="0 0 50 50">
                                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                                </svg>
                            </Link> :
                            <div className='relative'>
                                <input onKeyPress={(e) => { navigateToSearch(e) }} type="search" value={searchData} onChange={(e) => { setSearchData(e.target.value) }} placeholder="Search" className=" w-full outline-none py-3 px-7 focus:border-none" />
                                {searchData.length > 3 && <Search search={search} setSearch={setSearch} searched_products={searched_products} />}
                            </div>
                        }
                        <Link to={"/profile"} className="mx-3" >
                            <svg width="28" height="28" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" color="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18" stroke="currentColor" strokeLinecap="round" />
                                <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </Link>

                        <Link to={"/cart"} className="mx-3 relative">
                            {localStorage.getItem("cart") != '' && localStorage.getItem("cart") != undefined && (JSON.parse(localStorage.getItem("cart"))).length != 0 && <div className=' absolute text-base rounded-full h-5 -right-2 -top-1 w-5  text-center text-white bg-black '> {(JSON.parse(localStorage.getItem("cart"))).length}</div>}
                            {/* <div className=' absolute  text-base rounded-full h-5 -right-2 -top-1 w-5  text-center text-white bg-black opacity-75'>1</div> */}


                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" color="#000000" className="bi bi-bag" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" /></svg>
                        </Link>
                        {/* <div className="mx-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" color="#000000" className="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" /></svg>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* resposive navbar */}
            <div className={`flex lg:hidden h-14 ${sideBar ? "hidden" : ""} items-center justify-around`}>
                <div className="flex w-[10%] flex-col items-center" onClick={() => { setSideBar(!sideBar) }}>
                    <div className="my-[3px] h-1 w-6 bg-black"></div>
                    <div className="my-[3px] h-1 w-6 bg-black"></div>
                    <div className="my-[3px] h-1 w-6 bg-black"></div>
                </div>
                <div className="w-[80%] text-center font-serif text-lg font-thin italic">Guarantee Ornament House</div>
                <div className="w-[10%]">
                    <Link to={"/cart"} className="float-right relative mx-3">
                        {localStorage.getItem("cart") != '' && localStorage.getItem("cart") != undefined && (JSON.parse(localStorage.getItem("cart"))).length != 0 && <div className=' absolute text-base rounded-full h-5 -right-2 -top-1 w-5  text-center text-white bg-black '> {(JSON.parse(localStorage.getItem("cart"))).length}</div>}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" color="#000000" className="bi bi-bag" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" /></svg>
                    </Link>
                </div>
            </div>

            {/* responsive dropdown */}
            {sideBar &&
                <div className="flex h-screen fixed z-50 w-screen flex-col bg-gray-100 ">
                    <div className={`${sideBarDropDown ? "hidden" : ""} `}>
                        <div class={`w-screen  sidebar `} >
                            <div className="float-right m-3" onClick={() => { setSideBar(!sideBar) }}>
                                <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z" fill="currentColor" /></svg>
                            </div>
                        </div>
                        <div className="py-6">
                            <div className="flex items-center justify-between px-2">
                                <Link to={"/"} className="w-screen border-b-[0.1px] border-gray-200 p-5">Home</Link>
                            </div>
                            <div className="flex items-center justify-between px-2" onClick={() => { setSideBarDropDown(true) }}>
                                <div className="w-screen border-b-[0.1px] border-gray-200 p-5">Collection</div>
                                <div className="text-2xl"></div>
                            </div>
                            <div className="flex items-center justify-between px-2">
                                <Link to={"/category"} className="w-screen border-b-[0.1px] border-gray-200 p-5">Category</Link>
                            </div>
                            <div className="flex items-center justify-between px-2">
                                <Link to={"/contact"} className="w-screen border-b-[0.1px] border-gray-200 p-5">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    {sideBarDropDown &&
                        <div>
                            <div className="w-screen flex items-center justify-between ">
                                <div className='ml-3' onClick={() => { setSideBarDropDown(false) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" /> </svg></div>
                                <div className="float-right m-3" onClick={() => { setSideBar(!sideBar); setSideBarDropDown(false) }}>
                                    <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z" fill="currentColor" /></svg>
                                </div>
                            </div>
                            <div className="py-6">
                                {categories_array && categories_array.map((value, index) => {
                                    return <Link to={`/products/${value.title}`} className="flex items-center justify-between px-2" key={index}>
                                        <div className="w-screen border-b-[0.1px] border-gray-200 p-5">{value.title}</div>
                                    </Link>
                                })}
                            </div>
                        </div>}
                </div>}
        </div>

    )
}

const mapStateToProps = (state) => {
    const { cart, cart_products, display_dropdown, categoriesall_array, categories_array, searched_products } = state.variables
    return { cart, cart_products, display_dropdown, categoriesall_array, categories_array, searched_products }
}

const mapActionsToProps = {
    getCartProduct,
    categoriesFetchActive,
    changeVariable,
    getHome,
    checkAuthorization,
    searchProducts
}

export default connect(mapStateToProps, mapActionsToProps)(Navbar)