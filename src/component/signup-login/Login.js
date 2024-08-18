import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {connect} from "react-redux"
import { loginUser, signupUser } from '../../actions'
const Login = ({
    signupUser,
    loginUser
}) => {

    
    const [loginState, setLoginState] = useState({email:"",password:""})
    const [signUpState, setSignUpState] = useState({name:"",email:"",phone:"",password:""})


    const updateLoginState = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setLoginState({...loginState,[name]:value})
    }

    const updateSignUpState = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setSignUpState({...signUpState,[name]:value})
    }

    const submitForm = (event)=>{
        event.preventDefault()
        if(event.target.name=="signup"){
            signupUser(signUpState)
        }
        if(event.target.name=="signin"){
            loginUser(loginState)
        }
    }

    const location = useLocation()
    const [pathName, setPathName] = useState("/signup")
    useEffect(() => {
        setPathName(location.pathname)
    }, [location])


    return (
        <section className="min-h-screen flex items-stretch text-white ">
            <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ "background-image": " url(https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80)" }}>
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-left tracking-wide text-white">Keep it special</h1>
                    <p className="text-3xl my-4 text-white">Capture your personal memory in unique way, anywhere.</p>
                </div>

            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{ "background-color": " #ffff" }}>
                <div className="absolute h-screen lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{ "background-image": " url(https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80)" }}>
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                </div>
                <div className="w-full py-6 z-20">
                    <h1 className="my-6 text-3xl font-serif text-white lg:text-gray-900">
                        Guarantee Ornament House
                    </h1>
                    {pathName == "/signin" ?
                        <form action="" method='post'  className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                            <div className="pb-2 pt-4">
                                <input type="email" name="email" id="email"  value={loginState.email} placeholder="Email" onChange={(e)=>{updateLoginState(e)}} className="block w-full p-4 text-lg rounded-sm bg-[#161616]" />
                            </div>
                            <div className="pb-2 pt-4">
                                <input className="block w-full p-4 text-lg rounded-sm bg-[#161616]" value={loginState.password} onChange={(e)=>{updateLoginState(e)}} type="password" name="password" id="password" placeholder="Password" />
                            </div>

                            <div className="px-4 pb-2 pt-4">
                                <button name='signin' onClick={(e)=>{submitForm(e)}} className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">sign in</button>
                            </div>
                            <div className="text-center text-gray-400 hover:underline hover:text-gray-100">
                                <Link to={"/profile"}>Don't have Account?</Link>
                            </div>

                        </form>
                        :
                        <form action="" method='post'  className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                            <div className="pb-2 pt-4">
                                <input type="text" name="name" onChange={(e)=>{updateSignUpState(e)}} value={signUpState.name} id="name" placeholder="Name" className="block w-full p-4 text-lg rounded-sm bg-[#161616]" />
                            </div>
                            <div className="pb-2 ">
                                <input type="email" name="email" onChange={(e)=>{updateSignUpState(e)}} value={signUpState.email} id="email" placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-[#161616]" />
                            </div>
                            <div className="pb-2 pt-4">
                                <input type="tel" name="phone" onChange={(e)=>{updateSignUpState(e)}} value={signUpState.phone} id="phone" placeholder="Phone Number" className="block w-full p-4 text-lg rounded-sm bg-[#161616]" />
                            </div>
                            <div className="pb-2 pt-4">
                                <input className="block w-full p-4 text-lg rounded-sm bg-[#161616]" onChange={(e)=>{updateSignUpState(e)}}  value={signUpState.password} type="password" name="password" id="password" placeholder="Password" />
                            </div>

                            <div className="px-4 pb-2 pt-4">
                                <button onClick={(e)=>{submitForm(e)}} name='signup' className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">Sign Up</button>
                            </div>
                            <div className="text-center text-gray-400 hover:underline hover:text-gray-100">
                                <Link to={"/signin"}>Already Have Account?</Link>
                            </div>

                        </form>}
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state)=>{
    const {

    }=state.variables
    return {

    }
}

const mapActionsToProps  ={
    signupUser,
    loginUser
}
export default connect(mapStateToProps,mapActionsToProps)(Login)
