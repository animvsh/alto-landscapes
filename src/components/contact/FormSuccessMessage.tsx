
import React from 'react';

interface FormSuccessMessageProps {
  onReset: () => void;
}

const FormSuccessMessage = ({ onReset }: FormSuccessMessageProps) => {
  return (
    <div className="text-center py-8">
      <h3 className="text-2xl font-semibold text-alto-blue mb-4">Thank You!</h3>
      <p className="text-lg text-alto-dark-gray mb-6">
        Your message has been received. We'll get back to you shortly.
      </p>
      <button
        onClick={onReset}
        className="btn-primary"
      >
        Send Another Message
      </button>
    </div>
  );
};

export default FormSuccessMessage;
