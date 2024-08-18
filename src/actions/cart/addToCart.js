import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import { createToast } from "../toast"
export const addToCart = (data, cart, cart_products) => {
    return (dispatch) => {
        addToCartHelper({ data, cart, cart_products, dispatch })
    }
}

export const addToCartHelper = async ({ data, cart, cart_products, dispatch }) => {
    try {
        if (!cart_products.includes(data._id)) {

            if (cart !== []) {
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "cart",
                        value: cart.concat(data)
                    }
                })
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "cart_products",
                        value: cart_products.concat(data._id)
                    }
                })
                
                // createToast("Added to Cart", "success")
                await localStorage.setItem("cart", JSON.stringify(cart.concat(data)))
                await localStorage.setItem("cart_products", JSON.stringify(cart_products.concat(data._id)))
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "toast_display",
                        value: true
                    }
                })
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "toast_status",
                        value: "success"
                    }
                })
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "toast_message",
                        value: "Products Added To Cart"
                    }
                })
                setTimeout(() => {
                    dispatch({
                        type: CHANGE_VARIABLE,
                        payload: {
                            key: "toast_display",
                            value: false
                        }
                    })
                    dispatch({
                        type: CHANGE_VARIABLE,
                        payload: {
                            key: "toast_status",
                            value: ""
                        }
                    })
                    dispatch({
                        type: CHANGE_VARIABLE,
                        payload: {
                            key: "toast_message",
                            value: ""
                        }
                    })
                }, 2000);
            }
            else {
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "cart",
                        value: data
                    }
                })
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "cart_products",
                        value: data._id
                    }
                })

                await localStorage.setItem("cart", JSON.stringify(data))
                await localStorage.setItem("cart_products", JSON.stringify(data._id))
            }
        }
        else {
            createToast("Added to Cart", "success")
        }
        // fetch(url,config).then(response=>response.json()).then(responseJson=>{
        //     console.log(responseJson)
        //     if(responseJson){
        //         dispatch({
        //             type:CHANGE_VARIABLE,
        //             payload:{
        //                 key:"products_array",
        //                 value:responseJson.data
        //             }
        //         })
        //     }



        // })


    }
    catch (err) {
        console.log(err)
    }
}
