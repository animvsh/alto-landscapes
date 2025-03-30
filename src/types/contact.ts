
export interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  timeline: string;
}

export interface SendGridConfig {
  apiKey: string;
  fromEmail: string;
  toEmail: string;
}
