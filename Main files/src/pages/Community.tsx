import { useState } from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, Share2, Filter } from 'lucide-react';

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
    role: 'student' | 'tutor';
  };
  content: string;
  topic: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const mockPosts: Post[] = [
  {
    id: 1,
    author: {
      name: 'Alice Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      role: 'student'
    },
    content: 'Looking for study partners for the upcoming calculus exam. Anyone interested in forming a study group?',
    topic: 'Mathematics',
    likes: 15,
    comments: 8,
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    author: {
      name: 'Dr. Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      role: 'tutor'
    },
    content: 'Just posted a new video tutorial on quantum mechanics. Check it out and let me know if you have any questions!',
    topic: 'Physics',
    likes: 32,
    comments: 12,
    timestamp: '5 hours ago'
  }
];

const topics = [
  'All Topics',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Computer Science',
  'English',
  'History'
];

const Community = () => {
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [newPost, setNewPost] = useState('');

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation
    setNewPost('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Community Forum</h1>
        <p className="text-gray-600">Connect with fellow students and tutors</p>
      </div>

      {/* Topic Filter */}
      <div className="flex items-center space-x-4 mb-8 overflow-x-auto pb-2">
        <Filter className="w-5 h-5 text-gray-400" />
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedTopic === topic
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Create Post */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handlePost}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your thoughts, questions, or insights..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            rows={3}
          />
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {mockPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
            {/* Author Info */}
            <div className="flex items-center mb-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    post.author.role === 'tutor'
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {post.author.role.charAt(0).toUpperCase() + post.author.role.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>
            </div>

            {/* Content */}
            <p className="text-gray-800 mb-4">{post.content}</p>

            {/* Topic Tag */}
            <div className="mb-4">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {post.topic}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6 text-gray-500">
              <button className="flex items-center space-x-2 hover:text-indigo-600">
                <ThumbsUp className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-indigo-600">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-indigo-600">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;