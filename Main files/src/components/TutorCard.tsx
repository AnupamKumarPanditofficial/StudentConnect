import { Star, MapPin, GraduationCap, Clock } from 'lucide-react';

interface TutorCardProps {
  name: string;
  subjects: string[];
  rating: number;
  location: string;
  experience: number;
  hourlyRate: number;
  imageUrl: string;
  onContact: () => void;
}

const TutorCard = ({
  name,
  subjects,
  rating,
  location,
  experience,
  hourlyRate,
  imageUrl,
  onContact
}: TutorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {subjects.map((subject, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
            >
              {subject}
            </span>
          ))}
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <GraduationCap className="w-4 h-4 mr-2" />
            <span>{experience} years experience</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>${hourlyRate}/hour</span>
          </div>
        </div>
        
        <button
          onClick={onContact}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Contact Tutor
        </button>
      </div>
    </div>
  );
};

export default TutorCard;