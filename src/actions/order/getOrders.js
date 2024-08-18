import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import { createToast } from "../toast"

export const getOrders = () => {

    return (dispatch)=> {

        getOrdersHelper({ dispatch})

    }

}
export const getOrdersHelper = async ({dispatch }) => {
    const token = await localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "authorization":token
    }

    const config = {
        headers,
        method:"get"
    }

    const url= base_url+"/order/getuserorders"
    try{
        const response = await fetch(url,config)
        const responseJson =  await response.json()
        console.log(responseJson,"response")
        if(responseJson.status===200){
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "orders_array",
                    value: responseJson.data
                }
            })
        
            
        }
        
    }
    catch(err){
        console.log(err)
    }


}
