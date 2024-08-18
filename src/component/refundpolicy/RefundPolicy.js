import React from 'react'
import { Link } from 'react-router-dom'

const RefundPolicy = () => {
    return (
        <div class="px-8 mx-auto mt-8 p-4">
            <h1 class="text-2xl font-semibold mb-4">Cancellation and Refund Policy for Guarantee Ornament House</h1>
            {/* <p class="mb-4">Effective Date: [Date]</p> */}

            <p class="mb-4">At Guarantee Ornament House, we strive to provide our customers with an exceptional shopping experience. We understand that there may be instances when you need to cancel an order or request a refund. This Cancellation and Refund Policy outlines the procedures and guidelines for cancellations and refunds to ensure a transparent and fair process.</p>

            <h2 class="text-xl font-semibold mb-2">1. Cancellation Policy:</h2>

            <p class="mb-4">1.1 Order Cancellation by Customer:</p>
            <ul class="list-disc pl-8 mb-4">
                <li>Customers can request an order cancellation within 5 days of placing the order.</li>
                <li>To cancel an order, please log in to your account and navigate to the "Order History" section, or contact our customer support team.</li>
                <li>If the order has not yet been shipped or processed, we will cancel it and provide a full refund.</li>
            </ul>

            <p class="mb-4">1.2 Order Cancellation by Guarantee Ornament House:</p>
            <ul class="list-disc pl-8 mb-4">
                <li>We reserve the right to cancel an order in the following situations:</li>
                <li>Unavailability of the product(s) or service(s).</li>
                <li>Suspected fraudulent activity associated with the order.</li>
                <li>In such cases, a full refund will be issued to the customer.</li>
            </ul>

            {/* <!-- Repeat the same structure for other sections (2. Refund Policy, 3. Contact Us, 4. Changes to this Policy) --> */}
            {/* <!-- ... Previous content ... --> */}

            {/* <!-- 2. Refund Policy --> */}
            <h2 class="text-xl font-semibold mb-2">2. Refund Policy:</h2>

            <p class="mb-4">2.1 Refunds for Cancelled Orders:</p>
            <ul class="list-disc pl-8 mb-4">
                <li>Refunds for cancelled orders will be processed within 4 to 8 business days from the date of cancellation.</li>
                <li>The refund will be made to the original payment method used for the purchase.</li>
                <li>Please allow 4 to 8 business days for the refund to reflect in your account, as processing times may vary depending on your financial institution.</li>
            </ul>

            <p class="mb-4">2.2 Refunds for Damaged or Defective Products:</p>
            <ul class="list-disc pl-8 mb-4">
                <li>If you receive a damaged or defective product, please contact our customer support team within [X days] of receiving the order.</li>
                <li>We may request photographic evidence to assess the issue.</li>
                <li>Once the issue is verified, we will offer you the choice of a replacement or a full refund, including shipping costs.</li>
            </ul>

            <p class="mb-4">2.3 Refunds for Returns:</p>
            <ul class="list-disc pl-8 mb-4">
                <li>If you are dissatisfied with a product and wish to return it, please follow our Return Policy guidelines.</li>
                <li>Refunds for returned products will be processed once the product is received and inspected by our team.</li>
                <li>The refund amount will exclude the original shipping charges, and the customer will be responsible for return shipping costs unless the return is due to our error.</li>
            </ul>

            <p class="mb-4">2.4 Non-Refundable Items:</p>
            <ul class="list-disc pl-8 mb-4">
                <li>Certain items, such as digital downloads or personalized/customized products, are non-refundable unless there is a defect or error on our part.</li>
            </ul>

            {/* <!-- 3. Contact Us --> */}
            <h2 class="text-xl font-semibold mb-2">3. Contact Us:</h2>
            <p>If you have any questions or concerns about our Cancellation and Refund Policy, please contact our customer support team at <Link to={"/contact"}>Contact Us</Link>.</p>

            {/* <!-- 4. Changes to this Policy --> */}
            <h2 class="text-xl font-semibold mb-2">4. Changes to this Policy:</h2>
            <p>Guarantee Ornament House reserves the right to modify or update this Cancellation and Refund Policy at any time without prior notice. Any changes will be posted on our website.</p>
            <p>By making a purchase on Guarantee Ornament House, you agree to abide by the terms and conditions outlined in this Cancellation and Refund Policy.</p>
        </div>



    )
}

export default RefundPolicy