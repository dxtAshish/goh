import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const categoriesFetchOnHome = (data) => {
    return (dispatch) => {
        categoriesFetchOnHomeHelper({ data, dispatch })
    }
}

export const categoriesFetchOnHomeHelper = async ({ data, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET"
    }
    console.log("ejrfm")
    const url = base_url + "/home"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "categories_array",
                    value: response_json.categories_home
                }
            })
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "products_array",
                        value: response_json.products_home
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
