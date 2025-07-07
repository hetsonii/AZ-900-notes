import React from 'react';

const CoreComponentsTopic: React.FC = () => {
  return (
    <div>
      <h1>Core Architectural Components of Azure</h1>
      
      <p>
        Azure's architecture is built on a hierarchy of components that help organize and manage your resources. 
        Understanding these core components is essential for effectively working with Azure and for the AZ-900 exam.
      </p>

      <h2>Azure Regions, Region Pairs, and Sovereign Regions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Regions</h3>
          <p>
            A geographical area containing at least one, but potentially multiple datacenters that are nearby and networked together.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Points:</h4>
          <ul className="space-y-1">
            <li>• 60+ regions worldwide</li>
            <li>• Available in 140+ countries</li>
            <li>• Allows you to place resources closer to users</li>
            <li>• Some services are region-specific</li>
            <li>• Regions are the basis for SLA calculations</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Region Pairs</h3>
          <p>
            Each Azure region is paired with another region within the same geography (such as US, Europe, or Asia) at least 300 miles away.
          </p>
          <h4 className="font-medium mt-4 mb-2">Benefits:</h4>
          <ul className="space-y-1">
            <li>• Physical isolation from each other</li>
            <li>• Platform-provided replication for some services</li>
            <li>• Prioritized region recovery in outages</li>
            <li>• Updates rolled out sequentially to minimize downtime</li>
            <li>• Data resides within the same geography for tax and law enforcement jurisdiction</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Sovereign Regions</h3>
          <p>
            Isolated Azure instances separate from the main Azure instance, often used for compliance or legal purposes.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• <strong>Azure China:</strong> Operated by 21Vianet</li>
            <li>• <strong>Azure Government:</strong> For US government agencies and partners</li>
            <li>• <strong>Azure Government Secret:</strong> For US intelligence agencies</li>
            <li>• <strong>Azure Government Top Secret:</strong> For classified top secret data</li>
          </ul>
        </div>
      </div>

      <h2>Availability Zones</h2>
      
      <p className="mb-4">
        Availability Zones are physically separate datacenters within an Azure region. Each zone is made up of one 
        or more datacenters equipped with independent power, cooling, and networking.
      </p>
      
      <div className="flowchart mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Zone 1</h4>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-gray-700 p-2 rounded-lg w-20 h-20 flex items-center justify-center">
                Datacenter
              </div>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Zone 2</h4>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-gray-700 p-2 rounded-lg w-20 h-20 flex items-center justify-center">
                Datacenter
              </div>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Zone 3</h4>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-gray-700 p-2 rounded-lg w-20 h-20 flex items-center justify-center">
                Datacenter
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <div className="inline-block bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-lg">
            <span className="font-medium">Single Azure Region</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Key Points about Availability Zones</h3>
        <ul className="space-y-2">
          <li>• Designed to protect from datacenter failures</li>
          <li>• Physically separated but connected by high-speed, private fiber-optic networks</li>
          <li>• Used for mission-critical applications requiring high availability</li>
          <li>• Provide 99.99% uptime SLA when properly implemented</li>
          <li>• Not all regions support Availability Zones</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Zone-redundant Services:</h4>
        <ul className="space-y-1">
          <li>• Services automatically replicated across zones (e.g., Zone-redundant storage)</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Zonal Services:</h4>
        <ul className="space-y-1">
          <li>• Resources pinned to a specific zone (e.g., VMs, managed disks)</li>
        </ul>
      </div>

      <h2>Azure Datacenters</h2>
      
      <p className="mb-4">
        Azure datacenters are large facilities housing thousands of physical servers with their own power, cooling, 
        and networking infrastructure.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Key Points about Azure Datacenters</h3>
        <ul className="space-y-2">
          <li>• Globally distributed to provide services worldwide</li>
          <li>• Microsoft invests billions in datacenter infrastructure</li>
          <li>• Highly secure facilities with strict access control</li>
          <li>• Increasingly powered by renewable energy sources</li>
          <li>• Customers generally don't interact directly with datacenters</li>
          <li>• Resources are deployed to regions and availability zones, not directly to datacenters</li>
        </ul>
      </div>

      <h2>Azure Resources and Resource Groups</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Resources</h3>
          <p className="mb-3">
            Resources are the basic building blocks of Azure. Anything you create, provision, deploy, etc., is a resource.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples of Resources:</h4>
          <ul className="space-y-1">
            <li>• Virtual machines</li>
            <li>• Storage accounts</li>
            <li>• Web apps</li>
            <li>• Databases</li>
            <li>• Virtual networks</li>
            <li>• IoT hubs</li>
            <li>• AI/ML services</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Resource Groups</h3>
          <p className="mb-3">
            Logical containers that hold related resources for an Azure solution. Resources can only exist in one resource group at a time.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Logical grouping of related resources</li>
            <li>• Organized by lifecycle, billing, or access control</li>
            <li>• Resources can be added or removed at any time</li>
            <li>• Resources can be moved between resource groups</li>
            <li>• Resource groups can't be nested</li>
            <li>• Apply policies at the resource group level</li>
            <li>• Delete all resources in a group with one action</li>
          </ul>
        </div>
      </div>

      <h2>Subscriptions</h2>
      
      <p className="mb-4">
        An Azure subscription is a logical container for your resources. It's linked to an Azure account, which 
        is an identity in Microsoft Entra ID or a directory that it trusts.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Key Points about Subscriptions</h3>
        <ul className="space-y-2">
          <li>• Provides authenticated and authorized access to Azure products and services</li>
          <li>• Boundary for billing and payment</li>
          <li>• Each subscription generates separate billing reports and invoices</li>
          <li>• May have limits or quotas on resource usage</li>
          <li>• Used to organize resources by department, project, or environment</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Common Subscription Types:</h4>
        <ul className="space-y-1">
          <li>• <strong>Free trial:</strong> 12 months of popular free services, $200 credit for 30 days, and 25+ always-free services</li>
          <li>• <strong>Pay-as-you-go:</strong> Pay for what you use by linking a credit card or debit card to your account</li>
          <li>• <strong>Enterprise Agreement:</strong> For enterprise customers with annual Azure commitments</li>
          <li>• <strong>Student:</strong> $100 credit for 12 months with no credit card required</li>
          <li>• <strong>CSP (Cloud Solution Provider):</strong> Purchased through a Microsoft partner</li>
        </ul>
      </div>

      <h2>Management Groups</h2>
      
      <p className="mb-4">
        Management groups provide a level of scope above subscriptions. You organize subscriptions into 
        management groups to efficiently manage access, policies, and compliance across multiple subscriptions.
      </p>
      
      <div className="flowchart mb-6">
        <h3 className="text-center mb-4">Azure Hierarchy</h3>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg w-64 text-center">
            <span className="font-medium">Management Groups</span>
          </div>
          <div className="h-6 border-l-2 border-gray-300 dark:border-gray-500"></div>
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg w-64 text-center">
            <span className="font-medium">Subscriptions</span>
          </div>
          <div className="h-6 border-l-2 border-gray-300 dark:border-gray-500"></div>
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg w-64 text-center">
            <span className="font-medium">Resource Groups</span>
          </div>
          <div className="h-6 border-l-2 border-gray-300 dark:border-gray-500"></div>
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg w-64 text-center">
            <span className="font-medium">Resources</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
        <h3 className="mb-3">Key Points about Management Groups</h3>
        <ul className="space-y-2">
          <li>• Can include multiple child management groups and subscriptions</li>
          <li>• Support up to 10,000 management groups in a single directory</li>
          <li>• Management group tree can support up to six levels of depth (not including the root level)</li>
          <li>• Each management group and subscription can only support one parent</li>
          <li>• Used to apply governance conditions (like policies and access controls) to multiple subscriptions</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Common Use Cases:</h4>
        <ul className="space-y-1">
          <li>• <strong>Hierarchical organization:</strong> Create a hierarchical structure for organizational alignment</li>
          <li>• <strong>Policy inheritance:</strong> Apply policies at the management group level that automatically inherit to all subscriptions</li>
          <li>• <strong>Access control:</strong> Use a single role assignment on the management group to grant access across multiple subscriptions</li>
          <li>• <strong>Budgeting and reporting:</strong> Roll up usage and costs across the hierarchy for better financial management</li>
        </ul>
      </div>

      <h2>The Hierarchy of Resource Organization</h2>
      
      <p className="mb-4">
        Azure uses a hierarchical structure to organize resources and apply management settings. Understanding this 
        hierarchy is crucial for proper resource management and governance.
      </p>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Scope</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Management Groups</td>
              <td>Multiple subscriptions</td>
              <td>
                • Organize subscriptions into containers<br />
                • Apply governance conditions<br />
                • Provide hierarchical organization
              </td>
            </tr>
            <tr>
              <td>Subscriptions</td>
              <td>Multiple resource groups</td>
              <td>
                • Billing boundary<br />
                • Access control boundary<br />
                • Scale limit boundary
              </td>
            </tr>
            <tr>
              <td>Resource Groups</td>
              <td>Multiple resources</td>
              <td>
                • Logical container for resources<br />
                • Group resources with same lifecycle<br />
                • Apply policies at resource group level
              </td>
            </tr>
            <tr>
              <td>Resources</td>
              <td>Individual services</td>
              <td>
                • Individual services or assets<br />
                • Specific instances of Azure services<br />
                • Building blocks of Azure solutions
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Hierarchy Governance Considerations</h3>
        <ul className="space-y-2">
          <li>• <strong>Policy inheritance:</strong> Settings applied at higher levels cascade down to lower levels</li>
          <li>• <strong>Access inheritance:</strong> Permissions granted at higher levels flow down to lower levels</li>
          <li>• <strong>Overrides:</strong> Specific settings at lower levels can override inherited settings from higher levels</li>
          <li>• <strong>Organization strategy:</strong> Design your hierarchy to match your organizational structure, geographical distribution, or workload types</li>
        </ul>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Regions:</strong> Geographical areas containing one or more datacenters where you deploy resources.
        </li>
        <li>
          <strong>Region Pairs:</strong> Two regions paired together for disaster recovery, at least 300 miles apart.
        </li>
        <li>
          <strong>Sovereign Regions:</strong> Isolated instances of Azure for compliance and legal purposes.
        </li>
        <li>
          <strong>Availability Zones:</strong> Physically separate datacenters within a region that protect against datacenter failures.
        </li>
        <li>
          <strong>Resources:</strong> The basic building blocks in Azure (VMs, storage accounts, web apps, etc.).
        </li>
        <li>
          <strong>Resource Groups:</strong> Containers that hold related resources for an Azure solution.
        </li>
        <li>
          <strong>Subscriptions:</strong> Logical containers for resource groups that are associated with billing and access control.
        </li>
        <li>
          <strong>Management Groups:</strong> Containers for organizing subscriptions for governance and management.
        </li>
        <li>
          <strong>Hierarchy:</strong> Management Groups {'>'} Subscriptions {'>'} Resource Groups {'>'} Resources.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Understand the differences between regions, availability zones, and datacenters</li>
          <li>• Know the purpose of region pairs and their benefits</li>
          <li>• Be able to explain the Azure resource hierarchy and the purpose of each level</li>
          <li>• Understand how governance and policy inheritance works in the hierarchy</li>
          <li>• Know the limitations and constraints of each organizational level</li>
        </ul>
      </div>
    </div>
  );
};

export default CoreComponentsTopic;