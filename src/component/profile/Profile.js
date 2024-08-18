import React, { useState } from 'react'
import Login from "../signup-login/Login"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Orders from './orders/Orders'
const Profile = ({
    authorized,
    user_data
}) => {

    const logout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    console.log(authorized,user_data, "here is ")
    const [activeTab, setActiveTab] = useState("Profile")
    return (

        <>
            {authorized &&
                <div className="container mx-auto px-2 max-w-7xl lg:h-[400px]">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className=" lg:w-1/5 w-4/6  ">
                            <div className="flex justify-evenly lg:flex-col flex-row md:mt-5">
                                <div className={activeTab === "Profile" ? "py-2.5 font-bold text-black cursor-pointer" : "py-2.5 cursor-pointer font-bold "} onClick={()=>{setActiveTab("Profile")}}>Profile</div>
                                <div className={activeTab === "Orders" ? "py-2.5 font-bold text-black cursor-pointer" : "py-2.5 cursor-pointer font-bold "} onClick={()=>{setActiveTab("Orders")}}>Orders</div>
                                {/* <Link to="/order-tracking" passHref>
                                    <a>
                                        <div className={activeTab === "order-tracking" ? "py-2.5 font-bold  text-black" : "py-2.5 font-bold text-black"}>Track order</div>
                                    </a>
                                </Link>
                                <Link to="/profile/addresses" passHref>
                                    <a>
                                        <div className={activeTab === "Addresses" ? "py-2.5 font-bold  text-black" : "py-2.5 font-bold text-black"}>Addresses</div>
                                    </a>
                                </Link> */}

                                <div className="py-2.5 cursor-pointer font-bold" onClick={() => logout()}>Logout</div>
                            </div>
                        </div>
                        {activeTab=="Profile"?<div class="w-full mx-auto bg-white p-4 rounded-lg ">
                        <h1 class="text-2xl font-semibold mb-4">Your Profile</h1>
                            Name: {user_data.name}
                        </div>:
                        <Orders />}
                    </div>
                </div>
            }
            {!authorized && <Login />}
        </>

    )
}
const mapStateToProps = (state) => {
    const {
        authorized,user_data
    } = state.variables
    return {
        authorized,
        user_data
    }
}

const mapActionsToProps = {

}
export default connect(mapStateToProps, mapActionsToProps)(Profile)