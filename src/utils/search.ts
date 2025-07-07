import { topics } from './topics';

export interface SearchResult {
  title: string;
  description: string;
  path: string;
  section: string;
}

// Define all searchable content
export const searchableContent: SearchResult[] = [
  // Cloud Concepts
  {
    title: 'Define Cloud Computing',
    description: 'Understanding cloud computing fundamentals, shared responsibility model, and key characteristics',
    path: '/topic/cloud-concepts/define-cloud-computing',
    section: 'Cloud Concepts'
  },
  {
    title: 'Cloud Models',
    description: 'Public, private, and hybrid cloud models and their use cases',
    path: '/topic/cloud-concepts/cloud-models',
    section: 'Cloud Concepts'
  },
  {
    title: 'Consumption-Based Model',
    description: 'Understanding cloud pricing models and serverless computing',
    path: '/topic/cloud-concepts/consumption-based-model',
    section: 'Cloud Concepts'
  },
  {
    title: 'Benefits of Cloud Services',
    description: 'High availability, scalability, reliability, and security benefits',
    path: '/topic/cloud-concepts/cloud-benefits',
    section: 'Cloud Concepts'
  },
  {
    title: 'Cloud Service Types',
    description: 'IaaS, PaaS, SaaS and their appropriate use cases',
    path: '/topic/cloud-concepts/cloud-service-types',
    section: 'Cloud Concepts'
  },
  // Azure Architecture
  {
    title: 'Core Architectural Components',
    description: 'Azure regions, availability zones, resource groups, and management hierarchy',
    path: '/topic/azure-architecture/core-components',
    section: 'Azure Architecture'
  },
  {
    title: 'Compute and Networking',
    description: 'Virtual machines, containers, networking services, and hosting options',
    path: '/topic/azure-architecture/compute-networking',
    section: 'Azure Architecture'
  },
  {
    title: 'Storage Services',
    description: 'Azure storage types, redundancy options, and migration tools',
    path: '/topic/azure-architecture/storage-services',
    section: 'Azure Architecture'
  },
  {
    title: 'Identity and Access',
    description: 'Microsoft Entra ID, authentication methods, and security features',
    path: '/topic/azure-architecture/identity-access',
    section: 'Azure Architecture'
  },
  // Azure Management
  {
    title: 'Cost Management',
    description: 'Understanding Azure costs, pricing calculators, and cost optimization',
    path: '/topic/azure-management/cost-management',
    section: 'Azure Management'
  },
  {
    title: 'Governance and Compliance',
    description: 'Microsoft Purview, Azure Policy, and resource locks',
    path: '/topic/azure-management/governance',
    section: 'Azure Management'
  },
  {
    title: 'Resource Management',
    description: 'Azure portal, Cloud Shell, Azure Arc, and Infrastructure as Code',
    path: '/topic/azure-management/resource-management',
    section: 'Azure Management'
  },
  {
    title: 'Monitoring Tools',
    description: 'Azure Advisor, Service Health, Monitor, and Application Insights',
    path: '/topic/azure-management/monitoring',
    section: 'Azure Management'
  }
];

export const searchContent = (query: string): SearchResult[] => {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return [];

  return searchableContent.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(searchTerm);
    const descriptionMatch = item.description.toLowerCase().includes(searchTerm);
    const sectionMatch = item.section.toLowerCase().includes(searchTerm);
    
    return titleMatch || descriptionMatch || sectionMatch;
  });
};