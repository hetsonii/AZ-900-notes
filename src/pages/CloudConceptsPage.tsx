import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import TopicCard from '../components/TopicCard';
import { useProgress } from '../contexts/ProgressContext';

const CloudConceptsPage: React.FC = () => {
  const { getProgressPercentage } = useProgress();
  const progress = getProgressPercentage('cloud-concepts');

  const topics = [
    {
      id: 'define-cloud-computing',
      title: 'Define Cloud Computing',
      description: 'Understanding what cloud computing is and the shared responsibility model.'
    },
    {
      id: 'cloud-models',
      title: 'Cloud Models',
      description: 'Public, private, and hybrid cloud models and their appropriate use cases.'
    },
    {
      id: 'consumption-based-model',
      title: 'Consumption-Based Model',
      description: 'Cloud pricing models, consumption-based pricing, and serverless computing.'
    },
    {
      id: 'cloud-benefits',
      title: 'Benefits of Cloud Services',
      description: 'High availability, scalability, reliability, security, and manageability benefits.'
    },
    {
      id: 'cloud-service-types',
      title: 'Cloud Service Types',
      description: 'Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).'
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        <Link to="/">Home</Link>
        <ChevronRight size={16} className="mx-1" />
        <span>Cloud Concepts</span>
      </div>

      <header className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Cloud Concepts</h1>
          <span className="tag-blue">25-30% of Exam</span>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">
          Understanding the fundamentals of cloud computing and its core principles.
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
          This section covers fundamental cloud computing concepts that form the foundation of your Azure knowledge. 
          You'll learn what cloud computing is, the different types of cloud models, how cloud services are priced, 
          and the various benefits and service types available.
        </p>
        <p>
          The Cloud Concepts section accounts for approximately 25-30% of the AZ-900 exam questions, 
          making it a critical area to understand thoroughly.
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
              section="cloud-concepts"
              title={topic.title}
              description={topic.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CloudConceptsPage;