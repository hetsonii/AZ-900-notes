import React, { createContext, useState, useEffect, useContext } from 'react';

interface ProgressContextType {
  completedTopics: string[];
  toggleTopicCompletion: (topicId: string) => void;
  isTopicCompleted: (topicId: string) => boolean;
  getProgressPercentage: (sectionId?: string) => number;
  reset: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedTopics, setCompletedTopics] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('completedTopics');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
  }, [completedTopics]);

  // Define topic mapping based on your actual topic structure
  const topicSectionMapping: Record<string, string> = {
    // Cloud Concepts topics
    'cloud-concepts/define-cloud-computing': 'cloud-concepts',
    'cloud-concepts/cloud-models': 'cloud-concepts',
    'cloud-concepts/consumption-based-model': 'cloud-concepts',
    'cloud-concepts/cloud-benefits': 'cloud-concepts',
    'cloud-concepts/cloud-service-types': 'cloud-concepts',
    
    // Azure Architecture topics
    'azure-architecture/core-components': 'azure-architecture',
    'azure-architecture/compute-networking': 'azure-architecture',
    'azure-architecture/storage-services': 'azure-architecture',
    'azure-architecture/identity-access': 'azure-architecture',
    
    // Azure Management topics
    'azure-management/cost-management': 'azure-management',
    'azure-management/governance': 'azure-management',
    'azure-management/resource-management': 'azure-management',
    'azure-management/monitoring': 'azure-management',
  };

  const toggleTopicCompletion = (topicId: string) => {
    setCompletedTopics(prev => {
      if (prev.includes(topicId)) {
        return prev.filter(id => id !== topicId);
      } else {
        return [...prev, topicId];
      }
    });
  };

  const isTopicCompleted = (topicId: string): boolean => {
    return completedTopics.includes(topicId);
  };

  const getProgressPercentage = (sectionId?: string): number => {
    if (!sectionId) {
      // Overall progress - total topics across all sections
      const totalTopics = Object.keys(topicSectionMapping).length;
      return totalTopics > 0 ? Math.round((completedTopics.length / totalTopics) * 100) : 0;
    }
    
    // Section-specific progress
    const topicsInSection = Object.keys(topicSectionMapping).filter(
      topicId => topicSectionMapping[topicId] === sectionId
    );
    
    const totalInSection = topicsInSection.length;
    if (totalInSection === 0) return 0;
    
    // Count completed topics in this section
    const completedInSection = completedTopics.filter(topicId => 
      topicSectionMapping[topicId] === sectionId
    ).length;
    
    return Math.round((completedInSection / totalInSection) * 100);
  };

  const reset = () => {
    setCompletedTopics([]);
  };

  return (
    <ProgressContext.Provider value={{ 
      completedTopics, 
      toggleTopicCompletion, 
      isTopicCompleted,
      getProgressPercentage,
      reset
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};