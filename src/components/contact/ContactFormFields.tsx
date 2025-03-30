
import React from 'react';
import { FormData } from '@/types/contact';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SendIcon } from "lucide-react";

interface ContactFormFieldsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (value: string, name: string) => void;
  isSubmitting: boolean;
  submitError: string;
  contactEmail: string;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactFormFields = ({ 
  formData, 
  handleChange, 
  handleSelectChange,
  handleSubmit,
  isSubmitting, 
  submitError, 
  contactEmail 
}: ContactFormFieldsProps) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="font-medium text-alto-dark-gray">
          Full Name *
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email" className="font-medium text-alto-dark-gray">
            Email *
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2"
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="font-medium text-alto-dark-gray">
            Phone Number
          </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="address" className="font-medium text-alto-dark-gray">
          Property Address *
        </Label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="mt-2"
        />
      </div>
      
      <div>
        <Label htmlFor="timeline" className="font-medium text-alto-dark-gray">
          Project Timeline
        </Label>
        <Select 
          value={formData.timeline} 
          onValueChange={(value) => handleSelectChange(value, 'timeline')}
        >
          <SelectTrigger id="timeline" className="mt-2">
            <SelectValue placeholder="Select a timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Within 3 months">Within 3 months</SelectItem>
            <SelectItem value="3-6 months">3-6 months</SelectItem>
            <SelectItem value="6-12 months">6-12 months</SelectItem>
            <SelectItem value="More than 12 months">More than 12 months</SelectItem>
            <SelectItem value="Just exploring">Just exploring</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="message" className="font-medium text-alto-dark-gray">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-2 resize-none"
        />
      </div>
      
      {submitError && (
        <Alert variant="destructive">
          <AlertDescription>{submitError}</AlertDescription>
        </Alert>
      )}
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            <SendIcon className="mr-2 h-4 w-4" /> Send Message
          </span>
        )}
      </Button>
      
      <p className="text-xs text-gray-500 text-center mt-4">
        Your message will be sent to {contactEmail}
      </p>
    </form>
  );
};

export default ContactFormFields;
