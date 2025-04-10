import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: "What is your return policy?", answer: "We offer a 30-day return policy on all products, as long as they are in original condition." },
  { question: "How long does shipping take?", answer: "Standard shipping takes 5-7 business days. Express shipping options are available." },
  { question: "Can I track my order?", answer: "Yes! Once your order ships, you'll receive a tracking number via email." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide. Shipping fees vary based on location." },
  { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and ShopPay." },
  { question: "How do I find my correct size?", answer: "Check out our Size Guide page for detailed measurements and recommendations." },
  { question: "Can I modify or cancel my order?", answer: "Orders can be modified or canceled within 12 hours of placing them." },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-medium-gray text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <h1 className="text-5xl font-bold text-center text-white mb-16">Frequently Asked Questions</h1>

        {/* Grid Layout for FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg shadow-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 bg-gray-800 hover:bg-gray-700 transition-all"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="text-white text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 p-6" : "max-h-0 p-0"
                }`}
                style={{ backgroundColor: openIndex === index ? "#1E293B" : "transparent" }}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Blank Space to Improve Page Balance */}
        <div className="mt-20"></div>
      </div>
    </div>
  );
};

export default FAQ;