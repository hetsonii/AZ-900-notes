import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

interface ProgressTrackerProps {
  topicId: string;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ topicId }) => {
  const { isTopicCompleted, toggleTopicCompletion } = useProgress();
  const completed = isTopicCompleted(topicId);

  return (
    <button 
      onClick={() => toggleTopicCompletion(topicId)}
      className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
        completed 
          ? 'bg-success/10 text-success hover:bg-success/20' 
          : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
      aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
    >
      {completed ? (
        <>
          <CheckCircle size={18} />
          <span>Completed</span>
        </>
      ) : (
        <>
          <Circle size={18} />
          <span>Mark as completed</span>
        </>
      )}
    </button>
  );
};

export default ProgressTracker;