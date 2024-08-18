import React from 'react'
import { Link } from 'react-router-dom'

const TermsAndConditions = () => {
    return (
        <div className='p-10'>
            <header class="text-2xl font-semibold mb-6">Terms and Conditions</header>

            <section class="prose max-w-none text-base">
                <h2 class="text-lg">1. Introduction</h2>
                <p>Welcome to Guarantee Ornament House's terms and conditions. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Guarantee Ornament House if you do not agree to all of the terms and conditions stated on this page.</p>

                <h2 class="text-lg">2. Intellectual Property Rights</h2>
                <p>Other than the content you own, under these terms, Guarantee Ornament House and/or its licensors own all the intellectual property rights and materials contained in this website.</p>

                <h2 class="text-lg">3. Restrictions</h2>
                <p>You are specifically restricted from all of the following:</p>
                <ul>
                    <li>Publishing any website material in any other media;</li>
                    <li>Selling, sublicensing, and/or otherwise commercializing any website material;</li>
                    <li>Publicly performing and/or showing any website material;</li>
                    <li>Using this website in any way that is or may be damaging to this website;</li>
                    <li>Using this website in any way that impacts user access to this website;</li>
                    <li>Using this website contrary to applicable laws and regulations, or in any way that may cause harm to the website, or to any person or business entity;</li>
                    <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website;</li>
                </ul>
                {/* <!-- Continue adding sections and content as needed --> */}

                <h2 class="text-lg">14. Contact Information</h2>
                <p>If you have any questions about these terms and conditions, please <u><Link to={"/contact"}>contact us</Link></u></p>

            </section>
        </div>


    )
}

export default TermsAndConditions