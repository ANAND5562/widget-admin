import { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      category: "Quick-Pay Button",
      questions: [
        { id: "q1", question: "What is the Quick-Pay Button?", answer: "The Quick-Pay Button allows customers to complete payments instantly with one click. It is ideal for fixed-cost services." },
        { id: "q2", question: "How does the Quick-Pay Button work?", answer: "Customers simply click the button, and the payment is processed immediately without additional steps." },
        { id: "q3", question: "Is there a transaction limit on Quick-Pay?", answer: "Transaction limits depend on your bank policies and the payment provider." },
        { id: "q4", question: "Is the Quick-Pay Button secure?", answer: "Yes, it follows industry-standard security protocols, including encryption and fraud detection." },
      ],
    },
    {
      category: "Donations Button",
      questions: [
        { id: "d1", question: "What is the Donations Button?", answer: "The Donations Button allows supporters to contribute effortlessly using preset or custom donation amounts." },
        { id: "d2", question: "Can I set up recurring donations?", answer: "Yes, users can choose one-time or recurring donations if supported by your payment provider." },
        { id: "d3", question: "How do I track donations?", answer: "Most platforms provide a dashboard where you can view donor history and manage contributions." },
        { id: "d4", question: "Are donations refundable?", answer: "Refund policies depend on the organization. Some offer refunds, while others do not." },
      ],
    },
    {
      category: "Buy Now Button",
      questions: [
        { id: "b1", question: "What is the Buy Now Button?", answer: "The Buy Now Button allows customers to purchase items instantly without navigating through multiple steps." },
        { id: "b2", question: "Does the Buy Now Button support discounts?", answer: "Yes, depending on your e-commerce platform, discounts and promo codes can be applied at checkout." },
        { id: "b3", question: "Can I use Buy Now for subscriptions?", answer: "Yes, if integrated with a subscription-based payment system." },
        { id: "b4", question: "Is there a way to prevent fraudulent transactions?", answer: "Yes, anti-fraud tools such as 3D Secure, CAPTCHA, and address verification can be enabled." },
      ],
    },
    {
      category: "Custom Button",
      questions: [
        { id: "c1", question: "What is the Custom Button?", answer: "The Custom Button provides advanced options for setting payment amounts and customizing the payment form." },
        { id: "c2", question: "Can I collect additional customer details?", answer: "Yes, custom fields allow businesses to collect necessary details such as addresses and phone numbers." },
        { id: "c3", question: "Does the Custom Button support international payments?", answer: "Yes, if integrated with a global payment provider that supports multiple currencies." },
        { id: "c4", question: "Can I restrict who uses the Custom Button?", answer: "Yes, access can be restricted based on IP addresses, customer groups, or authentication requirements." },
      ],
    },
  ];

  // Store the currently open question ID (across all sections)
  const [openQuestionId, setOpenQuestionId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto">
        <h4 className="text-3xl font-semibold text-gray-800 text-center border-b border-gray-300 py-4 px-4">
          Frequently Asked Questions (FAQ)
        </h4>
        {faqs.map((faq, index) => (
          <FAQCategory 
            key={index} 
            category={faq.category} 
            questions={faq.questions} 
            openQuestionId={openQuestionId}
            setOpenQuestionId={setOpenQuestionId}
          />
        ))}
      </div>
    </div>
  );
};

const FAQCategory = ({ category, questions, openQuestionId, setOpenQuestionId }) => {
  return (
    <div className="w-full border-b border-gray-300">
      <h2 className="text-lg font-semibold text-gray-900 bg-gray-200 px-4 py-3">
        {category}
      </h2>
      <div className="px-4">
        {questions.map((item) => (
          <FAQItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openQuestionId === item.id}
            setOpenQuestionId={setOpenQuestionId}
          />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ id, question, answer, isOpen, setOpenQuestionId }) => {
  const toggle = () => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="border-b border-gray-200 last:border-none">
      <button
        onClick={toggle}
        className="w-full text-left py-2 flex justify-between items-center text-md font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
      >
        <span>{question}</span>
        <span className="text-gray-500">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="p-2 bg-gray-100 text-gray-700">{answer}</div>}
    </div>
  );
};

export default Faq;
