import React from 'react';

const IdentityAccessTopic: React.FC = () => {
  return (
    <div>
      <h1>Azure Identity, Access, and Security</h1>
      
      <p>
        Identity and access management are fundamental to cloud security. Azure provides comprehensive 
        solutions to manage identities, control access to resources, and implement security measures 
        across your cloud environment.
      </p>

      <h2>Directory Services in Azure</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Microsoft Entra ID</h3>
          <p className="mb-3">
            Microsoft's cloud-based identity and access management service, helping users sign in and access resources.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Authentication (verifying identity)</li>
            <li>• Single sign-on (SSO)</li>
            <li>• Application management</li>
            <li>• Business-to-business (B2B) identity services</li>
            <li>• Business-to-customer (B2C) identity services</li>
            <li>• Device management</li>
            <li>• Conditional Access</li>
            <li>• Identity Protection</li>
            <li>• Privileged Identity Management</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Microsoft Entra Domain Services</h3>
          <p className="mb-3">
            Managed domain service that provides domain join, group policy, LDAP, Kerberos/NTLM authentication without deploying domain controllers.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Managed domain services</li>
            <li>• Domain join for Azure VMs</li>
            <li>• LDAP support</li>
            <li>• Kerberos/NTLM authentication</li>
            <li>• Group Policy support</li>
            <li>• Secure LDAP (LDAPS)</li>
            <li>• Integration with Microsoft Entra ID</li>
            <li>• Simplified deployment (no domain controllers)</li>
            <li>• Managed service (no patching required)</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Comparing Microsoft Entra ID and Domain Services</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Microsoft Entra ID</th>
                <th>Microsoft Entra Domain Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primary purpose</td>
                <td>Cloud identity and access management</td>
                <td>Managed domain services</td>
              </tr>
              <tr>
                <td>Authentication protocols</td>
                <td>SAML, WS-Federation, OpenID Connect, OAuth</td>
                <td>Kerberos, NTLM, LDAP</td>
              </tr>
              <tr>
                <td>Domain join</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Group Policy</td>
                <td>No (uses Conditional Access)</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>LDAP support</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Tree/forest structure</td>
                <td>Flat structure</td>
                <td>Traditional AD hierarchy</td>
              </tr>
              <tr>
                <td>Best for</td>
                <td>Modern cloud and web applications</td>
                <td>Legacy applications requiring domain services</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Authentication Methods in Azure</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Single Sign-On (SSO)</h3>
          <p className="mb-3">
            Authentication method that allows users to sign in once and access multiple applications and resources without re-entering credentials.
          </p>
          <h4 className="font-medium mt-4 mb-2">Benefits:</h4>
          <ul className="space-y-1">
            <li>• Improved user experience</li>
            <li>• Reduced password fatigue</li>
            <li>• Simplified access management</li>
            <li>• Centralized security control</li>
            <li>• Reduced help desk calls</li>
            <li>• Increased productivity</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Multi-Factor Authentication (MFA)</h3>
          <p className="mb-3">
            Security process that requires more than one form of verification to prove a user's identity.
          </p>
          <h4 className="font-medium mt-4 mb-2">Verification Methods:</h4>
          <ul className="space-y-1">
            <li>• Microsoft Authenticator app</li>
            <li>• OATH hardware tokens</li>
            <li>• SMS verification codes</li>
            <li>• Voice calls</li>
            <li>• Email codes</li>
            <li>• Security questions</li>
            <li>• App passwords</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Passwordless Authentication</h3>
          <p className="mb-3">
            Authentication methods that don't require passwords, improving security and user experience.
          </p>
          <h4 className="font-medium mt-4 mb-2">Options:</h4>
          <ul className="space-y-1">
            <li>• Windows Hello for Business</li>
            <li>• FIDO2 security keys</li>
            <li>• Microsoft Authenticator app</li>
            <li>• Temporary Access Pass</li>
            <li>• Certificate-based authentication</li>
            <li>• SMS sign-in</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Authentication Process</h3>
        <div className="flowchart">
          <div className="grid grid-cols-5 gap-2 text-center">
            <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              User Credentials
            </div>
            <div className="flex items-center justify-center">
              <span>→</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              Authentication Service
            </div>
            <div className="flex items-center justify-center">
              <span>→</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              Access Token
            </div>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-2 text-center">
            <div className="col-start-5 bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              Resource Access
            </div>
            <div className="col-start-4 flex items-center justify-center">
              <span>→</span>
            </div>
            <div className="col-start-3 bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              Authorization Check
            </div>
            <div className="col-start-2 flex items-center justify-center">
              <span>→</span>
            </div>
            <div className="col-start-1 bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              Token Validation
            </div>
          </div>
        </div>
      </div>

      <h2>External Identities in Azure</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Business-to-Business (B2B)</h3>
          <p className="mb-3">
            Collaboration features that allow external users (partners, vendors, suppliers) to access your organization's resources securely.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Secure guest user access</li>
            <li>• Self-service sign-up portal</li>
            <li>• Identity federation</li>
            <li>• Access reviews</li>
            <li>• Conditional Access policies</li>
            <li>• Usage of existing identities</li>
            <li>• Centralized partner management</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Business-to-Customer (B2C)</h3>
          <p className="mb-3">
            Identity management solution for consumer-facing applications, allowing customers to sign in with preferred social, enterprise, or local account identities.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Custom branding</li>
            <li>• Social identity providers</li>
            <li>• Custom user journeys</li>
            <li>• Progressive profiling</li>
            <li>• User migration</li>
            <li>• Fraud protection</li>
            <li>• Multi-language support</li>
            <li>• Self-service password reset</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">B2B vs. B2C Comparison</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Business-to-Business (B2B)</th>
                <th>Business-to-Customer (B2C)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primary users</td>
                <td>Partners, suppliers, vendors</td>
                <td>Customers, consumers</td>
              </tr>
              <tr>
                <td>Access scope</td>
                <td>Internal resources and applications</td>
                <td>Customer-facing applications</td>
              </tr>
              <tr>
                <td>Identity management</td>
                <td>Organization manages external identities</td>
                <td>Customers manage their own identities</td>
              </tr>
              <tr>
                <td>User interface</td>
                <td>Standard Microsoft Entra interface</td>
                <td>Customizable, branded experience</td>
              </tr>
              <tr>
                <td>Relationship</td>
                <td>Business-to-business relationship</td>
                <td>Business-to-consumer relationship</td>
              </tr>
              <tr>
                <td>Integration</td>
                <td>Integrated with existing Microsoft Entra tenant</td>
                <td>Separate Microsoft Entra B2C tenant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Microsoft Entra Conditional Access</h2>
      
      <p className="mb-4">
        Conditional Access is the tool used by Microsoft Entra ID to bring signals together, make decisions, 
        and enforce organizational policies. It allows fine-grained access control based on specific conditions.
      </p>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">Conditional Access Flow</h3>
        <div className="relative">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <h4 className="text-center mb-2">Signals</h4>
              <ul className="space-y-1 text-sm">
                <li>• User/group</li>
                <li>• IP location</li>
                <li>• Device</li>
                <li>• Application</li>
                <li>• Risk detection</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
              <h4 className="text-center mb-2">Decision</h4>
              <ul className="space-y-1 text-sm">
                <li>• Grant access</li>
                <li>• Block access</li>
                <li>• Grant access with conditions</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <h4 className="text-center mb-2">Enforcement</h4>
              <ul className="space-y-1 text-sm">
                <li>• Require MFA</li>
                <li>• Require device compliance</li>
                <li>• Require approved application</li>
                <li>• Require terms of use</li>
                <li>• Restrict session</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Common Conditional Access Scenarios</h3>
        <ul className="space-y-2">
          <li>• <strong>Require MFA for administrators:</strong> Ensure privileged accounts use multi-factor authentication</li>
          <li>• <strong>Require MFA for Azure management:</strong> Protect access to the Azure portal and resources</li>
          <li>• <strong>Block sign-ins from untrusted locations:</strong> Restrict access from specific countries or regions</li>
          <li>• <strong>Require managed devices:</strong> Ensure only compliant or joined devices can access resources</li>
          <li>• <strong>Block legacy authentication protocols:</strong> Prevent access from clients using older protocols</li>
          <li>• <strong>Require app protection policy:</strong> Ensure mobile apps comply with organizational policies</li>
          <li>• <strong>Risk-based policies:</strong> Dynamically enforce MFA based on sign-in risk level</li>
          <li>• <strong>Session controls:</strong> Limit what users can do within a cloud app session</li>
        </ul>
      </div>

      <h2>Azure Role-Based Access Control (RBAC)</h2>
      
      <p className="mb-4">
        RBAC helps you manage who has access to Azure resources, what they can do with those resources, 
        and what areas they have access to.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">RBAC Key Concepts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium mb-2">Security Principal</h4>
            <p className="text-sm">
              Object that represents an entity requesting access to resources:
            </p>
            <ul className="space-y-1 text-sm mt-2">
              <li>• User</li>
              <li>• Group</li>
              <li>• Service Principal</li>
              <li>• Managed Identity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Role Definition</h4>
            <p className="text-sm">
              Collection of permissions that defines what actions are allowed:
            </p>
            <ul className="space-y-1 text-sm mt-2">
              <li>• Owner</li>
              <li>• Contributor</li>
              <li>• Reader</li>
              <li>• Custom roles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Scope</h4>
            <p className="text-sm">
              Boundary where the access applies:
            </p>
            <ul className="space-y-1 text-sm mt-2">
              <li>• Management group</li>
              <li>• Subscription</li>
              <li>• Resource group</li>
              <li>• Resource</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="table-container mb-8">
        <table>
          <thead>
            <tr>
              <th>Built-in Role</th>
              <th>Description</th>
              <th>Example Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Owner</td>
              <td>Full access to all resources, including the right to delegate access to others</td>
              <td>Administrators who need complete control over resources</td>
            </tr>
            <tr>
              <td>Contributor</td>
              <td>Create and manage all resources, but cannot grant access to others</td>
              <td>Developers who need to deploy and manage resources</td>
            </tr>
            <tr>
              <td>Reader</td>
              <td>View existing resources</td>
              <td>Auditors who need to view but not modify resources</td>
            </tr>
            <tr>
              <td>User Access Administrator</td>
              <td>Manage user access to Azure resources</td>
              <td>Help desk staff who manage access but not resources</td>
            </tr>
            <tr>
              <td>Virtual Machine Contributor</td>
              <td>Create and manage virtual machines, but not access to them or the virtual network</td>
              <td>VM operations team who maintains VMs</td>
            </tr>
            <tr>
              <td>Network Contributor</td>
              <td>Create and manage network resources</td>
              <td>Network administrators who manage virtual networks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Concept of Zero Trust</h2>
      
      <p className="mb-4">
        Zero Trust is a security model that assumes breach and verifies each request as though 
        it originated from an uncontrolled network, regardless of where the request comes from 
        or what resource it accesses.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Zero Trust Principles</h3>
          <ul className="space-y-2">
            <li>• <strong>Verify explicitly:</strong> Always authenticate and authorize based on all available data points</li>
            <li>• <strong>Use least privilege access:</strong> Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA)</li>
            <li>• <strong>Assume breach:</strong> Minimize blast radius and segment access, verify end-to-end encryption, use analytics to detect threats</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Traditional vs. Zero Trust</h3>
          <div className="table-container">
            <table className="text-sm">
              <thead>
                <tr>
                  <th>Traditional Security</th>
                  <th>Zero Trust Security</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trust by default</td>
                  <td>Never trust, always verify</td>
                </tr>
                <tr>
                  <td>Perimeter-based security</td>
                  <td>Identity-based security</td>
                </tr>
                <tr>
                  <td>VPN-centric approach</td>
                  <td>Least-privilege access</td>
                </tr>
                <tr>
                  <td>Network segmentation</td>
                  <td>Micro-segmentation</td>
                </tr>
                <tr>
                  <td>Trust internal traffic</td>
                  <td>Verify all traffic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Azure Zero Trust Implementation</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium mb-2">Identities</h4>
            <ul className="space-y-1 text-sm">
              <li>• Microsoft Entra ID</li>
              <li>• Multi-factor authentication</li>
              <li>• Conditional Access</li>
              <li>• Identity Protection</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Devices</h4>
            <ul className="space-y-1 text-sm">
              <li>• Microsoft Intune</li>
              <li>• Microsoft Defender for Endpoint</li>
              <li>• Compliance policies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Applications</h4>
            <ul className="space-y-1 text-sm">
              <li>• Microsoft Cloud App Security</li>
              <li>• App protection policies</li>
              <li>• API management</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-medium mb-2">Data</h4>
            <ul className="space-y-1 text-sm">
              <li>• Azure Information Protection</li>
              <li>• Double Key Encryption</li>
              <li>• Microsoft Purview</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Infrastructure</h4>
            <ul className="space-y-1 text-sm">
              <li>• Azure Security Center</li>
              <li>• Azure Policy</li>
              <li>• Azure Firewall</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Networks</h4>
            <ul className="space-y-1 text-sm">
              <li>• Network segmentation</li>
              <li>• Threat protection</li>
              <li>• Azure DDoS Protection</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>The Defense-in-Depth Model</h2>
      
      <p className="mb-4">
        Defense-in-depth is a layered approach to security that uses multiple security measures to 
        protect your resources, so if one layer is breached, another layer continues to provide protection.
      </p>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">Defense-in-Depth Layers</h3>
        <div className="relative">
          <div className="grid grid-cols-1 gap-2">
            <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg text-center">
              Data
            </div>
            <div className="bg-gray-200 dark:bg-gray-500 p-2 rounded-lg text-center">
              Application
            </div>
            <div className="bg-gray-300 dark:bg-gray-400 p-2 rounded-lg text-center">
              Compute
            </div>
            <div className="bg-gray-400 dark:bg-gray-300 p-2 rounded-lg text-center">
              Network
            </div>
            <div className="bg-gray-500 dark:bg-gray-200 p-2 rounded-lg text-center">
              Perimeter
            </div>
            <div className="bg-gray-600 dark:bg-gray-100 p-2 rounded-lg text-center">
              Identity and Access
            </div>
            <div className="bg-gray-700 dark:bg-gray-50 p-2 rounded-lg text-center">
              Physical Security
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Defense-in-Depth Layer Examples in Azure</h3>
        <ul className="space-y-2">
          <li>• <strong>Physical Security:</strong> Azure datacenter physical security controls</li>
          <li>• <strong>Identity and Access:</strong> Microsoft Entra ID, Conditional Access, RBAC</li>
          <li>• <strong>Perimeter:</strong> DDoS Protection, Azure Firewall, Web Application Firewall</li>
          <li>• <strong>Network:</strong> Network Security Groups, Private Link, Service Endpoints</li>
          <li>• <strong>Compute:</strong> Endpoint security, patching, disk encryption</li>
          <li>• <strong>Application:</strong> Secure development, API security, code scanning</li>
          <li>• <strong>Data:</strong> Encryption, Azure Key Vault, SQL data security</li>
        </ul>
      </div>

      <h2>Microsoft Defender for Cloud</h2>
      
      <p className="mb-4">
        Microsoft Defender for Cloud is a cloud security posture management (CSPM) and cloud workload 
        protection platform (CWPP) for all your Azure, on-premises, and multicloud (Amazon AWS and Google GCP) resources.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Key Features</h3>
          <ul className="space-y-2">
            <li>• <strong>Security posture management:</strong> Continuously assess and track your security posture</li>
            <li>• <strong>Security recommendations:</strong> Actionable guidance to improve security</li>
            <li>• <strong>Secure Score:</strong> Measure and track your security posture</li>
            <li>• <strong>Regulatory compliance:</strong> Monitor compliance with various standards</li>
            <li>• <strong>Threat protection:</strong> Advanced threat detection and defense</li>
            <li>• <strong>Just-in-time VM access:</strong> Reduce attack surface with controlled access</li>
            <li>• <strong>Adaptive application controls:</strong> Control which applications can run</li>
            <li>• <strong>File integrity monitoring:</strong> Detect changes to important files</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Protection Plans</h3>
          <div className="table-container">
            <table className="text-sm">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>What it Protects</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Defender for Servers</td>
                  <td>Windows and Linux machines</td>
                </tr>
                <tr>
                  <td>Defender for App Service</td>
                  <td>Web applications</td>
                </tr>
                <tr>
                  <td>Defender for Storage</td>
                  <td>Storage accounts</td>
                </tr>
                <tr>
                  <td>Defender for SQL</td>
                  <td>SQL databases and servers</td>
                </tr>
                <tr>
                  <td>Defender for Kubernetes</td>
                  <td>Azure Kubernetes Service</td>
                </tr>
                <tr>
                  <td>Defender for Container Registries</td>
                  <td>Azure Container Registry</td>
                </tr>
                <tr>
                  <td>Defender for Key Vault</td>
                  <td>Azure Key Vault</td>
                </tr>
                <tr>
                  <td>Defender for Resource Manager</td>
                  <td>Subscription management</td>
                </tr>
                <tr>
                  <td>Defender for DNS</td>
                  <td>DNS resolution and queries</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Deployment Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Free Tier</h4>
            <ul className="space-y-1">
              <li>• Continuous security assessment</li>
              <li>• Security recommendations</li>
              <li>• Secure score</li>
              <li>• Basic security policy and compliance dashboard</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Defender Plans (Premium)</h4>
            <ul className="space-y-1">
              <li>• All Free tier features</li>
              <li>• Advanced threat protection</li>
              <li>• Vulnerability assessment</li>
              <li>• Just-in-time VM access</li>
              <li>• Adaptive application controls</li>
              <li>• Regulatory compliance</li>
              <li>• Cloud workload protection</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Key Concepts to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Directory Services:</strong> Microsoft Entra ID provides cloud-based identity services, while Microsoft Entra Domain Services offers traditional domain services without domain controllers.
        </li>
        <li>
          <strong>Authentication Methods:</strong> Single sign-on (SSO), multi-factor authentication (MFA), and passwordless authentication improve security and user experience.
        </li>
        <li>
          <strong>External Identities:</strong> B2B collaboration allows partner access to resources, while B2C provides identity management for customer-facing applications.
        </li>
        <li>
          <strong>Conditional Access:</strong> Uses signals, decisions, and enforcement to implement access policies based on conditions.
        </li>
        <li>
          <strong>RBAC:</strong> Controls access to Azure resources using role assignments that combine security principals, role definitions, and scopes.
        </li>
        <li>
          <strong>Zero Trust:</strong> Security model that verifies explicitly, uses least privilege access, and assumes breach for all requests.
        </li>
        <li>
          <strong>Defense-in-Depth:</strong> Layered security approach including physical, identity, perimeter, network, compute, application, and data protection.
        </li>
        <li>
          <strong>Microsoft Defender for Cloud:</strong> Provides security posture management, security recommendations, and threat protection for Azure and multicloud resources.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Understand the differences between Microsoft Entra ID and Microsoft Entra Domain Services</li>
          <li>• Know the different authentication methods and when to use each one</li>
          <li>• Understand the purpose and differences between B2B and B2C</li>
          <li>• Know how Conditional Access works and common scenarios</li>
          <li>• Be familiar with RBAC concepts and built-in roles</li>
          <li>• Understand the principles of Zero Trust and how it differs from traditional security</li>
          <li>• Know the layers in the Defense-in-Depth model and examples of each in Azure</li>
          <li>• Understand the features and capabilities of Microsoft Defender for Cloud</li>
        </ul>
      </div>
    </div>
  );
};

export default IdentityAccessTopic;