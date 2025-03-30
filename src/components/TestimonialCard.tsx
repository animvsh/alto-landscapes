
interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  image?: string;
}

const TestimonialCard = ({ quote, author, location, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg card-shadow">
      <div className="flex items-center mb-6">
        {image ? (
          <img 
            src={image} 
            alt={author} 
            className="w-16 h-16 rounded-full object-cover mr-4" 
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-alto-light-gray flex items-center justify-center text-alto-blue font-semibold text-xl mr-4">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-alto-blue">{author}</h3>
          <p className="text-sm text-alto-dark-gray">{location}</p>
        </div>
      </div>
      <blockquote className="text-alto-dark-gray italic">"{quote}"</blockquote>
    </div>
  );
};

export default TestimonialCard;
