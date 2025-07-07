import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import TopicCard from '../components/TopicCard';
import { useProgress } from '../contexts/ProgressContext';

const AzureArchitecturePage: React.FC = () => {
  const { getProgressPercentage } = useProgress();
  const progress = getProgressPercentage('azure-architecture');

  const topics = [
    {
      id: 'core-components',
      title: 'Core Architectural Components',
      description: 'Azure regions, availability zones, resource groups, subscriptions, and management groups.'
    },
    {
      id: 'compute-networking',
      title: 'Compute and Networking Services',
      description: 'Virtual machines, containers, functions, hosting options, virtual networks, and connectivity solutions.'
    },
    {
      id: 'storage-services',
      title: 'Azure Storage Services',
      description: 'Storage types, redundancy options, storage accounts, and migration solutions.'
    },
    {
      id: 'identity-access',
      title: 'Identity, Access, and Security',
      description: 'Microsoft Entra ID, authentication methods, conditional access, RBAC, and security concepts.'
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        <Link to="/">Home</Link>
        <ChevronRight size={16} className="mx-1" />
        <span>Azure Architecture</span>
      </div>

      <header className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Azure Architecture and Services</h1>
          <span className="tag-purple">35-40% of Exam</span>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">
          Understanding Azure's core components, services, and infrastructure.
        </p>
      </header>

      {/* Progress */}
      <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Section Progress</h2>
          <span className="font-medium">{progress}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-value" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </section>

      {/* Section Overview */}
      <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Section Overview</h2>
        <p className="mb-4">
          This section covers the core architectural components of Azure, including regions, availability zones, 
          and resource organization. You'll also learn about compute, networking, storage, and identity services, 
          which form the foundation of Azure's infrastructure.
        </p>
        <p>
          The Azure Architecture and Services section is the largest portion of the exam, accounting for 
          approximately 35-40% of the questions. This makes it essential to understand these concepts thoroughly.
        </p>
      </section>

      {/* Topics */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Topics in this Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map(topic => (
            <TopicCard 
              key={topic.id}
              id={topic.id}
              section="azure-architecture"
              title={topic.title}
              description={topic.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AzureArchitecturePage;