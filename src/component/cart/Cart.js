import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkCoupon, getCartProduct } from '../../actions'
import CartItem from "./CartItem"
import { changeVariable } from '../../actions/variables'

const Cart = ({
    cart,
    cart_products,
    authorized,
    coupon_applied,
    coupon,


    getCartProduct,
    checkCoupon,
    changeVariable
}) => {

    const [totalAmount, setTotalAmount] = useState()
    const [couponCode, setCouponCode] = useState("")
    const [discountedAmount, setDiscountedAmount] = useState("")
    const [discount, setDiscount] = useState("")
    useEffect(() => {
        let total = 0
        cart.map((product) => {
            console.log(product.price, totalAmount, typeof totalAmount, "rkmg", product.price + totalAmount)
            total = total + product.price
            return true
        })
        setTotalAmount(total)
    }, [cart])



    useEffect(() => {
        window.scrollTo(0, 0)
        getCartProduct()
        console.log(cart, 17);

    }, [])

    useEffect(() => {
        setDiscountedAmount("")
        changeVariable("coupon_applied", false)
        changeVariable("coupon", "")
        setCouponCode("")
        localStorage.setItem("coupon", "")
    }, [cart])

    const couponCheckFunc = () => {
        checkCoupon(couponCode,totalAmount)

    }
    useEffect(() => {
        let newAmount = ((totalAmount * coupon.amount) / 100);
        setDiscount(newAmount)
        setDiscountedAmount(totalAmount-newAmount)
    }, [coupon])

    const couponRemoveFunc = async () => {
        setDiscountedAmount("")
        console.log(totalAmount, 54)
        changeVariable("coupon_applied", false)
        changeVariable("coupon", "")
        setCouponCode("")
        localStorage.setItem("coupon", "")

    }




    return (
        <>
            <Helmet>
                <title>Cart | Guarantee Ornament House</title>
            </Helmet>

            {cart.length != 0 ?
                <div class="h-fit bg-gray-100 py-20">
                    <h1 class="mb-10 text-center text-2xl font-bold">Cart</h1>
                    <div class="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div class="rounded-lg md:w-2/3">

                            {cart && cart.map((product) => {
                                return <CartItem productData={product} />
                            })}
                            {/* <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
                            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                                </div>
                                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div class="flex items-center border-gray-100">
                                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <p class="text-sm">259.000 ₭</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
                            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                                </div>
                                <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div class="flex items-center border-gray-100">
                                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <p class="text-sm">259.000 ₭</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        </div>
                        {/* <!-- Sub total --> */}
                        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-2/5">
                            {cart && cart.map((value, index) => {
                                return <div class="mb-2 flex justify-between " key={index}>
                                    <p class="text-gray-700 w-[60%] lg:w-auto ">{value.title.slice(0, 40)}...</p>
                                    <p class="text-gray-700 w-[35%] lg:w-auto">₹ {value.price}.00 /-</p>
                                </div>

                            })}

                            <div class="flex justify-between">
                                <p class="text-gray-700">Shipping</p>
                                <p class="text-gray-700">₹ 0.00 /-</p>
                            </div>
                            <hr class="my-4" />
                            <div class="flex justify-between">
                                <p class="text-lg font-bold">Total</p>
                                <div class="">
                                    <p class="mb-1 text-lg font-bold">₹ {totalAmount}.00 /-</p>
                                    {/* <p class="text-sm text-gray-700">including VAT</p> */}
                                </div>
                            </div>
                            {coupon_applied &&
                                <div>
                                    <div class="flex justify-between">
                                        <p class="text-lg font-bold">Coupon</p>
                                        <div class="">
                                            <p class="mb-1 text-lg font-bold"> - ₹ {discount}.00 /-</p>
                                            {/* <p class="text-sm text-gray-700">including VAT</p> */}
                                        </div>
                                    </div>
                                    <div class="flex justify-between">
                                        <p class="text-lg font-bold">Final Amount</p>
                                        <div class="">
                                            <p class="mb-1 text-lg font-bold"> - ₹ {discountedAmount}.00 /-</p>
                                            {/* <p class="text-sm text-gray-700">including VAT</p> */}
                                        </div>
                                    </div>
                                </div>

                            }
                            {authorized &&
                                <div class="mt-4 relative w-full">
                                    <label for="coupon" class="block text-sm font-medium text-black">Coupon Code (Optional)</label>
                                    <div class="flex ">
                                        <input disabled={coupon_applied} type="text" value={couponCode} onChange={(e) => { setCouponCode(e.target.value) }} name="coupon" class=" w-4/5 border rounded-md focus:outline-none focus:border-blue-500 transition duration-150" />
                                        {coupon_applied ? <button onClick={() => { couponRemoveFunc() }} class="ml-2 h-12 bg-blue-500 text-white  px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" >Remove</button> :
                                            <button onClick={() => { couponCheckFunc() }} class="ml-2 h-12 bg-blue-500 text-white  px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" >Apply</button>}
                                    </div>
                                </div>}
                            {authorized ?
                                <Link to={"/checkout"}><button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button></Link> : <Link to={"/Profile"}><button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Login Now </button></Link>}
                        </div>
                    </div>
                </div> : <div class="flex justify-center items-center h-screen">
                    <div class="bg-white p-8 rounded-lg shadow-md text-center">
                        <p class="text-gray-600 text-lg">No Products In the Cart</p>
                    </div>
                </div>}
        </>

    )
}

const mapStateToProps = (state) => {
    const {
        cart, cart_products, authorized, coupon_applied, coupon
    } = state.variables
    return {
        cart, cart_products, authorized, coupon_applied, coupon
    }
}
const mapActionsToProps = {
    getCartProduct,
    checkCoupon,
    changeVariable
}

export default connect(mapStateToProps, mapActionsToProps)(Cart)