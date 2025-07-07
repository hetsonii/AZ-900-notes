import React from 'react';

const CloudModelsTopic: React.FC = () => {
  return (
    <div>
      <h1>Cloud Models</h1>
      
      <p>
        Cloud deployment models define where your data is stored and how your customers interact with it.
        There are three primary cloud deployment models: public, private, and hybrid cloud. Each model 
        offers different levels of control, flexibility, and management.
      </p>

      <h2>Types of Cloud Models</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-center text-xl mb-3">Public Cloud</h3>
          <p className="mb-3">
            Services provided by third-party providers over the public internet, available to anyone who wants to use or purchase them.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Characteristics:</h4>
          <ul className="space-y-1">
            <li>• No capital expenditures</li>
            <li>• High scalability/agility</li>
            <li>• Pay-as-you-go pricing</li>
            <li>• Minimal technical knowledge</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h3 className="text-center text-xl mb-3">Private Cloud</h3>
          <p className="mb-3">
            Computing resources used exclusively by one business or organization, physically located at your on-site datacenter or hosted by a third-party provider.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Characteristics:</h4>
          <ul className="space-y-1">
            <li>• Hardware must be purchased</li>
            <li>• Organizations have complete control</li>
            <li>• Higher security and privacy</li>
            <li>• Organization is responsible for maintenance</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 className="text-center text-xl mb-3">Hybrid Cloud</h3>
          <p className="mb-3">
            Computing environment that combines a public cloud and a private cloud by allowing data and applications to be shared between them.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Characteristics:</h4>
          <ul className="space-y-1">
            <li>• Most flexible environment</li>
            <li>• Organizations determine where to run applications</li>
            <li>• Control security, compliance, or legal requirements</li>
            <li>• More complex to manage</li>
          </ul>
        </div>
      </div>

      <h2>Appropriate Use Cases for Each Cloud Model</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Cloud Model</th>
              <th>Best For</th>
              <th>Example Use Cases</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Public Cloud</td>
              <td>
                • Organizations with fluctuating demand<br />
                • Startups or small companies<br />
                • Applications with unpredictable usage<br />
                • Software development and testing
              </td>
              <td>
                • Email<br />
                • Development/test environments<br />
                • Web applications<br />
                • Storage, backup, and recovery
              </td>
            </tr>
            <tr>
              <td>Private Cloud</td>
              <td>
                • Organizations with strict security and compliance requirements<br />
                • Organizations that need complete control over their environments<br />
                • Large enterprises with critical operations
              </td>
              <td>
                • Financial institutions<br />
                • Government agencies<br />
                • Healthcare organizations<br />
                • Large enterprises with legacy applications
              </td>
            </tr>
            <tr>
              <td>Hybrid Cloud</td>
              <td>
                • Organizations with a mix of IT requirements<br />
                • Businesses with seasonal spikes in demand<br />
                • Companies transitioning to the cloud gradually
              </td>
              <td>
                • Running legacy apps in private cloud, new apps in public cloud<br />
                • Handling burst capacity during peak times<br />
                • Processing sensitive data in private cloud, less sensitive in public cloud<br />
                • Disaster recovery solutions
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Multi-Cloud</h2>
      
      <p>
        A multi-cloud strategy involves using cloud services from two or more cloud providers. While not strictly 
        a separate cloud model, it's an increasingly common approach that organizations use to:
      </p>
      
      <ul className="mb-4 space-y-2">
        <li>• Avoid vendor lock-in</li>
        <li>• Take advantage of best-in-breed services from different providers</li>
        <li>• Increase resilience and reliability</li>
        <li>• Optimize costs by selecting the most cost-effective services for specific workloads</li>
      </ul>
      
      <div className="flowchart">
        <h3 className="text-center mb-4">Cloud Models Comparison</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center font-medium">Public Cloud</div>
          <div className="text-center font-medium">Private Cloud</div>
          <div className="text-center font-medium">Hybrid Cloud</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="text-center bg-blue-100 dark:bg-blue-900/30 p-2 rounded">Low Cost</div>
          <div className="text-center bg-blue-100 dark:bg-blue-900/30 p-2 rounded">High Cost</div>
          <div className="text-center bg-blue-100 dark:bg-blue-900/30 p-2 rounded">Balanced Cost</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="text-center bg-green-100 dark:bg-green-900/30 p-2 rounded">No Maintenance</div>
          <div className="text-center bg-green-100 dark:bg-green-900/30 p-2 rounded">Full Maintenance</div>
          <div className="text-center bg-green-100 dark:bg-green-900/30 p-2 rounded">Partial Maintenance</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="text-center bg-purple-100 dark:bg-purple-900/30 p-2 rounded">Minimal Security Control</div>
          <div className="text-center bg-purple-100 dark:bg-purple-900/30 p-2 rounded">Maximum Security Control</div>
          <div className="text-center bg-purple-100 dark:bg-purple-900/30 p-2 rounded">Balanced Security Control</div>
        </div>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Public Cloud:</strong> Third-party owned, minimal technical knowledge required, pay-as-you-go pricing.
        </li>
        <li>
          <strong>Private Cloud:</strong> Single organization, maximum control, higher security, and higher cost.
        </li>
        <li>
          <strong>Hybrid Cloud:</strong> Combines public and private clouds, offers flexibility, and is more complex to manage.
        </li>
        <li>
          <strong>Multi-Cloud:</strong> Using services from multiple cloud providers for best-in-breed services, avoiding vendor lock-in.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the defining characteristics of each cloud model</li>
          <li>• Understand appropriate use cases for each model</li>
          <li>• Remember the balance of responsibility, control, and cost across models</li>
          <li>• Recognize how hybrid cloud provides flexibility by combining public and private clouds</li>
        </ul>
      </div>
    </div>
  );
};

export default CloudModelsTopic;