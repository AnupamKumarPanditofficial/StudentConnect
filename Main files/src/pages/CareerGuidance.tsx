import { useState } from 'react';
import Chatbot from '../components/Chatbot';
import { Briefcase, GraduationCap, BookOpen, Brain } from 'lucide-react';

const CareerGuidance = () => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  const resources = [
    {
      title: 'Career Assessment',
      icon: <Brain className="w-8 h-8 text-indigo-600" />,
      description: 'Take our AI-powered career assessment to discover your ideal career path.'
    },
    {
      title: 'Resume Builder',
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      description: 'Create a professional resume with our AI-assisted builder.'
    },
    {
      title: 'Study Path',
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
      description: 'Get personalized study recommendations for your career goals.'
    },
    {
      title: 'Skills Analysis',
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      description: 'Analyze your current skills and identify areas for improvement.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Career Guidance</h1>
        <p className="text-gray-600">Get personalized career advice and guidance from our AI assistant</p>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {resources.map((resource) => (
          <button
            key={resource.title}
            onClick={() => setSelectedResource(resource.title)}
            className={`p-6 bg-white rounded-lg shadow-md text-left transition-all ${
              selectedResource === resource.title
                ? 'ring-2 ring-indigo-500'
                : 'hover:shadow-lg'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              {resource.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{resource.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{resource.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* AI Chat Interface */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Chat with our AI Career Advisor
        </h2>
        <Chatbot />
      </div>
    </div>
  );
};

export default CareerGuidance;