import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const searchProducts = (data) => {
    return (dispatch) => {
        searchProductsHelper({ data, dispatch })
    }
}

export const searchProductsHelper = async ({ data,dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }

    const config = {
        headers,
        method: "GET",
       
    }

    const url = base_url + `/search/query/${data}`
    console.log(url)
    try {
        
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "searched_products",
                    value: response_json.data.hits
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
