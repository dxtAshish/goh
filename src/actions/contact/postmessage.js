import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import { createToast } from "../toast"
export const postMessage = (data) => {
    return (dispatch) => {
        postMessageHelper({ data, dispatch })
    }
}

export const postMessageHelper = async ({ data, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }
    const body = JSON.stringify(
        data
    )
    const config = {
        headers,
        method: "POST",
        body
    }
    const url = base_url + "/messages/post"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json.status === 201) {
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
                value: response_json.message
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
                    value: ""
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "toast_message",
                    value: ""
                }
            })
        }, 2000);
           
        }
        else{
                        
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
                    value: "failed"
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "toast_message",
                    value: response_json.message
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
                        value: ""
                    }
                })
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "toast_message",
                        value: ""
                    }
                })
            }, 2000);
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
