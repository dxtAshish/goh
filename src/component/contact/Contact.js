import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { postMessage } from '../../actions'

const Contact = ({
    postMessage
}) => {


    const [data, setData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })


    const updateState = (e) => {
        const variable = e.target.name
        const value = e.target.value
        setData({ ...data, [variable]: value })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Helmet>
                <title>Contact us | Guarantee Ornament House</title>
                <meta name='title' content={` contact us Guarantee Ornament House (Shop the Exclusive) jewellery`} />
                <meta name="description" content={" contact us Shop Online Jewllery , and get them delivered at our doorstep with our free and fast delivery. Shop online precious jewellery only on Guarantee Ornament House"} />
                <meta name="keywords" content={`Contact us Feel free to Contact With us , Get in Touch`} />
            </Helmet>

            <section id="page-header" class="about-header">
                <h2>#Feel Free to talk</h2>

                {/* <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
                </p> */}
            </section>

            <section id="contact-details" class="section-p1">
                <div class="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency locations or contact us today</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li>
                            <span><strong>Address</strong></span>
                            <p>121A Chaubeji ka Phatak, Kinari Bazar, Agra -282003</p>
                        </li>
                        <li>
                            <span><strong>Sale Depot</strong></span>
                            <p>3/564 Rui ki mandi crossīng shahganj, Agra-282010</p>
                        </li>

                        <li>
                            <span>☎</span>
                            <p>9897037713</p>
                        </li>
                        <li>
                            <span>✉</span>
                            <p>guaranteeornamenthouse@gmail.com</p>
                        </li>
                        {/* <li>
                            <span>🕦</span>
                            <p>Monday to Saturday: 9.00am t0 16.00pm</p>
                        </li> */}
                    </div>
                </div>

                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.368740249189!2d77.9839914807463!3d27.176145088123896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974771c42ad7cbb%3A0xb4103b45e79cd1f1!2sRui%20Ki%20Mandi%20Crossing%2C%20Indra%20Colony%2C%20Agra%2C%20Uttar%20Pradesh%20282010!5e0!3m2!1sen!2sin!4v1691520356800!5m2!1sen!2sin" width="600" height="450" style={{ "border": "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>

            <section id="form-details">
                <form action="">
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <input required type="text" placeholder="Your Name" name="name" value={data.name} onChange={(e) => { updateState(e) }} />
                    <input required type="text" placeholder="E-mail" name='email' value={data.email} onChange={(e) => { updateState(e) }} />
                    <input required type="text" placeholder="Phone" name='phone' value={data.phone} onChange={(e) => { updateState(e) }} />
                    <input required type="text" placeholder="Subject" name='subject' value={data.subject} onChange={(e) => { updateState(e) }} />
                    <textarea required name="message" id="" cols="30" rows="10" placeholder="Your Message" value={data.message} onChange={(e) => { updateState(e) }} ></textarea>
                    <button class="normal" type='button' onClick={() => { postMessage(data) }}  >Submit</button>
                </form>

            </section>

        </>
    )
}

const mapStateToProps = (state) => {
    const { } = state.variables
    return {}
}

const mapActionsToProps = {
    postMessage
}

export default connect(mapStateToProps, mapActionsToProps)(Contact)