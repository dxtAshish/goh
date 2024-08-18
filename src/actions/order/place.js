import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import { createToast } from "../toast"

export const orderPlace = (cart, data, payment_mode,discount, razorpay) => {

    return (dispatch) => {

        OrderPlaceHelper({ cart, data, dispatch, payment_mode,discount, razorpay })

    }

}
export const OrderPlaceHelper = async ({ cart, data, payment_mode,discount, razorpay, dispatch }) => {
    const token = await localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "authorization": token
    }

    const userData = {
        userName: data.userName,
        userPincode: data.userPincode,
        userPhone: data.userPhone,
        userEmail: data.userEmail,
        userAddress: data.userAddress,
        userCity: data.userCity,
        userState: data.userState,


    }
    
    const body = JSON.stringify({

        userData,
        order: cart,
        paymentType: payment_mode,
        discount:discount,
        coupon_id:localStorage.coupon?localStorage.coupon:""
        // razorpay_order_id: payment_mode === 0 ? "" : razorpay.razorpay_order_id?razorpay.razorpay_order_id:"",
        // razorpay_payment_id: payment_mode === 0 ? "" : razorpay.razorpay_payment_id?razorpay.razorpay_payment_id:"",
        // razorpay_signature: payment_mode === 0 ? "" : razorpay.razorpay_signature?razorpay.razorpay_signature:""

    })
    console.log(body,45)

    const config = {
        body, headers,
        method: "POST"
    }

    const url = base_url + "/order/orderplaced"
    try {
        const response = await fetch(url, config)
        const responseJson = await response.json()
        console.log(responseJson)
        if (responseJson.status === 201) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "cart",
                    value: []
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "cart_products",
                    value: []
                }
            })
            if (payment_mode == 0) {
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "order_status",
                        value: "success"
                    }
                })
            }
            if (payment_mode == 1) {
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "order_status",
                        value: "successqr"
                    }
                })
            }
            createToast("Order Successfully Placed", "success")
            localStorage.setItem("cart", [])
            localStorage.setItem("cart_products", [])
            // history.push("/Success")

        }
        else {
            createToast("Some Error Occur", "error")
        }

    }
    catch (err) {
        console.log(err)
    }


}
