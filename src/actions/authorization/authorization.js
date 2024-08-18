import { CHANGE_VARIABLE } from "../type"
import { base_url } from "../variables"

export const checkAuthorization = () => {

    return ( dispatch ) => {

        checkAuthorizationHelper({ dispatch })

    }

}

const checkAuthorizationHelper = async ({ dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {
        "Content-type": "application/json",
        "authorization":token
    }
    
    const config = {
        headers,
        method: "POST",
    }

    const response =await fetch(base_url+"/user/checkuser",config)
    const response_json = await response.json()
    if(response_json.status==200){
        dispatch({

            type: CHANGE_VARIABLE,
            payload: {

                key: "authorized",
                value: true

            }

        })
        dispatch({

            type: CHANGE_VARIABLE,
            payload: {

                key: "user_data",
                value: response_json.data

            }

        })
        

    }

}