import { Link } from 'react-router-dom';
import { BookOpen, Users, Brain, MessageSquare, ArrowRight, Sparkles, Target, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
            Connect, Learn, and
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              {' '}Grow Together
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-200">
            Join our vibrant community of students and tutors to enhance your learning journey.
            Get personalized support, career guidance, and connect with peers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/login"
              className="group inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 rounded-lg border-2 border-indigo-600 dark:border-indigo-400 transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:scale-105"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white transition-colors duration-200">
            Why Choose StudentConnect?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="Expert Tutoring"
              description="Connect with qualified tutors for personalized learning support"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="Community Support"
              description="Join a vibrant community of learners and educators"
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="AI Career Guidance"
              description="Get AI-powered career advice tailored to your interests"
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="Discussion Forums"
              description="Engage in meaningful discussions with peers and experts"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="10k+" label="Active Students" icon={<Users />} />
            <StatCard number="500+" label="Expert Tutors" icon={<Sparkles />} />
            <StatCard number="1000+" label="Completed Tasks" icon={<Target />} />
            <StatCard number="95%" label="Success Rate" icon={<Award />} />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white dark:hover:bg-gray-600">
    <div className="flex justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white text-center transition-colors duration-200">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-center transition-colors duration-200">{description}</p>
  </div>
);

const StatCard = ({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) => (
  <div className="text-center text-white">
    <div className="flex justify-center mb-4 opacity-80">{icon}</div>
    <div className="text-4xl font-bold mb-2">{number}</div>
    <div className="text-sm uppercase tracking-wider opacity-80">{label}</div>
  </div>
);

export default Home;