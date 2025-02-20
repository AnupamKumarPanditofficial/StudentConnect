import { Link } from 'react-router-dom';
import { BookOpen, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold text-white">StudentConnect</span>
            </div>
            <p className="text-sm">
              Empowering students through connection, learning, and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tasks" className="hover:text-indigo-400 transition">
                  Find Tasks
                </Link>
              </li>
              <li>
                <Link to="/tutor-dashboard" className="hover:text-indigo-400 transition">
                  Find Tutors
                </Link>
              </li>
              <li>
                <Link to="/career-guidance" className="hover:text-indigo-400 transition">
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-indigo-400 transition">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm">Contact Support:</p>
              <a href="mailto:support@studentconnect.com" className="text-indigo-400 hover:text-indigo-300">
                support@studentconnect.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} StudentConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;