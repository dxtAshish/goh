import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const RemoveFromCart = (data, cart, cart_products) => {
    return (dispatch) => {
        RemoveFromCartHelper({ data, cart, cart_products, dispatch })
    }
}

export const RemoveFromCartHelper = async ({ data, cart, cart_products, dispatch }) => {
    try {
        if (data) {
            console.log(data)
            var updatedCart = []
            var updatedCartProducts = []
            cart.map((product) => {
                if (product._id !== data) {
                    updatedCart.push(product)
                }
            })
            cart_products.map((id) => {
                if (id !== data) {
                    updatedCartProducts.push(id)
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "cart",
                    value: updatedCart
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "cart_products",
                    value: updatedCartProducts
                }
            })
            await localStorage.setItem("cart", JSON.stringify(updatedCart))
            await localStorage.setItem("cart_products", JSON.stringify(updatedCartProducts))
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
