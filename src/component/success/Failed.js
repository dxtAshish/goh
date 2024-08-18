import React, { useEffect } from 'react'
import "../../styled/SuccessPage.css"
import error from "../../img/errorimg.gif"
import { Link } from 'react-router-dom'
import { changeVariable } from '../../actions/variables'
import { connect } from 'react-redux'

const FailedPage = ({
  changeVariable,
  order_status
}) => {



  return (
    <div className='success'>
      <img style={{ "height": "100px" }} src={error} type="video/mp4" />
      <br /><br /><h2>Your Order is not placed Successfully </h2>
      <h3>We will reach you soon!</h3>
      <Link to={"/"} ><button style={{ "width": "fitContent", "background": "#E3E6F3", "padding": "10px", "borderRadius": "10px", "margin": "30px" }}>Back To Home</button></Link>
    </div>
  )
}
const mapStateToProps = (state) => {
  const {
    order_status
  } = state.variables
  return {
    order_status
  }
}

const mapActionsToProps = {
  changeVariable
}
export default connect(mapStateToProps, mapActionsToProps)(FailedPage)