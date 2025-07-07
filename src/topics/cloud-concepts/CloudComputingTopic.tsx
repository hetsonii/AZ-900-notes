import React from 'react';

const CloudComputingTopic: React.FC = () => {
  return (
    <div>
      <h1>Define Cloud Computing</h1>
      
      <p>
        Cloud computing is the delivery of computing services over the internet ("the cloud"), 
        offering faster innovation, flexible resources, and economies of scale. These services 
        include servers, storage, databases, networking, software, analytics, and intelligence.
      </p>

      <h2>Key Characteristics of Cloud Computing</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Characteristic</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>On-demand self-service</td>
              <td>Users can provision resources automatically without human interaction from the service provider</td>
            </tr>
            <tr>
              <td>Broad network access</td>
              <td>Services are available over the network and accessed through standard mechanisms</td>
            </tr>
            <tr>
              <td>Resource pooling</td>
              <td>Provider resources are pooled to serve multiple consumers using a multi-tenant model</td>
            </tr>
            <tr>
              <td>Rapid elasticity</td>
              <td>Resources can be elastically provisioned and released to scale rapidly with demand</td>
            </tr>
            <tr>
              <td>Measured service</td>
              <td>Cloud systems automatically control and optimize resource use by leveraging a metering capability</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Shared Responsibility Model</h2>
      
      <p>
        The shared responsibility model defines the security responsibilities shared between you (the customer) 
        and your cloud provider (Microsoft). This division of responsibility varies depending on whether you're 
        using SaaS, PaaS, IaaS, or on-premises deployments.
      </p>
      
      <div className="flowchart">
        <h3 className="text-center mb-4">Shared Responsibility Model</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Cloud Provider Responsibilities</h4>
            <ul className="space-y-2">
              <li>• Physical security of data centers</li>
              <li>• Network infrastructure</li>
              <li>• Host infrastructure</li>
              <li>• Service availability</li>
              <li>• Physical hardware</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Customer Responsibilities</h4>
            <ul className="space-y-2">
              <li>• Data & information</li>
              <li>• Devices (Mobile, PCs)</li>
              <li>• Accounts & identities</li>
              <li>• Applications</li>
              <li>• Identity & access management</li>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="mt-4">
        The responsibility shifts based on the service model:
      </p>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Service Model</th>
              <th>Provider Responsibility</th>
              <th>Customer Responsibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SaaS (Software as a Service)</td>
              <td>
                • Physical infrastructure<br />
                • Network controls<br />
                • Application code<br />
                • Application data storage
              </td>
              <td>
                • Data<br />
                • Devices<br />
                • Accounts/identities
              </td>
            </tr>
            <tr>
              <td>PaaS (Platform as a Service)</td>
              <td>
                • Physical infrastructure<br />
                • Network controls<br />
                • Runtime/middleware
              </td>
              <td>
                • Data<br />
                • Devices<br />
                • Accounts/identities<br />
                • Applications
              </td>
            </tr>
            <tr>
              <td>IaaS (Infrastructure as a Service)</td>
              <td>
                • Physical infrastructure<br />
                • Network controls
              </td>
              <td>
                • Data<br />
                • Devices<br />
                • Accounts/identities<br />
                • Applications<br />
                • Operating system<br />
                • Network controls
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Cloud Computing Definition:</strong> Delivery of computing services over the internet 
          including infrastructure, platforms, and software.
        </li>
        <li>
          <strong>Five Essential Characteristics:</strong> On-demand self-service, broad network access, 
          resource pooling, rapid elasticity, and measured service.
        </li>
        <li>
          <strong>Shared Responsibility Model:</strong> Security responsibilities are shared between 
          cloud providers and customers, with the division varying by service model.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Understand the defining characteristics of cloud computing</li>
          <li>• Know who is responsible for what in each service model</li>
          <li>• Be familiar with the division of responsibilities in the shared responsibility model</li>
          <li>• Recognize how responsibilities shift as you move from IaaS to PaaS to SaaS</li>
        </ul>
      </div>
    </div>
  );
};

export default CloudComputingTopic;