import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const productsFetchByOrder = (data,page,order) => {
    return (dispatch) => {
        productsFetchByOrderHelper({ data,page,order, dispatch })
    }
}

export const productsFetchByOrderHelper = async ({ data,page,order, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }

    const config = {
        headers,
        method: "GET",
       
    }

    const url = base_url + `/products/getproducts/${data}/fashion/${order}?page=${page===undefined?1:page}`
    try {
        dispatch({
            type: CHANGE_VARIABLE,
            payload: {
                key: "products_array",
                value: []
            }
        })
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json)
        console.log(response_json.status === 200)
        if (response_json) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "products_array",
                    value: response_json.data
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "currentPage",
                    value: response_json.page
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "pages",
                    value: response_json.pages
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
