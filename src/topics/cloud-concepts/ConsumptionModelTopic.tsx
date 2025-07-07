import React from 'react';

const ConsumptionModelTopic: React.FC = () => {
  return (
    <div>
      <h1>Consumption-Based Model</h1>
      
      <p>
        One of the key differences between traditional on-premises computing and cloud computing 
        is the shift from capital expenditure (CapEx) to operational expenditure (OpEx). 
        Cloud computing follows a consumption-based model, where you only pay for the IT resources you use.
      </p>

      <h2>Capital Expenditure vs. Operational Expenditure</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Capital Expenditure (CapEx)</th>
              <th>Operational Expenditure (OpEx)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Upfront cost</td>
              <td>No upfront cost</td>
            </tr>
            <tr>
              <td>Value decreases over time</td>
              <td>Pay as you go</td>
            </tr>
            <tr>
              <td>High initial investment</td>
              <td>Immediate project start</td>
            </tr>
            <tr>
              <td>Fixed capacity</td>
              <td>Flexible capacity</td>
            </tr>
            <tr>
              <td>Hardware maintenance costs</td>
              <td>No maintenance costs</td>
            </tr>
            <tr>
              <td>Tax deduction spread over years</td>
              <td>Tax deduction in same year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How the Consumption-Based Model Works</h2>
      
      <p>
        In the consumption-based model, you:
      </p>
      
      <ul className="mb-4 space-y-2">
        <li>• Pay only for what you use</li>
        <li>• Pay for additional resources when needed</li>
        <li>• Stop paying when you stop using resources</li>
        <li>• Scale up or down based on demand</li>
      </ul>
      
      <div className="flowchart">
        <h3 className="text-center mb-4">Consumption-Based Model Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
            <h4 className="mb-2">No Upfront Costs</h4>
            <p className="text-sm">No need to purchase infrastructure before using it</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
            <h4 className="mb-2">Automatic Scaling</h4>
            <p className="text-sm">Resources scale with your needs</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
            <h4 className="mb-2">Pay-As-You-Go</h4>
            <p className="text-sm">Only pay for what you actually consume</p>
          </div>
        </div>
      </div>

      <h2>Cloud Pricing Models</h2>
      
      <p>
        Cloud providers like Microsoft Azure offer several pricing models:
      </p>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Pricing Model</th>
              <th>Description</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pay-as-you-go</td>
              <td>Pay for what you use by the second</td>
              <td>
                • Variable workloads<br />
                • Short-term projects<br />
                • Testing and development
              </td>
            </tr>
            <tr>
              <td>Reserved Instances</td>
              <td>Pre-pay for 1-3 years of service at reduced rates</td>
              <td>
                • Predictable usage<br />
                • Budget planning<br />
                • Steady state workloads
              </td>
            </tr>
            <tr>
              <td>Spot Pricing</td>
              <td>Bid on unused capacity at discounted rates</td>
              <td>
                • Batch jobs<br />
                • Non-critical workloads<br />
                • Workloads that can handle interruptions
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Serverless Computing</h2>
      
      <p>
        Serverless computing is an extension of the consumption-based model where the cloud provider 
        automatically provisions, scales, and manages the infrastructure required to run the code.
      </p>
      
      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
        <h3 className="mb-2">Key Characteristics of Serverless Computing:</h3>
        <ul className="space-y-2">
          <li>• <strong>No server management:</strong> Developers don't need to worry about server provisioning, patching, or scaling</li>
          <li>• <strong>Pay-per-execution:</strong> You're only charged for the actual execution time of your code</li>
          <li>• <strong>Event-driven:</strong> Functions are triggered by specific events</li>
          <li>• <strong>Automatic scaling:</strong> The platform scales automatically based on the number of incoming events</li>
          <li>• <strong>Stateless:</strong> Each execution is independent</li>
        </ul>
      </div>
      
      <p>
        Examples of serverless services in Azure include:
      </p>
      
      <ul className="mb-4 space-y-2">
        <li>• Azure Functions</li>
        <li>• Azure Logic Apps</li>
        <li>• Azure Event Grid</li>
      </ul>

      <h2>Factors Affecting Costs in Azure</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="mb-3">Resource Type</h3>
          <p>
            Different Azure resources are billed differently. For example:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Compute:</strong> Billed by CPU time and memory allocated</li>
            <li>• <strong>Storage:</strong> Billed by amount of data stored and transactions</li>
            <li>• <strong>Networking:</strong> Billed by data transfer and bandwidth usage</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="mb-3">Usage Meters</h3>
          <p>
            Azure measures resource usage with various meters:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Time:</strong> How long a resource is active</li>
            <li>• <strong>Data transfer:</strong> Amount of data moving in/out of Azure</li>
            <li>• <strong>Operations:</strong> Number of operations performed</li>
            <li>• <strong>Executions:</strong> Number of function executions or API calls</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="mb-3">Resource Location</h3>
          <p>
            The geographic location where your resource is deployed affects the price:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Operating costs vary by region</li>
            <li>• Network traffic costs depend on source and destination</li>
            <li>• Some services are only available in specific regions</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="mb-3">Billing Zone</h3>
          <p>
            Data transfer pricing depends on billing zones:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Zone 1:</strong> North America, Europe</li>
            <li>• <strong>Zone 2:</strong> Asia Pacific, South America</li>
            <li>• <strong>Zone 3:</strong> Rest of the world</li>
            <li>• Data transfer between zones costs more than within zones</li>
          </ul>
        </div>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Consumption-Based Model:</strong> Pay only for the IT resources you use.
        </li>
        <li>
          <strong>CapEx vs. OpEx:</strong> Cloud computing shifts IT expenses from capital expenditure to operational expenditure.
        </li>
        <li>
          <strong>Pricing Models:</strong> Pay-as-you-go, reserved instances, and spot pricing offer different ways to optimize costs.
        </li>
        <li>
          <strong>Serverless Computing:</strong> An extension of the consumption-based model where you only pay for the execution time of your code.
        </li>
        <li>
          <strong>Cost Factors:</strong> Resource type, usage meters, resource location, and billing zone affect your Azure costs.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Understand the difference between CapEx and OpEx</li>
          <li>• Know the benefits of the consumption-based model</li>
          <li>• Recognize the three main pricing models: pay-as-you-go, reserved instances, and spot pricing</li>
          <li>• Understand what serverless computing is and its benefits</li>
          <li>• Be familiar with the factors that affect costs in Azure</li>
        </ul>
      </div>
    </div>
  );
};

export default ConsumptionModelTopic;