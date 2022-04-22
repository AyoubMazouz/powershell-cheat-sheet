export const detailsUrl = 'https://www.pdq.com/powershell/'
export const data = [
    // A
    {
        name: 'Get-Acl',
        alias: [],
        description: 'Get permission settings for a file or registry key.',
    },
    {
        name: 'Set-Acl',
        alias: [],
        description: 'Set permissions.',
    },
    {
        name: 'Get-alias',
        alias: ['gal'],
        description: 'Return alias names for cmdlets.',
    },
    {
        name: 'Export-alias',
        alias: ['epal'],
        description: 'Export currently defined aliases to a file.',
    },
    {
        name: 'Import-alias',
        alias: ['ipal'],
        description: 'Import an alias list from a file.',
    },
    {
        name: 'New-alias',
        alias: ['nal'],
        description: 'Create a new alias.',
    },
    {
        name: 'Set-alias',
        alias: ['sal'],
        description: 'Create or change an alias.',
    },
    {
        name: 'Get-AppvClientPackage',
        alias: [],
        description: 'Return App-V Client Packages.',
    },
    {
        name: 'Get-AppxPackage',
        alias: [],
        description: 'List the app packages installed in a user profile.',
    },
    {
        name: 'Remove-AppxPackage ',
        alias: [],
        description: 'Remove an app package from a user account.',
    },
    {
        name: 'Add-AppxProvisionedPackage',
        alias: [],
        description: '',
    },
    {
        name: 'Compress-Archive',
        alias: [],
        description: 'Create a new archive/zipped file. [PS 5+]',
    },
    {
        name: 'Expand-Archive',
        alias: [],
        description: 'Extract files from an archive (zipped) file [PS 5+]',
    },
    {
        name: 'Get-AuthenticodeSignature',
        alias: [],
        description: 'Get the signature object associated with a file.',
    },
    {
        name: 'Set-AuthenticodeSignature',
        alias: [],
        description: 'Place a signature in a .ps1 script or other file.',
    },
    // B
    {
        name: 'Backup-GPO',
        alias: [],
        description: 'Backup group policy objects. (GPOs)',
    },
    {
        name: 'Begin',
        alias: [],
        description: 'Function BEGIN block.',
    },
    {
        name: 'BITS',
        alias: [],
        description: 'Function BEGIN block.',
    },
    {
        name: 'Enable-BitLocker',
        alias: [],
        description: 'Enable encryption for a BitLocker volume.',
    },
    {
        name: 'Enable-BitLockerAutoUnlock',
        alias: [],
        description: 'Enable automatic unlocking for a BitLocker volume.',
    },
    {
        name: 'Resume-Bitlocker',
        alias: [],
        description: 'Resume Bitlocker encryption for the specified volume.',
    },
    {
        name: 'Suspend-BitLocker',
        alias: [],
        description: 'Suspend Bitlocker encryption for the specified volume.',
    },
    {
        name: 'Add-BitLockerKeyProtector',
        alias: [],
        description: 'Add a key protector for a BitLocker volume.',
    },
    {
        name: 'Remove-BitLockerKeyProtector',
        alias: [],
        description: 'Remove a key protector from a BitLocker volume.',
    },
    {
        name: 'Get-BitLockerVolume',
        alias: [],
        description: 'Get information about volumes BitLocker can protect.',
    },
    {
        name: 'Break',
        alias: [],
        description: 'Exit a program loop.',
    },
    // C
    {
        name: 'Catch',
        alias: [],
        description: 'Handle a terminating error within a scriptblock.',
    },
    {
        name: 'Export-Certificate',
        alias: [],
        description: 'Export a certificate from a certificate store into a file.',
    },
    {
        name: 'Get-Certificate',
        alias: [],
        description: 'Submit/retrieve a certificate request to an enrollment server and install.',
    },
    {
        name: 'Import-Certificate',
        alias: [],
        description: 'Submit/retrieve a certificate request to an enrollment server and install.',
    },
    {
        name: 'Format-Custom',
        alias: ['fc'],
        description: 'Format output using a customized view.',
    },
    {
        name: 'Get-ChildItem',
        alias: ['dir', 'ls', 'gci'],
        description: 'Get child items (contents of a folder or registry key).',
    },
    {
        name: 'Get-CimAssociatedInstance',
        alias: [],
        description: 'Retrieve CIM instance by an association.',
    },
    {
        name: 'Get-CimClass',
        alias: ['gcls'],
        description: 'Get a list of CIM classes in a specific namespace.',
    },
    {
        name: 'Register-CimIndicationEvent',
        alias: [],
        description: 'Subscribe to indications using a filter or query expression.',
    },
    {
        name: 'New-CimInstance',
        alias: ['ncim'],
        description: 'Create a new instance of a class.',
    },
    {
        name: 'Get-CimInstance',
        alias: ['gcim'],
        description: 'Get a managed resource (storage, network, software etc).',
    },
    {
        name: 'Remove-CimInstance',
        alias: ['rcim'],
        description: 'Remove a CIM instance from a computer.',
    },
    {
        name: 'Set-CimInstance',
        alias: ['scim'],
        description: 'Modify a CIM instance on a CIM server.',
    },
    {
        name: 'Invoke-CimMethod',
        alias: ['icim'],
        description: 'Invoke a method of a CIM class or CIM instance.',
    },
    {
        name: 'Get-CimSession',
        alias: ['gcms'],
        description: 'Get current CIM session objects.',
    },
    {
        name: 'New-CimSession',
        alias: ['ncms'],
        description: 'Create a CIM session.',
    },
    {
        name: 'New-CimSessionOption',
        alias: [],
        description: 'Advanced options for New-CimSession.',
    },
    {
        name: 'Remove-CimSession',
        alias: ['rcms'],
        description: 'Remove one or more CIM session objects.',
    },
    {
        name: 'Get-Clipboard',
        alias: [],
        description: 'Get the current Windows clipboard entry.',
    },
    {
        name: 'Set-Clipboard',
        alias: [],
        description: 'Set the current Windows clipboard entry.',
    },
    {
        name: 'Get-Command',
        alias: ['gcm'],
        description: 'Retrieve basic information about a command.',
    },
    {
        name: 'Invoke-Command',
        alias: ['icm'],
        description: 'Run command.',
    },
    {
        name: 'Show-Command',
        alias: ['shcm'],
        description: 'Create PowerShell commands in a graphical command window.',
    },
    {
        name: 'Measure-Command',
        alias: [],
        description: 'Measure running time.',
    },
    {
        name: 'Trace-Command',
        alias: [],
        description: 'Trace an expression or command.',
    },
    {
        name: 'Add-Computer',
        alias: [],
        description: 'Add a computer to the domain.',
    },
    {
        name: 'Checkpoint-Computer',
        alias: [],
        description: 'Create a system restore point (XP)',
    },
    {
        name: 'Remove-Computer',
        alias: [],
        description: 'Remove the local computer from a workgroup or domain.',
    },
    {
        name: 'Rename-Computer',
        alias: [],
        description: 'Rename a computer.',
    },
    {
        name: 'Restart-Computer',
        alias: [],
        description: 'Restart the operating system on a computer.',
    },
    {
        name: 'Restore-Computer',
        alias: [],
        description: 'Restore the computer to a previous state.',
    },
    {
        name: 'Stop-Computer',
        alias: [],
        description: 'Stop (shut down) a computer.',
    },
    {
        name: 'Get-ComputerInfo',
        alias: [],
        description: 'Get system and operating system properties.',
    },
    {
        name: 'Reset-ComputerMachinePassword',
        alias: [],
        description: 'Reset the machine account password for the computer.',
    },
    {
        name: 'Test-ComputerSecureChannel',
        alias: [],
        description: 'Test and repair the secure channel to the domain.',
    },
    {
        name: 'Add-Content',
        alias: ['ac'],
        description: 'Add to the content of the item.',
    },
    {
        name: 'Get-Content',
        alias: ['cat', 'type', 'gc'],
        description: 'Get content from item (specific location).',
    },
    {
        name: 'Set-Content',
        alias: ['sc'],
        description: 'Set content in the item (specific location).',
    },
    {
        name: 'Clear-Content',
        alias: ['clc'],
        description: 'Remove content from a file/item.',
    },
    {
        name: 'Continue',
        alias: [],
        description: 'Skip just this iteration of a loop.',
    },
    {
        name: 'Enable-ComputerRestore',
        alias: [],
        description: 'Enable System Restore on a drive.',
    },
    {
        name: 'Disable-ComputerRestore',
        alias: [],
        description: 'Disable System Restore on a drive.',
    },
    {
        name: 'Get-ComputerRestorePoint',
        alias: [],
        description: 'Get the restore points on the local computer.',
    },
    {
        name: 'Test-Connection',
        alias: [],
        description: 'Ping one or more computers.',
    },
    {
        name: 'ConvertFrom-CSV',
        alias: [],
        description: 'Convert object properties (in CSV format) into CSV objects.',
    },
    {
        name: 'ConvertTo-CSV',
        alias: [],
        description: 'Convert a JSON-formatted string to a custom object.',
    },
    {
        name: 'ConvertFrom-Json',
        alias: [],
        description: 'Convert a JSON-formatted string to a custom object.',
    },
    {
        name: 'ConvertTo-Json',
        alias: [],
        description: 'Convert an object to a JSON-formatted string.',
    },
    {
        name: 'ConvertTo-Html',
        alias: [],
        description: 'Convert the input into an HTML table.',
    },
    {
        name: 'ConvertTo-Xml',
        alias: [],
        description: 'Convert the input into XML.',
    },
    {
        name: 'Export-Counter',
        alias: [],
        description: 'Export Performance Counter data to log files.',
    },
    {
        name: 'Get-Counter',
        alias: [],
        description: 'Get performance counter data.',
    },
    {
        name: 'Import-Counter',
        alias: [],
        description: 'Import performance counter log files.',
    },
    {
        name: 'Get-Credential',
        alias: [],
        description: 'Get a security credential (username/password).',
    },
    {
        name: 'Get-Culture',
        alias: [],
        description: 'Get region information (language and keyboard layout).',
    },
    {
        name: 'Set-Culture',
        alias: [],
        description: 'Set the user culture for the current user account.',
    },
    {
        name: 'Export-Csv',
        alias: ['epcsv'],
        description: 'Export to Comma Separated Values (spreadsheet).',
    },
    {
        name: 'Import-Clixml',
        alias: [],
        description: 'Import a clixml file and rebuild the PS object.',
    },
    {
        name: 'Import-Csv',
        alias: ['ipcsv'],
        description: 'Take values from a CSV list and send objects down the pipeline.',
    },
    {
        name: 'Export-Console',
        alias: [],
        description: 'Export console configuration to a file.',
    },
    // D
    {
        name: 'Get-Date',
        alias: [],
        description: 'Get current date and time.',
    },
    {
        name: 'Set-Date',
        alias: [],
        description: 'Set system time on the host system.',
    },
    {
        name: 'Clear-Disk',
        alias: [],
        description: 'Remove all partition information and un-initialize a disk, erasing all data.',
    },
    {
        name: 'Get-Disk',
        alias: [],
        description: 'Get one or more disks visible to the OS.',
    },
    {
        name: 'Set-Disk',
        alias: [],
        description: 'Set attributes and update a physical disk.',
    },
    {
        name: 'Initialize-Disk',
        alias: [],
        description: 'Initialize a RAW disk for first use, this enables formatting.',
    },
    {
        name: 'Mount-DiskImage',
        alias: [],
        description: 'Mount a previously created disk image (virtual HD or ISO)',
    },

    {
        name: 'Get-DnsClientCache',
        alias: [],
        description: 'Retrieve the content of the local DNS client cache.',
    },
    {
        name: 'Clear-DnsClientCache',
        alias: [],
        description: 'Clear the content of the DNS client cache.',
    },
    {
        name: 'Get-DnsClientServerAddress',
        alias: [],
        description: 'Get a DNS server IP address from the interface TCP/IP properties.',
    },
    {
        name: 'Set-DnsClientServerAddress',
        alias: [],
        description: 'Set a DNS server IP address on the interface TCP/IP properties.',
    },
    {
        name: 'Resolve-DnsName',
        alias: [],
        description: 'Perform a DNS name query resolution for a specified name.',
    },
    {
        name: 'Do',
        alias: [],
        description: 'Loop while a condition is True.',
    },
    {
        name: 'Get-DscConfiguration',
        alias: [],
        description: 'Get the current config. of a node.',
    },
    {
        name: 'Get-DscLocalConfigurationManager',
        alias: [],
        description: 'Get Local Config Manager settings.',
    },
    {
        name: 'Get-DscResource',
        alias: [],
        description: 'Get Desired State Config. resources from a computer.',
    },
    {
        name: 'New-DSCCheckSum',
        alias: [],
        description: 'Create checksum files for DSC docs/resources.',
    },
    {
        name: 'Start-DscConfiguration',
        alias: [],
        description: 'Apply Desired State config to nodes.',
    },
    // E
    {
        name: 'End',
        alias: [],
        description: 'Function END block.',
    },
    {
        name: 'Get-Event',
        alias: [],
        description: 'Get events in the PowerShell event queue.',
    },
    {
        name: 'New-Event',
        alias: [],
        description: 'Create a new event.',
    },
    {
        name: 'Remove-Event',
        alias: [],
        description: 'Delete events from the event queue.',
    },
    {
        name: 'Unregister-Event',
        alias: [],
        description: 'Cancel an event subscription.',
    },
    {
        name: 'Wait-Event',
        alias: [],
        description: 'Wait until a particular event is raised.',
    },
    {
        name: 'Clear-EventLog',
        alias: [],
        description: 'Delete all entries from an event log.',
    },
    {
        name: 'Get-EventLog',
        alias: [],
        description: 'Get event log data (2003).',
    },
    {
        name: 'Limit-EventLog',
        alias: [],
        description: 'Limit the size of the event log.',
    },
    {
        name: 'New-Eventlog',
        alias: [],
        description: 'Create a new event log and a new event source.',
    },
    {
        name: 'Remove-EventLog',
        alias: [],
        description: 'Delete an event log.',
    },
    {
        name: 'Show-EventLog',
        alias: [],
        description: 'Display an event log.',
    },
    {
        name: 'Write-EventLog',
        alias: [],
        description: 'Write an event to an event log.',
    },
    {
        name: 'Get-EventSubscriber',
        alias: [],
        description: 'Get event subscribers.',
    },
    {
        name: 'Register-EngineEvent',
        alias: [],
        description: 'Subscribe to PowerShell events.',
    },
    {
        name: 'Get-ExecutionPolicy',
        alias: [],
        description: 'Get ExecutionPolicy',
    },
    {
        name: 'Set-ExecutionPolicy',
        alias: [],
        description: 'Change the execution policy (user preference).',
    },
    {
        name: 'Invoke-Expression',
        alias: ['iex'],
        description: 'Run a PowerShell expression.',
    },
    {
        name: 'Exit',
        alias: ['exit'],
        description: 'Exit a script or exit PowerShell.',
    },
    // F
    {
        name: 'Unblock-File',
        alias: [],
        description: 'Unblock files downloaded from the Internet.',
    },
    {
        name: 'Get-FileHash',
        alias: [],
        description: 'Compute the hash value for a file.',
    },
    {
        name: 'ForEach',
        alias: [],
        description: 'Loop through each item in a collection.',
    },
    {
        name: 'For',
        alias: [],
        description: 'Loop through items that match a condition.',
    },
    {
        name: 'Export-FormatData',
        alias: [],
        description: 'Save formatting data from the current session.',
    },
    {
        name: 'Get-FormatData',
        alias: [],
        description: 'Get the formatting data in the current session.',
    },
    // G
    {
        name: 'Restore-GPO',
        alias: [],
        description: 'Restore one or all GPOs from a GPO backup.',
    },
    {
        name: 'Import-GPO',
        alias: [],
        description: 'Import Group Policy settings into a specified GPO from a GPO backup.',
    },
    {
        name: 'New-Guid',
        alias: [],
        description: 'Create a GUID.',
    },
    // H
    {
        name: 'Get-Help',
        alias: ['help'],
        description: 'Open the help file.',
    },
    {
        name: 'Update-Help',
        alias: [],
        description: 'Download and install the newest help files on your computer.',
    },
    {
        name: 'Add-History',
        alias: [],
        description: 'Add entries to the session history.',
    },
    {
        name: 'Clear-History',
        alias: ['clhy'],
        description: 'Delete entries from the session history.',
    },
    {
        name: 'Get-History',
        alias: ['history', 'h', 'ghy'],
        description: 'Get a listing of the session history.',
    },
    {
        name: 'Invoke-History',
        alias: ['r', 'ihy'],
        description: 'Invoke a previously executed Cmdlet.',
    },
    {
        name: 'Format-Hex',
        alias: ['fhx'],
        description: 'Display a file or other input as hexadecimal.',
    },
    {
        name: 'Get-Host',
        alias: [],
        description: 'Get host information (PowerShell Version and Region).',
    },
    {
        name: 'Clear-Host',
        alias: ['clear', 'cls'],
        description: 'Clear the screen.',
    },
    {
        name: 'Out-Host',
        alias: ['oh'],
        description: 'Send output to the host.',
    },
    {
        name: 'Read-Host',
        alias: [],
        description: 'Read a line of user input from the host console.',
    },
    {
        name: 'Write-Host',
        alias: [],
        description: 'Write customized output to the host/screen.',
    },
    {
        name: 'Get-HotFix',
        alias: [],
        description: 'Get Installed hotfixes.',
    },
    // I
    {
        name: 'if',
        alias: [],
        description: 'Conditionally perform a command.',
    },
    {
        name: 'Write-Information',
        alias: [],
        description: 'Specify how PowerShell should handle information stream data.',
    },
    {
        name: 'Get-InitiatorPort',
        alias: [],
        description: 'Get one or more host bus adapter (HBA) initiator ports.',
    },
    {
        name: 'Clear-Item',
        alias: ['cli'],
        description: 'Remove content from a variable or an alias.',
    },
    {
        name: 'Get-Item',
        alias: ['gi'],
        description: 'Get a file object or get a registry (or other namespace) object.',
    },
    {
        name: 'Invoke-Item',
        alias: ['ii'],
        description: 'Invoke an executable or open a file (START).',
    },
    {
        name: 'Copy-Item',
        alias: ['copy', 'cp', 'ci'],
        description: 'Copy an item from a namespace location.',
    },
    {
        name: 'New-Item',
        alias: ['md', 'mkdir', 'ni'],
        description: 'Create a new item in a namespace.',
    },
    {
        name: 'Set-Item',
        alias: ['si'],
        description: 'Change the value of an item.',
    },
    {
        name: 'Clear-ItemProperty',
        alias: ['clp'],
        description: "Remove the property value from a property.",
    },
    {
        name: 'Copy-ItemProperty',
        alias: ['ccp'],
        description: "Copy a property along with it's value.",
    },
    {
        name: 'Get-ItemProperty',
        alias: ['gp'],
        description: "Retrieve the properties of an object.",
    },
    {
        name: 'Move-ItemProperty',
        alias: ['mp'],
        description: 'Move a property from one location to another.',
    },
    {
        name: 'New-ItemProperty',
        alias: [],
        description: 'Set a new property.',
    },
    {
        name: 'Remove-ItemProperty',
        alias: ['rp'],
        description: 'Set a new property.',
    },

    {
        name: 'Set-ItemProperty',
        alias: ['sp'],
        description: 'Set a property at the specified location to a specified value.',
    },
    {
        name: 'Get-ItemPropertyValue',
        alias: ['gpv'],
        description: 'Set a property at the specified location to a specified value.',
    },
    // J
    {
        name: 'Get-Job',
        alias: ['gjb'],
        description: 'Get PowerShell background jobs that are running.',
    },
    {
        name: 'Receive-Job',
        alias: ['rcjb'],
        description: 'Get PowerShell background job results.',
    },
    {
        name: 'Remove-Job',
        alias: ['rjb'],
        description: 'Delete a PowerShell background job.',
    },
    {
        name: 'Resume-Job',
        alias: ['rujb'],
        description: 'Restart a suspended job.',
    },
    {
        name: 'Start-Job',
        alias: ['sajb'],
        description: 'Start a PowerShell background job.',
    },
    {
        name: 'Stop-Job',
        alias: ['spgb'],
        description: 'Stop a PowerShell background job.',
    },
    {
        name: 'Wait-Job',
        alias: ['wjb'],
        description: 'Wait for a background job.',
    },
    {
        name: 'cmdlets',
        alias: [],
        description: 'Get/Set Scheduled job triggers.',
    },
    // K
    {
        name: 'Add-KdsRootKey',
        alias: [''],
        description: 'Generate a new root key for the MS.Group KdsSvc within AD.',
    },
    // L
    {
        name: 'Format-List',
        alias: ['fl'],
        description: 'Format output as a list of properties, each on a new line.',
    },
    {
        name: 'Update-List',
        alias: [],
        description: 'Add a new local security group.',
    },
    {
        name: 'New-LocalGroup',
        alias: [''],
        description: 'Add a new local security group.',
    },
    {
        name: 'Get-LocalGroup',
        alias: [],
        description: 'Get the local security groups.',
    },
    {
        name: 'Remove-LocalGroup',
        alias: [],
        description: 'Remove a local security group.',
    },
    {
        name: 'Rename-LocalGroup',
        alias: [],
        description: 'Change a local security group.',
    },
    {
        name: 'Set-LocalGroup',
        alias: [],
        description: 'Change a local security group.',
    },
    {
        name: 'Add-LocalGroupMember',
        alias: [],
        description: 'Add members to a local group.',
    },
    {
        name: 'Get-LocalGroupMember',
        alias: [],
        description: 'Get members from a local group.',
    },
    {
        name: 'New-LocalUser',
        alias: [],
        description: 'Set the current working location from the stack.',
    },
    {
        name: 'Set-LocalUser',
        alias: [],
        description: 'Set the current working location from the stack.',
    },
    {
        name: 'Get-Location',
        alias: ['pwd', 'gl'],
        description: 'Set the current working location from the stack.',
    },
    {
        name: 'Pop-Location',
        alias: ['popd'],
        description: 'Set the current working location from the stack.',
    },
    {
        name: 'Push-Location',
        alias: ['pushd'],
        description: 'Push a location to the stack.',
    },
    {
        name: 'Set-Location',
        alias: ['cd', 'chdir', 'sl'],
        description: 'Set the current working location.',
    },
    // M
    {
        name: 'Get-NetAdapter',
        alias: [],
        description: 'Set the basic network adapter properties.',
    },
    {
        name: 'Set-NetAdapter',
        alias: [],
        description: 'Set the basic network adapter properties.',
    },
    {
        name: 'Disable-NetAdapterBinding',
        alias: [],
        description: 'Disable a binding to a network adapter.',
    },
    {
        name: 'Get-NetAdapterVmq',
        alias: [],
        description: 'Get the VMQ properties of a network adapter.',
    },
    {
        name: 'Set-NetAdapterVmq',
        alias: [],
        description: 'Set the VMQ properties of a network adapter.',
    },
    {
        name: 'Test-NetConnection',
        alias: [],
        description: 'Display diagnostic information for a connection.',
    },
    {
        name: 'Get-NetConnectionProfile',
        alias: [],
        description: 'Get a connection profile.',
    },
    {
        name: 'Set-NetConnectionProfile',
        alias: [],
        description: 'Set a connection profile.',
    },
    {
        name: 'Enable-NetFirewallRule',
        alias: [],
        description: 'Modify existing firewall rules.',
    },
    {
        name: 'Set-NetFirewallRule',
        alias: [],
        description: 'Modify existing firewall rules.',
    },
    {
        name: 'Get-NetFirewallRule',
        alias: [],
        description: 'Retrieve firewall rules from the target computer.',
    },
    {
        name: 'New-NetFirewallRule',
        alias: [],
        description: 'Create a new firewall rule and add to a target computer.',
    },
    {
        name: 'Get-NetIPAddress',
        alias: [],
        description: 'Get IP address configuration.',
    },
    {
        name: 'New-NetIPAddress',
        alias: [],
        description: 'Create and configure an IP address.',
    },
    {
        name: 'Remove-NetIPAddress',
        alias: [],
        description: 'Remove an IP address and its configuration.',
    },
    {
        name: 'Set-NetIPAddress',
        alias: [],
        description: 'Modify the configuration of an IP address.',
    },
    {
        name: 'Get-NetIPConfiguration',
        alias: [],
        description: 'Get IP network configuration.',
    },
    {
        name: 'Get-NetIPInterface',
        alias: [],
        description: 'Get an IP interface.',
    },
    {
        name: 'Set-NetIPInterface',
        alias: [],
        description: 'Create a new NIC team.',
    },
    {
        name: 'New-NetLbfoTeam',
        alias: [],
        description: 'Create a new NIC team.',
    },
    {
        name: 'New-NetNat',
        alias: [],
        description: 'Create a NAT object.',
    },
    {
        name: 'New-NetRoute',
        alias: [],
        description: 'Create a route in the IP routing table.',
    },
    {
        name: 'Get-NetTCPConnection',
        alias: [],
        description: 'Get TCP connections.',
    },
    {
        name: 'Set-NetTCPSetting',
        alias: [],
        description: 'Modify a TCP setting',
    },
    {
        name: 'Install-Module',
        alias: [],
        description: 'Download and install one or more modules from an online gallery.',
    },
    // O
    {
        name: 'ForEach-Object',
        alias: ['foreach'],
        description: 'Loop through each item in the pipeline (%).',
    },
    {
        name: 'Compare-Object',
        alias: ['diff', 'compare'],
        description: 'Compare the properties of objects.',
    },
    {
        name: 'Group-Object',
        alias: ['group'],
        description: 'Group objects that contain the same value.',
    },
    {
        name: 'Measure-Object',
        alias: [],
        description: 'Measure the properties of an object.',
    },
    {
        name: 'New-Object',
        alias: [],
        description: 'Create a new .Net object.',
    },
    {
        name: 'Select-Object',
        alias: ['select'],
        description: 'Select properties of objects.',
    },
    {
        name: 'Sort-Object',
        alias: ['sort'],
        description: 'Sort objects by property value.',
    },
    {
        name: 'Where-Object',
        alias: [],
        description: 'Filter the objects passed along the command pipeline.',
    },
    {
        name: 'Register-ObjectEvent',
        alias: [],
        description: 'Subscribe to .NET events.',
    },
    {
        name: 'Add-OdbcDsn',
        alias: [],
        description: 'Add an ODBC DSN.',
    },
    {
        name: 'Out-Default',
        alias: [],
        description: 'Set the destination of default output.',
    },
    {
        name: 'Out-File',
        alias: [],
        description: 'Set the destination of default output.',
    },
    {
        name: 'Out-GridView',
        alias: ['ogv'],
        description: 'Set the destination of default output.',
    },
    {
        name: 'Out-Host',
        alias: ['oh'],
        description: 'Send output to the host.',
    },
    {
        name: 'Out-Null',
        alias: [],
        description: 'Send output to null.',
    },
    {
        name: 'Out-Printer',
        alias: ['lp'],
        description: 'Send the output to a printer.',
    },
    {
        name: 'Out-String',
        alias: [],
        description: 'Send objects to the host as strings.',
    },
    // P
    {
        name: 'Get-Package',
        alias: [],
        description: 'Return a list of all software packages installed using Package Management.',
    },
    {
        name: 'Find-Package',
        alias: [],
        description: 'Find software packages in available package sources.',
    },
    {
        name: 'Install-Package',
        alias: [],
        description: 'Uninstall one or more software packages.',
    },
    {
        name: 'Uninstall-Package',
        alias: [],
        description: 'Uninstall one or more software packages.',
    },
    {
        name: 'Install-PackageProvider',
        alias: [],
        description: 'Install one or more Package Management package providers.',
    },
    {
        name: 'Param',
        alias: [],
        description: 'Script Parameters.',
    },
    {
        name: 'Get-Partition',
        alias: [],
        description: 'Return a list of partition objects.',
    },
    {
        name: 'New-Partition',
        alias: [],
        description: 'Create a new partition on an existing Disk object.',
    },
    {
        name: 'Resize-Partition',
        alias: [],
        description: 'Resize a partition and the underlying file system.',
    },
    {
        name: 'Set-Partition',
        alias: [],
        description: 'Set attributes of a partition: active, read-only, offline.',
    },
    {
        name: 'Convert-Path',
        alias: ['cvpa'],
        description: 'Convert a ps path to a provider path.',
    },
    {
        name: 'Join-Path',
        alias: [],
        description: 'Combine a path and one or more child-paths.',
    },
    {
        name: 'Resolve-Path',
        alias: ['rvpa'],
        description: 'Resolves the wildcards in a path.',
    },
    {
        name: 'Split-Path',
        alias: [],
        description: 'Return part of a path.',
    },
    {
        name: 'Test-Path',
        alias: [],
        description: 'Return true if the path exists, otherwise return false.',
    },
    {
        name: 'Pause',
        alias: [],
        description: 'Pause and display the message "Press Enter to continue..."',
    },
    {
        name: 'Invoke-Pester',
        alias: [],
        description: 'Get pfx certificate information.',
    },
    {
        name: 'Export-PfxCertificate',
        alias: [],
        description: 'Get pfx certificate information.',
    },
    {
        name: 'Get-PfxCertificate',
        alias: [],
        description: 'Get pfx certificate information.',
    },
    {
        name: 'Get-PhysicalDisk',
        alias: [],
        description: 'Set attributes on a specific physical disk.',
    },
    {
        name: 'Remove-PhysicalDisk',
        alias: [],
        description: 'Set attributes on a specific physical disk.',
    },
    {
        name: 'Set-PhysicalDisk',
        alias: [],
        description: 'Set attributes on a specific physical disk.',
    },
    {
        name: 'Get-PnpDevice',
        alias: [],
        description: 'Return information about PnP devices.',
    },
    {
        name: 'Powershell',
        alias: [],
        description: 'Launch a PowerShell session/run a script.',
    },
    {
        name: 'Add-Printer',
        alias: [],
        description: 'Add a printer to the specified computer.',
    },
    {
        name: 'Get-Printer',
        alias: [],
        description: 'Retrieve a list of printers installed on a computer.',
    },
    {
        name: 'Remove-Printer',
        alias: [],
        description: 'Remove a printer from the specified computer.',
    },
    {
        name: 'Set-Printer',
        alias: [],
        description: 'Update the configuration of an existing printer.',
    },
    {
        name: 'Add-PrinterDriver',
        alias: [],
        description: 'Install a printer driver on the computer.',
    },
    {
        name: 'Add-PrinterPort',
        alias: [],
        description: 'Install a printer port on the computer.',
    },
    {
        name: 'Get-PrintJob',
        alias: [],
        description: 'Retrieve a list of print jobs from the specified printer.',
    },
    {
        name: 'Process',
        alias: ['ps', 'gps'],
        description: 'Function PROCESS block.',
    },
    {
        name: 'Get-Process',
        alias: ['ps', 'gps'],
        description: 'Get a list of processes on a machine.',
    },
    {
        name: 'Debug-Process',
        alias: [],
        description: 'Attach a debugger to a running process.',
    },
    {
        name: 'Start-Process',
        alias: ['start', 'saps'],
        description: 'Start one or more processes.',
    },
    {
        name: 'Stop-Process',
        alias: ['kill', 'spps'],
        description: 'Stop a running process.',
    },
    {
        name: 'Wait-Process',
        alias: [],
        description: 'Wait for a process to stop.',
    },
    {
        name: 'Enable-PSBreakpoint',
        alias: ['ebp'],
        description: 'Enable a breakpoint in the current console.',
    },
    {
        name: 'Disable-PSBreakpoint',
        alias: ['dbp'],
        description: 'Disable a breakpoint in the current console.',
    },
    {
        name: 'Get-PSBreakpoint',
        alias: ['gbp'],
        description: 'Get the currently set breakpoints.',
    },
    {
        name: 'Set-PSBreakpoint',
        alias: ['sbp'],
        description: 'Set a breakpoint on a line, command, or variable.',
    },
    {
        name: 'Remove-PSBreakpoint',
        alias: ['rbp'],
        description: 'Delete breakpoints from the current console.',
    },
    {
        name: 'Get-PSCallStack',
        alias: ['gcs'],
        description: 'Display the current call stack.',
    },
    {
        name: 'Get-PSDrive',
        alias: ['gdr'],
        description: 'Get drive information (DriveInfo).',
    },
    {
        name: 'New-PSDrive',
        alias: ['mount', 'ndr'],
        description: 'Create a mapped network drive.',
    },
    {
        name: 'Remove-PSDrive',
        alias: ['rdr'],
        description: 'Remove a provider/drive from its location.',
    },
    {
        name: 'Get-PSProvider',
        alias: [],
        description: 'Get information for the specified provider.',
    },
    {
        name: 'Set-PSdebug',
        alias: [],
        description: 'Turn script debugging on or off.',
    },
    {
        name: 'Disable-PSRemoting',
        alias: [],
        description: 'Disable remote session configuration on the local computer.',
    },
    {
        name: 'Enable-PSRemoting',
        alias: [],
        description: 'Configure the computer to receive remote commands.',
    },
    {
        name: 'Get-PSRepository',
        alias: [],
        description: 'Get PowerShell repositories.',
    },
    {
        name: 'Register-PSRepository',
        alias: [],
        description: 'Register a PowerShell repository.',
    },
    {
        name: 'Set-PSRepository',
        alias: [],
        description: 'Set values for a registered repository.',
    },
    {
        name: 'Connect-PSSession',
        alias: ['cnsn'],
        description: 'Reconnect to a disconnected session.',
    },
    {
        name: 'Disconnect-PSSession',
        alias: ['dnsn'],
        description: 'Disconnect from a session.',
    },
    {
        name: 'Enter-PSSession',
        alias: ['etsn'],
        description: 'Start an interactive session with a remote computer.',
    },
    {
        name: 'Exit-PSSession',
        alias: ['exsn'],
        description: 'End an interactive session with a remote computer.',
    },
    {
        name: 'Export-PSSession',
        alias: ['epsn'],
        description: 'Import commands and save them in a PowerShell module.',
    },
    {
        name: 'Get-PSSession',
        alias: ['gsn'],
        description: 'Get the PSSessions in the current session.',
    },
    {
        name: 'Import-PSSession',
        alias: ['ipsn'],
        description: 'Import commands from another session.',
    },
    {
        name: 'New-PSSession',
        alias: ['nsn'],
        description: 'Close PowerShell sessions.',
    },
    {
        name: 'Remove-PSSession',
        alias: ['rsn'],
        description: 'Close PowerShell sessions.',
    },
    {
        name: 'Disable-PSSessionConfiguration',
        alias: [''],
        description: 'Enable session configurations on the local computer.',
    },
    {
        name: 'Enable-PSSessionConfiguration',
        alias: [],
        description: 'Enable session configurations on the local computer.',
    },
    {
        name: 'Get-PSSessionConfiguration',
        alias: [],
        description: 'Get the registered PS session configuration.',
    },
    {
        name: 'Register-PSSessionConfiguration',
        alias: [],
        description: 'Create and register a new PS session configuration.',
    },
    {
        name: 'Set-PSSessionConfiguration',
        alias: [],
        description: 'Change properties of a registered session configuration.',
    },
    {
        name: 'Unregister-PSSessionConfiguration',
        alias: [],
        description: 'Create a file that defines a session configuration.',
    },
    {
        name: 'New-PSSessionConfigurationFile',
        alias: [],
        description: 'Create a file that defines a session configuration.',
    },
    {
        name: 'New-PSSessionOption',
        alias: [],
        description: 'Advanced options for a PSSession.',
    },
    {
        name: 'Import-PfxCertificate',
        alias: [],
        description: 'Import certificates and keys from a Personal Information Exchange(PFX) file.',
    },
    {
        name: 'Add-PsSnapIn',
        alias: ['asnp'],
        description: 'Add snap-ins to the console.',
    },
    {
        name: 'Get-PsSnapin',
        alias: ['gsnp'],
        description: 'List PowerShell snap-ins on this computer.',
    },
    {
        name: 'Remove-PSSnapin',
        alias: ['rsnp'],
        description: 'Remove PowerShell snap-ins from the console.',
    },
    // R
    {
        name: 'Get-Random',
        alias: [],
        description: 'Get a random number.',
    },
    {
        name: 'Remove-Item',
        alias: ['rm', 'del', 'erase', 'rd', 'ri', 'rmdir'],
        description: 'Remove an item.',
    },
    {
        name: 'Rename-Item',
        alias: ['ren', 'rni'],
        description: 'Change the name of an existing item.',
    },
    {
        name: 'Rename-ItemProperty',
        alias: [],
        description: 'Rename a property of an item.',
    },
    {
        name: 'Return',
        alias: [],
        description: 'Exit the current scope, (function, script, or script block).',
    },
    {
        name: 'Run/Call',
        alias: ['&'],
        description: 'Run a command (call operator).',
    },
    {
        name: 'Invoke-RestMethod',
        alias: [],
        description: 'Send an HTTP or HTTPS request to a RESTful web service.',
    },
    // S
    {
        name: 'Confirm-SecureBootUEFI',
        alias: [],
        description: 'Confirm that Secure Boot is enabled on the local computer.',
    },
    {
        name: 'Select-XML',
        alias: [],
        description: 'Send an email message.',
    },
    {
        name: 'Get-Service',
        alias: ['gsv'],
        description: 'Get a list of services.',
    },
    {
        name: 'New-Service',
        alias: [],
        description: 'Create a new service.',
    },
    {
        name: 'Restart-Service',
        alias: [],
        description: 'Stop and then restart a service.',
    },
    {
        name: 'Resume-Service',
        alias: [],
        description: 'Resume a suspended service.',
    },
    {
        name: 'Set-Service',
        alias: [],
        description: 'Change the start mode/properties of a service.',
    },
    {
        name: 'Start-Service',
        alias: ['sasv'],
        description: 'Start a stopped service.',
    },
    {
        name: 'Stop-Service',
        alias: ['spsv'],
        description: 'Stop a running service.',
    },
    {
        name: 'Suspend-Service',
        alias: [],
        description: 'Suspend a running service.',
    },
    {
        name: 'ConvertFrom-String',
        alias: ['cfs'],
        description: 'Extract and parse structured properties from a string.',
    },
    {
        name: 'ConvertFrom-StringData',
        alias: [],
        description: 'Convert a string containing key and value pairs into a hash table.',
    },
    {
        name: 'ConvertFrom-SecureString',
        alias: [],
        description: 'Convert a secure string into an encrypted standard string.',
    },
    {
        name: 'ConvertTo-SecureString',
        alias: [],
        description: 'Convert an encrypted standard string into a secure string.',
    },
    {
        name: 'Get-SmbConnection',
        alias: [],
        description: 'Retrieve the connections established from the SMB client to the SMB servers.',
    },
    {
        name: 'Get-SmbOpenFile',
        alias: [],
        description: 'Information about files that are open on behalf of SMB server clients.',
    },
    {
        name: 'Get-SMBMapping',
        alias: [],
        description: 'Get an SMB mapping.',
    },
    {
        name: 'New-SmbMapping',
        alias: [],
        description: 'Create an SMB mapping.',
    },
    {
        name: 'Remove-SmbMapping',
        alias: [],
        description: 'Remove an SMB mapping.',
    },
    {
        name: 'Get-SmbSession',
        alias: [],
        description: 'Retrieve information about current SMB sessions.',
    },
    {
        name: 'Set-SmbClientConfiguration',
        alias: [],
        description: 'Get the SMB Server configuration.',
    },
    {
        name: 'Get-SmbClientConfiguration',
        alias: [],
        description: 'Get the SMB Server configuration.',
    },
    {
        name: 'Set-SmbServerConfiguration',
        alias: [],
        description: 'Set the SMB Server configuration.',
    },
    {
        name: 'Get-SmbShare',
        alias: [],
        description: 'Retrieve the SMB shares on the computer.',
    },
    {
        name: 'Set-SmbShare',
        alias: [],
        description: 'Modify the properties of an SMB share.',
    },
    {
        name: 'New-SmbShare',
        alias: [],
        description: 'Create an SMB share.',
    },
    {
        name: 'Get-SmbShareAccess',
        alias: [],
        description: 'Add an allow ACE for a trustee to the security descriptor of the SMB share.',
    },
    {
        name: 'Grant-SmbShareAccess',
        alias: [],
        description: 'Get the names and IDs of apps installed on the Start Menu.',
    },
    {
        name: 'Set-StrictMode',
        alias: [],
        description: 'Get the names and IDs of apps installed on the Start Menu.',
    },
    {
        name: 'Get-StartApps',
        alias: [],
        description: 'Suspend shell, script, or runspace activity.',
    },
    {
        name: 'Export-StartLayout',
        alias: [],
        description: 'Suspend shell, script, or runspace activity.',
    },
    {
        name: 'Import-StartLayout',
        alias: [],
        description: 'Suspend shell, script, or runspace activity.',
    },
    {
        name: 'Start-Sleep',
        alias: ['sleep'],
        description: 'Information about long-running Storage module jobs, such as a repair task.',
    },
    {
        name: 'Get-StorageJob',
        alias: [],
        description: '',
    },
    {
        name: 'New-StoragePool',
        alias: [],
        description: 'Create a new storage pool using a group of physical disks.',
    },
    {
        name: 'Switch',
        alias: [],
        description: 'Check multiple conditions.',
    },
    {
        name: 'Select-String',
        alias: [],
        description: 'Search through strings or files for patterns.',
    },
    // T
    {
        name: 'Format-Table',
        alias: ['ft'],
        description: 'Format output as a table.',
    },
    {
        name: 'Tee-Object',
        alias: ['tee'],
        description: 'Send input objects to two places.',
    },
    {
        name: 'New-Timespan',
        alias: [],
        description: 'Create a timespan object.',
    },
    {
        name: 'Get-TimeZone',
        alias: ['gtz'],
        description: 'Get the current time zone or a list of available time zones.',
    },
    {
        name: 'Set-TimeZone',
        alias: ['stz'],
        description: 'Set the system time zone to a specified time zone.',
    },
    {
        name: 'Get-TlsCipherSuite',
        alias: [],
        description: 'Get the list of cipher suites for TLS for a computer.',
    },
    {
        name: 'Get-Tpm',
        alias: [],
        description: 'Trusted Platform Module (TPM).',
    },
    {
        name: 'Trace-Command',
        alias: [],
        description: 'Trace an expression or command.',
    },
    {
        name: 'Get-Tracesource',
        alias: [],
        description: 'Get components that are instrumented for tracing.',
    },
    {
        name: 'Set-Tracesource',
        alias: [],
        description: 'Trace a PowerShell component.',
    },
    {
        name: 'Start-Transaction',
        alias: [],
        description: 'Start a new transaction.',
    },
    {
        name: 'Complete-Transaction',
        alias: [],
        description: 'Commit the transaction.',
    },
    {
        name: 'Get-Transaction',
        alias: [],
        description: 'Get information about the active transaction.',
    },
    {
        name: 'Use-Transaction',
        alias: [],
        description: 'Roll back a transaction.',
    },
    {
        name: 'Undo-Transaction',
        alias: [],
        description: 'Roll back a transaction.',
    },
    {
        name: 'Start-Transcript',
        alias: [],
        description: 'Start a transcript of a command shell session.',
    },
    {
        name: 'Stop-Transcript',
        alias: [],
        description: 'Stop the transcription process.',
    },
    {
        name: 'Trap',
        alias: [],
        description: 'Handle a terminating error within a scriptblock.',
    },
    {
        name: 'Try & Catch',
        alias: [],
        description: 'Handle a terminating error within a scriptblock.',
    },
    {
        name: 'Add-Type',
        alias: [],
        description: 'Add a .NET Framework type to a PowerShell session.',
    },
    // U
    {
        name: 'Get-Uiculture',
        alias: [],
        description: 'Get the ui culture information.',
    },
    {
        name: 'Get-Unique',
        alias: ['gu'],
        description: 'Get the unique items in a collection.',
    },
    {
        name: 'Update-Formatdata',
        alias: [],
        description: 'Update and append format data files.',
    },
    {
        name: 'Update-Typedata',
        alias: [],
        description: 'Update the current extended type configuration.',
    },
    // V
    {
        name: 'Clear-Variable',
        alias: ['clv'],
        description: 'Remove the value from a variable.',
    },
    {
        name: 'Get-Variable',
        alias: ['gv'],
        description: 'Get a PowerShell variable.',
    },
    {
        name: 'New-Variable',
        alias: ['nv'],
        description: 'Create a new variable.',
    },
    {
        name: 'Remove-Variable',
        alias: ['rv'],
        description: 'Remove a variable and its value.',
    },
    {
        name: 'Set-Variable',
        alias: [],
        description: 'Set a variable and a value.',
    },
    {
        name: 'Get-VirtualDisk',
        alias: [],
        description: 'Return a list of VirtualDisks across storage pools/providers.',
    },
    {
        name: 'New-VirtualDisk',
        alias: [],
        description: 'Create a new virtual disk in the specified storage pool.',
    },
    {
        name: 'Get-Volume',
        alias: [],
        description: 'Get the specified Volume object, or all Volume objects.',
    },
    {
        name: 'Format-Volume',
        alias: [],
        description: 'Format one or more volumes.',
    },
    {
        name: 'New-Volume',
        alias: [],
        description: 'Create a volume with the specified file system.',
    },
    {
        name: 'Optimize-Volume',
        alias: [],
        description: 'Optimize a volume.',
    },
    {
        name: 'Repair-Volume',
        alias: [],
        description: 'Perform repairs on a volume.',
    },
    {
        name: 'Add-VpnConnection',
        alias: [],
        description: 'Retrieve the specified VPN connection profile information.',
    },
    {
        name: 'Get-VpnConnection',
        alias: [],
        description: 'Add a VPN connection to the Connection Manager phone book.',
    },
    {
        name: 'Set-VpnConnection',
        alias: [],
        description: 'Add a route to a VPN connection.',
    },
    {
        name: 'Add-VpnConnectionRoute',
        alias: [],
        description: 'Add a route to a VPN connection.',
    },
    // W
    {
        name: 'Checkpoint-WebApplicationMonitoring',
        alias: [],
        description: 'Create a checkpoint for an IIS web app.',
    },
    {
        name: 'Get-WebApplicationMonitoringStatus',
        alias: [],
        description: 'Get the monitoring status of web apps.',
    },
    {
        name: 'New-WebServiceProxy',
        alias: [],
        description: 'Create a Web service proxy object.',
    },
    {
        name: 'Invoke-WebRequest',
        alias: [],
        description: 'Filter objects from a collection.',
    },
    {
        name: 'Format-Wide',
        alias: ['fw'],
        description: 'Format output as a table listing one property only.',
    },
    {
        name: 'Where',
        alias: [],
        description: 'Filter objects from a collection.',
    },
    {
        name: 'While',
        alias: [],
        description: 'Loop while a condition is True.',
    },
    {
        name: 'Add-WindowsCapability',
        alias: [],
        description: 'Install a Windows capability package on the specified OS image.',
    },
    {
        name: 'Get-WindowsCapability',
        alias: [],
        description: 'Get capabilities for an image or a running OS.',
    },
    {
        name: 'Remove-WindowsCapability',
        alias: [],
        description: 'Retrieve roles, role services, and features.',
    },
    {
        name: 'Export-WindowsDriver',
        alias: [],
        description: 'Export Windows Driver',
    },
    {
        name: 'Add-WindowsFeature',
        alias: [],
        description: 'Retrieve roles, role services, and features.',
    },
    {
        name: 'Get-WindowsFeature',
        alias: [],
        description: 'Retrieve roles, role services, and features.',
    },
    {
        name: 'Install-WindowsFeature',
        alias: [],
        description: 'Install roles, role services, or features (Server 2012 R2).',
    },
    {
        name: 'Uninstall-WindowsFeature',
        alias: [],
        description: 'Mount a Windows image (WIM or VHD file) to a directory on the local computer.',
    },
    {
        name: 'Mount-WindowsImage',
        alias: [],
        description: 'Mount a Windows image (WIM or VHD file) to a directory on the local computer.',
    },
    {
        name: 'Repair-WindowsImage',
        alias: [],
        description: 'Repair a Windows image in a WIM or VHD file.',
    },
    {
        name: 'Disable-WindowsOptionalFeature',
        alias: [],
        description: 'Disable a feature in a Windows image.',
    },
    {
        name: 'Enable-WindowsOptionalFeature',
        alias: [],
        description: 'Enable a feature in a Windows image.',
    },
    {
        name: 'Get-WindowsOptionalFeature',
        alias: [],
        description: 'Get information about optional features in a Windows image.',
    },
    {
        name: 'Add-WindowsPackage',
        alias: [],
        description: 'Add a single .cab or .msu file to a Windows image.',
    },
    {
        name: 'Get-WindowsUpdateLog',
        alias: [],
        description: 'Merge Windows Update .etl files into a single log file.',
    },
    {
        name: 'Set-WinSystemLocale',
        alias: [],
        description: 'Set the system locale for the current computer.',
    },
    {
        name: 'Set-WinUserLanguageList',
        alias: [],
        description: 'Set the language list/properties for the current user.',
    },
    {
        name: 'Write-Debug',
        alias: [],
        description: 'Display management information (XML or value).',
    },
    {
        name: 'Write-Error',
        alias: [],
        description: 'Write an object to the error pipeline (2).',
    },
    {
        name: 'Write-Output',
        alias: ['write', 'echo'],
        description: 'Write an object to the pipeline (1).',
    },
    {
        name: 'Write-Progress',
        alias: [],
        description: 'Display a progress bar.',
    },
    {
        name: 'Write-Verbose',
        alias: [],
        description: "Write a string to the host's verbose display (4).",
    },
    {
        name: 'Write-Warning',
        alias: [],
        description: 'Create or update an instance of an existing WMI class.',
    },
    {
        name: 'Set-WmiInstance',
        alias: [],
        description: 'Create or update an instance of an existing WMI class.',
    },
    {
        name: 'Invoke-WmiMethod',
        alias: ['iwmi'],
        description: 'Call WMI methods.',
    },
    {
        name: 'Get-WmiObject',
        alias: ['gwmi'],
        description: 'Get WMI class information.',
    },
    {
        name: 'Register-WmiEvent',
        alias: [],
        description: 'Subscribe to a WMI event.',
    },
    {
        name: 'Remove-WmiObject',
        alias: ['rwmi'],
        description: 'Delete an instance of a WMI class.',
    },
    {
        name: 'Connect-WSMan',
        alias: [],
        description: 'Connect to the WinRM service on a remote computer.',
    },
    {
        name: 'Disconnect-WSMan',
        alias: [],
        description: 'Disconnect from the WinRM service on a remote computer.',
    },
    {
        name: 'Test-WSMan',
        alias: [],
        description: 'Test if a computer is setup to receive remote commands.',
    },
    {
        name: 'Invoke-WSManAction',
        alias: [],
        description: 'Invoke an action on a specified object.',
    },
    {
        name: 'Disable-WSManCredSSP',
        alias: [],
        description: 'Disable Credential Security Service Provider (SSP) authentication.',
    },
    {
        name: 'Enable-WSManCredSSP',
        alias: [],
        description: 'Enable Credential SSP authentication.',
    },
    {
        name: 'Get-WSManCredSSP',
        alias: [],
        description: 'Create a new instance of a management resource.',
    },
    {
        name: 'New-WSManInstance',
        alias: [],
        description: 'Create a new instance of a management resource.',
    },
    {
        name: 'Get-WSManInstance',
        alias: [],
        description: 'Display management information (XML or value).',
    },
    {
        name: 'Set-WSManInstance',
        alias: [],
        description: 'Modify the management information related to a resource.',
    },
    {
        name: 'Remove-WSManInstance',
        alias: [],
        description: 'Configure the local computer for remote management.',
    },
    {
        name: 'Set-WSManQuickConfig',
        alias: [],
        description: 'Configure the local computer for remote management.',
    },
    {
        name: 'New-WSManSessionOption',
        alias: [],
        description: 'Options for WSMan commands.',
    },
    // Z
    {
        name: 'zipfile',
        alias: [],
        description: 'Compress or Extract zip files.',
    },
    {
        name: '#',
        alias: [],
        description: 'Comment / Remark.',
    },
    {
        name: '. (source)',
        alias: [],
        description: 'Run a command script in the current shell.',
    },
    {
        name: '& (call)',
        alias: [],
        description: 'Run a command, script or function.',
    },
    {
        name: '%',
        alias: [],
        description: 'Alias for ForEach-Object.',
    },
    {
        name: '--%',
        alias: [],
        description: 'Stop parsing input.',
    },
    {
        name: '?',
        alias: [],
        description: 'Alias for Where-Object.',
    },
    {
        name: '$variable = "value"',
        alias: [],
        description: 'Define a variable  also: ${n!a#me} = "value".',
    },
    {
        name: '$_',
        alias: [],
        description: 'The current pipeline object.',
    },
    {
        name: '$(...)',
        alias: [],
        description: 'Force an expression to be evaluated as an array.',
    },
]