import React from 'react';

const StorageServicesTopic: React.FC = () => {
  return (
    <div>
      <h1>Azure Storage Services</h1>
      
      <p>
        Azure Storage is a Microsoft-managed cloud service that provides highly available, secure, 
        durable, scalable, and redundant storage. Understanding Azure's storage options is essential 
        for building effective cloud solutions.
      </p>

      <h2>Comparing Azure Storage Services</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Storage Service</th>
              <th>Description</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Azure Blob Storage</td>
              <td>
                Object storage for unstructured data such as text or binary data
              </td>
              <td>
                • Images, videos, documents<br />
                • Backups and archives<br />
                • Data for analysis<br />
                • Static website hosting
              </td>
            </tr>
            <tr>
              <td>Azure Files</td>
              <td>
                Fully managed file shares accessible via SMB or NFS protocols
              </td>
              <td>
                • Replacing on-premises file servers<br />
                • Application migration<br />
                • Shared application settings<br />
                • Hybrid scenarios
              </td>
            </tr>
            <tr>
              <td>Azure Queue Storage</td>
              <td>
                Message queuing service for reliable messaging between application components
              </td>
              <td>
                • Decoupling application components<br />
                • Background processing<br />
                • Task distribution<br />
                • Building flexible architectures
              </td>
            </tr>
            <tr>
              <td>Azure Table Storage</td>
              <td>
                NoSQL key-attribute store for schema-less storage of structured data
              </td>
              <td>
                • Web-scale applications<br />
                • Address books<br />
                • Device information<br />
                • Other metadata storage
              </td>
            </tr>
            <tr>
              <td>Azure Disk Storage</td>
              <td>
                Block-level storage volumes for Azure VMs
              </td>
              <td>
                • Operating system disks<br />
                • Data disks for VMs<br />
                • Database storage<br />
                • Applications requiring direct disk access
              </td>
            </tr>
            <tr>
              <td>Azure Data Lake Storage</td>
              <td>
                Hyperscale repository for big data analytics workloads
              </td>
              <td>
                • Big data analytics<br />
                • Data warehousing<br />
                • IoT data processing<br />
                • Machine learning
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Storage Tiers</h2>
      
      <p className="mb-4">
        Azure Storage offers different access tiers for blob object storage, allowing you to store data 
        in the most cost-effective manner depending on how you use it.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-lg font-medium mb-2">Hot Tier</h3>
          <p className="mb-3 text-sm">
            Optimized for frequently accessed data.
          </p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Storage Cost:</span>
              <span>Higher</span>
            </div>
            <div className="flex justify-between">
              <span>Access Cost:</span>
              <span>Lower</span>
            </div>
            <div className="flex justify-between">
              <span>Availability:</span>
              <span>99.9%</span>
            </div>
            <div className="flex justify-between">
              <span>Min Duration:</span>
              <span>None</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-lg font-medium mb-2">Cool Tier</h3>
          <p className="mb-3 text-sm">
            Optimized for infrequently accessed data stored for at least 30 days.
          </p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Storage Cost:</span>
              <span>Medium</span>
            </div>
            <div className="flex justify-between">
              <span>Access Cost:</span>
              <span>Medium</span>
            </div>
            <div className="flex justify-between">
              <span>Availability:</span>
              <span>99.9%</span>
            </div>
            <div className="flex justify-between">
              <span>Min Duration:</span>
              <span>30 days</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-lg font-medium mb-2">Archive Tier</h3>
          <p className="mb-3 text-sm">
            Optimized for rarely accessed data stored for at least 180 days with flexible latency requirements.
          </p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Storage Cost:</span>
              <span>Lowest</span>
            </div>
            <div className="flex justify-between">
              <span>Access Cost:</span>
              <span>Highest</span>
            </div>
            <div className="flex justify-between">
              <span>Availability:</span>
              <span>Offline</span>
            </div>
            <div className="flex justify-between">
              <span>Min Duration:</span>
              <span>180 days</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-lg font-medium mb-2">Cold Tier</h3>
          <p className="mb-3 text-sm">
            Optimized for rarely accessed data stored for at least 90 days.
          </p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Storage Cost:</span>
              <span>Low</span>
            </div>
            <div className="flex justify-between">
              <span>Access Cost:</span>
              <span>High</span>
            </div>
            <div className="flex justify-between">
              <span>Availability:</span>
              <span>99.9%</span>
            </div>
            <div className="flex justify-between">
              <span>Min Duration:</span>
              <span>90 days</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Storage Tier Management</h3>
        <ul className="space-y-2">
          <li>• <strong>Lifecycle Management:</strong> Automatically move data between tiers based on rules</li>
          <li>• <strong>Blob-level Tiering:</strong> Set different tiers for individual blobs</li>
          <li>• <strong>Account-level Tiering:</strong> Set a default tier for the entire storage account</li>
          <li>• <strong>Rehydration:</strong> Process of moving data from Archive tier back to Hot or Cool</li>
          <li>• <strong>Priority Retrieval:</strong> Standard (up to 15 hours) or High (under 1 hour) for Archive data</li>
        </ul>
      </div>

      <h2>Redundancy Options</h2>
      
      <p className="mb-4">
        Azure Storage provides different redundancy options to ensure durability and high availability of your data.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Locally Redundant Storage (LRS)</h3>
          <p className="mb-3">
            Replicates your data three times within a single physical location in the primary region.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• Lowest cost option</li>
            <li>• 99.999999999% durability (11 nines)</li>
            <li>• Protection against server rack and drive failures</li>
            <li>• No protection against datacenter-level disasters</li>
            <li>• Suitable for non-critical data or data replicated elsewhere</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Zone-Redundant Storage (ZRS)</h3>
          <p className="mb-3">
            Replicates your data across three Azure availability zones in the primary region.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• 99.9999999999% durability (12 nines)</li>
            <li>• Protection against datacenter-level failures</li>
            <li>• Data remains accessible even if a zone becomes unavailable</li>
            <li>• Only available in regions with availability zones</li>
            <li>• Suitable for high-availability applications in a single region</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Geo-Redundant Storage (GRS)</h3>
          <p className="mb-3">
            Replicates your data to a secondary region hundreds of miles from the primary region.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• LRS in the primary region</li>
            <li>• LRS in the secondary region</li>
            <li>• 99.99999999999999% durability (16 nines)</li>
            <li>• Secondary region data not accessible unless Microsoft initiates failover</li>
            <li>• Protection against regional outages</li>
            <li>• Suitable for business-critical data requiring geo-redundancy</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Geo-Zone-Redundant Storage (GZRS)</h3>
          <p className="mb-3">
            Combines ZRS in the primary region with LRS replication to the secondary region.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• ZRS in the primary region</li>
            <li>• LRS in the secondary region</li>
            <li>• 99.99999999999999% durability (16 nines)</li>
            <li>• Highest level of durability and availability</li>
            <li>• Protection against both zone and regional failures</li>
            <li>• Suitable for mission-critical data and applications</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Read-Access Geo-Redundant Storage (RA-GRS)</h3>
          <p className="mb-3">
            Extension of GRS that provides read-only access to the data in the secondary region.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• All GRS features</li>
            <li>• Read access to secondary region</li>
            <li>• Separate endpoints for primary and secondary regions</li>
            <li>• Useful for distributing read workloads geographically</li>
            <li>• Can test disaster recovery scenarios</li>
            <li>• Suitable for applications that need read access during regional outages</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Read-Access Geo-Zone-Redundant Storage (RA-GZRS)</h3>
          <p className="mb-3">
            Extension of GZRS that provides read-only access to the data in the secondary region.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• All GZRS features</li>
            <li>• Read access to secondary region</li>
            <li>• Highest level of availability</li>
            <li>• 99.99% read availability</li>
            <li>• Most expensive redundancy option</li>
            <li>• Suitable for mission-critical applications requiring maximum resilience</li>
          </ul>
        </div>
      </div>

      <h2>Storage Account Options and Storage Types</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Storage Account Types</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Account Type</th>
                <th>Supported Services</th>
                <th>Redundancy Options</th>
                <th>Use Cases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard general-purpose v2</td>
                <td>Blob, File, Queue, Table, Data Lake Gen2</td>
                <td>LRS, ZRS, GRS, RA-GRS, GZRS, RA-GZRS</td>
                <td>Most scenarios, recommended for most applications</td>
              </tr>
              <tr>
                <td>Premium block blobs</td>
                <td>Blob (block blobs and append blobs)</td>
                <td>LRS, ZRS</td>
                <td>High transaction rates, small objects, low storage latency</td>
              </tr>
              <tr>
                <td>Premium file shares</td>
                <td>File</td>
                <td>LRS, ZRS</td>
                <td>Enterprise or high-performance applications</td>
              </tr>
              <tr>
                <td>Premium page blobs</td>
                <td>Blob (page blobs only)</td>
                <td>LRS</td>
                <td>VM disks, random read/write operations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Storage Account Configuration Options</h3>
        <ul className="space-y-2">
          <li>• <strong>Performance Tiers:</strong> Standard (magnetic disk-based) or Premium (SSD-based)</li>
          <li>• <strong>Access Tiers:</strong> Hot, Cool, Archive (for blob data)</li>
          <li>• <strong>Location:</strong> Azure region where the account is created</li>
          <li>• <strong>Replication:</strong> Redundancy options for data durability</li>
          <li>• <strong>Security:</strong> Encryption, access control, firewall settings</li>
          <li>• <strong>Network Access:</strong> Public, private, or selected networks</li>
          <li>• <strong>Data Protection:</strong> Soft delete, point-in-time restore, immutable storage</li>
          <li>• <strong>Advanced Features:</strong> Hierarchical namespace, static website hosting, etc.</li>
        </ul>
      </div>

      <h2>Options for Moving Files</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">AzCopy</h3>
          <p className="mb-3">
            Command-line utility for copying data to and from Azure Storage.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• High-performance copying</li>
            <li>• Supports various authentication methods</li>
            <li>• Resumable transfers</li>
            <li>• Synchronization capabilities</li>
            <li>• Data filters and patterns</li>
            <li>• Cross-account and cross-service transfers</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Storage Explorer</h3>
          <p className="mb-3">
            Graphical user interface tool for managing Azure Storage resources.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• User-friendly interface</li>
            <li>• Drag-and-drop upload/download</li>
            <li>• Access to all storage services</li>
            <li>• Generate SAS tokens</li>
            <li>• Cross-platform (Windows, macOS, Linux)</li>
            <li>• Folder and file operations</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure File Sync</h3>
          <p className="mb-3">
            Service that centralizes file shares in Azure Files while maintaining local access.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Centralize files in Azure</li>
            <li>• Multi-site access and sync</li>
            <li>• Cloud tiering</li>
            <li>• Disaster recovery</li>
            <li>• Fast local access</li>
            <li>• Windows Server compatibility</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Additional File Movement Options</h3>
        <ul className="space-y-2">
          <li>• <strong>Azure Portal:</strong> Simple web-based upload/download for small files</li>
          <li>• <strong>Azure Storage REST API:</strong> Programmatic access for custom applications</li>
          <li>• <strong>Storage Client Libraries:</strong> SDKs for various programming languages</li>
          <li>• <strong>Azure Data Factory:</strong> Data integration service for large-scale data movement</li>
          <li>• <strong>Azure Import/Export:</strong> Physical disk shipment for very large datasets</li>
          <li>• <strong>Azure Data Box:</strong> Physical transfer devices for offline data migration</li>
        </ul>
      </div>

      <h2>Migration Options</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Migrate</h3>
          <p className="mb-3">
            Centralized hub for assessing and migrating on-premises servers, infrastructure, applications, and data to Azure.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Discovery and assessment</li>
            <li>• Server migration</li>
            <li>• Database migration</li>
            <li>• Web app migration</li>
            <li>• Virtual desktop migration</li>
            <li>• Data migration</li>
            <li>• Dependency visualization</li>
            <li>• Progress tracking</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Data Box</h3>
          <p className="mb-3">
            Physical devices and solutions for transferring large amounts of data to and from Azure when online transfer is not feasible.
          </p>
          <h4 className="font-medium mt-4 mb-2">Data Box Options:</h4>
          <ul className="space-y-1">
            <li>• <strong>Data Box Disk:</strong> SSD disks for smaller datasets (up to 40 TB)</li>
            <li>• <strong>Data Box:</strong> Rugged device for larger datasets (up to 100 TB)</li>
            <li>• <strong>Data Box Heavy:</strong> For very large datasets (up to 1 PB)</li>
            <li>• <strong>Data Box Gateway:</strong> Virtual appliance for ongoing transfers</li>
            <li>• <strong>Data Box Edge:</strong> On-premises AI-enabled edge computing device</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Specialized Migration Services</h3>
        <ul className="space-y-2">
          <li>• <strong>Azure Database Migration Service:</strong> Migrate databases to Azure with minimal downtime</li>
          <li>• <strong>Azure Site Recovery:</strong> Disaster recovery and migration service for VMs</li>
          <li>• <strong>Azure File Sync:</strong> Synchronize on-premises file servers with Azure Files</li>
          <li>• <strong>Azure StorSimple:</strong> Hybrid storage solution for enterprise workloads</li>
          <li>• <strong>Partner Solutions:</strong> Third-party migration tools and services in the Azure ecosystem</li>
        </ul>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Storage Services:</strong> Blob Storage, Files, Queue Storage, Table Storage, Disk Storage, and Data Lake Storage each serve different purposes.
        </li>
        <li>
          <strong>Storage Tiers:</strong> Hot, Cool, Cold, and Archive tiers offer different balance between access speed, availability, and cost.
        </li>
        <li>
          <strong>Redundancy Options:</strong> LRS, ZRS, GRS, GZRS, RA-GRS, and RA-GZRS provide different levels of data durability and availability.
        </li>
        <li>
          <strong>Storage Account Types:</strong> Different account types support different services, performance tiers, and redundancy options.
        </li>
        <li>
          <strong>File Movement Tools:</strong> AzCopy, Storage Explorer, and Azure File Sync offer different ways to move and manage files in Azure Storage.
        </li>
        <li>
          <strong>Migration Options:</strong> Azure Migrate and Azure Data Box provide services for moving on-premises data to Azure.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the appropriate storage service for different data types and scenarios</li>
          <li>• Understand the tradeoffs between different storage tiers</li>
          <li>• Be familiar with redundancy options and their protection capabilities</li>
          <li>• Know which storage account type to use for specific requirements</li>
          <li>• Understand the appropriate file movement tool for different scenarios</li>
          <li>• Be aware of the migration options available for moving data to Azure</li>
        </ul>
      </div>
    </div>
  );
};

export default StorageServicesTopic;