import React, { useEffect } from 'react'
import QRCODE  from "../../img/QRcode.png"
import { Link } from 'react-router-dom'
import { changeVariable } from '../../actions/variables'
import { connect } from 'react-redux'
const QRCode = ({
  changeVariable
}) => {
  useEffect(() => {
    changeVariable("order_status","")
  }, [])
  
  return (
    <div className='w-full h-[100vh] my-16'>
        <h1 className='text-3xl text-center my-5'>Kindly share the Payment Reciept At our <Link to={"/contact"}> Contact </Link> at 9897037713 </h1>
        <img src={QRCODE} alt="" className='h-full mx-auto' />
    </div>
  )
}
const mapStateToProps=(state)=>{
  const {

  }=state.variables 
  return {

  }
}
const mapActionsToProps = {
  changeVariable
}

export default connect(mapStateToProps,mapActionsToProps)(QRCode)