import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const checkCoupon = (data, totalAmount) => {

    return (dispatch) => {

        checkCouponHelper({ data, totalAmount, dispatch })

    }

}

export const checkCouponHelper = async ({ data, totalAmount, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "authorization": token
    }
    const body = JSON.stringify({
        code: data
    })
    const config = {
        body,
        headers,
        method: "POST"
    }
    const url = base_url + "/coupon/check"
    try {
        const response = await fetch(url, config)
        const responseJson = await response.json()

        if (responseJson.status == 200) {
            console.log(responseJson,"35",totalAmount)
            if (responseJson.data.limit < totalAmount) {

                localStorage.setItem("coupon", responseJson.data._id)
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "coupon_applied",
                        value: true
                    }
                })
                dispatch({
                    type: CHANGE_VARIABLE,
                    payload: {
                        key: "coupon",
                        value: responseJson.data
                    }
                })
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
                        value: "Coupon Successfully Applied"
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
            else {
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
                        value: `Your Total Amount should be more than ${responseJson.data.limit} `
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
        }
        else {
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
                    value: "Unable to Apply Coupon"
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
    } catch (error) {

    }

}