import React from 'react';

const ComputeNetworkingTopic: React.FC = () => {
  return (
    <div>
      <h1>Azure Compute and Networking Services</h1>
      
      <p>
        Compute and networking services form the foundation of most Azure solutions. These services
        allow you to run applications and connect them securely within Azure and to on-premises environments.
      </p>

      <h2>Compute Types</h2>
      
      <p className="mb-4">
        Azure offers several compute options to run your applications. Each option provides different levels
        of control, flexibility, and management.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Virtual Machines</h3>
          <p className="mb-3">
            Software emulations of physical computers with virtualized CPUs, memory, storage, and networking.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Characteristics:</h4>
          <ul className="space-y-1">
            <li>• IaaS offering</li>
            <li>• Full control over the OS</li>
            <li>• Custom software configuration</li>
            <li>• Flexibility to run any application</li>
            <li>• Responsibility for maintenance and updates</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Containers</h3>
          <p className="mb-3">
            Lightweight, virtualized environments that don't require a full OS, sharing the host's OS kernel.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Characteristics:</h4>
          <ul className="space-y-1">
            <li>• Faster startup than VMs</li>
            <li>• Portable across environments</li>
            <li>• Isolated application environments</li>
            <li>• More efficient resource usage</li>
            <li>• Consistent deployment model</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Serverless Functions</h3>
          <p className="mb-3">
            Event-driven, code-first compute service that runs your code without managing infrastructure.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Characteristics:</h4>
          <ul className="space-y-1">
            <li>• No server management</li>
            <li>• Pay only for execution time</li>
            <li>• Automatic scaling</li>
            <li>• Event-driven execution</li>
            <li>• Stateless by default</li>
          </ul>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Virtual Machines</th>
              <th>Containers</th>
              <th>Serverless Functions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Control over OS</td>
              <td>Full</td>
              <td>Partial</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Deployment Time</td>
              <td>Minutes</td>
              <td>Seconds</td>
              <td>Milliseconds</td>
            </tr>
            <tr>
              <td>Maintenance Overhead</td>
              <td>High</td>
              <td>Medium</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Billing Model</td>
              <td>Per VM/hour</td>
              <td>Per host/hour</td>
              <td>Per execution/GB-s</td>
            </tr>
            <tr>
              <td>Typical Workload</td>
              <td>Traditional applications</td>
              <td>Microservices</td>
              <td>Event processing</td>
            </tr>
            <tr>
              <td>Scaling</td>
              <td>Manual or auto-scale</td>
              <td>Orchestrator-managed</td>
              <td>Automatic</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Virtual Machine Options</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Virtual Machines</h3>
          <p className="mb-3">
            On-demand, scalable computing resources that give you the flexibility of virtualization.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Multiple VM sizes and types</li>
            <li>• Windows and Linux options</li>
            <li>• Custom VM images</li>
            <li>• Integration with other Azure services</li>
            <li>• Pay-as-you-go pricing</li>
            <li>• Reserved instances for cost savings</li>
            <li>• Spot instances for batch processing</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Virtual Machine Scale Sets</h3>
          <p className="mb-3">
            Create and manage a group of identical, load-balanced VMs that automatically increase or decrease in response to demand.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Automatic scaling</li>
            <li>• Load balancing</li>
            <li>• High availability</li>
            <li>• Auto-OS updates</li>
            <li>• Integration with Azure Monitor</li>
            <li>• Support for up to 1,000 VM instances</li>
            <li>• Ideal for large-scale applications</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Availability Sets</h3>
          <p className="mb-3">
            Logical grouping of VMs that ensures they're placed on different physical hardware within a datacenter to avoid single points of failure.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Concepts:</h4>
          <ul className="space-y-1">
            <li>• <strong>Fault Domains:</strong> Group of VMs that share a common power source and network switch</li>
            <li>• <strong>Update Domains:</strong> Group of VMs that can be rebooted at the same time for updates</li>
            <li>• 99.95% SLA when used properly</li>
            <li>• Protection against hardware failures and planned maintenance</li>
            <li>• Must be configured when creating VMs</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Virtual Desktop</h3>
          <p className="mb-3">
            Desktop and app virtualization service that runs in the cloud, providing a complete virtualized Windows desktop experience.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Windows 10/11 multi-session capability</li>
            <li>• Microsoft 365 optimization</li>
            <li>• Compatible with various endpoints (Windows, Mac, iOS, Android)</li>
            <li>• Enhanced security with Microsoft Entra ID</li>
            <li>• Simplified management</li>
            <li>• Persistent or non-persistent desktops</li>
            <li>• Integration with FSLogix for user profiles</li>
          </ul>
        </div>
      </div>

      <h2>Resources Required for Virtual Machines</h2>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">VM Required Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-3">Compute Resources</h4>
            <ul className="space-y-1 text-sm">
              <li>• VM Size/SKU</li>
              <li>• CPU Cores</li>
              <li>• Memory (RAM)</li>
              <li>• Temporary Storage</li>
              <li>• VM Generation (Gen1/Gen2)</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-3">Storage Resources</h4>
            <ul className="space-y-1 text-sm">
              <li>• OS Disk</li>
              <li>• Data Disks</li>
              <li>• Disk Types (HDD/SSD/Premium/Ultra)</li>
              <li>• Disk Snapshots</li>
              <li>• Managed/Unmanaged Disks</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-3">Networking Resources</h4>
            <ul className="space-y-1 text-sm">
              <li>• Virtual Network</li>
              <li>• Subnet</li>
              <li>• Network Interface</li>
              <li>• Public IP (optional)</li>
              <li>• Network Security Group</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Additional VM Resources</h3>
        <ul className="space-y-2">
          <li>• <strong>VM Image:</strong> Template used to create the VM</li>
          <li>• <strong>Resource Group:</strong> Logical container for the VM and related resources</li>
          <li>• <strong>VM Extensions:</strong> Small applications for post-deployment configuration and automation</li>
          <li>• <strong>Availability Options:</strong> Availability Set, Availability Zone, or none</li>
          <li>• <strong>Backup:</strong> Azure Backup service configuration</li>
          <li>• <strong>Monitoring:</strong> Azure Monitor, Log Analytics workspace</li>
          <li>• <strong>Security:</strong> Microsoft Defender for Cloud, disk encryption</li>
        </ul>
      </div>

      <h2>Application Hosting Options</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Hosting Option</th>
              <th>Description</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Azure App Service</td>
              <td>
                Fully managed platform to build, deploy, and scale web apps, mobile back ends, and RESTful APIs
              </td>
              <td>
                • Web applications<br />
                • API hosting<br />
                • Mobile app backends<br />
                • Business sites
              </td>
            </tr>
            <tr>
              <td>Azure Container Instances</td>
              <td>
                Run containerized applications without managing servers or requiring higher-level services
              </td>
              <td>
                • Simple applications<br />
                • Task automation<br />
                • Build jobs<br />
                • Small-scale workloads
              </td>
            </tr>
            <tr>
              <td>Azure Kubernetes Service (AKS)</td>
              <td>
                Managed Kubernetes service for running containerized applications at scale with orchestration
              </td>
              <td>
                • Microservices<br />
                • Complex applications<br />
                • Large-scale workloads<br />
                • DevOps practices
              </td>
            </tr>
            <tr>
              <td>Azure Functions</td>
              <td>
                Serverless compute service that runs code in response to events without managing infrastructure
              </td>
              <td>
                • Event processing<br />
                • Timer-based processing<br />
                • Microservices<br />
                • API endpoints
              </td>
            </tr>
            <tr>
              <td>Azure Virtual Machines</td>
              <td>
                IaaS offering that provides complete control over the operating system and environment
              </td>
              <td>
                • Legacy applications<br />
                • Custom software<br />
                • Specialized workloads<br />
                • Dev/test environments
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Virtual Networking</h2>
      
      <p className="mb-4">
        Azure Virtual Network (VNet) is the fundamental building block for your private network in Azure. 
        It enables Azure resources to securely communicate with each other, the internet, and on-premises networks.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Purpose of Azure Virtual Networks</h3>
        <ul className="space-y-2">
          <li>• <strong>Isolation and Segmentation:</strong> Securely isolate your workloads from each other</li>
          <li>• <strong>Internet Communication:</strong> Allow outbound and inbound internet communication</li>
          <li>• <strong>Azure Resource Communication:</strong> Enable Azure resources to communicate securely</li>
          <li>• <strong>On-premises Connectivity:</strong> Connect your on-premises networks to Azure</li>
          <li>• <strong>Network Traffic Filtering:</strong> Filter traffic between subnets with Network Security Groups</li>
          <li>• <strong>Routing:</strong> Override default Azure routing with route tables or Border Gateway Protocol</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Virtual Subnets</h3>
          <p className="mb-3">
            Subnets allow you to segment your virtual network into one or more sub-networks, allocating a portion of the virtual network's address space to each subnet.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Points:</h4>
          <ul className="space-y-1">
            <li>• Logical divisions of a VNet</li>
            <li>• Each subnet must have a unique address range</li>
            <li>• Resources in different subnets can communicate by default</li>
            <li>• Can be secured with Network Security Groups</li>
            <li>• Some Azure services require dedicated subnets</li>
            <li>• First 4 IP addresses and last IP address in each subnet are reserved</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Virtual Network Peering</h3>
          <p className="mb-3">
            Connect two virtual networks seamlessly through the Azure backbone network, making resources appear as if they're on the same network.
          </p>
          <h4 className="font-medium mt-4 mb-2">Types of Peering:</h4>
          <ul className="space-y-1">
            <li>• <strong>Regional VNet Peering:</strong> Connecting VNets in the same region</li>
            <li>• <strong>Global VNet Peering:</strong> Connecting VNets across regions</li>
            <li>• Low-latency, high-bandwidth connection</li>
            <li>• No downtime during creation</li>
            <li>• No transitive routing (requires direct peering)</li>
            <li>• Non-overlapping IP address spaces</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure DNS</h3>
          <p className="mb-3">
            Hosting service for DNS domains that provides name resolution using Microsoft Azure infrastructure.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• High reliability and availability</li>
            <li>• Supports public and private DNS zones</li>
            <li>• Integration with other Azure services</li>
            <li>• DNS name auto-registration for VMs</li>
            <li>• Support for custom DNS records</li>
            <li>• Azure DNS Private Resolver for hybrid DNS resolution</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure VPN Gateway</h3>
          <p className="mb-3">
            Service that connects your on-premises networks to Azure through site-to-site VPNs, or individual devices through point-to-site VPNs.
          </p>
          <h4 className="font-medium mt-4 mb-2">VPN Types:</h4>
          <ul className="space-y-1">
            <li>• <strong>Site-to-Site:</strong> Connect on-premises network to Azure VNet</li>
            <li>• <strong>Point-to-Site:</strong> Connect individual devices to Azure VNet</li>
            <li>• <strong>VNet-to-VNet:</strong> Connect Azure VNets (alternative to peering)</li>
            <li>• IPsec/IKE secure encrypted tunnels</li>
            <li>• Multiple SKUs with different performance levels</li>
            <li>• Zone-redundant gateways available in supported regions</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="text-xl font-medium mb-3">ExpressRoute</h3>
        <p className="mb-4">
          Extends your on-premises networks into Microsoft cloud over a private connection facilitated by a connectivity provider.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-1">
              <li>• Private connectivity (not over the internet)</li>
              <li>• Reliable, low-latency connections</li>
              <li>• Higher security and privacy</li>
              <li>• Connections to Microsoft cloud services</li>
              <li>• Global connectivity across regions</li>
              <li>• Dynamic routing with BGP</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Connection Models:</h4>
            <ul className="space-y-1">
              <li>• <strong>CloudExchange Co-location:</strong> Co-located at a cloud exchange facility</li>
              <li>• <strong>Point-to-point Ethernet:</strong> Direct connection from your facility to Microsoft</li>
              <li>• <strong>Any-to-any Connection:</strong> Integration into your WAN network</li>
              <li>• <strong>Direct from ExpressRoute Sites:</strong> Direct connectivity at Microsoft's global peering locations</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Public and Private Endpoints</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Public Endpoints</h3>
          <p className="mb-3">
            Resources with public IP addresses that can be accessed over the internet.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• Accessible from the internet</li>
            <li>• Protected with authentication and authorization</li>
            <li>• Can be secured with firewalls and DDoS protection</li>
            <li>• Often used for customer-facing applications</li>
            <li>• Example: Web server with a public IP address</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Private Endpoints</h3>
          <p className="mb-3">
            Network interfaces that connect you privately and securely to Azure PaaS services over a private link.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• Only accessible from within a VNet</li>
            <li>• Not exposed to the public internet</li>
            <li>• Enhanced security for sensitive data</li>
            <li>• Private IP address in your VNet</li>
            <li>• Example: Azure SQL Database with a private endpoint</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="mb-2">Security Considerations</h3>
        <ul className="space-y-2">
          <li>• Use private endpoints for sensitive data and backend services</li>
          <li>• Secure public endpoints with proper authentication and authorization</li>
          <li>• Implement network security groups and application security groups</li>
          <li>• Use Azure Firewall or Web Application Firewall for additional protection</li>
          <li>• Apply the principle of least privilege for network access</li>
          <li>• Monitor network traffic with Network Watcher and flow logs</li>
        </ul>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Compute Types:</strong> Azure offers virtual machines (IaaS), containers, and serverless functions with different levels of control and management.
        </li>
        <li>
          <strong>Virtual Machine Options:</strong> Include Azure VMs, VM Scale Sets, Availability Sets, and Azure Virtual Desktop for different scenarios.
        </li>
        <li>
          <strong>VM Resources:</strong> VMs require compute resources (CPU, memory), storage (disks), and networking resources (VNet, NIC).
        </li>
        <li>
          <strong>Hosting Options:</strong> Applications can be hosted using App Service, Container Instances, Kubernetes Service, Functions, or VMs.
        </li>
        <li>
          <strong>Virtual Networking:</strong> Azure Virtual Networks provide isolation, segmentation, and connectivity for Azure resources.
        </li>
        <li>
          <strong>Connectivity Options:</strong> VPN Gateway and ExpressRoute offer different ways to connect on-premises networks to Azure.
        </li>
        <li>
          <strong>Endpoints:</strong> Public endpoints are accessible from the internet, while private endpoints provide secure access to Azure services from your VNet.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Understand the differences between compute types and when to use each one</li>
          <li>• Know the options for ensuring high availability for VMs (Scale Sets, Availability Sets, Zones)</li>
          <li>• Understand the core components required to create a VM</li>
          <li>• Be familiar with the different application hosting options in Azure</li>
          <li>• Know how Azure networking components connect and interact with each other</li>
          <li>• Understand the difference between VPN Gateway and ExpressRoute</li>
          <li>• Know when to use public vs. private endpoints</li>
        </ul>
      </div>
    </div>
  );
};

export default ComputeNetworkingTopic;