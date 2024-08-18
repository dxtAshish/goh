import React from 'react'
import { connect } from 'react-redux'
import { RemoveFromCart } from '../../actions'

const CartItem = ({
    productData,
    cart, cart_products,
    RemoveFromCart
}) => {
    const { image, _id, price, title } = productData

    return (
        // <tr>
        //     <td onClick={()=>{RemoveFromCart(_id,cart,cart_products)}} style={{cursor:"pointer"}}>x</td>
        //     <td><img src={image&&image.split(",")[0]} alt="" /></td>
        //     <td>Cartoon Astronaut T-shirts</td>
        //     <td>{price}</td>
        //     {/* <td><input type="number" value="1" /></td> */}
        //     <td>{price}</td>
        // </tr>
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md  flex sm:justify-start relative ">
            <svg onClick={() => { RemoveFromCart(_id, cart, cart_products) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 absolute right-2 top-2 cursor-pointer duration-150 hover:text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div className=' w-[40%] '>
                <img src={image.split(",")[0]} alt="product-image" class="w-full object-contain rounded-lg h-full" />
            </div>
            <div class="sm:ml-4 w-1/2 sm:flex sm:w-full flex sm:justify-between flex-col lg:flex-row">
                <div class="mt-5 sm:mt-0">
                    <h2 class="lg:hidden text-sm font-bold text-gray-900 w-fit lg:w-96">{title.slice(0, 40)} ...</h2>
                    <h2 class="lg:text-lg text-sm font-bold text-gray-900 w-fit lg:block hidden lg:w-96">{title.slice(0, 60)} ...</h2>
                    {/* <div class="flex items-center border-gray-100 mt-2">
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                    </div> */}
                    {/* <p class="mt-1 text-xs text-gray-700">36EU - 4US</p> */}
                </div>
                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex  space-x-4">
                        <p class="text-lg font-bold">₹ {price}.00 /-</p>

                    </div>


                </div>

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    const { cart, cart_products } = state.variables
    return { cart, cart_products }
}
const mapActionsToProps = {
    RemoveFromCart
}
export default connect(mapStateToProps, mapActionsToProps)(CartItem)