import React from 'react'
import { Link } from 'react-router-dom'

const ShippingPolicy = () => {
    return (
        <div class="mx-auto py-8 px-8">
        <h1 class="text-3xl font-semibold text-center mb-8">Shipping and Delivery Policy</h1>

        {/* <p class="mb-4">Effective Date: [Date]</p> */}

        <p class="mb-4">At Guarantee Ornament House, we are committed to providing our customers with a seamless and reliable shopping experience. This Shipping and Delivery Policy outlines the procedures and guidelines related to the shipping and delivery of products purchased on our website.</p>

        <h2 class="text-xl font-semibold mt-4 mb-2">1. Shipping Methods:</h2>

        <h3 class="text-lg font-semibold mb-2">1.1 Domestic Shipping:</h3>
        <ul class="list-disc ml-6">
            <li>We offer domestic shipping services to customers.</li>
            <li>Shipping options may include standard, expedited, and express delivery, depending on your location and the product(s) you purchase.</li>
            <li>Shipping fees are calculated based on the shipping method selected and the weight and dimensions of the product(s).</li>
        </ul>

        <h3 class="text-lg font-semibold mt-4 mb-2">1.2 International Shipping:</h3>
        <ul class="list-disc ml-6">
            <li>We also offer international shipping to customers outside.</li>
            <li>International shipping options and rates may vary depending on the destination country and the product(s) you order.</li>
            <li>Please note that international orders may be subject to customs duties, taxes, and import fees imposed by the destination country. Customers are responsible for these additional charges.</li>
        </ul>

        {/* <!-- Continue with the rest of the content following a similar structure --> */}

        <p class="mt-8">By making a purchase on Guarantee Ornament House, you agree to abide by the terms and conditions outlined in this Shipping and Delivery Policy.</p>

        <p class="mt-4">Please note that this policy is a sample and should be customized to suit your specific ecommerce business and legal requirements. Consult with legal professionals to ensure compliance with local and international laws.</p>

        {/* <h2 class="text-xl font-semibold mt-4 mb-2">2. Order Processing Time:</h2>
        <p class="mb-4">Orders are typically processed within [X business days] from the date of purchase.</p>
        <p class="mb-4">Processing times may vary depending on the availability of the product(s) and order volume.</p> */}

        <h2 class="text-xl font-semibold mt-4 mb-2">3. Estimated Delivery Times:</h2>
        <p class="mb-4">The estimated delivery time is typically provided during the checkout process and may range from 4 to 10 days, depending on the chosen shipping method and your location.</p>
        <p class="mb-4">Please note that delivery times are estimates and are not guaranteed. Actual delivery times may vary due to factors beyond our control, such as weather conditions, customs processing, and carrier delays.</p>

        <h2 class="text-xl font-semibold mt-4 mb-2">4. Tracking Orders:</h2>
        <p class="mb-4">Once your order is shipped, you will receive a shipping confirmation email with a tracking number.</p>
        <p class="mb-4">You can track the status and location of your package using the provided tracking number through our website or the carrier's website.</p>

        <h2 class="text-xl font-semibold mt-4 mb-2">5. Delivery Address:</h2>
        <p class="mb-4">Customers are responsible for providing accurate and complete delivery information, including the recipient's name, shipping address, and contact details.</p>
        <p class="mb-4">We are not responsible for delivery delays or issues caused by incorrect or incomplete delivery information.</p>

        <h2 class="text-xl font-semibold mt-4 mb-2">6. Delivery Attempts:</h2>
        <p class="mb-4">In the event of a failed delivery attempt, the carrier will typically make additional delivery attempts or leave a notice with instructions for rescheduling or picking up the package at a local depot.</p>
        <p class="mb-4">It is the customer's responsibility to follow the carrier's instructions to ensure successful delivery.</p>

        <h2 class="text-xl font-semibold mt-4 mb-2">7. Lost or Missing Packages:</h2>
        <p class="mb-4">If you believe your package is lost or missing, please contact our customer support team as soon as possible.</p>
        <p class="mb-4">We will initiate an investigation with the carrier to locate the package or arrange for a replacement or refund if necessary.</p>

        <h2 class="text-xl font-semibold mt-4 mb-2">8. Contact Us:</h2>
        <p class="mb-4">If you have any questions or concerns about our Shipping and Delivery Policy, please contact our customer support team at <Link to={"/contact"}>Contact Us</Link></p>

        <h2 class="text-xl font-semibold mt-4 mb-2">9. Changes to this Policy:</h2>
        <p class="mb-4">Guarantee Ornament House reserves the right to modify or update this Shipping and Delivery Policy at any time without prior notice. Any changes will be posted on our website.</p>

        {/* <!-- End of content --> */}

        <p class="mt-8">By making a purchase on Guarantee Ornament House, you agree to abide by the terms and conditions outlined in this Shipping and Delivery Policy.</p>


    </div>
    )
}

export default ShippingPolicy