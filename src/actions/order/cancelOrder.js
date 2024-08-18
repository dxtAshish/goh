import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import { createToast } from "../toast"

export const cancelOrder = (data) => {

    return (dispatch) => {

        cancelOrderHelper({ data, dispatch })

    }

}
export const cancelOrderHelper = async ({ data, dispatch }) => {
    const token = await localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "authorization": token
    }

    const config = {
        headers,
        method: "PATCH"
    }

    const url = base_url + `/order/cancel/${data}`
    try {
        const response = await fetch(url, config)
        const responseJson = await response.json()
        console.log(responseJson, "response")
        if (responseJson.status === 200) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "toast_display",
                    value: true
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "toast_status",
                    value: "success"
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "toast_message",
                    value: "Order Cancelled"
                }
            })

            setTimeout(() => {
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "toast_display",
                        value: false
                    }
                })
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "toast_status",
                        value: "success"
                    }
                })
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "toast_message",
                        value: ""
                    }
                })
                
            }, 1000);



        }

    }
    catch (err) {
        console.log(err)
    }


}
