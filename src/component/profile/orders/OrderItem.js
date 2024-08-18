import React from 'react'
import { connect } from 'react-redux'
import { cancelOrder } from '../../../actions'

const OrderItem = ({
    data,

    cancelOrder
}) => {

    const {
        _id,
        sku,
        image,
        title,
        price,
        created_at,
        is_accepted,
        is_cancelled

    } = data
    return (
        <li className="border p-2 w-80 border-gray-300 pb-4 m-4">
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-md font-semibold">Order {_id}</span>
                    <p className="text-gray-600 text-sm">Placed on: {created_at && created_at.split("T")[0]}</p>
                </div>

            </div>
            <div className="mt-2">
                <p className="text-gray-600 text-sm">Product: {title && title.slice(0, 30)}...</p>
                <p className="text-gray-600 text-sm">Price: ₹ {price}/-</p>
            </div>
            {is_accepted ? (
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full " >Order Accepted</button>
            ) : is_cancelled ? (
                <button className="bg-gray-200   px-3 py-1 rounded-full text-black " >Order Cancelled</button>
            ) : (
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full " onClick={() => { cancelOrder(_id) }}>Cancel</button>
            )}

        </li>
        // <></>
    )
}

const mapStateToProps = (state) => {
    const {

    } = state.variables
    return {

    }
}
const mapActionsToProps = {
    cancelOrder
}

export default connect(mapStateToProps, mapActionsToProps)(OrderItem)