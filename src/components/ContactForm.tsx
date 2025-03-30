
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  timeline: string;
}

const ContactForm = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
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
    }, 1500);
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
        </form>
      )}
    </div>
  );
};

export default ContactForm;
