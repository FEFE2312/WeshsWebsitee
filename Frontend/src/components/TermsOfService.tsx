import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-dark-gray min-h-screen text-cream px-6 py-12">
      <div className="container mx-auto max-w-4xl bg-medium-gray p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-accent">Terms and Conditions (T&C) of WESH'S LLC</h1>

        {/* Section 1: Scope of Application */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">1. Scope of Application</h2>
        <p className="mb-4">
          (1) These Terms and Conditions (T&C) apply to all contracts concluded between WESH'S LLC and customers via our online store.
        </p>
        <p className="mb-4">
          (2) Any deviating terms from the customer shall not apply unless expressly agreed upon in writing.
        </p>
        <p className="mb-6">
          (3) These T&C apply to orders from Iraq, the EU, and international customers.
        </p>

        {/* Section 2: Contract Formation */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">2. Contract Formation</h2>
        <p className="mb-4">
          (1) The presentation of products in our online store does not constitute a legally binding offer but an invitation to place an order.
        </p>
        <p className="mb-4">
          (2) By submitting an order, the customer makes a binding offer to purchase the selected goods.
        </p>
        <p className="mb-6">
          (3) The contract is concluded once we accept the order via email confirmation or by shipping the goods.
        </p>

        {/* Section 3: Prices and Payment */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">3. Prices and Payment</h2>
        <p className="mb-4">
          (1) All prices are in Euro (EUR) or U.S. dollars (USD) and include VAT (where applicable), excluding shipping costs.
        </p>
        <p className="mb-4">
          (2) Accepted payment methods:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Credit Card (Visa, Mastercard, Amex)</li>
          <li>PayPal</li>
          <li>Bank Transfer</li>
          <li>Cryptocurrencies (if offered)</li>
        </ul>
        <p className="mb-6">
          (3) Orders will only be shipped after full payment is received.
        </p>

        {/* Section 4: Delivery and Shipping */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">4. Delivery and Shipping</h2>
        <p className="mb-4">
          (1) We ship worldwide, except where legal restrictions prevent us from doing so.
        </p>
        <p className="mb-4">
          (2) Delivery times vary depending on the destination. WESH'S LLC is not liable for customs delays or other unforeseen circumstances.
        </p>
        <p className="mb-6">
          (3) If delivery is impossible, the customer will be notified, and a refund may be issued.
        </p>

        {/* Section 5: Right of Withdrawal (Returns Policy) */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">5. Right of Withdrawal</h2>
        <p className="mb-4 font-bold">For EU Customers:</p>
        <ul className="list-disc list-inside mb-6">
          <li>(1) EU customers have the right to withdraw from their purchase within 14 days of receiving the goods without providing a reason.</li>
          <li>(2) To exercise this right, the customer must notify us via email at <a href="mailto:business@weshs.com" className="text-accent hover:underline">business@weshs.com</a> before returning the goods.</li>
          <li>(3) The refund will be processed within 14 days after we receive and inspect the returned goods.</li>
          <li>(4) The customer bears the return shipping costs unless the item is defective or incorrect.</li>
          <li>(5) The refund amount will be reduced by a 10% restocking fee unless prohibited by local law.</li>
        </ul>
        <p className="mb-4 font-bold">For Non-EU Customers:</p>
        <ul className="list-disc list-inside mb-6">
          <li>(1) Customers outside the EU may return goods within 14 days after delivery.</li>
          <li>(2) The customer is responsible for return shipping costs, including any import duties or taxes.</li>
          <li>(3) A 10% restocking fee applies to all returns unless the product is defective.</li>
          <li>(4) Refunds will be processed only after receiving and inspecting the returned goods.</li>
          <li>(5) Items must be unused, in original packaging, and include all tags.</li>
          <li>(6) Custom-made or personalized items cannot be returned or refunded unless defective.</li>
        </ul>

        {/* Section 6: Warranty and Liability */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">6. Warranty and Liability</h2>
        <p className="mb-6">
          (1) The statutory warranty rights of Iraq apply.
          <br />
          (2) WESH'S LLC is not liable for damages caused by improper use or normal wear and tear.
          <br />
          (3) Liability is limited to intentional misconduct and gross negligence.
        </p>

        {/* Section 7: Data Protection */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">7. Data Protection</h2>
        <p className="mb-6">
          (1) Personal data is processed in accordance with applicable data protection laws.
          <br />
          (2) More details can be found in our <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>.
        </p>

        {/* Section 8: Dispute Resolution & Applicable Law */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">8. Dispute Resolution & Applicable Law</h2>
        <p className="mb-6">
          (1) For EU consumers:
          <br />• We are not obliged or willing to participate in dispute resolution before a consumer arbitration board.
          <br />
          (2) Applicable Law:
          <br />• These terms are governed by the laws of the Republic of Iraq.
          <br />• The place of jurisdiction for any disputes is Baghdad, Iraq.
        </p>

        {/* Section 9: Amendments */}
        <h2 className="text-2xl font-semibold mb-4 text-accent">9. Amendments to the Terms and Conditions</h2>
        <p className="mb-6">
          WESH'S LLC reserves the right to modify these Terms and Conditions at any time. Changes take effect upon publication on our website.
        </p>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a href="/" className="text-accent hover:underline text-lg font-semibold">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
