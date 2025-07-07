import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 animate-fade-in">
      <h1 className="text-4xl font-bold mb-4">404: Page Not Found</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        <ArrowLeft size={16} className="mr-2" />
        Return to Dashboard
      </Link>
    </div>
  );
};

export default NotFoundPage;