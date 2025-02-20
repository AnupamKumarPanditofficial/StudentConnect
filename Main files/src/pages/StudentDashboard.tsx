import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useFetchTasks } from '../hooks/useFetchTasks';
import TaskCard from '../components/TaskCard';
import { Plus, BookOpen, Clock, CheckCircle } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  subject: string;
  budget: number;
  deadline: string;
  status: 'open' | 'assigned' | 'completed';
}

const StudentDashboard = () => {
  const { user } = useAuth();
  const { tasks, loading } = useFetchTasks('open');
  const [activeTab, setActiveTab] = useState<'current' | 'completed'>('current');

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
        <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          <Plus className="w-5 h-5 mr-2" />
          Post New Task
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-indigo-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Active Tasks</p>
              <p className="text-2xl font-semibold">5</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Pending Reviews</p>
              <p className="text-2xl font-semibold">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Completed Tasks</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('current')}
            className={`${
              activeTab === 'current'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium`}
          >
            Current Tasks
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`${
              activeTab === 'completed'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium`}
          >
            Completed Tasks
          </button>
        </nav>
      </div>

      {/* Tasks Grid */}
      {loading ? (
        <div>Loading tasks...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
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
      )}
    </div>
  );
};

export default StudentDashboard;