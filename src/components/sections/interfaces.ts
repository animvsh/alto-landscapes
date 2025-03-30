
/**
 * Common interfaces for section components
 */

// Base interface for all section components
export interface BaseSectionProps {
  className?: string;
}

// Hero section props
export interface HeroSectionProps extends BaseSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
  showScrollIndicator?: boolean;
  onScrollDown?: () => void;
}

// Intro section props
export interface IntroSectionProps extends BaseSectionProps {
  title?: string;
  subtitle?: string;
}

// Service area section props
export interface ServiceAreaSectionProps extends BaseSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

// Testimonials section props
export interface TestimonialsSectionProps extends BaseSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Array<{
    quote: string;
    author: string;
    location: string;
    image?: string;
  }>;
}

// ADU Benefits section props
export interface AduBenefitsSectionProps extends BaseSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

// Explore section props
export interface ExploreSectionProps extends BaseSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

// Floor plans section props
export interface FloorPlansSectionProps extends BaseSectionProps {
  title?: string;
  subtitle?: string;
  showAllPlansLink?: boolean;
}

// About section props
export interface AboutSectionProps extends BaseSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

// Call to action section props
export interface CallToActionSectionProps extends BaseSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}
