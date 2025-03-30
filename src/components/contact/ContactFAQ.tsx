
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactFAQ = () => {
  const faqItems = [
    {
      question: "How long does it typically take to build an ADU?",
      answer: "The timeline for an ADU project varies depending on design complexity, permitting, and construction. On average, our projects take 8-12 months from initial consultation to completion, with 2-3 months for design, 2-4 months for permitting, and 4-6 months for construction."
    },
    {
      question: "What is the typical cost range for an ADU?",
      answer: "ADU costs in Greater Los Angeles typically range from $250-$400 per square foot, depending on design complexity, site conditions, and finishes. Our standard models range from $235,000 to $350,000 all-inclusive, but we provide detailed estimates based on your specific project."
    },
    {
      question: "Can I rent out my ADU?",
      answer: "Yes, in most areas of Los Angeles and Ventura County, you can rent out your ADU. Current regulations generally allow for ADUs to be rented separately from the primary residence. We can provide specific information about rental regulations in your area during consultation."
    },
    {
      question: "Do you handle all permitting and approvals?",
      answer: "Yes, our full-service approach includes handling all aspects of the permitting process. We prepare and submit all necessary documentation, coordinate with city officials, address any feedback or revision requests, and ensure all approvals are secured before construction begins."
    },
    {
      question: "Can I customize one of your standard floor plans?",
      answer: "Absolutely. Our standard floor plans serve as starting points that can be customized to suit your specific needs and preferences. We can modify layouts, adjust room sizes, change finishes, and incorporate special features while maintaining the efficiency and value of our proven designs."
    },
    {
      question: "What warranties do you offer?",
      answer: "Alto Builders provides a comprehensive 1-year workmanship warranty and manages all manufacturer warranties on materials and systems. Additionally, we offer an optional extended structural warranty. Detailed warranty information is provided in our contract documentation."
    },
    {
      question: "How do I get started with my ADU project?",
      answer: "Getting started is easy! Simply contact us through our website or call us directly. We'll schedule an initial consultation to discuss your needs, assess your property, review design options, and provide preliminary pricing information. This consultation helps us understand your vision and provides you with the information needed to make informed decisions."
    },
    {
      question: "What factors might affect the cost of my ADU?",
      answer: "Several factors can impact ADU costs, including site conditions (slope, soil type, access), design complexity, size, finishes, fixtures, special features, and local regulations. Additionally, utility connections, foundation requirements, and any necessary site work can affect the overall project cost."
    },
    {
      question: "How much space do I need for an ADU?",
      answer: "Space requirements vary by design and local regulations. Typically, you'll need at least 450-650 square feet for a studio or one-bedroom ADU and 700-1,200 square feet for a two-bedroom unit, plus space for setbacks required by your local jurisdiction. We can help determine what's possible on your specific property."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-alto-light-gray/30">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-4">
            <div className="bg-alto-light-gray p-3 rounded-full inline-block">
              <HelpCircle size={32} className="text-alto-accent" />
            </div>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="heading-accent">Expert</span>{' '}
            <span className="text-gradient">Answers</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-alto-dark-gray max-w-2xl mx-auto text-lg">
            Find answers to common questions about our ADU services
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion type="single" collapsible className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="border-b border-alto-light-gray px-2">
                  <AccordionTrigger className="text-alto-blue hover:text-alto-accent py-6 text-left text-lg md:text-xl font-medium px-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-alto-dark-gray pb-6 pt-0 text-base px-4">
                    <div className="bg-alto-light-gray/30 p-4 rounded-lg border-l-4 border-alto-accent">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFAQ;
