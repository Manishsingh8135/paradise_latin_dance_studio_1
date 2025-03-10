"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        id: "beginner",
        question: "I'm a complete beginner. Which class should I start with?",
        answer: "We recommend starting with our Beginner Fundamentals class. This class introduces basic dance concepts, rhythm, and movement patterns in a supportive environment. You can also try our 'Dance 101' workshop, specifically designed for newcomers."
      },
      {
        id: "wear",
        question: "What should I wear to dance classes?",
        answer: "Wear comfortable, breathable clothing that allows free movement. For most classes, athletic wear (leggings/shorts, t-shirt) and dance sneakers or jazz shoes work well. Specific classes might have additional requirements, which will be listed in the class description."
      },
      {
        id: "age",
        question: "Is there an age limit for classes?",
        answer: "We welcome dancers of all ages! We have specialized programs for kids (4-12), teens (13-17), and adults (18+). Our classes are grouped by both age and skill level to ensure the best learning experience."
      }
    ]
  },
  {
    category: "Classes & Schedule",
    questions: [
      {
        id: "schedule",
        question: "How often should I take classes?",
        answer: "For optimal progress, we recommend taking 2-3 classes per week. This allows enough time for practice while preventing overexertion. However, you can adjust this based on your goals and schedule."
      },
      {
        id: "makeup",
        question: "What happens if I miss a class?",
        answer: "We offer makeup classes within the same month for any missed sessions. Simply book through our online portal or contact the front desk to schedule your makeup class."
      },
      {
        id: "private",
        question: "Can I book private lessons?",
        answer: "Yes! Private lessons are available with all our instructors. These one-on-one sessions are perfect for focused improvement, competition preparation, or working on specific techniques."
      }
    ]
  },
  {
    category: "Membership & Pricing",
    questions: [
      {
        id: "trial",
        question: "Do you offer trial classes?",
        answer: "Yes! We offer a complimentary trial class for new students. This allows you to experience our teaching style and facility before committing to a membership."
      },
      {
        id: "cancel",
        question: "What's your cancellation policy?",
        answer: "Monthly memberships can be cancelled with 30 days notice. Class packages have no expiration date and are non-refundable but transferable to another student."
      },
      {
        id: "discount",
        question: "Are there any student or family discounts?",
        answer: "We offer special rates for students, seniors, and military personnel. Family discounts are available when multiple family members join. Contact us for current promotional rates."
      }
    ]
  }
];

export function DanceFAQ() {
  const [openCategory, setOpenCategory] = useState<string>("Getting Started");
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev =>
      prev.includes(id)
        ? prev.filter(q => q !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            <span className="text-white">Frequently Asked</span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-white/80"
          >
            Everything you need to know about our dance studio.
          </motion.p>
        </div>

        {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {faqs.map((category) => (
            <button
              key={category.category}
              onClick={() => setOpenCategory(category.category)}
              className={`
                px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300
                ${openCategory === category.category
                  ? "bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                  : "bg-[#FFD700]/10 text-white hover:bg-[#FFD700]/20 hover:shadow-[0_0_15px_rgba(255,215,0,0.15)]"
                }
              `}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {faqs
              .filter(category => category.category === openCategory)
              .map(category => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  {category.questions.map(({ id, question, answer }) => {
                    const isOpen = openQuestions.includes(id);
                    return (
                      <div
                        key={id}
                        className={`
                          rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300
                          ${isOpen 
                            ? 'bg-gradient-to-b from-[#FFD700]/15 to-[#FDB931]/5 ring-1 ring-[#FFD700]/30' 
                            : 'bg-[#FFD700]/5 hover:bg-[#FFD700]/10'
                          }
                        `}
                      >
                        <button
                          onClick={() => toggleQuestion(id)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className={`text-lg font-medium ${isOpen ? 'text-[#FFD700]' : 'text-white'}`}>
                            {question}
                          </span>
                          <span className={`ml-4 ${isOpen ? 'text-[#FFD700]' : 'text-white/60'}`}>
                            {isOpen ? (
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </span>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-6"
                            >
                              <div className="text-white/80 leading-relaxed">
                                {answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-24 text-center"
        >
          <p className="text-xl text-white/80 mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black font-semibold 
              hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
