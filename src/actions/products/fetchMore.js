import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const productsFetchMore = (data, page, array, order) => {
    return (dispatch) => {
        productsFetchMoreHelper({ data, page, array, order, dispatch })
    }
}

export const productsFetchMoreHelper = async ({ data, page, array, order, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }

    const config = {
        headers,
        method: "GET",

    }
    let url =""
    if (order === undefined) {
        url = base_url + `/products/getproducts/${data}/fashion?page=${page}`
    }
    else {
        url = base_url + `/products/getproducts/${data}/fashion/${order}?page=${page}`
    }
    try {
        console.log(url, 22)
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json)
        console.log(response_json.status === 200)
        if (response_json) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "products_array",
                    value: array.concat(response_json.data)
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "currentPage",
                    value: response_json.page
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
