import React from 'react';

const CloudServiceTypesTopic: React.FC = () => {
  return (
    <div>
      <h1>Cloud Service Types</h1>
      
      <p>
        Cloud services are typically offered in three main service models: Infrastructure as a Service (IaaS),
        Platform as a Service (PaaS), and Software as a Service (SaaS). Each model offers different levels
        of management, flexibility, and control.
      </p>

      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">Cloud Service Models Comparison</h3>
        <div className="relative">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-4">
              <h4 className="text-center font-medium mb-3">On-Premises</h4>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Applications</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Data</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Runtime</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Middleware</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">O/S</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Virtualization</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Servers</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">Storage</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">Networking</div>
              <div className="mt-3 text-center text-sm">
                <span className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">You Manage</span>
              </div>
            </div>
            
            <div className="flex-1 p-4">
              <h4 className="text-center font-medium mb-3">IaaS</h4>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Applications</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Data</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Runtime</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Middleware</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">O/S</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Virtualization</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Servers</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Storage</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Networking</div>
              <div className="mt-3 text-center text-sm flex justify-between">
                <span className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">You Manage</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Provider Manages</span>
              </div>
            </div>
            
            <div className="flex-1 p-4">
              <h4 className="text-center font-medium mb-3">PaaS</h4>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Applications</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Data</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Runtime</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Middleware</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">O/S</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Virtualization</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Servers</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Storage</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Networking</div>
              <div className="mt-3 text-center text-sm flex justify-between">
                <span className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">You Manage</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Provider Manages</span>
              </div>
            </div>
            
            <div className="flex-1 p-4">
              <h4 className="text-center font-medium mb-3">SaaS</h4>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Applications</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Data</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Runtime</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Middleware</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">O/S</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Virtualization</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Servers</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Storage</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Networking</div>
              <div className="mt-3 text-center text-sm">
                <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Provider Manages</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <div className="inline-block bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-lg">
              <span className="font-medium">More Control</span>
              <span className="mx-4">→</span>
              <span className="font-medium">Less Control</span>
            </div>
          </div>
        </div>
      </div>

      <h2>Infrastructure as a Service (IaaS)</h2>
      
      <p className="mb-4">
        IaaS provides virtualized computing resources over the internet. It's the most flexible cloud service 
        type, giving you the most control over your cloud resources.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-6">
        <h3 className="mb-3">Key Characteristics of IaaS</h3>
        <ul className="space-y-2">
          <li>• <strong>Control:</strong> You manage the operating systems, middleware, and applications</li>
          <li>• <strong>Virtualization:</strong> The cloud provider manages the hypervisors and physical infrastructure</li>
          <li>• <strong>Flexibility:</strong> Choose your own operating systems, software, and development tools</li>
          <li>• <strong>Scalability:</strong> Easily scale resources up or down based on demand</li>
          <li>• <strong>Payment Model:</strong> Pay for what you use, typically per hour or minute</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Common Use Cases:</h4>
        <ul className="space-y-1">
          <li>• Lift-and-shift migration (moving on-premises workloads to the cloud)</li>
          <li>• Test and development environments</li>
          <li>• Storage, backup, and recovery solutions</li>
          <li>• High-performance computing</li>
          <li>• Big data analysis</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Azure IaaS Examples:</h4>
        <ul className="space-y-1">
          <li>• Azure Virtual Machines</li>
          <li>• Azure Storage</li>
          <li>• Azure Virtual Networks</li>
          <li>• Azure Load Balancer</li>
        </ul>
      </div>

      <h2>Platform as a Service (PaaS)</h2>
      
      <p className="mb-4">
        PaaS provides a platform allowing customers to develop, run, and manage applications without 
        dealing with the infrastructure. The cloud provider manages the operating systems, middleware, 
        and runtime.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-6">
        <h3 className="mb-3">Key Characteristics of PaaS</h3>
        <ul className="space-y-2">
          <li>• <strong>Focus:</strong> Concentrate on application development instead of infrastructure management</li>
          <li>• <strong>Management:</strong> Provider manages OS, middleware, and underlying infrastructure</li>
          <li>• <strong>Development Tools:</strong> Built-in development tools, database management, and business analytics</li>
          <li>• <strong>Collaboration:</strong> Multiple developers can work on the same project simultaneously</li>
          <li>• <strong>Rapid Deployment:</strong> Quick application deployment and updates</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Common Use Cases:</h4>
        <ul className="space-y-1">
          <li>• Web application development</li>
          <li>• API development and management</li>
          <li>• Business analytics and intelligence</li>
          <li>• Internet of Things (IoT) applications</li>
          <li>• Serverless computing functions</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Azure PaaS Examples:</h4>
        <ul className="space-y-1">
          <li>• Azure App Service</li>
          <li>• Azure Functions</li>
          <li>• Azure Logic Apps</li>
          <li>• Azure SQL Database</li>
          <li>• Azure Cognitive Services</li>
        </ul>
      </div>

      <h2>Software as a Service (SaaS)</h2>
      
      <p className="mb-4">
        SaaS delivers software applications over the internet, on a subscription basis. The cloud provider 
        hosts and manages the software application and underlying infrastructure.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-6">
        <h3 className="mb-3">Key Characteristics of SaaS</h3>
        <ul className="space-y-2">
          <li>• <strong>Ready to Use:</strong> Applications are ready to use without installation or setup</li>
          <li>• <strong>Subscription Model:</strong> Pay a subscription fee, typically monthly or annually</li>
          <li>• <strong>Minimal Management:</strong> Provider handles all updates, patches, and maintenance</li>
          <li>• <strong>Accessibility:</strong> Access applications from anywhere with an internet connection</li>
          <li>• <strong>Multi-tenancy:</strong> All customers use the same application infrastructure</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Common Use Cases:</h4>
        <ul className="space-y-1">
          <li>• Email and collaboration (e.g., Microsoft 365, Google Workspace)</li>
          <li>• Customer relationship management (CRM)</li>
          <li>• Enterprise resource planning (ERP)</li>
          <li>• Project management tools</li>
          <li>• Productivity applications</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Azure SaaS Examples:</h4>
        <ul className="space-y-1">
          <li>• Microsoft 365</li>
          <li>• Dynamics 365</li>
          <li>• Microsoft Teams</li>
          <li>• Power BI</li>
        </ul>
      </div>

      <h2>Use Case Comparison</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Scenario</th>
              <th>IaaS</th>
              <th>PaaS</th>
              <th>SaaS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Migrating existing applications to the cloud</td>
              <td>✅ Best</td>
              <td>⚠️ Possible but may require changes</td>
              <td>❌ Not applicable</td>
            </tr>
            <tr>
              <td>Developing new cloud applications</td>
              <td>⚠️ Possible but requires more work</td>
              <td>✅ Best</td>
              <td>❌ Not applicable</td>
            </tr>
            <tr>
              <td>Hosting websites and web applications</td>
              <td>⚠️ Possible but requires more management</td>
              <td>✅ Best</td>
              <td>❌ Not applicable</td>
            </tr>
            <tr>
              <td>Data storage, backup, and recovery</td>
              <td>✅ Good</td>
              <td>✅ Good</td>
              <td>❌ Not applicable</td>
            </tr>
            <tr>
              <td>Testing and development environments</td>
              <td>✅ Best</td>
              <td>⚠️ Possible</td>
              <td>❌ Not applicable</td>
            </tr>
            <tr>
              <td>Email and collaboration tools</td>
              <td>❌ Not recommended</td>
              <td>❌ Not recommended</td>
              <td>✅ Best</td>
            </tr>
            <tr>
              <td>Need complete control over infrastructure</td>
              <td>✅ Best</td>
              <td>❌ Limited control</td>
              <td>❌ Minimal control</td>
            </tr>
            <tr>
              <td>Minimal management overhead desired</td>
              <td>❌ High management</td>
              <td>⚠️ Moderate management</td>
              <td>✅ Minimal management</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>IaaS (Infrastructure as a Service):</strong> You manage the OS, middleware, and applications while the provider manages the physical infrastructure and virtualization.
        </li>
        <li>
          <strong>PaaS (Platform as a Service):</strong> You manage the applications and data while the provider manages the runtime, middleware, OS, and infrastructure.
        </li>
        <li>
          <strong>SaaS (Software as a Service):</strong> You only manage user access and data while the provider manages everything else including the application.
        </li>
        <li>
          <strong>Responsibility Shift:</strong> As you move from IaaS to PaaS to SaaS, you have less control but also less management responsibility.
        </li>
        <li>
          <strong>Use Case Consideration:</strong> Choose the right service model based on your specific requirements for control, flexibility, and management overhead.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Understand the key differences between IaaS, PaaS, and SaaS</li>
          <li>• Know which components you manage versus which the provider manages in each model</li>
          <li>• Be able to identify appropriate use cases for each service model</li>
          <li>• Recognize common Azure services for each service model</li>
          <li>• Understand how the shared responsibility model applies differently to each service type</li>
        </ul>
      </div>
    </div>
  );
};

export default CloudServiceTypesTopic;