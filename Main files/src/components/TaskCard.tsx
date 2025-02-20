import { Clock, BookOpen, DollarSign } from 'lucide-react';

interface TaskCardProps {
  title: string;
  description: string;
  subject: string;
  budget: number;
  deadline: string;
  onApply: () => void;
}

const TaskCard = ({ title, description, subject, budget, deadline, onApply }: TaskCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <BookOpen className="w-4 h-4 mr-2" />
          <span>{subject}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="w-4 h-4 mr-2" />
          <span>${budget}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{deadline}</span>
        </div>
      </div>
      
      <button
        onClick={onApply}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Apply Now
      </button>
    </div>
  );
};

export default TaskCard;