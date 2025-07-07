import React from 'react';

const MonitoringTopic: React.FC = () => {
  return (
    <div>
      <h1>Monitoring Tools in Azure</h1>
      
      <p>
        Azure provides a comprehensive set of monitoring tools to help you gain visibility into the performance, 
        health, and availability of your applications and infrastructure. These tools help you detect and diagnose 
        issues, optimize resource usage, and make data-driven decisions.
      </p>

      <h2>The Purpose of Azure Advisor</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Azure Advisor Overview</h3>
        <p className="mb-4">
          Azure Advisor is a personalized cloud consultant that helps you follow best practices to optimize 
          your Azure deployments. It analyzes your resource configuration and usage telemetry and then 
          recommends solutions to help improve the performance, security, and high availability of your 
          resources while looking for opportunities to reduce your overall Azure costs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              <li>• Personalized recommendations</li>
              <li>• Proactive monitoring</li>
              <li>• Actionable guidance</li>
              <li>• Easy implementation</li>
              <li>• Cost-free service</li>
              <li>• Continuous assessment</li>
              <li>• Prioritized recommendations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Benefits</h4>
            <ul className="space-y-1">
              <li>• Improve performance and reliability</li>
              <li>• Enhance security</li>
              <li>• Identify cost-saving opportunities</li>
              <li>• Follow Azure best practices</li>
              <li>• Address issues before they cause problems</li>
              <li>• Optimize resource utilization</li>
              <li>• Implement recommendations with minimal effort</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Cost</h3>
          <p className="mb-3">
            Recommendations to optimize and reduce your overall Azure spending.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• Eliminate unused resources</li>
            <li>• Right-size underutilized VMs</li>
            <li>• Purchase reserved instances</li>
            <li>• Use lower-cost storage tiers</li>
            <li>• Use Azure Hybrid Benefit</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Performance</h3>
          <p className="mb-3">
            Recommendations to improve the speed and responsiveness of your applications.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• Use managed disks</li>
            <li>• Premium storage for high I/O</li>
            <li>• SQL DB performance tuning</li>
            <li>• Use cache layers</li>
            <li>• Optimize network traffic</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">High Availability</h3>
          <p className="mb-3">
            Recommendations to ensure business continuity and service resiliency.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• Use availability sets</li>
            <li>• Implement geo-redundancy</li>
            <li>• Use availability zones</li>
            <li>• Add load balancers</li>
            <li>• Configure backups</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Security</h3>
          <p className="mb-3">
            Recommendations to protect your applications and data from threats.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• Apply disk encryption</li>
            <li>• Enable MFA</li>
            <li>• Set up web app firewalls</li>
            <li>• Apply security updates</li>
            <li>• Apply JIT VM access</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Operational Excellence</h3>
          <p className="mb-3">
            Recommendations to improve process and workflow efficiency.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• Configure Azure Service Health</li>
            <li>• Implement resource groups best practices</li>
            <li>• Use Azure Policy</li>
            <li>• Configure monitoring</li>
            <li>• Implement IaC</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">Working with Azure Advisor</h3>
        <ul className="space-y-2">
          <li>• <strong>Access Advisor</strong> from the Azure portal, CLI, PowerShell, or REST API</li>
          <li>• <strong>Filter recommendations</strong> by subscription, resource group, resource, or recommendation type</li>
          <li>• <strong>Set up alerts</strong> to be notified of new recommendations</li>
          <li>• <strong>Postpone or dismiss</strong> recommendations that aren't currently relevant</li>
          <li>• <strong>Track progress</strong> by viewing your Advisor Score</li>
          <li>• <strong>Review impact</strong> of recommendations with estimated cost savings or performance improvements</li>
          <li>• <strong>Export recommendations</strong> for offline analysis or reporting</li>
        </ul>
      </div>

      <h2>Azure Service Health</h2>
      
      <p className="mb-4">
        Azure Service Health provides personalized guidance and support when Azure service issues affect you. 
        It notifies you about current and upcoming issues such as service impacting events, planned maintenance, 
        and other changes that may affect your availability.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Status</h3>
          <p className="mb-3">
            Global view of the health of all Azure services across all Azure regions.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Global Azure service health dashboard</li>
            <li>• Current status of all services</li>
            <li>• Historical outage information</li>
            <li>• No authentication required</li>
            <li>• Accessible at status.azure.com</li>
            <li>• Not personalized to your resources</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Service Health</h3>
          <p className="mb-3">
            Personalized view of your services' health, focused on services and regions you use.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Personalized service health dashboard</li>
            <li>• Information on issues affecting your resources</li>
            <li>• Track ongoing issues</li>
            <li>• Set up alerts</li>
            <li>• Share information with your team</li>
            <li>• View planned maintenance</li>
            <li>• View health advisories</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Resource Health</h3>
          <p className="mb-3">
            Information about the health of your individual resources, with troubleshooting guidance.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Individual resource health status</li>
            <li>• Historical health information</li>
            <li>• Troubleshooting guidance</li>
            <li>• Resource-specific support</li>
            <li>• Report incorrect health status</li>
            <li>• Health event time periods</li>
            <li>• Resource availability SLA metrics</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Service Health Alert Types</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Alert Type</th>
                <th>Description</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Service issues</td>
                <td>Problems in Azure services that affect you now</td>
                <td>Being notified when there's a disruption affecting services you use</td>
              </tr>
              <tr>
                <td>Planned maintenance</td>
                <td>Upcoming maintenance that may affect your services</td>
                <td>Planning for maintenance windows and potential service disruptions</td>
              </tr>
              <tr>
                <td>Health advisories</td>
                <td>Changes requiring your attention</td>
                <td>Being informed about Azure changes that may require action, like deprecations</td>
              </tr>
              <tr>
                <td>Security advisories</td>
                <td>Security-related notifications</td>
                <td>Being alerted about security vulnerabilities and issues</td>
              </tr>
              <tr>
                <td>Resource health</td>
                <td>Status changes of your specific resources</td>
                <td>Knowing when individual resources become unavailable or recover</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">Service Health Best Practices</h3>
        <ul className="space-y-2">
          <li>• <strong>Configure Service Health alerts</strong> for all your critical services and regions</li>
          <li>• <strong>Set up multiple notification methods</strong> (email, SMS, webhooks) for redundancy</li>
          <li>• <strong>Include all relevant team members</strong> in notifications</li>
          <li>• <strong>Integrate with your IT service management tools</strong> using webhooks</li>
          <li>• <strong>Check Resource Health</strong> before contacting support for troubleshooting</li>
          <li>• <strong>Review Service Health history</strong> when planning SLA commitments</li>
          <li>• <strong>Document your response procedures</strong> for different types of service health alerts</li>
        </ul>
      </div>

      <h2>Azure Monitor</h2>
      
      <p className="mb-4">
        Azure Monitor is a comprehensive solution for collecting, analyzing, and acting on telemetry 
        from your cloud and on-premises environments. It helps you understand how your applications 
        are performing and proactively identifies issues affecting them.
      </p>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">Azure Monitor Data Platform</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Data Sources</h4>
            <ul className="space-y-1 text-sm">
              <li>• Application monitoring data</li>
              <li>• VM monitoring data</li>
              <li>• Azure resource monitoring</li>
              <li>• Azure subscription monitoring</li>
              <li>• Azure tenant monitoring</li>
              <li>• Custom sources</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Data Storage</h4>
            <ul className="space-y-1 text-sm">
              <li>• Metrics data store</li>
              <li>• Logs data store</li>
              <li>• Change tracking</li>
              <li>• Performance data</li>
              <li>• Service map</li>
              <li>• Application map</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Data Analysis & Response</h4>
            <ul className="space-y-1 text-sm">
              <li>• Visualizations</li>
              <li>• Analytics</li>
              <li>• Alerts</li>
              <li>• Autoscale</li>
              <li>• Automation</li>
              <li>• Integration</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Metrics</h3>
          <p className="mb-3">
            Numerical values collected at regular intervals that describe some aspect of a system at a particular time.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Lightweight and capable of near real-time scenarios</li>
            <li>• Numerical data stored in a time-series database</li>
            <li>• Good for alerting and fast detection of issues</li>
            <li>• Can be viewed in Metrics Explorer</li>
            <li>• Collected at regular intervals</li>
            <li>• Defined structure with known metadata</li>
            <li>• Retained for 93 days by default</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Logs</h3>
          <p className="mb-3">
            Different types of data organized into records with different sets of properties for each type.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Text or JSON event data with rich information</li>
            <li>• Stored in Log Analytics workspace</li>
            <li>• Queried using Kusto Query Language (KQL)</li>
            <li>• Collected at irregular intervals when events occur</li>
            <li>• Good for deep analysis and troubleshooting</li>
            <li>• Greater flexibility in data collection and analysis</li>
            <li>• Retention configurable up to 2 years</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Monitoring Data Sources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Application Monitoring</h4>
            <ul className="space-y-1">
              <li>• <strong>Application Insights:</strong> Monitors availability, performance, and usage of web applications</li>
              <li>• <strong>Dependency Tracking:</strong> Monitors calls to databases, external services, and APIs</li>
              <li>• <strong>Client-side Telemetry:</strong> Browser and mobile app usage data</li>
              <li>• <strong>Custom Events and Metrics:</strong> Developer-defined application-specific data points</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Infrastructure Monitoring</h4>
            <ul className="space-y-1">
              <li>• <strong>VM Insights:</strong> Performance and dependencies of Windows and Linux VMs</li>
              <li>• <strong>Container Insights:</strong> Performance of container workloads</li>
              <li>• <strong>Platform Metrics:</strong> Health and performance metrics from Azure services</li>
              <li>• <strong>Activity Logs:</strong> Subscription-level events in Azure</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Log Analytics</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Log Analytics Overview</h3>
        <p className="mb-4">
          Log Analytics is a tool in the Azure portal used to edit and run log queries against data in the 
          Azure Monitor Logs data store. It allows you to analyze large amounts of data across all your 
          monitoring logs using a powerful query language.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              <li>• Query log data using KQL</li>
              <li>• Analyze millions of records quickly</li>
              <li>• Create visualizations from query results</li>
              <li>• Save and share queries</li>
              <li>• Multiple workspaces support</li>
              <li>• Advanced analytics capabilities</li>
              <li>• Integration with alerts and dashboards</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Log Analytics Workspace</h4>
            <ul className="space-y-1">
              <li>• Central location where log data is stored</li>
              <li>• Data organized by tables</li>
              <li>• Each workspace has a unique data repository</li>
              <li>• Configurable retention settings</li>
              <li>• Access controlled by Azure RBAC</li>
              <li>• Regionalized storage of data</li>
              <li>• Resource-context and workspace-context views</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Kusto Query Language (KQL)</h3>
        <p className="mb-4">
          KQL is a powerful query language used to analyze data in Azure Monitor Logs. It uses a data-flow model 
          with a sequence of steps connected by pipe operators.
        </p>
        <h4 className="font-medium mb-2">Sample KQL Queries:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-auto">
{`// Find the 10 most recent errors
Event
| where EventLevel == "Error"
| project TimeGenerated, Source, EventID
| top 10 by TimeGenerated desc`}
            </pre>
          </div>
          <div>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-auto">
{`// CPU usage by computer, last 24 hours
Perf
| where TimeGenerated > ago(24h)
| where CounterName == "% Processor Time"
| summarize AvgCPU = avg(CounterValue) by Computer
| order by AvgCPU desc`}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Monitor Alerts</h3>
          <p className="mb-3">
            Azure Monitor Alerts proactively notify you when important conditions are found in your monitoring data.
          </p>
          <h4 className="font-medium mt-4 mb-2">Alert Types:</h4>
          <ul className="space-y-1">
            <li>• <strong>Metric Alerts:</strong> Alert when a metric crosses a threshold</li>
            <li>• <strong>Log Alerts:</strong> Alert based on log query results</li>
            <li>• <strong>Activity Log Alerts:</strong> Alert on Azure subscription-level events</li>
            <li>• <strong>Smart Detection Alerts:</strong> AI-powered anomaly detection</li>
            <li>• <strong>Application Insights Web Test Alerts:</strong> Alert on website availability</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Alert Response Actions</h3>
          <p className="mb-3">
            When an alert is triggered, it can take one or more actions to notify people or trigger automated processes.
          </p>
          <h4 className="font-medium mt-4 mb-2">Action Types:</h4>
          <ul className="space-y-1">
            <li>• <strong>Email Notifications:</strong> Send emails to specified recipients</li>
            <li>• <strong>SMS Notifications:</strong> Send text messages to specified phone numbers</li>
            <li>• <strong>Push Notifications:</strong> Send to Azure mobile app</li>
            <li>• <strong>Voice Calls:</strong> Make automated voice calls</li>
            <li>• <strong>Webhook:</strong> Trigger external systems or custom logic</li>
            <li>• <strong>Logic App:</strong> Trigger complex workflows</li>
            <li>• <strong>ITSM:</strong> Create tickets in IT Service Management tools</li>
            <li>• <strong>Runbook:</strong> Start an Azure Automation runbook</li>
          </ul>
        </div>
      </div>

      <h2>Application Insights</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Application Insights Overview</h3>
        <p className="mb-4">
          Application Insights is an extension of Azure Monitor that provides application performance 
          monitoring (APM) capabilities. It helps you detect and diagnose issues in your web applications 
          and services, understand how users interact with your app, and continuously improve performance 
          and usability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              <li>• Live application monitoring</li>
              <li>• User behavior analysis</li>
              <li>• Distributed tracing</li>
              <li>• Exception tracking</li>
              <li>• Performance monitoring</li>
              <li>• Availability testing</li>
              <li>• Application map</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Supported Platforms</h4>
            <ul className="space-y-1">
              <li>• ASP.NET, ASP.NET Core</li>
              <li>• Java applications</li>
              <li>• Node.js applications</li>
              <li>• Python applications</li>
              <li>• JavaScript single-page apps</li>
              <li>• Mobile apps (iOS, Android, other)</li>
              <li>• Any application via custom SDK or REST API</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Application Map</h3>
          <p className="mb-3">
            Visualizes application components and their relationships to identify bottlenecks and problematic components.
          </p>
          <h4 className="font-medium mt-4 mb-2">Capabilities:</h4>
          <ul className="space-y-1">
            <li>• Dependency visualization</li>
            <li>• Performance metrics on dependencies</li>
            <li>• Failure rate visualization</li>
            <li>• Drill-down to detailed diagnostics</li>
            <li>• Cross-component transaction tracking</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Live Metrics</h3>
          <p className="mb-3">
            Near real-time monitoring of your application with a one-second latency to help you identify issues as they occur.
          </p>
          <h4 className="font-medium mt-4 mb-2">Capabilities:</h4>
          <ul className="space-y-1">
            <li>• Real-time performance metrics</li>
            <li>• Failure rates and exceptions</li>
            <li>• Dependency rates and response times</li>
            <li>• Zero performance impact</li>
            <li>• Live streaming of request details</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Availability Tests</h3>
          <p className="mb-3">
            Tests that regularly check the availability and responsiveness of your application from different geographic locations.
          </p>
          <h4 className="font-medium mt-4 mb-2">Test Types:</h4>
          <ul className="space-y-1">
            <li>• URL ping test (simple)</li>
            <li>• Multi-step web test (complex flows)</li>
            <li>• Custom tracking tests</li>
            <li>• Tests from multiple locations</li>
            <li>• Alerts on availability issues</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">Application Insights Best Practices</h3>
        <ul className="space-y-2">
          <li>• <strong>Enable application insights</strong> early in the development lifecycle</li>
          <li>• <strong>Configure sampling</strong> to control telemetry volume and costs</li>
          <li>• <strong>Add custom instrumentation</strong> for business-specific metrics and events</li>
          <li>• <strong>Set up availability tests</strong> from multiple geographic locations</li>
          <li>• <strong>Configure smart detection</strong> to automatically identify anomalies</li>
          <li>• <strong>Create dashboards</strong> with the most important application metrics</li>
          <li>• <strong>Set up alerts</strong> for critical performance thresholds and failures</li>
        </ul>
      </div>

      <h2>Azure Monitor Workbooks and Dashboards</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Monitor Workbooks</h3>
          <p className="mb-3">
            Interactive documents that combine text, analytics queries, metrics, and parameters into integrated reports.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Combine multiple data sources</li>
            <li>• Interactive parameters and filters</li>
            <li>• Rich visualizations (charts, grids, tiles)</li>
            <li>• Shareable with team members</li>
            <li>• Customizable and extendable</li>
            <li>• Template gallery for quick starts</li>
            <li>• Support for both logs and metrics</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Dashboards</h3>
          <p className="mb-3">
            Customizable views that consolidate charts, graphs, and tables into a single pane of glass.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Unified view of monitoring data</li>
            <li>• Customizable layouts</li>
            <li>• Private or shared with team members</li>
            <li>• Pin items from various Azure services</li>
            <li>• Markdown tiles for documentation</li>
            <li>• Live updating metrics</li>
            <li>• Multi-subscription support</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Workbooks vs. Dashboards</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Workbooks</th>
                <th>Dashboards</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primary purpose</td>
                <td>Interactive analysis and reporting</td>
                <td>At-a-glance monitoring</td>
              </tr>
              <tr>
                <td>Interactivity</td>
                <td>Highly interactive with parameters</td>
                <td>Limited interactivity</td>
              </tr>
              <tr>
                <td>Data sources</td>
                <td>Multiple query types in one document</td>
                <td>Individual tiles from different sources</td>
              </tr>
              <tr>
                <td>Text content</td>
                <td>Rich markdown with documentation</td>
                <td>Limited to markdown tiles</td>
              </tr>
              <tr>
                <td>Organization</td>
                <td>Logical flow of analysis</td>
                <td>Arranged grid of independent tiles</td>
              </tr>
              <tr>
                <td>Typical use case</td>
                <td>Deep analysis, troubleshooting, reports</td>
                <td>Operational monitoring, KPIs</td>
              </tr>
              <tr>
                <td>Time range control</td>
                <td>Individual controls per section</td>
                <td>Global time range settings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Azure Advisor:</strong> Personalized recommendations to optimize Azure deployments across cost, performance, high availability, security, and operational excellence categories.
        </li>
        <li>
          <strong>Azure Service Health:</strong> Personalized alerts about Azure service issues, planned maintenance, and health advisories, including Azure Status, Service Health, and Resource Health.
        </li>
        <li>
          <strong>Azure Monitor:</strong> Comprehensive solution for collecting, analyzing, and acting on telemetry from cloud and on-premises environments, working with both metrics and logs.
        </li>
        <li>
          <strong>Log Analytics:</strong> Tool for querying and analyzing log data using Kusto Query Language (KQL), with data stored in Log Analytics workspaces.
        </li>
        <li>
          <strong>Azure Monitor Alerts:</strong> Proactive notifications when conditions are met in monitoring data, with various alert types and action groups for responses.
        </li>
        <li>
          <strong>Application Insights:</strong> Application performance monitoring (APM) tool for web applications, providing user behavior analysis, distributed tracing, and performance monitoring.
        </li>
        <li>
          <strong>Azure Monitor Workbooks:</strong> Interactive documents combining text, queries, metrics, and parameters into integrated reports with rich visualizations.
        </li>
        <li>
          <strong>Azure Dashboards:</strong> Customizable views that consolidate monitoring data into a single pane of glass for at-a-glance operational monitoring.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Understand the five recommendation categories in Azure Advisor</li>
          <li>• Know the differences between Azure Status, Service Health, and Resource Health</li>
          <li>• Understand how metrics and logs differ in Azure Monitor</li>
          <li>• Be familiar with the capabilities of Log Analytics and KQL basics</li>
          <li>• Know the different types of alerts and actions available in Azure Monitor</li>
          <li>• Understand the key features of Application Insights</li>
          <li>• Know when to use Workbooks versus Dashboards for different monitoring scenarios</li>
        </ul>
      </div>
    </div>
  );
};

export default MonitoringTopic;