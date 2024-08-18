import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const productFetch = (data) => {
    return (dispatch) => {
        productFetchHelper({ data, dispatch })
    }
}

export const productFetchHelper = async ({ data, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }

    const config = {
        headers,
        method: "GET",
       
    }

    const url = base_url + `/products/${data}`
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json.status === 200)
        console.log(response_json,"25")
        if (response_json) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "productData",
                    value: response_json.data
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "products_array",
                    value: response_json.recommendation
                }
            })
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
