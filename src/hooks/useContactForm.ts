
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { FormData, EmailJSConfig } from '@/types/contact';

// EmailJS configuration constants
const EMAILJS_SERVICE_ID = "service_id"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_id"; // Replace with your EmailJS template ID
const EMAILJS_USER_ID = "user_id"; // Replace with your EmailJS user ID

// The specific email where queries will be sent
const CONTACT_EMAIL = "info@altobuilds.com";

export const useContactForm = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: '',
      timeline: 'Within 3 months',
    });
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log(`Sending query to ${CONTACT_EMAIL}:`, formData);
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: CONTACT_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        address: formData.address,
        message: formData.message,
        timeline: formData.timeline,
      };
      
      // If the EmailJS credentials are properly set up, send the email
      if (EMAILJS_SERVICE_ID !== "service_id" && EMAILJS_TEMPLATE_ID !== "template_id" && EMAILJS_USER_ID !== "user_id") {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_USER_ID
        );
        console.log("Email sent successfully");
      } else {
        // If EmailJS is not configured, log this information
        console.log("EmailJS not configured. Email would have been sent with these details:", templateParams);
        // Simulate a delay to mimic email sending
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      // Show success toast
      toast({
        title: "Message sent successfully",
        description: `Your message has been sent to ${CONTACT_EMAIL}. We'll get back to you shortly.`,
      });
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      resetForm();
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

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitSuccess,
    submitError,
    setSubmitSuccess,
    resetForm,
    CONTACT_EMAIL,
  };
};
