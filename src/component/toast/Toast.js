import React from 'react'
import { connect } from 'react-redux'
import { changeVariable } from '../../actions/variables'

const Toast = ({
    toast_message,
    toast_status,
    toast_display,

    changeVariable
}) => {
    return (

        <div className={`notification-bar ${!toast_display ? "w-0 p-0" : "w-fit px-5 "} py-4 overflow-hidden duration-300 flex items-center fixed right-4 top-28 transform -translate-y-1/2  text-xl ${toast_status === "success" ? "bg-green-500" : "bg-red-500"} text-white rounded shadow-lg`}>
            <span className="block mx-3">{toast_message}</span>
            {toast_status == "success" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>}


        </div>
    )
}

const mapStateToProps = (state) => {
    const {
        toast_message,
        toast_status,
        toast_display
    } = state.variables
    return {
        toast_message,
        toast_status,
        toast_display
    }
}

const mapActionsToProps = {
    changeVariable
}

export default connect(mapStateToProps, mapActionsToProps)(Toast)