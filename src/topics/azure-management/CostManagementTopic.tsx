import React from 'react';

const CostManagementTopic: React.FC = () => {
  return (
    <div>
      <h1>Cost Management in Azure</h1>
      
      <p>
        Understanding how to manage and optimize costs is critical for successful cloud adoption. 
        Azure provides various tools and features to help you monitor, analyze, and optimize your 
        cloud spending.
      </p>

      <h2>Factors That Can Affect Costs in Azure</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Resource Type</h3>
          <p className="mb-3">
            Different Azure services are billed differently, based on their specific characteristics and consumption patterns.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• <strong>Compute:</strong> Pay for CPU time, memory</li>
            <li>• <strong>Storage:</strong> Pay for amount stored, transactions</li>
            <li>• <strong>Networking:</strong> Pay for data transfer, bandwidth</li>
            <li>• <strong>PaaS:</strong> Pay for service capacity or consumption</li>
            <li>• <strong>SaaS:</strong> Often pay per user or per month</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Consumption Model</h3>
          <p className="mb-3">
            How you purchase and use Azure services can significantly impact your costs.
          </p>
          <h4 className="font-medium mt-4 mb-2">Options:</h4>
          <ul className="space-y-1">
            <li>• <strong>Pay-as-you-go:</strong> Pay for what you use with no commitment</li>
            <li>• <strong>Reserved Instances:</strong> Pre-pay for 1-3 years for discounts</li>
            <li>• <strong>Spot Instances:</strong> Use spare capacity at reduced rates</li>
            <li>• <strong>Savings Plans:</strong> Commit to hourly spend for discounts</li>
            <li>• <strong>Enterprise Agreement:</strong> Volume discounts and benefits</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Location</h3>
          <p className="mb-3">
            Azure pricing varies by region due to different operating costs for datacenters in different geographical areas.
          </p>
          <h4 className="font-medium mt-4 mb-2">Considerations:</h4>
          <ul className="space-y-1">
            <li>• Prices can vary significantly between regions</li>
            <li>• Consider latency vs. cost tradeoffs</li>
            <li>• Data transfer costs between regions</li>
            <li>• Compliance requirements may limit choice</li>
            <li>• Service availability in specific regions</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Network Traffic</h3>
          <p className="mb-3">
            Data transfer costs can add up quickly, especially for bandwidth-intensive applications.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Points:</h4>
          <ul className="space-y-1">
            <li>• Inbound data transfer is typically free</li>
            <li>• Outbound data transfer is charged</li>
            <li>• Inter-region data transfer costs more</li>
            <li>• Traffic between availability zones may incur charges</li>
            <li>• Content Delivery Networks can optimize costs</li>
            <li>• ExpressRoute has different billing models</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Resource Usage and Optimization</h3>
          <p className="mb-3">
            How efficiently you use resources directly impacts your costs.
          </p>
          <h4 className="font-medium mt-4 mb-2">Optimization Strategies:</h4>
          <ul className="space-y-1">
            <li>• Right-sizing resources to match requirements</li>
            <li>• Shutting down unused resources</li>
            <li>• Implementing auto-scaling</li>
            <li>• Using lower-cost tiers where appropriate</li>
            <li>• Optimizing storage usage and tier</li>
            <li>• Implementing effective cost governance</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">Cost-Saving Best Practices</h3>
        <ul className="space-y-2">
          <li>• <strong>Use Azure Advisor cost recommendations</strong> to identify potential savings</li>
          <li>• <strong>Implement auto-shutdown for dev/test environments</strong> to avoid paying for unused compute</li>
          <li>• <strong>Right-size underutilized resources</strong> based on performance metrics</li>
          <li>• <strong>Use Reserved Instances</strong> for predictable workloads to save up to 72%</li>
          <li>• <strong>Leverage Azure Hybrid Benefit</strong> if you have existing Windows Server or SQL Server licenses</li>
          <li>• <strong>Move infrequently accessed data</strong> to lower-cost storage tiers</li>
          <li>• <strong>Clean up unused resources</strong> like disks, IPs, and network interfaces</li>
        </ul>
      </div>

      <h2>Pricing Calculator and Total Cost of Ownership (TCO) Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Pricing Calculator</h3>
          <p className="mb-3">
            Tool to estimate the cost of Azure products and services based on your expected usage.
          </p>
          <h4 className="font-medium mt-4 mb-2">Features:</h4>
          <ul className="space-y-1">
            <li>• Provides cost estimates for Azure services</li>
            <li>• Allows customization of service configurations</li>
            <li>• Supports different billing options (pay-as-you-go, reserved)</li>
            <li>• Enables "what-if" scenarios for cost planning</li>
            <li>• Provides region-specific pricing</li>
            <li>• Creates shareable cost estimates</li>
          </ul>
          <h4 className="font-medium mt-4 mb-2">Best For:</h4>
          <ul className="space-y-1">
            <li>• Planning future Azure deployments</li>
            <li>• Budgeting for new projects</li>
            <li>• Comparing different service configurations</li>
            <li>• Creating cost proposals</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Total Cost of Ownership (TCO) Calculator</h3>
          <p className="mb-3">
            Tool to estimate cost savings when migrating from on-premises infrastructure to Azure.
          </p>
          <h4 className="font-medium mt-4 mb-2">Features:</h4>
          <ul className="space-y-1">
            <li>• Compares on-premises costs with Azure costs</li>
            <li>• Includes hardware, software, networking, and labor costs</li>
            <li>• Calculates ROI and breakeven point</li>
            <li>• Accounts for infrastructure maintenance costs</li>
            <li>• Considers power, cooling, and datacenter costs</li>
            <li>• Generates detailed reports for stakeholders</li>
          </ul>
          <h4 className="font-medium mt-4 mb-2">Best For:</h4>
          <ul className="space-y-1">
            <li>• Building business cases for cloud migration</li>
            <li>• Justifying cloud investments to stakeholders</li>
            <li>• Planning migration budgets</li>
            <li>• Understanding long-term cost implications</li>
          </ul>
        </div>
      </div>
      
      <div className="table-container mb-8">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Pricing Calculator</th>
              <th>TCO Calculator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary purpose</td>
              <td>Estimate Azure service costs</td>
              <td>Compare on-premises vs. Azure costs</td>
            </tr>
            <tr>
              <td>Time perspective</td>
              <td>Future Azure deployments</td>
              <td>Migration from existing infrastructure</td>
            </tr>
            <tr>
              <td>Cost components</td>
              <td>Azure services only</td>
              <td>Hardware, software, electricity, IT operations, etc.</td>
            </tr>
            <tr>
              <td>Typical timeframe</td>
              <td>Monthly and annual estimates</td>
              <td>3-5 year cost comparison</td>
            </tr>
            <tr>
              <td>Target audience</td>
              <td>Solution architects, developers</td>
              <td>Financial decision-makers, IT directors</td>
            </tr>
            <tr>
              <td>Level of detail</td>
              <td>Detailed service configuration</td>
              <td>High-level infrastructure comparison</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Cost Management Capabilities in Azure</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Azure Cost Management + Billing</h3>
        <p className="mb-4">
          Azure's integrated cost management solution that helps you monitor, allocate, and optimize your 
          Azure cloud spending.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium mb-2">Cost Analysis</h4>
            <ul className="space-y-1 text-sm">
              <li>• Interactive cost exploration</li>
              <li>• Detailed cost breakdowns</li>
              <li>• Various chart and view options</li>
              <li>• Filter by multiple dimensions</li>
              <li>• Group and analyze spending</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Budgets</h4>
            <ul className="space-y-1 text-sm">
              <li>• Set spending thresholds</li>
              <li>• Email alerts when thresholds are reached</li>
              <li>• Trigger automation based on budgets</li>
              <li>• Apply to specific scopes</li>
              <li>• Track against forecasts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Alerts</h4>
            <ul className="space-y-1 text-sm">
              <li>• Budget alerts</li>
              <li>• Credit alerts</li>
              <li>• Department spending quota alerts</li>
              <li>• Customizable thresholds</li>
              <li>• Email notification recipients</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-medium mb-2">Advisor Recommendations</h4>
            <ul className="space-y-1 text-sm">
              <li>• Right-sizing suggestions</li>
              <li>• Reserved Instance recommendations</li>
              <li>• Idle resource identification</li>
              <li>• Estimated cost savings</li>
              <li>• Implementation guidance</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Exports</h4>
            <ul className="space-y-1 text-sm">
              <li>• Scheduled cost data exports</li>
              <li>• Export to Storage Account</li>
              <li>• Integration with other tools</li>
              <li>• Customizable data selection</li>
              <li>• CSV or JSON formats</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Cost Allocation</h4>
            <ul className="space-y-1 text-sm">
              <li>• Showback and chargeback</li>
              <li>• Cost distribution rules</li>
              <li>• Resource tagging</li>
              <li>• Department and project allocation</li>
              <li>• Custom reporting</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Reservations</h3>
          <p className="mb-3">
            Pre-pay for one or three years of resource usage to receive significant discounts compared to pay-as-you-go pricing.
          </p>
          <h4 className="font-medium mt-4 mb-2">Available Reservations:</h4>
          <ul className="space-y-1">
            <li>• Virtual Machines (Reserved VM Instances)</li>
            <li>• SQL Database compute capacity</li>
            <li>• Azure Cosmos DB throughput</li>
            <li>• Azure Synapse Analytics</li>
            <li>• App Service Stamp Fee</li>
            <li>• Azure Storage</li>
            <li>• Azure Data Factory</li>
          </ul>
          <h4 className="font-medium mt-4 mb-2">Benefits:</h4>
          <ul className="space-y-1">
            <li>• Up to 72% savings over pay-as-you-go</li>
            <li>• Budget predictability</li>
            <li>• Priority capacity in some regions</li>
            <li>• Flexibility to exchange or return with fee</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Hybrid Benefit</h3>
          <p className="mb-3">
            Licensing benefit that helps maximize the value of existing on-premises Windows Server and SQL Server license investments when migrating to Azure.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Use on-premises licenses in Azure</li>
            <li>• Save up to 40% on Windows Server VMs</li>
            <li>• Save up to 55% on SQL Server</li>
            <li>• Combine with Reserved Instances for up to 80% savings</li>
            <li>• Available for Software Assurance customers</li>
            <li>• Applicable to IaaS and PaaS services</li>
            <li>• License mobility for other products</li>
          </ul>
        </div>
      </div>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">Azure Cost Optimization Process</h3>
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Visibility</span>
            <p className="text-xs mt-1">Cost Analysis & Reporting</p>
          </div>
          <div className="flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Accountability</span>
            <p className="text-xs mt-1">Tags & Cost Allocation</p>
          </div>
          <div className="flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Optimization</span>
            <p className="text-xs mt-1">Right-sizing & Reservations</p>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-5 gap-2">
          <div className="col-start-5 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Governance</span>
            <p className="text-xs mt-1">Policies & Budgets</p>
          </div>
          <div className="col-start-4 flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="col-start-3 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Culture</span>
            <p className="text-xs mt-1">Education & Awareness</p>
          </div>
          <div className="col-start-2 flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="col-start-1 bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Planning</span>
            <p className="text-xs mt-1">Architecture & Forecasting</p>
          </div>
        </div>
      </div>

      <h2>The Purpose of Tags</h2>
      
      <p className="mb-4">
        Tags are name-value pairs that you can apply to Azure resources, resource groups, and subscriptions 
        to logically organize them and make resource management more effective.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Key Uses of Tags</h3>
          <ul className="space-y-2">
            <li>• <strong>Resource organization:</strong> Categorize resources by purpose, environment, or other criteria</li>
            <li>• <strong>Cost tracking:</strong> Allocate costs to different departments, projects, or business units</li>
            <li>• <strong>Resource management:</strong> Find and work with resources associated with specific workloads</li>
            <li>• <strong>Operations management:</strong> Group resources for applying policies or automation</li>
            <li>• <strong>Security:</strong> Classify data by security level</li>
            <li>• <strong>Governance and compliance:</strong> Identify resources for regulatory requirements</li>
            <li>• <strong>Workload optimization:</strong> Visualize resources participating in related workloads</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Common Tag Categories</h3>
          <div className="table-container">
            <table className="text-sm">
              <thead>
                <tr>
                  <th>Tag Category</th>
                  <th>Example Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Department</td>
                  <td>Finance, Marketing, HR</td>
                </tr>
                <tr>
                  <td>Environment</td>
                  <td>Production, Staging, Development</td>
                </tr>
                <tr>
                  <td>Cost Center</td>
                  <td>CC1234, CC5678</td>
                </tr>
                <tr>
                  <td>Project</td>
                  <td>Website Redesign, ERP Implementation</td>
                </tr>
                <tr>
                  <td>Application</td>
                  <td>CRM, E-commerce, Analytics</td>
                </tr>
                <tr>
                  <td>Owner</td>
                  <td>email@company.com</td>
                </tr>
                <tr>
                  <td>Business Criticality</td>
                  <td>Critical, High, Medium, Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Tag Limitations and Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Limitations</h4>
            <ul className="space-y-1">
              <li>• Maximum 50 tag name/value pairs per resource</li>
              <li>• Tag names limited to 512 characters</li>
              <li>• Tag values limited to 256 characters</li>
              <li>• Tags not inherited from resource groups</li>
              <li>• Case-sensitive</li>
              <li>• Not all resource types support tags</li>
              <li>• Cannot be applied to classic resources</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Best Practices</h4>
            <ul className="space-y-1">
              <li>• Develop a consistent tagging strategy</li>
              <li>• Use Azure Policy to enforce tagging</li>
              <li>• Automate tag application where possible</li>
              <li>• Use tags with cost management</li>
              <li>• Consider tag governance and lifecycle</li>
              <li>• Document tagging standards</li>
              <li>• Use lowercase and consistent formats</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="mb-2">Tags and Cost Management Integration</h3>
        <ul className="space-y-2">
          <li>• <strong>Cost allocation:</strong> View costs broken down by tags in Cost Analysis</li>
          <li>• <strong>Budgets by tags:</strong> Create budgets for specific tag values</li>
          <li>• <strong>Exports with tags:</strong> Include tag information in exported cost data</li>
          <li>• <strong>Reports by tag:</strong> Generate custom reports filtered by tags</li>
          <li>• <strong>Cost alerting:</strong> Set up alerts for costs associated with specific tags</li>
          <li>• <strong>Charge-back models:</strong> Implement internal billing based on tag usage</li>
        </ul>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Cost Factors:</strong> Resource type, consumption model, location, network traffic, and resource optimization all affect Azure costs.
        </li>
        <li>
          <strong>Pricing Calculator:</strong> Estimates costs for future Azure deployments based on specific service configurations.
        </li>
        <li>
          <strong>TCO Calculator:</strong> Compares on-premises costs with Azure costs to help build a business case for migration.
        </li>
        <li>
          <strong>Cost Management:</strong> Azure Cost Management + Billing provides tools for monitoring, analyzing, and optimizing your cloud spending.
        </li>
        <li>
          <strong>Cost Optimization:</strong> Reservations, Azure Hybrid Benefit, right-sizing, and automation help reduce Azure costs.
        </li>
        <li>
          <strong>Tags:</strong> Name-value pairs that help organize resources and track costs by department, project, or other dimensions.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Understand the key factors that affect Azure costs and how to optimize them</li>
          <li>• Know the differences between the Pricing Calculator and TCO Calculator and when to use each</li>
          <li>• Be familiar with the features of Azure Cost Management + Billing</li>
          <li>• Understand how Reservations and Azure Hybrid Benefit can reduce costs</li>
          <li>• Know how tags can be used for cost allocation and resource organization</li>
          <li>• Be aware of tag limitations and best practices</li>
        </ul>
      </div>
    </div>
  );
};

export default CostManagementTopic;