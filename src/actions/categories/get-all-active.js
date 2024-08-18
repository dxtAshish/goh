import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const categoriesFetchActive = () => {
    return (dispatch) => {
        categoriesFetchActiveHelper({ dispatch })
    }
}

 const categoriesFetchActiveHelper = async ({  dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET"
    }
    const url = base_url + "/category/getcategory/active"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json,21)
        if (response_json) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "categoriesall_array",
                    value: response_json.data
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
