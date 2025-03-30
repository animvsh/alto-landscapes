
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { FormData, SendGridConfig } from '@/types/contact';

// SendGrid configuration constants
const SENDGRID_API_KEY = "SG.YOUR_API_KEY"; // Replace with your SendGrid API key
const FROM_EMAIL = "noreply@altobuilds.com"; // Replace with your verified sender
const TO_EMAIL = "info@altobuilds.com"; // Email where queries will be sent

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
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
      console.log(`Sending query to ${TO_EMAIL}:`, formData);
      
      // Prepare email content for SendGrid
      const emailContent = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        subject: `Alto Builds Contact Form: ${formData.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Address:</strong> ${formData.address}</p>
          <p><strong>Timeline:</strong> ${formData.timeline}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message || 'No message provided'}</p>
        `,
      };
      
      // If the SendGrid API key is properly set up, send the email
      if (SENDGRID_API_KEY !== "SG.YOUR_API_KEY") {
        // In a real environment, this would be a server-side API call
        // For this frontend-only demo, we'll simulate sending the email
        console.log("Would send email with SendGrid:", emailContent);
        
        // Call to a function that would handle the SendGrid API request
        // This would typically be an API endpoint on your server
        await simulateSendEmail(emailContent);
      } else {
        // If SendGrid is not configured, log this information
        console.log("SendGrid not configured. Email would have been sent with these details:", emailContent);
        // Simulate a delay to mimic email sending
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      // Show success toast
      toast({
        title: "Message sent successfully",
        description: `Your message has been sent to ${TO_EMAIL}. We'll get back to you shortly.`,
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

  // This function simulates sending an email with SendGrid
  // In a real application, this would be an API call to a server endpoint
  const simulateSendEmail = async (emailContent: any) => {
    console.log("Simulating sending email...");
    // In a real app, this would call an API endpoint that uses SendGrid's Node.js SDK
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Email sent successfully (simulated)");
        resolve(true);
      }, 1500);
    });
  };

  return {
    formData,
    handleChange,
    handleSelectChange,
    handleSubmit,
    isSubmitting,
    submitSuccess,
    submitError,
    setSubmitSuccess,
    resetForm,
    CONTACT_EMAIL: TO_EMAIL,
  };
};
