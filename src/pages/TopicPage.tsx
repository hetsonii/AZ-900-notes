import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import ProgressTracker from '../components/ProgressTracker';
import { useProgress } from '../contexts/ProgressContext';
import CloudComputingTopic from '../topics/cloud-concepts/CloudComputingTopic';
import CloudModelsTopic from '../topics/cloud-concepts/CloudModelsTopic';
import ConsumptionModelTopic from '../topics/cloud-concepts/ConsumptionModelTopic';
import CloudBenefitsTopic from '../topics/cloud-concepts/CloudBenefitsTopic';
import CloudServiceTypesTopic from '../topics/cloud-concepts/CloudServiceTypesTopic';
import CoreComponentsTopic from '../topics/azure-architecture/CoreComponentsTopic';
import ComputeNetworkingTopic from '../topics/azure-architecture/ComputeNetworkingTopic';
import StorageServicesTopic from '../topics/azure-architecture/StorageServicesTopic';
import IdentityAccessTopic from '../topics/azure-architecture/IdentityAccessTopic';
import CostManagementTopic from '../topics/azure-management/CostManagementTopic';
import GovernanceTopic from '../topics/azure-management/GovernanceTopic';
import ResourceManagementTopic from '../topics/azure-management/ResourceManagementTopic';
import MonitoringTopic from '../topics/azure-management/MonitoringTopic';

const topicComponents: Record<string, React.ComponentType> = {
  'cloud-concepts/define-cloud-computing': CloudComputingTopic,
  'cloud-concepts/cloud-models': CloudModelsTopic,
  'cloud-concepts/consumption-based-model': ConsumptionModelTopic,
  'cloud-concepts/cloud-benefits': CloudBenefitsTopic,
  'cloud-concepts/cloud-service-types': CloudServiceTypesTopic,
  'azure-architecture/core-components': CoreComponentsTopic,
  'azure-architecture/compute-networking': ComputeNetworkingTopic,
  'azure-architecture/storage-services': StorageServicesTopic,
  'azure-architecture/identity-access': IdentityAccessTopic,
  'azure-management/cost-management': CostManagementTopic,
  'azure-management/governance': GovernanceTopic,
  'azure-management/resource-management': ResourceManagementTopic,
  'azure-management/monitoring': MonitoringTopic,
};

const allTopics = [
  { id: 'cloud-concepts/define-cloud-computing', title: 'Define Cloud Computing' },
  { id: 'cloud-concepts/cloud-models', title: 'Cloud Models' },
  { id: 'cloud-concepts/consumption-based-model', title: 'Consumption-Based Model' },
  { id: 'cloud-concepts/cloud-benefits', title: 'Benefits of Cloud Services' },
  { id: 'cloud-concepts/cloud-service-types', title: 'Cloud Service Types' },
  { id: 'azure-architecture/core-components', title: 'Core Architectural Components' },
  { id: 'azure-architecture/compute-networking', title: 'Compute and Networking Services' },
  { id: 'azure-architecture/storage-services', title: 'Azure Storage Services' },
  { id: 'azure-architecture/identity-access', title: 'Identity, Access, and Security' },
  { id: 'azure-management/cost-management', title: 'Cost Management in Azure' },
  { id: 'azure-management/governance', title: 'Governance and Compliance' },
  { id: 'azure-management/resource-management', title: 'Resource Management' },
  { id: 'azure-management/monitoring', title: 'Monitoring Tools in Azure' },
];

const TopicPage: React.FC = () => {
  const { section, id } = useParams();
  const navigate = useNavigate();
  const { toggleTopicCompletion } = useProgress();
  const topicId = `${section}/${id}`;
  
  const TopicComponent = topicComponents[topicId];
  
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.pageYOffset > 400);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  if (!TopicComponent) {
    return <div>Topic not found</div>;
  }

  // Get section title for breadcrumb
  const sectionTitle = {
    'cloud-concepts': 'Cloud Concepts',
    'azure-architecture': 'Azure Architecture',
    'azure-management': 'Azure Management',
  }[section || ''] || section;

  // Get current topic index for previous/next navigation
  const currentIndex = allTopics.findIndex(topic => topic.id === topicId);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  // Handle navigation
  const goToPrevious = () => {
    if (prevTopic) {
      navigate(`/topic/${prevTopic.id}`);
      scrollToTop();
    }
  };

  const goToNext = () => {
    if (nextTopic) {
      toggleTopicCompletion(topicId);
      navigate(`/topic/${nextTopic.id}`);
      scrollToTop();
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        <Link to="/">Home</Link>
        <ChevronRight size={16} className="mx-1" />
        <Link to={`/${section}`}>{sectionTitle}</Link>
        <ChevronRight size={16} className="mx-1" />
        <span>{allTopics.find(topic => topic.id === topicId)?.title}</span>
      </div>

      {/* Progress Tracker */}
      <div className="flex justify-end mb-6">
        <ProgressTracker topicId={topicId} />
      </div>

      {/* Topic Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
        <TopicComponent />
      </div>

      {/* Previous/Next Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={goToPrevious}
          disabled={!prevTopic}
          className={`flex items-center ${
            prevTopic ? 'btn-outline' : 'btn-outline opacity-50 cursor-not-allowed'
          }`}
        >
          <ArrowLeft size={16} className="mr-2" />
          {prevTopic ? 'Previous: ' + prevTopic.title : 'No Previous Topic'}
        </button>

        <button
          onClick={goToNext}
          disabled={!nextTopic}
          className={`flex items-center ${
            nextTopic ? 'btn-outline' : 'btn-outline opacity-50 cursor-not-allowed'
          }`}
        >
          {nextTopic ? 'Next: ' + nextTopic.title : 'No Next Topic'}
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default TopicPage;