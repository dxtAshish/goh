import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const signupUser = (data) => {
    return (dispatch) => {
        signupUserHelper({ data, dispatch })
    }
}

export const signupUserHelper = async ({ data, dispatch }) => {
    const {name,email,password,phone}=data
    const headers = {
        "Content-type": "application/json"
    }
    const body = JSON.stringify({
        name:name,
        email:email,
        phone:phone,
        password:password
    })
    const config = {
        headers,
        method: "POST",
        body
    }
    const url = base_url + "/user/adduser"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json,29)
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
                    value: "Successfully Registered"
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
                window.location.replace("/signin")
            }, 1000);
            
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
                    value: "Already Registered"
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
