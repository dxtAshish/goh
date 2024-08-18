import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const productsFetch = (data,page) => {
    return (dispatch) => {
        productsFetchHelper({ data,page, dispatch })
    }
}

export const productsFetchHelper = async ({ data,page, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }

    const config = {
        headers,
        method: "GET",
       
    }

    const url = base_url + `/products/getproducts/${data}/fashion?page=${page===undefined?1:page}`
    console.log(url)
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
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "category_banner",
                    value: response_json.category.banner_image
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
