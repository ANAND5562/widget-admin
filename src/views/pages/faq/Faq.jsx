import { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      category: "Quick-Pay Button",
      questions: [
        {
          question: "What is the Quick-Pay Button?",
          answer:
            "The Quick-Pay Button allows customers to complete payments instantly with one click. It is ideal for fixed-cost services.",
        },
        {
          question: "How does the Quick-Pay Button work?",
          answer:
            "Customers simply click the button, and the payment is processed immediately without additional steps.",
        },
        {
          question: "Can I customize the Quick-Pay Button?",
          answer:
            "Yes, you can modify the design and link it to your preferred payment gateway.",
        },
        {
          question: "Is the Quick-Pay Button secure?",
          answer:
            "Yes, it follows industry-standard security protocols to ensure safe transactions.",
        },
      ],
    },
    {
      category: "Donations Button",
      questions: [
        {
          question: "What is the Donations Button?",
          answer:
            "The Donations Button enables supporters to contribute effortlessly using preset or custom donation amounts.",
        },
        {
          question: "Can donors choose their own amount?",
          answer:
            "Yes, donors can select from preset amounts or enter a custom amount based on their preference.",
        },
        {
          question: "Is there an option to track donations?",
          answer:
            "Most payment platforms provide tracking features, allowing you to monitor contributions.",
        },
        {
          question: "Can I integrate the Donations Button into my website?",
          answer:
            "Yes, you can embed it on your website or landing page to facilitate easy donations.",
        },
      ],
    },
    {
      category: "Buy Now Button",
      questions: [
        {
          question: "What is the Buy Now Button?",
          answer:
            "The Buy Now Button simplifies purchases by allowing customers to select quantities and make quick payments.",
        },
        {
          question: "Can I use this button for multiple products?",
          answer:
            "Yes, you can configure it for different products and services with quantity selection.",
        },
        {
          question: "How does the checkout process work?",
          answer:
            "Customers click the button, select the quantity (if applicable), and proceed to checkout instantly.",
        },
        {
          question: "Does the Buy Now Button work with all e-commerce platforms?",
          answer:
            "It depends on the payment gateway used, but most platforms support this functionality.",
        },
      ],
    },
    {
      category: "Custom Button",
      questions: [
        {
          question: "What is the Custom Button?",
          answer:
            "The Custom Button offers advanced customization options, allowing users to set payment amounts and modify forms as needed.",
        },
        {
          question: "Can I collect additional customer information with the Custom Button?",
          answer:
            "Yes, you can add custom fields to collect necessary information during the transaction.",
        },
        {
          question: "Can I integrate this button with my CRM or database?",
          answer:
            "Yes, depending on the platform you use, you can integrate it with customer management systems.",
        },
        {
          question: "Is there an option to enable recurring payments with the Custom Button?",
          answer:
            "Yes, if supported by your payment provider, you can set up recurring payment options.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions (FAQ)
        </h1>
        {faqs.map((faq, index) => (
          <FAQCategory key={index} category={faq.category} questions={faq.questions} />
        ))}
      </div>
    </div>
  );
};

const FAQCategory = ({ category, questions }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">{category}</h2>
      {questions.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-3 px-4 bg-white shadow-sm text-lg font-medium text-gray-800 flex justify-between items-center focus:outline-none"
      >
        {question}
        <span className="text-gray-500">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-600 bg-gray-50">{answer}</div>
      )}
    </div>
  );
};

export default Faq;
