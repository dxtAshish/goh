import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const getCartProduct = () => {
    return (dispatch) => {
        getCartProductHelper({ dispatch })
    }
}

export const getCartProductHelper = async ({ dispatch }) => {
    try {
        var cart = await localStorage.getItem("cart")
        var cart_products = await localStorage.getItem("cart_products")
        console.log(cart,cart_products,"erkmj")
        cart = JSON.parse(cart)
        cart_products = JSON.parse(cart_products)
        
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "cart",
                    value: cart
                }
            })
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "cart_products",
                        value: cart_products
                    }
                })
            
        
        
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
