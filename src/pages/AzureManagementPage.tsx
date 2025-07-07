import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import TopicCard from '../components/TopicCard';
import { useProgress } from '../contexts/ProgressContext';

const AzureManagementPage: React.FC = () => {
  const { getProgressPercentage } = useProgress();
  const progress = getProgressPercentage('azure-management');

  const topics = [
    {
      id: 'cost-management',
      title: 'Cost Management in Azure',
      description: 'Factors affecting costs, pricing calculators, cost management tools, and resource tagging.'
    },
    {
      id: 'governance',
      title: 'Governance and Compliance',
      description: 'Microsoft Purview, Azure Policy, resource locks, and compliance features.'
    },
    {
      id: 'resource-management',
      title: 'Resource Management',
      description: 'Azure portal, Cloud Shell, Azure Arc, Infrastructure as Code (IaC), and ARM templates.'
    },
    {
      id: 'monitoring',
      title: 'Monitoring Tools in Azure',
      description: 'Azure Advisor, Service Health, Azure Monitor, Log Analytics, and Application Insights.'
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        <Link to="/">Home</Link>
        <ChevronRight size={16} className="mx-1" />
        <span>Azure Management</span>
      </div>

      <header className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Azure Management and Governance</h1>
          <span className="tag-green">30-35% of Exam</span>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">
          Managing costs, governance, resources, and monitoring in Azure.
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
          This section covers how to manage and govern Azure resources effectively. You'll learn about 
          cost management, governance tools, resource deployment methods, and monitoring solutions 
          that ensure your Azure environment runs efficiently and securely.
        </p>
        <p>
          The Azure Management and Governance section accounts for approximately 30-35% of the exam questions, 
          making it a significant portion of your AZ-900 preparation.
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
              section="azure-management"
              title={topic.title}
              description={topic.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AzureManagementPage;