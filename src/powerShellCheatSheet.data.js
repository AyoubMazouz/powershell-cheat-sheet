export const data = [
    {
        name: 'ForEach-Object',
        alias: ['%'],
        description: '',
        index: ''
    },
    {
        name: 'Where-Object',
        alias: ['?'],
        description: '',
        index: ''
    },
    // A
    {
        name: 'Get-Acl',
        alias: [],
        description: 'Get permission settings for a file or registry key.',
        index: 'a'
    },
    {
        name: 'Set-Acl',
        alias: [],
        description: 'Set permissions.',
        index: 'a'
    },
    {
        name: 'Get-alias',
        alias: ['gal'],
        description: 'Return alias names for cmdlets.',
        index: 'a'
    },
    {
        name: 'Export-alias',
        alias: ['epal'],
        description: 'Export currently defined aliases to a file.',
        index: 'a'
    },
    {
        name: 'Import-alias',
        alias: ['ipal'],
        description: 'Import an alias list from a file.',
        index: 'a'
    },
    {
        name: 'Import-alias',
        alias: ['nal'],
        description: 'Create a new alias.',
        index: 'a'
    },
    {
        name: 'Set-alias',
        alias: ['sal'],
        description: 'Create or change an alias.',
        index: 'a'
    },
    {
        name: 'Get-AppvClientPackage',
        alias: [],
        description: 'Return App-V Client Packages.',
        index: 'a'
    },
    {
        name: 'Get-AppxPackage',
        alias: [],
        description: 'List the app packages installed in a user profile.',
        index: 'a'
    },
    {
        name: 'Remove-AppxPackage ',
        alias: [],
        description: 'Remove an app package from a user account.',
        index: 'a'
    },
    {
        name: 'Add-AppxProvisionedPackage',
        alias: [],
        description: '',
        index: 'a'
    },
    {
        name: 'Compress-Archive',
        alias: [],
        description: 'Create a new archive/zipped file. [PS 5+]',
        index: 'a'
    },
    {
        name: 'Expand-Archive',
        alias: [],
        description: 'Extract files from an archive (zipped) file [PS 5+]',
        index: 'a'
    },
    {
        name: 'Get-AuthenticodeSignature',
        alias: [],
        description: 'Get the signature object associated with a file.',
        index: 'a'
    },
    {
        name: 'Set-AuthenticodeSignature',
        alias: [],
        description: 'Place a signature in a .ps1 script or other file.',
        index: 'a'
    },
    // B
    {
        name: 'Backup-GPO ',
        alias: [],
        description: 'Backup group policy objects. (GPOs)',
        index: 'b'
    },
    {
        name: 'Begin',
        alias: [],
        description: 'Function BEGIN block.',
        index: 'b'
    },
    {
        name: 'BITS',
        alias: [],
        description: 'Function BEGIN block.',
        index: 'b'
    },
    {
        name: 'Enable-BitLocker',
        alias: [],
        description: 'Enable encryption for a BitLocker volume.',
        index: 'b'
    },
    {
        name: 'Enable-BitLockerAutoUnlock',
        alias: [],
        description: 'Enable automatic unlocking for a BitLocker volume.',
        index: 'b'
    },
    {
        name: 'Resume-Bitlocker',
        alias: [],
        description: 'Resume Bitlocker encryption for the specified volume.',
        index: 'b'
    },
    {
        name: 'Suspend-BitLocker ',
        alias: [],
        description: 'Suspend Bitlocker encryption for the specified volume.',
        index: 'b'
    },
    {
        name: 'Add-BitLockerKeyProtector',
        alias: [],
        description: 'Add a key protector for a BitLocker volume.',
        index: 'b'
    },
    {
        name: 'Remove-BitLockerKeyProtector',
        alias: [],
        description: 'Remove a key protector from a BitLocker volume.',
        index: 'b'
    },
    {
        name: 'Get-BitLockerVolume',
        alias: [],
        description: 'Get information about volumes BitLocker can protect.',
        index: 'b'
    },
    {
        name: 'Break',
        alias: [],
        description: 'Exit a program loop.',
        index: 'b'
    },
    // C
    {
        name: 'Catch',
        alias: [],
        description: 'Handle a terminating error within a scriptblock.',
        index: 'c'
    },
    {
        name: 'Export-Certificate',
        alias: [],
        description: 'Export a certificate from a certificate store into a file.',
        index: 'c'
    },
    {
        name: 'Get-Certificate',
        alias: [],
        description: 'Submit/retrieve a certificate request to an enrollment server and install.',
        index: 'c'
    },
    {
        name: 'Import-Certificate',
        alias: [],
        description: 'Submit/retrieve a certificate request to an enrollment server and install.',
        index: 'c'
    },
    {
        name: 'Set-Location',
        alias: ['cd', 'chdir', 'sl'],
        description: 'Set the current working location.',  
        index: 'c'
    },
    {
        name: 'Get-ChildItem',
        alias: ['dir', 'ls', 'gci'],
        description: 'Get child items (contents of a folder or registry key).',
        index: 'c'
    },
    {
        name: 'Clear-Host',
        alias: ['clear', 'cls'],
        description: 'Clear the screen.',
        index: 'c'
    },
    {
        name: 'Clear-Item',
        alias: ['cli'],
        description: 'Remove content from a variable or an alias.',
        index: 'c'
    },
    {
        name: 'Get-CimAssociatedInstance',
        alias: [],
        description: 'Retrieve CIM instance by an association.',
        index: 'c'
    },
    {
        name: 'Get-CimClass',
        alias: ['gcls'],
        description: 'Get a list of CIM classes in a specific namespace.',
        index: 'c'
    },
    {
        name: 'Register-CimIndicationEvent',
        alias: [],
        description: 'Subscribe to indications using a filter or query expression.',
        index: 'c'
    },
    {
        name: 'New-CimInstance',
        alias: ['ncim'],
        description: 'Create a new instance of a class.',
        index: 'c'
    },
    {
        name: 'Get-CimInstance',
        alias: ['gcim'],
        description: 'Get a managed resource (storage, network, software etc).',
        index: 'c'
    },
    {
        name: 'Remove-CimInstance',
        alias: ['rcim'],
        description: 'Remove a CIM instance from a computer.',
        index: 'c'
    },
    {
        name: 'Set-CimInstance',
        alias: ['scim'],
        description: 'Modify a CIM instance on a CIM server.',
        index: 'c'
    },
    {
        name: 'Invoke-CimMethod',
        alias: ['icim'],
        description: 'Invoke a method of a CIM class or CIM instance.',
        index: 'c'
    },
    {
        name: 'Get-CimSession',
        alias: ['gcms'],
        description: 'Get current CIM session objects.',
        index: 'c'
    },
    {
        name: 'New-CimSession',
        alias: ['ncms'],
        description: 'Create a CIM session.',
        index: 'c'
    },
    {
        name: 'New-CimSessionOption',
        alias: [],
        description: 'Advanced options for New-CimSession.',
        index: 'c'
    },
    {
        name: 'Remove-CimSession',
        alias: ['rcms'],
        description: 'Remove one or more CIM session objects.',
        index: 'c'
    },
    {
        name: 'Get-Clipboard',
        alias: [],
        description: 'Get the current Windows clipboard entry.',
        index: 'c'
    },
    {
        name: 'Set-Clipboard',
        alias: [],
        description: 'Set the current Windows clipboard entry.',
        index: 'c'
    },
    {
        name: 'Get-Command',
        alias: ['gcm'],
        description: 'Retrieve basic information about a command.',
        index: 'c'
    },
    {
        name: 'Invoke-Command',
        alias: ['icm'],
        description: 'Run command.',
        index: 'c'
    },
    {
        name: 'Show-Command',
        alias: ['shcm'],
        description: 'Create PowerShell commands in a graphical command window.',
        index: 'c'
    },
    {
        name: 'Measure-Command',
        alias: [],
        description: 'Measure running time.',
        index: 'c'
    },
    {
        name: 'Trace-Command',
        alias: [],
        description: 'Trace an expression or command.',
        index: 'c'
    },
    {
        name: 'Add-Computer',
        alias: [],
        description: 'Add a computer to the domain.',
        index: 'c'
    },
    {
        name: 'Checkpoint-Computer',
        alias: [],
        description: 'Create a system restore point (XP)',
        index: 'c'
    },
    {
        name: 'Remove-Computer',
        alias: [],
        description: 'Remove the local computer from a workgroup or domain.',
        index: 'c'
    },
    {
        name: 'Rename-Computer',
        alias: [],
        description: 'Rename a computer.',
        index: 'c'
    },
    {
        name: 'Restart-Computer',
        alias: [],
        description: 'Restart the operating system on a computer.',
        index: 'c'
    },
    {
        name: 'Restore-Computer',
        alias: [],
        description: 'Restore the computer to a previous state.',
        index: 'c'
    },
    {
        name: 'Stop-Computer',
        alias: [],
        description: 'Stop (shut down) a computer.',
        index: 'c'
    },
    {
        name: 'Get-ComputerInfo',
        alias: [],
        description: 'Get system and operating system properties.',
        index: 'c'
    },
    {
        name: 'Reset-ComputerMachinePassword',
        alias: [],
        description: 'Reset the machine account password for the computer.',
        index: 'c'
    },
    {
        name: 'Test-ComputerSecureChannel',
        alias: [],
        description: 'Test and repair the secure channel to the domain.',
        index: 'c'
    },
    {
        name: 'Add-Content',
        alias: ['ac'],
        description: 'Add to the content of the item.',
        index: 'c'
    },
    {
        name: 'Get-Content',
        alias: ['cat', 'type', 'gc'],
        description: 'Get content from item (specific location).',
        index: 'c'
    },
    {
        name: 'Set-Content',
        alias: ['sc'],
        description: 'Set content in the item (specific location).',
        index: 'c'
    },
    {
        name: 'Clear-Content',
        alias: ['clc'],
        description: 'Remove content from a file/item.',
        index: 'c'
    },
    {
        name: 'Continue',
        alias: [],
        description: 'Skip just this iteration of a loop.',
        index: 'c'
    },
    {
        name: 'Enable-ComputerRestore',
        alias: [],
        description: 'Enable System Restore on a drive.',
        index: 'c'
    },
    {
        name: 'Disable-ComputerRestore',
        alias: [],
        description: 'Disable System Restore on a drive.',
        index: 'c'
    },
    {
        name: 'Get-ComputerRestorePoint',
        alias: [],
        description: 'Get the restore points on the local computer.',
        index: 'c'
    },
    {
        name: 'Test-Connection',
        alias: [],
        description: 'Ping one or more computers.',
        index: 'c'
    },
    {
        name: 'ConvertFrom-CSV',
        alias: [],
        description: 'Convert object properties (in CSV format) into CSV objects.',
        index: 'c'
    },
    {
        name: 'ConvertTo-CSV',
        alias: [],
        description: 'Convert a JSON-formatted string to a custom object.',
        index: 'c'
    },
    {
        name: 'ConvertFrom-Json',
        alias: [],
        description: 'Convert a JSON-formatted string to a custom object.',
        index: 'c'
    },
    {
        name: 'ConvertTo-Json',
        alias: [],
        description: 'Convert an object to a JSON-formatted string.',
        index: 'c'
    },
    {
        name: 'ConvertTo-Html',
        alias: [],
        description: 'Convert the input into an HTML table.',
        index: 'c'
    },
    {
        name: 'ConvertTo-Xml',
        alias: [],
        description: 'Convert the input into XML.',
        index: 'c'
    },
    {
        name: 'ConvertFrom-String',
        alias: ['cfs'],
        description: 'Extract and parse structured properties from a string.',
        index: 'c'
    },
    {
        name: 'ConvertFrom-StringData',
        alias: [],
        description: 'Convert a string containing key and value pairs into a hash table.',
        index: 'c'
    },
    {
        name: 'ConvertFrom-SecureString',
        alias: [],
        description: 'Convert a secure string into an encrypted standard string.',
        index: 'c'
    },
    {
        name: 'ConvertTo-SecureString',
        alias: [],
        description: 'Convert an encrypted standard string into a secure string.',
        index: 'c'
    },
    {
        name: 'Copy-Item',
        alias: ['copy', 'cp', 'ci'],
        description: 'Copy an item from a namespace location.',
        index: 'c'
    },
    {
        name: 'Export-Counter',
        alias: [],
        description: 'Export Performance Counter data to log files.',
        index: 'c'
    },
    {
        name: 'Get-Counter',
        alias: [],
        description: 'Get performance counter data.',
        index: 'c'
    },
    {
        name: 'Import-Counter',
        alias: [],
        description: 'Import performance counter log files.',
        index: 'c'
    },
    {
        name: 'Get-Credential',
        alias: [],
        description: 'Get a security credential (username/password).',
        index: 'c'
    },
    {
        name: 'Get-Culture',
        alias: [],
        description: 'Get region information (language and keyboard layout).',
        index: 'c'
    },
    {
        name: 'Set-Culture',
        alias: [],
        description: 'Set the user culture for the current user account.',
        index: 'c'
    },
    // D
    {
        name: 'Get-ChildItem',
        alias: ['dir', 'ls', 'gci'],
        description: 'Get child items (contents of a folder or registry key).',
        index: 'd'
    },
    {
        name: 'Get-Date',
        alias: [],
        description: 'Get current date and time.',
        index: 'd'
    },
    {
        name: 'Set-Date',
        alias: [],
        description: 'Set system time on the host system.',
        index: 'd'
    },
    {
        name: 'Clear-Disk',
        alias: [],
        description: 'Remove all partition information and un-initialize a disk, erasing all data.',
        index: 'd'
    },
    {
        name: 'Get-Disk',
        alias: [],
        description: 'Get one or more disks visible to the OS.',
        index: 'd'
    },
    {
        name: 'Set-Disk',
        alias: [],
        description: 'Set attributes and update a physical disk.',
        index: 'd'
    },
    {
        name: 'Initialize-Disk',
        alias: [],
        description: 'Initialize a RAW disk for first use, this enables formatting.',
        index: 'd'
    },
    {
        name: 'Mount-DiskImage',
        alias: [],
        description: 'Mount a previously created disk image (virtual HD or ISO)',
        index: 'd'
    },
    {
        name: 'Remove-Item',
        alias: ['del', 'erase', 'rd', 'rm', 'rmdir'],
        description: 'Delete an item.',
        index: 'd'
    },
    {
        name: 'Compare-Object',
        alias: ['diff', 'compare'],
        description: 'Compare the properties of objects.',
        index: 'd'
    },
    {
        name: 'Get-DnsClientCache',
        alias: [],
        description: 'Retrieve the content of the local DNS client cache.',
        index: 'd'
    },
    {
        name: 'Clear-DnsClientCache',
        alias: [],
        description: 'Clear the content of the DNS client cache.',
        index: 'd'
    },
    {
        name: 'Get-DnsClientServerAddress',
        alias: [],
        description: 'Get a DNS server IP address from the interface TCP/IP properties.',
        index: 'd'
    },
    {
        name: 'Set-DnsClientServerAddress',
        alias: [],
        description: 'Set a DNS server IP address on the interface TCP/IP properties.',
        index: 'd'
    },
    {
        name: 'Resolve-DnsName',
        alias: [],
        description: 'Perform a DNS name query resolution for a specified name.',
        index: 'd'
    },
    {
        name: 'Do',
        alias: [],
        description: 'Loop while a condition is True.',
        index: 'd'
    },
    {
        name: 'Get-DscConfiguration',
        alias: [],
        description: 'Get the current config. of a node.',
        index: 'd'
    },
    {
        name: 'Get-DscLocalConfigurationManager',
        alias: [],
        description: 'Get Local Config Manager settings.',
        index: 'd'
    },
    {
        name: 'Get-DscResource',
        alias: [],
        description: 'Get Desired State Config. resources from a computer.',
        index: 'd'
    },
    {
        name: 'New-DSCCheckSum',
        alias: [],
        description: 'Create checksum files for DSC docs/resources.',
        index: 'd'
    },
    {
        name: 'Start-DscConfiguration',
        alias: [],
        description: 'Apply Desired State config to nodes.',
        index: 'd'
    },
    // E
    {
        name: 'Write-Output',
        alias: ['echo'],
        description: 'Write an object to the pipeline.',
        index: 'e'
    },
    {
        name: 'End',
        alias: [],
        description: 'Function END block.',
        index: 'e'
    },
    {
        name: 'Get-Event',
        alias: [],
        description: 'Get events in the PowerShell event queue.',
        index: 'e'
    },
    {
        name: 'New-Event',
        alias: [],
        description: 'Create a new event.',
        index: 'e'
    },
    {
        name: 'Remove-Event',
        alias: [],
        description: 'Delete events from the event queue.',
        index: 'e'
    },
    {
        name: 'Unregister-Event',
        alias: [],
        description: 'Cancel an event subscription.',
        index: 'e'
    },
    {
        name: 'Wait-Event',
        alias: [],
        description: 'Wait until a particular event is raised.',
        index: 'e'
    },
    {
        name: 'Clear-EventLog',
        alias: [],
        description: 'Delete all entries from an event log.',
        index: 'e'
    },
    {
        name: 'Get-EventLog',
        alias: [],
        description: 'Get event log data (2003).',
        index: 'e'
    },
    {
        name: 'Limit-EventLog',
        alias: [],
        description: 'Limit the size of the event log.',
        index: 'e'
    },
    {
        name: 'New-Eventlog',
        alias: [],
        description: 'Create a new event log and a new event source.',
        index: 'e'
    },
    {
        name: 'Remove-EventLog',
        alias: [],
        description: 'Delete an event log.',
        index: 'e'
    },
    {
        name: 'Show-EventLog',
        alias: [],
        description: 'Display an event log.',
        index: 'e'
    },
    {
        name: 'Show-EventLog',
        alias: [],
        description: 'Write an event to an event log.',
        index: 'e'
    },
    {
        name: 'Write-EventLog',
        alias: [],
        description: 'Get event log data (Vista+).',
        index: 'e'
    },
    {
        name: 'Write-EventLog',
        alias: [],
        description: '',
        index: 'e'
    },
    {
        name: 'Get-EventSubscriber',
        alias: [],
        description: 'Get event subscribers.',
        index: 'e'
    },
    {
        name: 'Register-EngineEvent',
        alias: [],
        description: 'Subscribe to PowerShell events.',
        index: 'e'
    },
    {
        name: 'Register-ObjectEvent',
        alias: [],
        description: 'Subscribe to .NET events.',
        index: 'e'
    },
    {
        name: 'Register-WmiEvent',
        alias: [],
        description: 'Subscribe to a WMI event.',
        index: 'e'
    },
    {
        name: 'Get-ExecutionPolicy',
        alias: [],
        description: 'Get-ExecutionPolicy',
        index: 'e'
    },
    {
        name: 'Register-ObjectEvent',
        alias: [],
        description: 'Change the execution policy (user preference).',
        index: 'e'
    },
    {
        name: 'Set-ExecutionPolicy',
        alias: [],
        description: 'Change the execution policy (user preference).',
        index: 'e'
    },
    {
        name: 'Export-alias',
        alias: ['epal'],
        description: 'Produce a clixml representation of PowerShell objects.',
        index: 'e'
    },
    {
        name: 'Export-Console',
        alias: [],
        description: 'Export console configuration to a file.',
        index: 'e'
    },
    {
        name: 'Export-Csv',
        alias: ['epcsv'],
        description: 'Export to Comma Separated Values (spreadsheet).',
        index: 'e'
    },
    {
        name: 'Exit-PSSession',
        alias: ['exsn'],
        description: 'Exit a PowerShell session.',
        index: 'e'
    },
    {
        name: 'Exit',
        alias: ['exit'],
        description: 'Exit a script or exit PowerShell.',
        index: 'e'
    },
]