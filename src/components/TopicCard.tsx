import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

interface TopicCardProps {
  id: string;
  section: string;
  title: string;
  description: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ id, section, title, description }) => {
  const { isTopicCompleted } = useProgress();
  const completed = isTopicCompleted(`${section}/${id}`);

  return (
    <Link to={`/topic/${section}/${id}`} className="block">
      <div className={`topic-card ${completed ? 'border-success/30' : ''}`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium">{title}</h3>
          {completed && <CheckCircle size={18} className="text-success shrink-0 ml-2" />}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {section.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          <span className="text-primary">
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;