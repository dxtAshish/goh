import { base_url } from "../variables"
import { createToast } from "../toast"
import { orderPlace, OrderPlaceHelper } from "../order"
import { CHANGE_VARIABLE } from "../type"
// import Razorpay from "razorpay"


export const paymentPOST = (cart, data, discount) => {

    return (dispatch) => {

        paymentPOSTHelper({ cart, data, discount, dispatch })

    }

}

const paymentPOSTHelper = async ({ cart, data, discount, dispatch }) => {

    // const checkout_delivery_address = await localStorage.getItem( "address_selected" )



    // console.log( "da" , checkout_delivery_address )

    // CALCULATE ORDER AMOUNT BY LOOPING THROUGH CART
    var amount = 0
    cart.length > 0 && cart.map((cart_item) => {

        amount += +cart_item.price

    })


    // MULTIPLY TO GET AMOUNT INTO PAISA
    if (discount != 0) {
        amount = +(amount * 100) - (((amount * discount) / 100)*100)
    }
    else {
        amount = +amount * 100
    }

    // const token = await localStorage.getItem("token")
    const headers = {

        // "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",

    }
    // console.log(discount,46)
    // if(discount!=0){
    //     amount = amount-discount   
    // }
    const body = JSON.stringify({

        amount: amount,
        data: data,
        transactionId: "T" + Date.now()

    })
    const config = {

        body,
        headers,
        method: "POST",

    }
    const razorpay = {}
    console.log(body, 65)
    const url = base_url + "/payment/payment"
    try {

        const response = await fetch( url, config )
        const responseJson = await response.json()
        console.log(response, "response")
        console.log(responseJson, "responseJSON")
        if (responseJson) {
            OrderPlaceHelper({ cart, data, payment_mode: 1, discount, razorpay, dispatch })
            window.location.href = responseJson
        }

        // if( responseJson.status === 201 ){

        //     // createToast( responseJson.message, "success" )
        //     dispatch({
        //         type: CHANGE_VARIABLE,
        //         payload: {
        //             key: "toast_display",
        //             value: true
        //         }
        //     })
        //     dispatch({
        //         type: CHANGE_VARIABLE,
        //         payload: {
        //             key: "toast_status",
        //             value: "success"
        //         }
        //     })
        //     dispatch({
        //         type: CHANGE_VARIABLE,
        //         payload: {
        //             key: "toast_message",
        //             value: responseJson.message
        //         }
        //     })
        //     setTimeout(() => {
        //         dispatch({
        //             type: CHANGE_VARIABLE,
        //             payload: {
        //                 key: "toast_display",
        //                 value: false
        //             }
        //         })
        //     }, 1000);
        //     // console.log( process.env.NEXT_PUBLIC_RAZORPAY_KEY )
        //     const options = {

        //         key: "rzp_test_4OOAMCjqTxkzHV",
        //         amount: amount,
        //         currency: "INR",
        //         name: "gohworld ",
        //         order_id: responseJson.data.id,
        //         handler: (res) => {

        //             console.log(res);
        //             const razorpay = {

        //                 razorpay_order_id: res.razorpay_order_id,
        //                 razorpay_payment_id: res.razorpay_payment_id,
        //                 razorpay_signature: res.razorpay_signature,

        //             }

        //             // createToast( "Payment Successful. Processing Order.", "success" )
        //             dispatch({
        //                 type: CHANGE_VARIABLE,
        //                 payload: {
        //                     key: "toast_display",
        //                     value: true
        //                 }
        //             })
        //             dispatch({
        //                 type: CHANGE_VARIABLE,
        //                 payload: {
        //                     key: "toast_status",
        //                     value: "success"
        //                 }
        //             })
        //             dispatch({
        //                 type: CHANGE_VARIABLE,
        //                 payload: {
        //                     key: "toast_message",
        //                     value: "Payment Successful. Processing Order..."
        //                 }
        //             })
        //             setTimeout(() => {
        //                 dispatch({
        //                     type: CHANGE_VARIABLE,
        //                     payload: {
        //                         key: "toast_display",
        //                         value: false
        //                     }
        //                 })
        //                 dispatch({
        //                     type: CHANGE_VARIABLE,
        //                     payload: {
        //                         key: "toast_status",
        //                         value: ""
        //                     }
        //                 })
        //                 dispatch({
        //                     type: CHANGE_VARIABLE,
        //                     payload: {
        //                         key: "toast_message",
        //                         value: ""
        //                     }
        //                 })
        //             }, 1000);
        //             // orderPlace({cart,data,payment_mode:1,razorpay})

        //         },
        //         theme: {
        //             color: "#E3E6F3",
        //         },

        //     }

        //     const paymentObject = new window.Razorpay(options)
        //     paymentObject.open()

        // } else {

        //     createToast( responseJson.message, "error" )

        // }

    } catch (error) {

        console.log(error)
        createToast("something went wrong", "error")

    }




}