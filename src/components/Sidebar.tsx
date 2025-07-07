import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Cloud, Database, Settings, ChevronDown, ChevronRight, BookOpen, CheckCircle } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { getProgressPercentage, isTopicCompleted } = useProgress();
  
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'cloud-concepts': true,
    'azure-architecture': true,
    'azure-management': true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const NavItem = ({ to, children, topicId }: { to: string; children: React.ReactNode; topicId?: string }) => {
    const completed = topicId ? isTopicCompleted(topicId) : false;
    
    return (
      <NavLink 
        to={to} 
        className={({isActive}) => 
          `nav-link-inner relative flex items-center ${isActive ? 'active' : ''}`
        }
      >
        <span className="flex-grow">{children}</span>
        {completed && <CheckCircle size={16} className="text-success shrink-0 ml-2" />}
      </NavLink>
    );
  };

  return (
    <div className="h-full bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        {/* Overall Progress */}
        <div className="mb-6 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm font-medium">{getProgressPercentage()}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <NavLink to="/" className={({isActive}) => 
            `flex items-center p-2 rounded-lg transition-colors ${
              isActive 
                ? 'bg-primary/10 text-primary' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`
          }>
            <BookOpen size={18} className="mr-3" />
            <span>Study Dashboard</span>
          </NavLink>

          {/* Cloud Concepts Section */}
          <div className="space-y-1">
            <button
              onClick={() => toggleSection('cloud-concepts')}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                location.pathname.includes('cloud-concepts')
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <Cloud size={18} className="mr-3" />
                <span>Cloud Concepts</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs mr-2">{getProgressPercentage('cloud-concepts')}%</span>
                {expandedSections['cloud-concepts'] ? 
                  <ChevronDown size={16} /> : 
                  <ChevronRight size={16} />
                }
              </div>
            </button>

            {expandedSections['cloud-concepts'] && (
              <div className="ml-7 space-y-1 border-l-2 border-gray-200 dark:border-gray-600 pl-4">
                <NavItem to="/topic/cloud-concepts/define-cloud-computing" topicId="cloud-concepts/define-cloud-computing">
                  Define Cloud Computing
                </NavItem>
                <NavItem to="/topic/cloud-concepts/cloud-models" topicId="cloud-concepts/cloud-models">
                  Cloud Models
                </NavItem>
                <NavItem to="/topic/cloud-concepts/consumption-based-model" topicId="cloud-concepts/consumption-based-model">
                  Consumption-Based Model
                </NavItem>
                <NavItem to="/topic/cloud-concepts/cloud-benefits" topicId="cloud-concepts/cloud-benefits">
                  Benefits of Cloud Services
                </NavItem>
                <NavItem to="/topic/cloud-concepts/cloud-service-types" topicId="cloud-concepts/cloud-service-types">
                  Cloud Service Types
                </NavItem>
              </div>
            )}
          </div>

          {/* Azure Architecture Section */}
          <div className="space-y-1">
            <button
              onClick={() => toggleSection('azure-architecture')}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                location.pathname.includes('azure-architecture')
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <Database size={18} className="mr-3" />
                <span>Azure Architecture</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs mr-2">{getProgressPercentage('azure-architecture')}%</span>
                {expandedSections['azure-architecture'] ? 
                  <ChevronDown size={16} /> : 
                  <ChevronRight size={16} />
                }
              </div>
            </button>

            {expandedSections['azure-architecture'] && (
              <div className="ml-7 space-y-1 border-l-2 border-gray-200 dark:border-gray-600 pl-4">
                <NavItem to="/topic/azure-architecture/core-components" topicId="azure-architecture/core-components">
                  Core Components
                </NavItem>
                <NavItem to="/topic/azure-architecture/compute-networking" topicId="azure-architecture/compute-networking">
                  Compute & Networking
                </NavItem>
                <NavItem to="/topic/azure-architecture/storage-services" topicId="azure-architecture/storage-services">
                  Storage Services
                </NavItem>
                <NavItem to="/topic/azure-architecture/identity-access" topicId="azure-architecture/identity-access">
                  Identity & Access
                </NavItem>
              </div>
            )}
          </div>

          {/* Azure Management Section */}
          <div className="space-y-1">
            <button
              onClick={() => toggleSection('azure-management')}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                location.pathname.includes('azure-management')
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <Settings size={18} className="mr-3" />
                <span>Azure Management</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs mr-2">{getProgressPercentage('azure-management')}%</span>
                {expandedSections['azure-management'] ? 
                  <ChevronDown size={16} /> : 
                  <ChevronRight size={16} />
                }
              </div>
            </button>

            {expandedSections['azure-management'] && (
              <div className="ml-7 space-y-1 border-l-2 border-gray-200 dark:border-gray-600 pl-4">
                <NavItem to="/topic/azure-management/cost-management" topicId="azure-management/cost-management">
                  Cost Management
                </NavItem>
                <NavItem to="/topic/azure-management/governance" topicId="azure-management/governance">
                  Governance & Compliance
                </NavItem>
                <NavItem to="/topic/azure-management/resource-management" topicId="azure-management/resource-management">
                  Resource Management
                </NavItem>
                <NavItem to="/topic/azure-management/monitoring" topicId="azure-management/monitoring">
                  Monitoring Tools
                </NavItem>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;