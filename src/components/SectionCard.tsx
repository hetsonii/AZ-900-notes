import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Database, Settings, ArrowRight } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

interface SectionCardProps {
  id: string;
  title: string;
  description: string;
  topicCount: number;
  examPercentage: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ 
  id, 
  title, 
  description, 
  topicCount,
  examPercentage 
}) => {
  const { getProgressPercentage } = useProgress();
  const progress = getProgressPercentage(id);

  const getIcon = () => {
    switch (id) {
      case 'cloud-concepts':
        return <Cloud size={24} className="text-blue-500" />;
      case 'azure-architecture':
        return <Database size={24} className="text-purple-500" />;
      case 'azure-management':
        return <Settings size={24} className="text-green-500" />;
      default:
        return <Cloud size={24} />;
    }
  };

  const getTagClass = () => {
    switch (id) {
      case 'cloud-concepts':
        return 'tag-blue';
      case 'azure-architecture':
        return 'tag-purple';
      case 'azure-management':
        return 'tag-green';
      default:
        return 'tag-blue';
    }
  };

  return (
    <div className="section-card">
      <div className="flex items-center gap-3 mb-4">
        {getIcon()}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">{progress}% Complete</span>
        <span className={getTagClass()}>{examPercentage}</span>
      </div>
      <div className="progress-bar mb-4">
        <div className="progress-value" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">{topicCount} Topics</span>
        <Link 
          to={`/${id}`} 
          className="btn-outline py-1 px-3 text-sm"
        >
          <span>Explore</span>
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default SectionCard;