import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartProduct, orderPlace, paymentPOST } from '../../actions'


import "../../styled/checkout.css"
import { changeVariable } from '../../actions/variables'
const Checkout = ({
  cart,
  cart_products,
  order_status,
  user_data,
  coupon,
  coupon_applied,

  getCartProduct, orderPlace, paymentPOST, changeVariable
}) => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    getCartProduct()
  }, [])

  useEffect(() => {
    let total = 0
    cart.map((product) => {
      console.log(product.price, totalAmount, typeof totalAmount, "rkmg", product.price + totalAmount)
      total = total + product.price
      return true
    })
    setTotalAmount(total)
  }, [cart])


  const [totalAmount, setTotalAmount] = useState()


  const [userData, setUserData] = useState({
    userName: user_data.name,
    userPincode: "",
    userPhone: user_data.phone,
    userEmail: user_data.email,
    userAddress: "",
    userCity: "",
    userState: "",
    mode: ""
  })

  const updateState = (event) => {

    const variable = event.target.name
    const value = event.target.value
    setUserData({ ...userData, [variable]: value })
  }


  useEffect(() => {
    if (order_status === "success") {
      navigate("/success", { replace: true })
    }
    // if (order_status === "successqr") {
    //   navigate("/qrcode", { replace: true })
    // }
  }, [order_status])


  const orderPlacefunc = async (cart, userdata) => {
    if (userData.mode === 1) {
      if (coupon_applied) {
        paymentPOST(cart, userdata, coupon.amount)
      }
      else {
        paymentPOST(cart, userdata, 0,0)
      }
      // orderPlace(cart, userdata, 1)
    }
    else if (userData.mode === 0) {
      if (coupon_applied) {
        orderPlace(cart, userdata, 0)
      }
      else{
        orderPlace(cart, userdata, 0,0)
      }
    }
    else {
      changeVariable("toast_display", true)
      changeVariable("toast_status", "failed")
      changeVariable("toast_message", "Kindly Filled the proper Details")
      setTimeout(() => {
        changeVariable("toast_display", false)
        changeVariable("toast_status", "")
        changeVariable("toast_message", "")
      }, 1500);
    }
  }




  return (
    <>
      <Helmet>
        <title>CheckOut | Guarantee Ornamenet House</title>
      </Helmet>
      <div className='checkout py-10 lg:py-16'>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form >

                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                    <input required type="text" id="fname" name="userName" placeholder="John M. Doe" value={userData.userName} onChange={(event) => { updateState(event) }} />
                    <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                    <input required type="text" id="email" name="userEmail" placeholder="john@example.com" value={userData.userEmail} onChange={(event) => { updateState(event) }} />
                    <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                    <input required type="text" id="adr" name="userAddress" placeholder="542 W. 15th Street" value={userData.userAddress} onChange={(event) => { updateState(event) }} />
                    <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                    <input required type="text" id="city" name="userCity" placeholder="New York" value={userData.userCity} onChange={(event) => { updateState(event) }} />
                    <label htmlFor="phone"><i className="fa fa-institution"></i> Phone</label>
                    <input required type="text" id="phone" name="userPhone" placeholder="+0000000000" value={userData.userPhone} onChange={(event) => { updateState(event) }} />

                    <div className="row">
                      {/* <div className="col-50"> */}
                      <label htmlFor="state">State</label>
                      {/* <input required type="text" id="state" name="userState" placeholder="NY" value={userData.userState} onChange={(event) => { updateState(event) }} /> */}
                      <select name="userState" id="state" class="states" placeholder="NY" onChange={(e) => { updateState(e) }}>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                      {/* </div> */}
                      {/* <div className="col-50"> */}
                      <label htmlFor="zip">Pincode</label>
                      <input required type="text" id="zip" name="userPincode" placeholder="10001" value={userData.userPincode} onChange={(event) => { updateState(event) }} />
                      {/* </div> */}
                    </div>
                    <div>
                      <label htmlFor="zip">Delivery Mode</label>
                      <input type="radio" name="mode" id="" value={0} onClick={(e) => { setUserData({ ...userData, mode: 0 }) }} style={{ "margin": " 5px" }} />COD
                      <input type="radio" name='mode' id="" value={1} onClick={(e) => { setUserData({ ...userData, mode: 1 }) }} style={{ "margin": " 5px" }} />Online Payment
                    </div>
                  </div>
                </div>
                <label>
                  {/* <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing */}
                </label>
                <input type="button" value="Continue to checkout" className="btn bg-green-700 " onClick={(e) => { orderPlacefunc(cart, userData) }} />

              </form>
            </div>
          </div>

          <div className="col-25 ">
            <div className="container  shadow-2xl ">
              <h4>Cart
                <span className="price" style={{ "color": "black" }}>
                  {/* <i className="fa fa-shopping-cart"></i> */}
                  {/* <b>{cart.length}</b> */}
                </span>
              </h4>
              <hr />
              {cart && cart.map((product) => {
                return <p key={product._id} style={{ "display": "flex", "justifyContent": "space-between", "padding": "10px 0px", "alignItems": "center" }}>
                  <div className='flex items-center'>
                    <div><img className='h-32 w-32 object-contain px-2' src={product.image.split(",")[0]} alt={product.title} /></div>
                    <div style={{ "width": "250px" }}>{product.title.slice(0, 40)}...</div>
                  </div>
                  <span className="price w-5/6 text-right">₹ {product.price}.00 /-</span>
                </p>
              })}
              <p style={{ "display": "flex", "justifyContent": "space-between", "padding": "10px 0px" }}><div style={{ "width": "200px" }}>Sub Total: </div> <span className="price">₹ {totalAmount}.00 /-</span></p>
              <p style={{ "display": "flex", "justifyContent": "space-between", "padding": "10px 0px" }}><div style={{ "width": "200px" }}>Delivery Charge</div> <span className="price">free</span></p>
              {coupon_applied && <p style={{ "display": "flex", "justifyContent": "space-between", "padding": "10px 0px" }}><div style={{ "width": "200px" }}>Coupon</div> <span className="price">₹ -{(totalAmount * coupon.amount) / 100}.00 /-</span></p>}
              <hr />

              {coupon_applied ? <p>Total <span className="price" style={{ "color": "black" }}><b>₹ {totalAmount - ((totalAmount * coupon.amount) / 100)}.00 /-</b></span></p> :
                <p>Total <span className="price" style={{ "color": "black" }}><b>₹ {totalAmount}.00/-</b></span></p>}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const { cart, cart_products, order_status, user_data, coupon, coupon_applied } = state.variables
  return {
    cart, cart_products, order_status, user_data, coupon, coupon_applied
  }
}
const mapActionsToProps = {
  getCartProduct, orderPlace, paymentPOST, changeVariable
}


export default connect(mapStateToProps, mapActionsToProps)(Checkout)
