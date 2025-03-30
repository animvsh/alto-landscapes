
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  timeline: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    timeline: 'Within 3 months',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // The specific email where queries will be sent
  const CONTACT_EMAIL = "info@altobuilds.com";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Log the query details, including where it would be sent in a real implementation
      console.log(`Sending query to ${CONTACT_EMAIL}:`, formData);
      
      // In a real implementation, this would be an API call to your backend
      // that would send an email to the CONTACT_EMAIL address
      
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success toast
      toast({
        title: "Message sent successfully",
        description: `Your message has been sent to ${CONTACT_EMAIL}. We'll get back to you shortly.`,
      });
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        timeline: 'Within 3 months',
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitError("There was a problem sending your message. Please try again.");
      setIsSubmitting(false);
      
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 md:p-8 card-shadow">
      {submitSuccess ? (
        <div className="text-center py-8">
          <h3 className="text-2xl font-semibold text-alto-blue mb-4">Thank You!</h3>
          <p className="text-lg text-alto-dark-gray mb-6">
            Your message has been received. We'll get back to you shortly.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="btn-primary"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-alto-dark-gray">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-alto-gray rounded-md focus:outline-none focus:ring-2 focus:ring-alto-accent"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-alto-dark-gray">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-alto-gray rounded-md focus:outline-none focus:ring-2 focus:ring-alto-accent"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-alto-dark-gray">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-alto-gray rounded-md focus:outline-none focus:ring-2 focus:ring-alto-accent"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="address" className="block mb-2 font-medium text-alto-dark-gray">
              Property Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-alto-gray rounded-md focus:outline-none focus:ring-2 focus:ring-alto-accent"
            />
          </div>
          
          <div>
            <label htmlFor="timeline" className="block mb-2 font-medium text-alto-dark-gray">
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-alto-gray rounded-md focus:outline-none focus:ring-2 focus:ring-alto-accent"
            >
              <option value="Within 3 months">Within 3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="More than 12 months">More than 12 months</option>
              <option value="Just exploring">Just exploring</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-alto-dark-gray">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-alto-gray rounded-md focus:outline-none focus:ring-2 focus:ring-alto-accent"
            ></textarea>
          </div>
          
          {submitError && (
            <div className="text-red-500 text-sm">{submitError}</div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex justify-center items-center"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            Your message will be sent to {CONTACT_EMAIL}
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
