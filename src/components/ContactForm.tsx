
import React from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import FormSuccessMessage from './contact/FormSuccessMessage';
import ContactFormFields from './contact/ContactFormFields';

const ContactForm = () => {
  const { 
    formData, 
    handleChange, 
    handleSubmit, 
    isSubmitting, 
    submitSuccess, 
    submitError, 
    setSubmitSuccess,
    CONTACT_EMAIL 
  } = useContactForm();

  return (
    <div className="bg-white rounded-lg p-6 md:p-8 card-shadow">
      {submitSuccess ? (
        <FormSuccessMessage onReset={() => setSubmitSuccess(false)} />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <ContactFormFields 
            formData={formData}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            submitError={submitError}
            contactEmail={CONTACT_EMAIL}
          />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
