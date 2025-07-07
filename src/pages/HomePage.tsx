import React from 'react';
import { useProgress } from '../contexts/ProgressContext';
import SectionCard from '../components/SectionCard';

const HomePage: React.FC = () => {
  const { getProgressPercentage } = useProgress();
  const overallProgress = getProgressPercentage();

  return (
    <div className="animate-fade-in">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Azure AZ-900 Study Guide</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive resource to help you prepare for and pass the Microsoft Azure Fundamentals exam.
        </p>
      </header>

      {/* Overall Progress */}
      <section className="mb-10 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Your Study Progress</h2>
        <div className="flex items-center justify-between mb-2">
          <span>Overall Completion</span>
          <span className="font-medium">{overallProgress}%</span>
        </div>
        <div className="progress-bar h-4 mb-6">
          <div 
            className="progress-value" 
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 className="font-medium mb-1">Cloud Concepts</h3>
            <div className="progress-bar">
              <div 
                className="progress-value bg-blue-500" 
                style={{ width: `${getProgressPercentage('cloud-concepts')}%` }}
              ></div>
            </div>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h3 className="font-medium mb-1">Azure Architecture</h3>
            <div className="progress-bar">
              <div 
                className="progress-value bg-purple-500" 
                style={{ width: `${getProgressPercentage('azure-architecture')}%` }}
              ></div>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h3 className="font-medium mb-1">Azure Management</h3>
            <div className="progress-bar">
              <div 
                className="progress-value bg-green-500" 
                style={{ width: `${getProgressPercentage('azure-management')}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Exam Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SectionCard 
            id="cloud-concepts"
            title="Cloud Concepts"
            description="Understand the fundamentals of cloud computing, benefits, service types, and pricing models."
            topicCount={5}
            examPercentage="25-30%"
          />
          
          <SectionCard 
            id="azure-architecture"
            title="Azure Architecture"
            description="Learn about Azure's core components, compute, networking, storage, and identity services."
            topicCount={4}
            examPercentage="35-40%"
          />
          
          <SectionCard 
            id="azure-management"
            title="Azure Management"
            description="Explore cost management, governance, resource management, and monitoring tools in Azure."
            topicCount={4}
            examPercentage="30-35%"
          />
        </div>
      </section>

      {/* Study Tips */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Study Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-medium mb-3">Exam Strategy</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Focus on understanding concepts, not memorizing details</li>
              <li>• Pay special attention to the services highlighted in each section</li>
              <li>• Practice with sample questions to test your knowledge</li>
              <li>• Schedule your exam after completing all sections</li>
              <li>• Review areas where you feel less confident before the exam</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-medium mb-3">Additional Resources</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <a href="https://learn.microsoft.com/en-us/certifications/exams/az-900/" target="_blank" rel="noopener noreferrer">Microsoft Learning Path for AZ-900</a></li>
              <li>• <a href="https://azure.microsoft.com/en-us/free/" target="_blank" rel="noopener noreferrer">Azure Free Account</a> - Practice in the Azure portal</li>
              <li>• Microsoft documentation for each service</li>
              <li>• Azure Architecture Center for visual references</li>
              <li>• YouTube tutorials for visual learners</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;