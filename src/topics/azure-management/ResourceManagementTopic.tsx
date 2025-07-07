import React from 'react';

const ResourceManagementTopic: React.FC = () => {
  return (
    <div>
      <h1>Resource Management in Azure</h1>
      
      <p>
        Azure provides various tools and features to help you manage and deploy your resources effectively.
        These include graphical interfaces, command-line tools, and infrastructure as code solutions.
      </p>

      <h2>The Azure Portal</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Azure Portal Overview</h3>
        <p className="mb-4">
          The Azure portal is a web-based, unified console that provides an alternative to command-line tools.
          It allows you to build, manage, and monitor everything from simple web apps to complex cloud applications
          in a single, unified visual environment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              <li>• Graphical user interface for Azure resources</li>
              <li>• Customizable dashboard</li>
              <li>• Resource creation and management</li>
              <li>• Visual monitoring and alerts</li>
              <li>• Role-based access control</li>
              <li>• Resource tags and organization</li>
              <li>• Global search functionality</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Portal Capabilities</h4>
            <ul className="space-y-1">
              <li>• Create and manage all Azure resources</li>
              <li>• Configure resources and services</li>
              <li>• Monitor resource health and metrics</li>
              <li>• Set up alerts and notifications</li>
              <li>• Access Cloud Shell for command-line operations</li>
              <li>• View and manage costs</li>
              <li>• Access documentation and learning resources</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Portal Customization</h3>
          <p className="mb-3">
            Personalize the Azure portal to suit your workflow and preferences.
          </p>
          <h4 className="font-medium mt-4 mb-2">Customization Options:</h4>
          <ul className="space-y-1">
            <li>• <strong>Dashboard:</strong> Create multiple custom dashboards with specific tiles</li>
            <li>• <strong>Favorites:</strong> Pin frequently used services to the sidebar</li>
            <li>• <strong>Recent:</strong> Quick access to recently visited resources</li>
            <li>• <strong>Theme:</strong> Choose between light, dark, and high contrast themes</li>
            <li>• <strong>Notifications:</strong> Customize notification settings</li>
            <li>• <strong>Language and Region:</strong> Set preferred language and regional format</li>
            <li>• <strong>Start Page:</strong> Configure default landing page</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Portal Navigation</h3>
          <p className="mb-3">
            Find and manage resources efficiently within the Azure portal.
          </p>
          <h4 className="font-medium mt-4 mb-2">Navigation Elements:</h4>
          <ul className="space-y-1">
            <li>• <strong>Global Search:</strong> Find resources, services, documentation</li>
            <li>• <strong>Resources Menu:</strong> List all resources and resource groups</li>
            <li>• <strong>Services Menu:</strong> Browse all available Azure services</li>
            <li>• <strong>Subscription Filter:</strong> Filter view by subscription</li>
            <li>• <strong>Resource Groups:</strong> Organize and filter by resource groups</li>
            <li>• <strong>Tags:</strong> Filter resources by tags</li>
            <li>• <strong>Breadcrumbs:</strong> Navigate resource hierarchy</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">Azure Portal Best Practices</h3>
        <ul className="space-y-2">
          <li>• <strong>Create role-specific dashboards</strong> for different team members or functions</li>
          <li>• <strong>Use resource groups effectively</strong> to organize related resources</li>
          <li>• <strong>Implement consistent tagging</strong> for better resource management</li>
          <li>• <strong>Configure alerts and notifications</strong> for important resource events</li>
          <li>• <strong>Utilize pin functionality</strong> to keep important resources accessible</li>
          <li>• <strong>Take advantage of portal shortcuts</strong> (keyboard shortcuts) for efficiency</li>
          <li>• <strong>Use the "What's new" feature</strong> to stay updated on portal changes</li>
        </ul>
      </div>

      <h2>Azure Cloud Shell</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Cloud Shell Overview</h3>
          <p className="mb-3">
            Azure Cloud Shell is an interactive, browser-accessible shell for managing Azure resources.
            It provides a browser-based command-line experience without the need to install any tools locally.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Browser-based shell environment</li>
            <li>• Pre-authenticated with your Azure credentials</li>
            <li>• Persistent file storage (5 GB) in Azure Files</li>
            <li>• Pre-installed common tools and languages</li>
            <li>• Automatic timeout after 20 minutes of inactivity</li>
            <li>• Accessible from Azure portal or directly at shell.azure.com</li>
            <li>• Available on mobile devices</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Shell Options</h3>
          <p className="mb-3">
            Azure Cloud Shell provides two shell experiences to choose from.
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Bash (Azure CLI)</h4>
            <ul className="space-y-1">
              <li>• Linux-based shell experience</li>
              <li>• Uses Azure CLI (Command-Line Interface) commands</li>
              <li>• Great for Linux administrators and developers</li>
              <li>• Syntax: <code>az [group] [subgroup] [command]</code></li>
              <li>• Example: <code>az vm create --resource-group MyRG --name MyVM</code></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">PowerShell (Azure PowerShell)</h4>
            <ul className="space-y-1">
              <li>• Windows PowerShell-based experience</li>
              <li>• Uses Azure PowerShell cmdlets</li>
              <li>• Familiar for Windows administrators</li>
              <li>• Syntax: <code>Verb-Noun -Parameter Value</code></li>
              <li>• Example: <code>New-AzVM -ResourceGroupName MyRG -Name MyVM</code></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="table-container mb-8">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Azure CLI (Bash)</th>
              <th>Azure PowerShell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Syntax</td>
              <td>Command-based (az vm create)</td>
              <td>Verb-Noun (New-AzVM)</td>
            </tr>
            <tr>
              <td>Output format</td>
              <td>JSON by default</td>
              <td>Object-based by default</td>
            </tr>
            <tr>
              <td>Scripting compatibility</td>
              <td>Bash, Python, Node.js</td>
              <td>PowerShell scripts (.ps1)</td>
            </tr>
            <tr>
              <td>Learning curve</td>
              <td>Simpler for beginners</td>
              <td>Steeper but powerful for advanced use</td>
            </tr>
            <tr>
              <td>Platform affinity</td>
              <td>Cross-platform, Linux-oriented</td>
              <td>Cross-platform, Windows-oriented</td>
            </tr>
            <tr>
              <td>Pipe support</td>
              <td>Standard Unix pipes</td>
              <td>PowerShell object pipeline</td>
            </tr>
            <tr>
              <td>Recommended for</td>
              <td>Linux admins, Bash scripting users</td>
              <td>Windows admins, PowerShell users</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Installed Tools and Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Pre-installed Tools</h4>
            <ul className="space-y-1">
              <li>• Azure CLI and Azure PowerShell</li>
              <li>• Git for source control</li>
              <li>• Text editors (vim, nano, code)</li>
              <li>• Package managers (apt, npm, pip)</li>
              <li>• Build tools (make, maven, npm)</li>
              <li>• Container tools (Docker CLI)</li>
              <li>• Database tools (MySQL, PostgreSQL clients)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Persistent Storage</h4>
            <ul className="space-y-1">
              <li>• 5 GB Azure Files share mounted as $HOME</li>
              <li>• Persists files across sessions</li>
              <li>• Accessible in both Bash and PowerShell</li>
              <li>• Stored in your default region</li>
              <li>• One file share per user</li>
              <li>• Updated with latest tool versions automatically</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>The Purpose of Azure Arc</h2>
      
      <p className="mb-4">
        Azure Arc extends Azure management and services to any infrastructure, including on-premises, 
        multicloud, and edge environments. It enables you to manage resources outside of Azure as if 
        they were running in Azure.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Azure Arc Core Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium mb-2">Arc-enabled Servers</h4>
            <ul className="space-y-1 text-sm">
              <li>• Connect Windows and Linux servers</li>
              <li>• Inventory and grouping</li>
              <li>• Azure Policy governance</li>
              <li>• Tag and organize</li>
              <li>• Azure Monitor integration</li>
              <li>• Update management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Arc-enabled Kubernetes</h4>
            <ul className="space-y-1 text-sm">
              <li>• Connect any Kubernetes cluster</li>
              <li>• Deploy applications consistently</li>
              <li>• Configuration management</li>
              <li>• GitOps-based deployments</li>
              <li>• Azure Policy for Kubernetes</li>
              <li>• Azure Monitor integration</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Arc-enabled Data Services</h4>
            <ul className="space-y-1 text-sm">
              <li>• Azure SQL Managed Instance</li>
              <li>• PostgreSQL Hyperscale</li>
              <li>• Consistent data platform</li>
              <li>• Elastic scale capabilities</li>
              <li>• Always current</li>
              <li>• Unified management</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Arc Benefits</h3>
          <ul className="space-y-2">
            <li>• <strong>Unified Management:</strong> Manage resources across environments from a single pane of glass</li>
            <li>• <strong>Consistent Governance:</strong> Apply Azure Policy and RBAC across hybrid and multicloud environments</li>
            <li>• <strong>Azure Services Anywhere:</strong> Run Azure data services, app services, and machine learning services outside of Azure</li>
            <li>• <strong>GitOps at Scale:</strong> Implement GitOps-based configuration and application deployment</li>
            <li>• <strong>Familiar Experience:</strong> Use Azure portal, APIs, and tools to manage non-Azure resources</li>
            <li>• <strong>Cloud Practices On-premises:</strong> Apply cloud-native approaches to on-premises resources</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Arc Use Cases</h3>
          <ul className="space-y-2">
            <li>• <strong>Hybrid Server Management:</strong> Centrally manage Windows and Linux servers across datacenters, edge, and multicloud</li>
            <li>• <strong>Kubernetes Fleet Management:</strong> Govern and manage multiple Kubernetes clusters anywhere</li>
            <li>• <strong>Hybrid Data Estate:</strong> Deploy SQL Managed Instance and PostgreSQL Hyperscale outside of Azure</li>
            <li>• <strong>Edge Scenarios:</strong> Run Azure services in edge locations with limited connectivity</li>
            <li>• <strong>Regulatory Compliance:</strong> Keep data on-premises while using Azure services to meet data sovereignty requirements</li>
            <li>• <strong>Consistent Application Deployment:</strong> Deploy applications consistently across environments</li>
          </ul>
        </div>
      </div>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">Azure Arc Architecture</h3>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="text-center mb-2">Azure Control Plane</h4>
              <div className="text-center text-sm">
                Azure Portal, APIs, CLI
              </div>
              <div className="text-center text-sm mt-2">
                Resource Manager, Policy, RBAC
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="text-center mb-2">Azure Arc</h4>
              <div className="text-center text-sm">
                Connection Service
              </div>
              <div className="text-center text-sm mt-2">
                Extension Management
              </div>
              <div className="text-center text-sm mt-2">
                Configuration Service
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="text-center mb-2">Connected Resources</h4>
              <div className="text-center text-sm">
                Servers (Windows/Linux)
              </div>
              <div className="text-center text-sm mt-2">
                Kubernetes Clusters
              </div>
              <div className="text-center text-sm mt-2">
                Data Services
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-center">
              <span className="bg-gray-200 dark:bg-gray-600 px-4 py-1 rounded-lg">
                Any Infrastructure (On-premises, AWS, GCP, Edge)
              </span>
            </div>
          </div>
        </div>
      </div>

      <h2>Infrastructure as Code (IaC)</h2>
      
      <p className="mb-4">
        Infrastructure as Code (IaC) is the management of infrastructure (networks, virtual machines, load balancers, etc.) 
        in a descriptive model, using the same versioning as DevOps teams use for source code.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">IaC Benefits</h3>
          <ul className="space-y-2">
            <li>• <strong>Consistency:</strong> Deploy the same environment repeatedly with the same configuration</li>
            <li>• <strong>Versioning:</strong> Track changes to infrastructure over time with source control</li>
            <li>• <strong>Automation:</strong> Reduce manual processes and human error</li>
            <li>• <strong>Scalability:</strong> Scale infrastructure up or down easily through code changes</li>
            <li>• <strong>Efficiency:</strong> Rapidly deploy and modify complex environments</li>
            <li>• <strong>Documentation:</strong> Code serves as documentation for the infrastructure</li>
            <li>• <strong>Testing:</strong> Test infrastructure changes before deploying to production</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">IaC Approaches in Azure</h3>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Declarative (What)</h4>
            <ul className="space-y-1">
              <li>• Define the desired end state</li>
              <li>• System figures out how to achieve it</li>
              <li>• Examples: ARM templates, Bicep, Terraform</li>
              <li>• Focus on "what" resources should exist</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Imperative (How)</h4>
            <ul className="space-y-1">
              <li>• Define sequence of commands</li>
              <li>• Step-by-step instructions</li>
              <li>• Examples: Azure CLI scripts, PowerShell</li>
              <li>• Focus on "how" to create resources</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="table-container mb-8">
        <table>
          <thead>
            <tr>
              <th>IaC Tool</th>
              <th>Approach</th>
              <th>Language/Syntax</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ARM Templates</td>
              <td>Declarative</td>
              <td>JSON</td>
              <td>Azure-native deployments, complex dependencies</td>
            </tr>
            <tr>
              <td>Bicep</td>
              <td>Declarative</td>
              <td>Domain-specific language (DSL)</td>
              <td>Azure-native deployments with simplified syntax</td>
            </tr>
            <tr>
              <td>Terraform</td>
              <td>Declarative</td>
              <td>HashiCorp Configuration Language (HCL)</td>
              <td>Multi-cloud deployments, large-scale infrastructure</td>
            </tr>
            <tr>
              <td>Azure CLI scripts</td>
              <td>Imperative</td>
              <td>Command-line syntax</td>
              <td>Simple automation, scripts, one-off tasks</td>
            </tr>
            <tr>
              <td>PowerShell</td>
              <td>Imperative</td>
              <td>PowerShell syntax</td>
              <td>Windows-oriented automation, complex scripting</td>
            </tr>
            <tr>
              <td>Pulumi</td>
              <td>Declarative</td>
              <td>Programming languages (Python, JavaScript, etc.)</td>
              <td>Developers who prefer general-purpose languages</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">IaC Best Practices</h3>
        <ul className="space-y-2">
          <li>• <strong>Use source control</strong> to track and manage infrastructure code</li>
          <li>• <strong>Implement CI/CD pipelines</strong> for infrastructure changes</li>
          <li>• <strong>Use modular, reusable components</strong> to avoid duplication</li>
          <li>• <strong>Parameterize templates</strong> for flexibility across environments</li>
          <li>• <strong>Implement testing</strong> for infrastructure code</li>
          <li>• <strong>Document infrastructure code</strong> with comments and README files</li>
          <li>• <strong>Implement a change approval process</strong> for infrastructure changes</li>
          <li>• <strong>Use secrets management</strong> to secure sensitive information</li>
        </ul>
      </div>

      <h2>Azure Resource Manager (ARM) and ARM Templates</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Azure Resource Manager (ARM)</h3>
        <p className="mb-4">
          Azure Resource Manager is the deployment and management service for Azure. It provides a consistent
          management layer that enables you to create, update, and delete resources in your Azure subscription.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              <li>• Consistent management layer</li>
              <li>• Resource grouping</li>
              <li>• Access control (RBAC)</li>
              <li>• Tags for organization</li>
              <li>• Billing by resource group</li>
              <li>• Dependency management</li>
              <li>• Template-based deployment</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Benefits</h4>
            <ul className="space-y-1">
              <li>• Manage infrastructure through templates</li>
              <li>• Deploy, manage, and monitor resources as a group</li>
              <li>• Repeatedly deploy your infrastructure</li>
              <li>• Define dependencies between resources</li>
              <li>• Apply access control to all services</li>
              <li>• Apply tags to resources</li>
              <li>• Clarify billing by viewing costs for similarly tagged resources</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">ARM Templates</h3>
          <p className="mb-3">
            ARM templates are JSON files that define the infrastructure and configuration for your Azure deployment.
          </p>
          <h4 className="font-medium mt-4 mb-2">Template Structure:</h4>
          <ul className="space-y-1">
            <li>• <strong>$schema:</strong> Location of the JSON schema file</li>
            <li>• <strong>contentVersion:</strong> Version of the template (e.g., 1.0.0.0)</li>
            <li>• <strong>parameters:</strong> Values provided during deployment</li>
            <li>• <strong>variables:</strong> Values used as templates for complex expressions</li>
            <li>• <strong>functions:</strong> User-defined functions available in the template</li>
            <li>• <strong>resources:</strong> Resources to deploy or update</li>
            <li>• <strong>outputs:</strong> Values returned after deployment</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Bicep</h3>
          <p className="mb-3">
            Bicep is a domain-specific language (DSL) that simplifies the authoring experience for ARM templates.
          </p>
          <h4 className="font-medium mt-4 mb-2">Bicep Benefits:</h4>
          <ul className="space-y-1">
            <li>• Simpler syntax than JSON</li>
            <li>• Better support for modularity</li>
            <li>• Improved type safety</li>
            <li>• Intellisense and validation</li>
            <li>• Easier to read and write</li>
            <li>• Automatic dependency management</li>
            <li>• Transpiles to ARM JSON templates</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">ARM Template vs. Bicep Example</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">ARM Template (JSON)</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-auto">
{`{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "storageAccountName": {
      "type": "string",
      "metadata": {
        "description": "Storage Account Name"
      }
    }
  },
  "resources": [
    {
      "type": "Microsoft.Storage/storageAccounts",
      "apiVersion": "2021-04-01",
      "name": "[parameters('storageAccountName')]",
      "location": "[resourceGroup().location]",
      "sku": {
        "name": "Standard_LRS"
      },
      "kind": "StorageV2"
    }
  ]
}`}
            </pre>
          </div>
          <div>
            <h4 className="font-medium mb-2">Bicep</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-auto">
{`param storageAccountName string {
  metadata: {
    description: 'Storage Account Name'
  }
}

resource storageAccount 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: storageAccountName
  location: resourceGroup().location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
}`}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="mb-2">ARM Template Deployment Methods</h3>
        <ul className="space-y-2">
          <li>• <strong>Azure portal:</strong> Using the "Deploy a custom template" option</li>
          <li>• <strong>Azure CLI:</strong> Using the <code>az deployment group create</code> command</li>
          <li>• <strong>PowerShell:</strong> Using the <code>New-AzResourceGroupDeployment</code> cmdlet</li>
          <li>• <strong>REST API:</strong> Using the Resource Group Deployments API</li>
          <li>• <strong>GitHub Actions:</strong> Using the Azure Resource Manager deploy action</li>
          <li>• <strong>Azure DevOps:</strong> Using the ARM template deployment task</li>
          <li>• <strong>ARM Template Toolkit:</strong> Using the ARM Template Toolkit (AzTS)</li>
        </ul>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Azure Portal:</strong> Web-based, unified console that provides a graphical interface to build, manage, and monitor Azure resources.
        </li>
        <li>
          <strong>Azure Cloud Shell:</strong> Browser-accessible shell environment for managing Azure resources, with Bash (Azure CLI) and PowerShell options.
        </li>
        <li>
          <strong>Azure CLI:</strong> Command-line tool for managing Azure resources using commands in Bash, with az command syntax.
        </li>
        <li>
          <strong>Azure PowerShell:</strong> PowerShell module for managing Azure resources using cmdlets with Verb-Noun syntax.
        </li>
        <li>
          <strong>Azure Arc:</strong> Service that extends Azure management to resources running outside of Azure, including on-premises, multicloud, and edge environments.
        </li>
        <li>
          <strong>Infrastructure as Code (IaC):</strong> Managing infrastructure using code and automation, with declarative and imperative approaches.
        </li>
        <li>
          <strong>ARM Templates:</strong> JSON files that define the infrastructure and configuration for Azure deployments.
        </li>
        <li>
          <strong>Bicep:</strong> Domain-specific language that simplifies the authoring experience for ARM templates with improved syntax and features.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the different ways to manage Azure resources (Portal, CLI, PowerShell, ARM templates)</li>
          <li>• Understand the differences between Azure CLI and Azure PowerShell</li>
          <li>• Know what Azure Arc is used for and what types of resources it can manage</li>
          <li>• Understand the differences between declarative and imperative approaches to IaC</li>
          <li>• Know the basic structure of ARM templates and what each section is used for</li>
          <li>• Be familiar with how Bicep relates to ARM templates</li>
          <li>• Understand how to deploy resources using ARM templates through various methods</li>
        </ul>
      </div>
    </div>
  );
};

export default ResourceManagementTopic;