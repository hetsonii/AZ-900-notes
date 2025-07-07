import React from 'react';

const GovernanceTopic: React.FC = () => {
  return (
    <div>
      <h1>Governance and Compliance in Azure</h1>
      
      <p>
        Effective governance helps organizations maintain control over applications and resources in 
        Azure. This includes implementing mechanisms to ensure compliance with internal policies, industry 
        standards, and regulatory requirements.
      </p>

      <h2>The Purpose of Microsoft Purview in Azure</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Microsoft Purview Overview</h3>
        <p className="mb-4">
          Microsoft Purview is a unified data governance service that helps you manage and govern your on-premises,
          multi-cloud, and software-as-a-service (SaaS) data. It provides a holistic understanding of your data 
          estate and helps you govern, protect, and manage your data ecosystem.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Data Governance Capabilities</h4>
            <ul className="space-y-1">
              <li>• <strong>Data Map:</strong> Automatically discover and classify data</li>
              <li>• <strong>Data Catalog:</strong> Search and explore data assets</li>
              <li>• <strong>Data Lineage:</strong> Track data movement and transformations</li>
              <li>• <strong>Business Glossary:</strong> Standardize business terminology</li>
              <li>• <strong>Data Sharing:</strong> Securely share data within and outside your organization</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Risk and Compliance Capabilities</h4>
            <ul className="space-y-1">
              <li>• <strong>Information Protection:</strong> Discover, classify, and protect sensitive data</li>
              <li>• <strong>Data Loss Prevention:</strong> Prevent data sharing with unauthorized parties</li>
              <li>• <strong>Compliance Management:</strong> Assess and improve regulatory compliance</li>
              <li>• <strong>Risk Management:</strong> Identify and remediate data risks</li>
              <li>• <strong>Insider Risk Management:</strong> Detect and address insider threats</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Microsoft Purview Data Map</h3>
          <p className="mb-3">
            Creates a map of your data landscape with automated data discovery, classification, and lineage.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Automated data discovery across environments</li>
            <li>• Classification of data with sensitivity labels</li>
            <li>• End-to-end data lineage visualization</li>
            <li>• Integration with over 200 data connectors</li>
            <li>• AI-powered insights about your data estate</li>
            <li>• Extensible metadata management</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Microsoft Purview Data Catalog</h3>
          <p className="mb-3">
            Enterprise-wide data catalog that enables data discovery and understanding of data assets.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Searchable inventory of data assets</li>
            <li>• Business glossary for standardized terminology</li>
            <li>• Data owner and expert identification</li>
            <li>• Annotations and descriptions for context</li>
            <li>• Integration with Power BI and other tools</li>
            <li>• Collaboration features for data users</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Microsoft Purview Information Protection</h3>
          <p className="mb-3">
            Discovers, classifies, and protects sensitive data across your environments.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Automated sensitive data discovery</li>
            <li>• Pre-built and custom sensitivity labels</li>
            <li>• Data classification across environments</li>
            <li>• Protection actions (encryption, access control)</li>
            <li>• Over 200 pre-built sensitive information types</li>
            <li>• ML-based trainable classifiers</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Microsoft Purview Compliance Manager</h3>
          <p className="mb-3">
            Helps you manage compliance requirements with risk-based compliance scores.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Compliance score as a measure of progress</li>
            <li>• Pre-built assessment templates</li>
            <li>• Step-by-step improvement actions</li>
            <li>• Evidence collection and management</li>
            <li>• Compliance reports for auditors</li>
            <li>• Regulatory updates and guidance</li>
          </ul>
        </div>
      </div>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">Microsoft Purview Components</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Data Governance</span>
            <p className="text-xs mt-1">Map, Catalog, Lineage</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Risk & Compliance</span>
            <p className="text-xs mt-1">Protection, DLP, eDiscovery</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Insider Risk</span>
            <p className="text-xs mt-1">Communication, Behavior</p>
          </div>
        </div>
      </div>

      <h2>The Purpose of Azure Policy</h2>
      
      <p className="mb-4">
        Azure Policy helps you enforce organizational standards and assess compliance at scale. 
        It provides governance guardrails that ensure resources stay compliant with corporate policies, 
        regulatory requirements, and service level agreements.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Policy Key Concepts</h3>
          <ul className="space-y-2">
            <li>• <strong>Policy Definition:</strong> Describes resource compliance conditions and the effect when conditions are met</li>
            <li>• <strong>Policy Assignment:</strong> Assigning a policy definition to a specific scope (management group, subscription, resource group)</li>
            <li>• <strong>Policy Effect:</strong> Actions taken when policy conditions are met (Audit, Deny, Deploy, Modify, etc.)</li>
            <li>• <strong>Policy Parameters:</strong> Variables that simplify policy management by reducing the number of policy definitions</li>
            <li>• <strong>Initiative Definition:</strong> Collection of policy definitions grouped to achieve a single goal</li>
            <li>• <strong>Compliance Dashboard:</strong> View of overall resource compliance state</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Common Policy Effects</h3>
          <div className="table-container">
            <table className="text-sm">
              <thead>
                <tr>
                  <th>Effect</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Audit</td>
                  <td>Creates a warning event in activity log but doesn't stop the request</td>
                </tr>
                <tr>
                  <td>Deny</td>
                  <td>Blocks the resource request and records an event in the activity log</td>
                </tr>
                <tr>
                  <td>Append</td>
                  <td>Adds additional fields to the requested resource</td>
                </tr>
                <tr>
                  <td>Modify</td>
                  <td>Alters properties of a resource before it's created or updated</td>
                </tr>
                <tr>
                  <td>DeployIfNotExists</td>
                  <td>Deploys related resources if they don't exist</td>
                </tr>
                <tr>
                  <td>AuditIfNotExists</td>
                  <td>Creates a warning if related resources don't exist</td>
                </tr>
                <tr>
                  <td>Disabled</td>
                  <td>Policy not evaluated (useful for testing)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Common Azure Policy Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li>• <strong>Resource Consistency:</strong> Enforce standardized resource configurations</li>
            <li>• <strong>Regulatory Compliance:</strong> Enforce controls required by specific standards</li>
            <li>• <strong>Security Enforcement:</strong> Implement security controls across resources</li>
            <li>• <strong>Cost Control:</strong> Restrict resource types, sizes, or SKUs that can be deployed</li>
            <li>• <strong>Tagging Governance:</strong> Enforce tagging rules and conventions</li>
          </ul>
          <ul className="space-y-2">
            <li>• <strong>Regional Restrictions:</strong> Limit where resources can be deployed</li>
            <li>• <strong>Resource Type Restrictions:</strong> Allow only certain resource types</li>
            <li>• <strong>Network Configuration:</strong> Enforce specific network settings</li>
            <li>• <strong>Automatic Remediation:</strong> Fix non-compliant resources</li>
            <li>• <strong>Resource Protection:</strong> Prevent deletion or modification of critical resources</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Azure Policy vs. RBAC</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Azure Policy</th>
                <th>Role-Based Access Control (RBAC)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Focus</td>
                <td>Resource properties compliance</td>
                <td>User actions and permissions</td>
              </tr>
              <tr>
                <td>Intent</td>
                <td>Enforce resource standards</td>
                <td>Manage user access to resources</td>
              </tr>
              <tr>
                <td>Evaluation</td>
                <td>During resource creation and updates</td>
                <td>During each user action</td>
              </tr>
              <tr>
                <td>Implementation</td>
                <td>Policy definitions and assignments</td>
                <td>Role definitions and assignments</td>
              </tr>
              <tr>
                <td>Scope</td>
                <td>Resource properties</td>
                <td>User actions and management operations</td>
              </tr>
              <tr>
                <td>Default state</td>
                <td>All actions allowed unless forbidden by policy</td>
                <td>No access until explicitly granted</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>The Purpose of Resource Locks</h2>
      
      <p className="mb-4">
        Resource locks prevent accidental deletion or modification of critical Azure resources. 
        They provide an additional layer of protection beyond RBAC to ensure important resources remain untouched.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Resource Lock Types</h3>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Read-only (ReadOnly)</h4>
            <ul className="space-y-1">
              <li>• Prevents any modifications to the resource</li>
              <li>• Users can read but not change properties</li>
              <li>• Can't delete or update the resource</li>
              <li>• Like having only Reader RBAC permissions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Delete (CanNotDelete)</h4>
            <ul className="space-y-1">
              <li>• Prevents resource deletion</li>
              <li>• Users can read and modify properties</li>
              <li>• Can't delete the resource</li>
              <li>• Allows all operations except delete</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Resource Lock Scope and Inheritance</h3>
          <p className="mb-3">
            Resource locks can be applied at different levels in the Azure resource hierarchy.
          </p>
          <h4 className="font-medium mb-2">Lock Scopes:</h4>
          <ul className="space-y-1">
            <li>• <strong>Subscription:</strong> Affects all resource groups and resources in the subscription</li>
            <li>• <strong>Resource Group:</strong> Affects all resources in the resource group</li>
            <li>• <strong>Individual Resource:</strong> Affects only the specific resource</li>
          </ul>
          <h4 className="font-medium mt-4 mb-2">Inheritance:</h4>
          <ul className="space-y-1">
            <li>• Locks are inherited by child resources</li>
            <li>• Multiple locks can apply to a resource</li>
            <li>• Most restrictive lock takes precedence</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Resource Lock Considerations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Best Practices</h4>
            <ul className="space-y-1">
              <li>• Apply locks to production and critical resources</li>
              <li>• Document lock purposes and ownership</li>
              <li>• Consider impact on automation and scripts</li>
              <li>• Review and audit locks periodically</li>
              <li>• Create consistent lock policies across environments</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Important Notes</h4>
            <ul className="space-y-1">
              <li>• Locks override RBAC permissions</li>
              <li>• Even owners and admins must remove locks to delete</li>
              <li>• Requires "Microsoft.Authorization/locks/*" permission</li>
              <li>• Owner and User Access Administrator roles can manage locks</li>
              <li>• Lock changes are recorded in the activity log</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">Resource Lock Operation Flow</h3>
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg text-center">
            User Action
          </div>
          <div className="flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg text-center">
            RBAC Check
          </div>
          <div className="flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg text-center">
            Lock Check
          </div>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg text-center">
              Lock Blocks Action
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg text-center">
              Action Allowed
            </div>
          </div>
        </div>
      </div>

      <h2>Service Trust Portal and Compliance Resources</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Microsoft Service Trust Portal</h3>
        <p className="mb-4">
          The Service Trust Portal is a portal that provides access to various content, tools, and other resources about Microsoft security, privacy, and compliance practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Available Resources</h4>
            <ul className="space-y-1">
              <li>• Compliance Manager</li>
              <li>• Trust Documents</li>
              <li>• Audit Reports</li>
              <li>• Compliance Guides</li>
              <li>• Data Protection Resources</li>
              <li>• Security Whitepapers</li>
              <li>• FAQs and Resources</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              <li>• Access to compliance certification details</li>
              <li>• Industry and regional compliance information</li>
              <li>• Transparency about data handling practices</li>
              <li>• Audit reports for Microsoft cloud services</li>
              <li>• Risk assessment tools</li>
              <li>• Data protection implementation guidance</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Compliance Documentation</h3>
          <p className="mb-3">
            Microsoft provides comprehensive documentation about Azure's compliance offerings and capabilities.
          </p>
          <h4 className="font-medium mt-4 mb-2">Available Resources:</h4>
          <ul className="space-y-1">
            <li>• Azure compliance documentation</li>
            <li>• Regional compliance guidance</li>
            <li>• Industry-specific compliance information</li>
            <li>• Compliance blueprints</li>
            <li>• Shared responsibility models</li>
            <li>• Best practices guides</li>
            <li>• Azure Security and Compliance Blueprint</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Compliance Offerings</h3>
          <p className="mb-3">
            Azure meets a broad set of international and industry-specific compliance standards.
          </p>
          <h4 className="font-medium mt-4 mb-2">Major Compliance Categories:</h4>
          <ul className="space-y-1">
            <li>• <strong>Global:</strong> ISO 27001, ISO 27018, SOC 1, SOC 2, SOC 3</li>
            <li>• <strong>Government:</strong> FedRAMP, CJIS, DISA, DoD, NIST</li>
            <li>• <strong>Regional:</strong> GDPR, UK G-Cloud, Australia IRAP</li>
            <li>• <strong>Industry:</strong> HIPAA, HITRUST, PCI DSS, GLBA</li>
            <li>• <strong>Financial:</strong> SOX, PCI DSS, GLBA</li>
            <li>• <strong>Healthcare:</strong> HIPAA, HITRUST, GxP</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="mb-2">Leveraging Compliance Resources</h3>
        <ul className="space-y-2">
          <li>• <strong>Shared Responsibility:</strong> Understand which compliance responsibilities belong to Microsoft vs. your organization</li>
          <li>• <strong>Compliance Manager:</strong> Use the tool to track your compliance posture across regulations</li>
          <li>• <strong>Azure Blueprints:</strong> Implement pre-built compliant environments</li>
          <li>• <strong>Audit Reports:</strong> Download reports for your own compliance audits</li>
          <li>• <strong>Customer Resources:</strong> Utilize templates, assessment tools, and guidance</li>
          <li>• <strong>Documentation:</strong> Reference official documentation for compliance implementations</li>
        </ul>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Microsoft Purview:</strong> Unified data governance service that helps you manage, govern, and protect your data across environments, providing capabilities for data map, catalog, lineage, and compliance.
        </li>
        <li>
          <strong>Azure Policy:</strong> Service that evaluates your resources for non-compliance with assigned policies, helping enforce standards and meet regulatory requirements through policy definitions, assignments, and initiatives.
        </li>
        <li>
          <strong>Policy Effects:</strong> Different actions that occur when a policy rule is matched, including Audit, Deny, Append, Modify, DeployIfNotExists, and AuditIfNotExists.
        </li>
        <li>
          <strong>Resource Locks:</strong> Prevent accidental deletion or modification of resources through ReadOnly (prevents changes) or CanNotDelete (prevents deletion) locks applied at subscription, resource group, or resource levels.
        </li>
        <li>
          <strong>Service Trust Portal:</strong> Microsoft's portal for security, privacy, and compliance information, providing access to audit reports, compliance documentation, and risk assessment tools.
        </li>
        <li>
          <strong>Compliance Offerings:</strong> Azure meets various global, regional, and industry-specific compliance standards, with documentation and resources available to help customers achieve compliance.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Understand the difference between Microsoft Purview's data governance and risk/compliance capabilities</li>
          <li>• Know the different Azure Policy effects and when to use each one</li>
          <li>• Understand how policy initiatives group related policies together</li>
          <li>• Know the difference between ReadOnly and CanNotDelete resource locks</li>
          <li>• Understand how resource locks are inherited through the resource hierarchy</li>
          <li>• Be familiar with the major compliance certifications and standards that Azure supports</li>
          <li>• Know what resources are available in the Service Trust Portal</li>
        </ul>
      </div>
    </div>
  );
};

export default GovernanceTopic;