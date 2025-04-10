import React from 'react';

const LegalNotice: React.FC = () => {
  return (
    <div className="bg-medium-gray min-h-screen text-cream px-6 py-12">
      <div className="container mx-auto max-w-4xl bg-dark-gray p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-accent">Legal Notice</h1>

        <p className="mb-4">
          <strong>Company Name:</strong> WESH'S LLC
        </p>
        <p className="mb-4">
          <strong>Owner / Managing Director:</strong> Hussein Musa Sadq
        </p>
        <p className="mb-4">
          <strong>Address:</strong> Ad Al-Saade 61, 10006, Al-Kadhimiya, Baghdad, Iraq
        </p>
        <p className="mb-4">
          <strong>E-Mail:</strong> <a href="mailto:business@weshs.com" className="text-accent hover:underline">business@weshs.com</a>
        </p>
        <p className="mb-4">
          <strong>VAT Identification Number:</strong> IQ-486028504
        </p>
        <p className="mb-4">
          <strong>Regulatory Authority:</strong> Ministry of Trade – Companies Registration Department, Baghdad, Iraq
        </p>
        <p className="mb-4">
          <strong>Business Activity:</strong> Sports Shop (Sales & Management)
        </p>
        <p className="mb-4">
          <strong>Dispute Resolution:</strong> We are not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board.
        </p>
        <p className="mb-4">
          <strong>Liability for Content:</strong> The contents of our website have been created with the utmost care. However, we cannot guarantee the correctness, completeness, or up-to-dateness of the content.
        </p>
        <p className="mb-4">
          <strong>Liability for Links:</strong> Our website may contain links to external third-party websites. We have no influence on the content of these websites and therefore assume no liability for them.
        </p>
        <p className="mb-4">
          <strong>Copyright Notice:</strong> All content and materials published on this website are subject to copyright laws. Any use outside the limits of copyright law requires written permission from WESH'S LLC.
        </p>

        <div className="mt-8 text-center">
          <a href="/" className="text-accent hover:underline text-lg font-semibold">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
