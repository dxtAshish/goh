
import React, { useEffect } from 'react'
import { getOrders } from '../../../actions'
import { connect } from 'react-redux'
import OrderItem from './OrderItem'

const Orders = ({
    orders_array,

    getOrders
}) => {
    useEffect(() => {
        getOrders()
        // console.log(orders_array,"arr")
    }, [])
    useEffect(() => {
        // getOrders()
        console.log(orders_array, "arr")
    }, [orders_array])

    return (
        <div class="w-full mx-auto bg-white p-4 rounded-lg ">
            <h1 class="text-2xl font-semibold mb-4">Your Orders</h1>

            {/* <!-- Example order list --> */}
            <ul className='flex flex-col lg:flex-row flex-wrap  '>
                {orders_array&&orders_array.map((value,index)=>{
                    return <OrderItem data={value} key={index}/>
                })}
                
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {
        orders_array
    } = state.variables
    return {
        orders_array
    }
}

const mapActionsToProps = {
    getOrders
}

export default connect(mapStateToProps, mapActionsToProps)(Orders)