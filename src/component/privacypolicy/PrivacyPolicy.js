import React, { useEffect } from 'react'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="py-10">
  <div className="container mx-auto px-4 py-8">
    <div className="rounded-lg bg-white p-8 ">
      <h1 className="mb-4 text-2xl font-semibold">Introduction</h1>

      <p className="mb-4">Welcome to Guarantee Ornament House. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website and use our services. By accessing or using our website, you consent to the practices described in this Privacy Policy.</p>

      <h2 className="mb-2 text-xl font-semibold">Information We Collect</h2>
      <p className="mb-4">We may collect personal information such as your name, email address, shipping address, payment information, and browsing activity. We also collect non-personal information data to improve our website's functionality.</p>

      <h2 className="mb-2 text-xl font-semibold">How We Use Your Information</h2>
      <p className="mb-4">We use your personal information to process orders, provide customer support, send promotional materials, and personalize your experience. Non-personal information is used to analyze trends and improve our website.</p>

      <h2 className="mb-2 text-xl font-semibold">Cookies</h2>
      <p className="mb-4">We use cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our website. You can manage your cookie preferences through your browser settings.</p>

      <h2 className="mb-2 text-xl font-semibold">Third Party Privacy Policies</h2>
      <p className="mb-4">We may share your information with third-party service providers to fulfill orders, process payments, and improve our services. We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

      <h2 className="mb-2 text-xl font-semibold">Consent</h2>
      <p className="mb-4">By using our website and services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and processing of your personal information as described herein.</p>

      <p className="mb-4">You also consent to the use of cookies and similar technologies.</p>

      <p className="mb-4">If you do not agree with our Privacy Policy or Terms of Service, please do not use our website or services.</p>

      <p className="mb-4">If you are providing us with personal information of another individual, you must have the necessary legal authority to provide their information and obtain their consent for its use as described in this Privacy Policy.</p>

      <h2 className="mb-2 text-xl font-semibold">Update</h2>
       <p className="mb-4">This Privacy Policy was last updated on <span className="font-semibold">August 17, 2023</span>.</p>
        
        <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices and services. Any changes will be effective immediately upon posting the updated policy on our website. We encourage you to review this page periodically for any updates.</p>

        <p className="mb-4">Your continued use of our website and services after any modifications to this Privacy Policy constitutes your acceptance of the changes.</p>

    </div>
  </div>
</div>

  )
}

export default PrivacyPolicy