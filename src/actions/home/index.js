import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const getHome = (data) => {
    return (dispatch) => {
        getHomeHelper({ data, dispatch })
    }
}

export const getHomeHelper = async ({ data, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET"
    }
    const url = base_url + "/home"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json,"here i m ")
        if (response_json.status === 200) {
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
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "products_home",
                    value: response_json.products_home
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "mastHead",
                    value: response_json.categories_mastHead
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "banners",
                    value: response_json.banner
                }
            })
        
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "new_products_arrival",
                    value: response_json.latest_products
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
