import { useState } from 'react';
import TaskCard from '../components/TaskCard';
import { Search, BookOpen, DollarSign, Plus } from 'lucide-react';

const subjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Computer Science',
  'English',
  'History'
];

const mockTasks = [
  {
    id: 1,
    title: 'Help with Calculus Assignment',
    description: 'Need help with integration and differentiation problems for upcoming exam.',
    subject: 'Mathematics',
    budget: 50,
    deadline: '2024-03-25'
  },
  {
    id: 2,
    title: 'Physics Lab Report Review',
    description: 'Looking for someone to review my physics lab report on wave mechanics.',
    subject: 'Physics',
    budget: 35,
    deadline: '2024-03-23'
  },
  // Add more mock tasks as needed
];

const TaskMarketplace = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Task Marketplace</h1>
          <p className="text-gray-600">Find tasks that match your expertise</p>
        </div>
        <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          <Plus className="w-5 h-5 mr-2" />
          Post New Task
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Subject Filter */}
          <div className="relative">
            <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
            >
              <option value="">All Subjects</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Filter */}
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
            >
              <option value="">Budget Range</option>
              <option value="0-25">$0 - $25</option>
              <option value="26-50">$26 - $50</option>
              <option value="51-100">$51 - $100</option>
              <option value="100+">$100+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            subject={task.subject}
            budget={task.budget}
            deadline={task.deadline}
            onApply={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskMarketplace;