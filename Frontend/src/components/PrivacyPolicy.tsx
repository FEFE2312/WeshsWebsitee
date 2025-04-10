import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-dark-gray min-h-screen text-cream px-6 py-12">
      <div className="container mx-auto max-w-4xl bg-medium-gray p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-accent">Privacy Policy of WESH'S LLC</h1>
        <p className="mb-6">
          WESH'S LLC is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, <a href="https://www.weshs.com" className="text-accent hover:underline">www.weshs.com</a> and make purchases from our store.
        </p>
        <p className="mb-6">
          Please read this Privacy Policy carefully. By accessing or using our Website, you agree to the collection and use of your information as described in this Privacy Policy.
        </p>

        {/* Section 1: Information We Collect */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">1. Information We Collect</h2>
        <p className="mb-4">We collect the following types of information when you visit our Website or make a purchase:</p>
        
        <h3 className="text-lg font-bold text-cream mb-2">Personal Information</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Shipping address</li>
          <li>Billing information (including credit card details)</li>
          <li>Phone number</li>
          <li>IP address</li>
        </ul>

        <h3 className="text-lg font-bold text-cream mb-2">Non-Personal Information</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Browser type and version</li>
          <li>Device type</li>
          <li>Geolocation information</li>
          <li>User behavior data (pages visited, time spent on pages, etc.)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        {/* Section 2: How We Use Your Information */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-6">
          <li>To process and complete your orders</li>
          <li>To manage your account and provide customer support</li>
          <li>To improve our Website and services</li>
          <li>To send order confirmations, invoices, and other transaction-related information</li>
          <li>To send promotional emails or newsletters (only with your consent)</li>
          <li>To detect and prevent fraud</li>
          <li>To comply with legal obligations</li>
        </ul>

        {/* Section 3: Sharing Your Information */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">3. Sharing Your Information</h2>
        <p className="mb-4">We may share your personal information with third parties in the following situations:</p>
        <ul className="list-disc list-inside mb-6">
          <li><span className="font-bold">Service Providers:</span> We use third-party service providers to process payments, deliver products, and manage customer support. These service providers are required to protect your data in accordance with our privacy practices.</li>
          <li><span className="font-bold">Legal Compliance:</span> We may share your information if required by law, regulation, or legal process (such as a subpoena or court order).</li>
          <li><span className="font-bold">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of the transaction.</li>
        </ul>
        <p className="mb-6 font-bold text-red-400">We will never sell your personal information to third parties for marketing purposes.</p>

        {/* Section 4: Cookies and Tracking Technologies */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">4. Cookies and Tracking Technologies</h2>
        <p className="mb-6">
          Our Website uses cookies and similar tracking technologies to enhance user experience and analyze Website usage. Cookies are small data files placed on your device when you visit our Website.
        </p>
        <p className="mb-6">
          You can control cookie settings through your browser or by using our Website’s cookie consent tool. However, disabling cookies may impact the functionality of the Website.
        </p>

        {/* Section 5: Data Retention */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">5. Data Retention</h2>
        <p className="mb-6">
          We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. For example, we may retain transaction data for accounting and tax purposes.
        </p>

        {/* Section 6: Data Security */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">6. Data Security</h2>
        <p className="mb-6">
          We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
        </p>

        {/* Contact Info */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">7. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="font-semibold">Email: <a href="mailto:support@weshs.com" className="text-accent hover:underline">support@weshs.com</a></p>
        <p className="font-semibold mb-6">Phone: (555) 123-4567</p>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a href="/" className="text-accent hover:underline text-lg font-semibold">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
