export const data = [
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
    // F
    {
        name: 'Unblock-File',
        alias: [],
        description: 'Unblock files downloaded from the Internet.',
        index: 'f'
    },
    {
        name: 'Get-FileHash',
        alias: [],
        description: 'Compute the hash value for a file.',
        index: 'f'
    },
    {
        name: 'ForEach-Object',
        alias: ['foreach'],
        description: 'Loop through each item in the pipeline (%).',
        index: 'f'
    },
    {
        name: 'ForEach',
        alias: [],
        description: 'Loop through each item in a collection.',
        index: 'f'
    },
    {
        name: 'For',
        alias: [],
        description: 'Loop through items that match a condition.',
        index: 'f'
    },
    {
        name: 'Format-Custom',
        alias: ['fc'],
        description: 'Format output using a customized view.',
        index: 'f'
    },
    {
        name: 'Format-Hex',
        alias: ['fhx'],
        description: 'Display a file or other input as hexadecimal.',
        index: 'f'
    },
    {
        name: 'Format-Hex',
        alias: ['fl'],
        description: 'Format output as a list of properties, each on a new line.',
        index: 'f'
    },
    {
        name: 'Format-Table',
        alias: ['ft'],
        description: 'Format output as a table.',
        index: 'f'
    },
    {
        name: 'Format-Wide',
        alias: ['fw'],
        description: 'Format output as a table listing one property only.',
        index: 'f'
    },
    {
        name: 'Export-FormatData',
        alias: [],
        description: 'Save formatting data from the current session.',
        index: 'f'
    },
    {
        name: 'Get-FormatData',
        alias: [],
        description: 'Get the formatting data in the current session.',
        index: 'f'
    },
    // G
    {
        name: 'Get-Item',
        alias: ['gi'],
        description: 'Get a file/registry object (or any other namespace object).',
        index: 'g'
    },
    {
        name: 'Get-ChildItem',
        alias: ['dir', 'ls', 'gci'],
        description: 'Get child items (contents of a folder or registry key).',
        index: 'g'
    },
    {
        name: 'Backup-GPO',
        alias: [],
        description: 'Backup group policy objects (GPOs).',
        index: 'g'
    },
    {
        name: 'Restore-GPO',
        alias: [],
        description: 'Restore one or all GPOs from a GPO backup.',
        index: 'g'
    },
    {
        name: 'Import-GPO',
        alias: [],
        description: 'Import Group Policy settings into a specified GPO from a GPO backup.',
        index: 'g'
    },
    {
        name: 'Group-Object',
        alias: ['group'],
        description: 'Group objects that contain the same value.',
        index: 'g'
    },
    {
        name: 'New-Guid',
        alias: [],
        description: 'Create a GUID.',
        index: 'g'
    },
    // H
    {
        name: 'Get-Help',
        alias: ['help'],
        description: 'Open the help file.',
        index: 'g'
    },
    {
        name: 'Update-Help',
        alias: [],
        description: 'Download and install the newest help files on your computer.',
        index: 'h'
    },
    {
        name: 'Add-History',
        alias: [],
        description: 'Add entries to the session history.',
        index: 'h'
    },
    {
        name: 'Clear-History',
        alias: ['clhy'],
        description: 'Delete entries from the session history.',
        index: 'h'
    },
    {
        name: 'Get-History',
        alias: ['history', 'h', 'ghy'],
        description: 'Get a listing of the session history.',
        index: 'h'
    },
    {
        name: 'Invoke-History',
        alias: ['r', 'ihy'],
        description: 'Invoke a previously executed Cmdlet.',
        index: 'h'
    },
    {
        name: 'Get-Host',
        alias: [],
        description: 'Get host information (PowerShell Version and Region).',
        index: 'h'
    },
    {
        name: 'Clear-Host',
        alias: ['clear', 'cls'],
        description: 'Clear the screen.',
        index: 'h'
    },
    {
        name: 'Out-Host',
        alias: ['oh'],
        description: 'Send output to the host.',
        index: 'h'
    },
    {
        name: 'Read-Host',
        alias: [],
        description: 'Read a line of user input from the host console.',
        index: 'h'
    },
    {
        name: 'Read-Host',
        alias: [],
        description: 'Write customized output to the host/screen.',
        index: 'h'
    },
    {
        name: 'Get-HotFix',
        alias: [],
        description: 'Get Installed hotfixes.',
        index: 'h'
    },
    // I
    {
        name: 'if',
        alias: [],
        description: 'Conditionally perform a command.',
        index: 'i'
    },
    {
        name: 'Invoke-CimMethod',
        alias: ['icim'],
        description: 'Invoke a method of a CIM class or CIM instance.',
        index: 'i'
    },
    {
        name: 'Import-Clixml',
        alias: [],
        description: 'Import a clixml file and rebuild the PS object.',
        index: 'i'
    },
    {
        name: 'Import-Csv',
        alias: ['ipcsv'],
        description: 'Take values from a CSV list and send objects down the pipeline.',
        index: 'i'
    },
    {
        name: 'Import-PfxCertificate',
        alias: [],
        description: 'Import certificates and keys from a Personal Information Exchange(PFX) file.',
        index: 'i'
    },
    {
        name: 'Write-Information',
        alias: [],
        description: 'Specify how PowerShell should handle information stream data.',
        index: 'i'
    },
    {
        name: 'Get-InitiatorPort',
        alias: [],
        description: 'Get one or more host bus adapter (HBA) initiator ports.',
        index: 'i'
    },
    {
        name: 'Install-Module',
        alias: [],
        description: 'Download and install one or more modules from an online gallery.',
        index: 'i'
    },
    {
        name: 'Install-Package',
        alias: [],
        description: 'Download and install one or more modules from an online gallery.',
        index: 'i'
    },
    {
        name: 'Invoke-Command',
        alias: [],
        description: 'Run commands on local and remote computers.',
        index: 'i'
    },
    {
        name: 'Invoke-Expression',
        alias: ['iex'],
        description: 'Run a PowerShell expression.',
        index: 'i'
    },
    {
        name: 'Invoke-WebRequest',
        alias: [],
        description: 'Get content from a web page.',
        index: 'i'
    },
    {
        name: 'Invoke-RestMethod',
        alias: [],
        description: 'Send an HTTP or HTTPS request to a RESTful web service.',
        index: 'i'
    },
    {
        name: 'Get-NetIPAddress',
        alias: [],
        description: 'Get IPAddress configuration.',
        index: 'i'
    },
    {
        name: 'Get-Item',
        alias: ['gi'],
        description: 'Get a file object or get a registry (or other namespace) object.',
        index: 'i'
    },
    {
        name: 'New-Item',
        alias: ['ii'],
        description: 'Invoke an executable or open a file (START).',
        index: 'i'
    },
    {
        name: 'New-Item',
        alias: ['md', 'mkdir', 'ni'],
        description: 'Create a new item in a namespace.',
        index: 'i'
    },
    {
        name: 'Remove-Item',
        alias: ['rm', 'del', 'erase', 'rd', 'ri', 'rmdir'],
        description: 'Remove an item.',
        index: 'i'
    },
    {
        name: 'Set-Item',
        alias: ['si'],
        description: 'Change the value of an item.',
        index: 'i'
    },
    {
        name: 'Get-ItemProperty',
        alias: ['clp'],
        description: 'Change the value of an item.',
        index: 'i'
    },
    {
        name: 'Get-ItemProperty',
        alias: ['ccp'],
        description: "Copy a property along with it's value.",
        index: 'i'
    },
    {
        name: 'Get-ItemProperty',
        alias: ['gp'],
        description: "Retrieve the properties of an object.",
        index: 'i'
    },
    {
        name: 'Move-ItemProperty',
        alias: ['mp'],
        description: 'Move a property from one location to another.',
        index: 'i'
    },
    {
        name: 'New-ItemProperty',
        alias: [],
        description: 'Set a new property.',
        index: 'i'
    },
    {
        name: 'Remove-ItemProperty',
        alias: ['rp'],
        description: 'Set a new property.',
        index: 'i'
    },
    {
        name: 'Rename-ItemProperty',
        alias: ['rnp'],
        description: 'Renames a property at its location.',
        index: 'i'
    },
    {
        name: 'Set-ItemProperty',
        alias: ['sp'],
        description: 'Set a property at the specified location to a specified value.',
        index: 'i'
    },
    {
        name: 'Get-ItemPropertyValue',
        alias: ['gpv'],
        description: 'Set a property at the specified location to a specified value.',
        index: 'i'
    },
    // J
    {
        name: 'Get-Job',
        alias: ['gjb'],
        description: 'Get PowerShell background jobs that are running.',
        index: 'j'
    },
    {
        name: 'Receive-Job',
        alias: ['rcjb'],
        description: 'Get PowerShell background job results.',
        index: 'j'
    },
    {
        name: 'Remove-Job',
        alias: ['rjb'],
        description: 'Delete a PowerShell background job.',
        index: 'j'
    },
    {
        name: 'Resume-Job',
        alias: ['rujb'],
        description: 'Restart a suspended job.',
        index: 'i'
    },
    {
        name: 'Start-Job',
        alias: ['sajb'],
        description: 'Start a PowerShell background job.',
        index: 'i'
    },
    {
        name: 'Stop-Job',
        alias: ['spgb'],
        description: 'Stop a PowerShell background job.',
        index: 'i'
    },
    {
        name: 'Wait-Job',
        alias: ['wjb'],
        description: 'Wait for a background job.',
        index: 'i'
    },
    {
        name: 'Job Trigger cmdlets',
        alias: [],
        description: 'Get/Set Scheduled job triggers.',
        index: 'i'
    },
    // K
    {
        name: 'Stop-Process',
        alias: ['kill', 'spps'],
        description: 'Stop a running process.',
        index: 'k'
    },
    {
        name: 'Add-KdsRootKey',
        alias: [''],
        description: 'Generate a new root key for the MS.Group KdsSvc within AD.',
        index: 'k'
    },
    // L
    {
        name: 'Update-List',
        alias: [],
        description: 'Add a new local security group.',
        index: 'l'
    },
    {
        name: 'New-LocalGroup',
        alias: [''],
        description: 'Add a new local security group.',
        index: 'l'
    },
    {
        name: 'Get-LocalGroup',
        alias: [],
        description: 'Get the local security groups.',
        index: 'l'
    },
    {
        name: 'Remove-LocalGroup',
        alias: [],
        description: 'Remove a local security group.',
        index: 'l'
    },
    {
        name: 'Rename-LocalGroup',
        alias: [],
        description: 'Change a local security group.',
        index: 'l'
    },
    {
        name: 'Set-LocalGroup',
        alias: [],
        description: 'Change a local security group.',
        index: 'l'
    },
    {
        name: 'Add-LocalGroupMember',
        alias: [],
        description: 'Add members to a local group.',
        index: 'l'
    },
    {
        name: 'Get-LocalGroupMember',
        alias: [],
        description: 'Get members from a local group.',
        index: 'l'
    },
    {
        name: 'New-LocalUser',
        alias: [],
        description: 'Set the current working location from the stack.',
        index: 'l'
    },
    {
        name: 'Set-LocalUser',
        alias: [],
        description: 'Set the current working location from the stack.',
        index: 'l'
    },
    {
        name: 'Get-Location',
        alias: ['pwd', 'gl'],
        description: 'Set the current working location from the stack.',
        index: 'l'
    },
    {
        name: 'Pop-Location',
        alias: ['popd'],
        description: 'Set the current working location from the stack.',
        index: 'l'
    },
    {
        name: 'Push-Location',
        alias: ['pushd'],
        description: 'Push a location to the stack.',
        index: 'l'
    },
    {
        name: 'Set-Location',
        alias: ['cd', 'chdir', 'sl'],
        description: 'Set the current working location.',
        index: 'l'
    },
    // M
    {
        name: 'Get-NetAdapter',
        alias: [],
        description: 'Set the basic network adapter properties.',
        index: 'm'
    },
    {
        name: 'Set-NetAdapter',
        alias: [],
        description: 'Set the basic network adapter properties.',
        index: 'm'
    },
    {
        name: 'Disable-NetAdapterBinding',
        alias: [],
        description: 'Disable a binding to a network adapter.',
        index: 'm'
    },
    {
        name: 'Get-NetAdapterVmq',
        alias: [],
        description: 'Get the VMQ properties of a network adapter.',
        index: 'm'
    },
    {
        name: 'Set-NetAdapterVmq',
        alias: [],
        description: 'Set the VMQ properties of a network adapter.',
        index: 'm'
    },
    {
        name: 'Test-NetConnection',
        alias: [],
        description: 'Display diagnostic information for a connection.',
        index: 'm'
    },
    {
        name: 'Get-NetConnectionProfile',
        alias: [],
        description: 'Get a connection profile.',
        index: 'm'
    },
    {
        name: 'Set-NetConnectionProfile',
        alias: [],
        description: 'Set a connection profile.',
        index: 'm'
    },
    {
        name: 'Set-NetConnectionProfile',
        alias: [],
        description: 'Configure per-profile settings of Windows Firewall.',
        index: 'm'
    },
    {
        name: 'Enable-NetFirewallRule',
        alias: [],
        description: 'Modify existing firewall rules.',
        index: 'm'
    },
    {
        name: 'Set-NetFirewallRule',
        alias: [],
        description: 'Modify existing firewall rules.',
        index: 'm'
    },
    {
        name: 'Get-NetFirewallRule',
        alias: [],
        description: 'Retrieve firewall rules from the target computer.',
        index: 'm'
    },
    {
        name: 'Get-NetFirewallRule',
        alias: [],
        description: 'Create a new firewall rule and add to a target computer.',
        index: 'm'
    },
    {
        name: 'Get-NetIPAddress',
        alias: [],
        description: 'Get IP address configuration.',
        index: 'm'
    },
    {
        name: 'New-NetIPAddress',
        alias: [],
        description: 'Create and configure an IP address.',
        index: 'm'
    },
    {
        name: 'Remove-NetIPAddress',
        alias: [],
        description: 'Remove an IP address and its configuration.',
        index: 'm'
    },
    {
        name: 'Set-NetIPAddress',
        alias: [],
        description: 'Modify the configuration of an IP address.',
        index: 'm'
    },
    {
        name: 'Get-NetIPConfiguration',
        alias: [],
        description: 'Get IP network configuration.',
        index: 'm'
    },
    {
        name: 'Get-NetIPInterface',
        alias: [],
        description: 'Get an IP interface.',
        index: 'm'
    },
    {
        name: 'Get-NetIPInterface',
        alias: [],
        description: 'Create a new NIC team.',
        index: 'm'
    },
    {
        name: 'New-NetLbfoTeam',
        alias: [],
        description: 'Create a new NIC team.',
        index: 'm'
    },
    {
        name: 'New-NetNat',
        alias: [],
        description: 'Create a NAT object.',
        index: 'm'
    },
    {
        name: 'New-NetRoute',
        alias: [],
        description: 'Get TCP connections.',
        index: 'm'
    },
    {
        name: 'New-NetRoute',
        alias: [],
        description: 'Get TCP connections.',
        index: 'm'
    },
    {
        name: 'Set-NetTCPSetting',
        alias: [],
        description: 'Modify a TCP setting',
        index: 'm'
    },
    // O
    {
        name: 'Compare-Object',
        alias: ['diff', 'compare'],
        description: 'Compare the properties of objects.',
        index: 'o'
    },
    {
        name: 'Group-Object',
        alias: ['group'],
        description: 'Group objects that contain the same value.',
        index: 'o'
    },
    {
        name: 'Measure-Object',
        alias: [],
        description: 'Measure the properties of an object.',
        index: 'o'
    },
    {
        name: 'New-Object',
        alias: [],
        description: 'Create a new .Net object.',
        index: 'o'
    },
    {
        name: 'Select-Object',
        alias: ['select'],
        description: 'Select properties of objects.',
        index: 'o'
    },
    {
        name: 'Sort-Object',
        alias: ['sort'],
        description: 'Sort objects by property value.',
        index: 'o'
    },
    {
        name: 'Where-Object',
        alias: [],
        description: 'Filter the objects passed along the command pipeline.',
        index: 'o'
    },
    {
        name: 'Add-OdbcDsn',
        alias: [],
        description: 'Add an ODBC DSN.',
        index: 'o'
    },
    {
        name: 'Out-Default',
        alias: [],
        description: 'Set the destination of default output.',
        index: 'o'
    },
    {
        name: 'Out-File',
        alias: [],
        description: 'Set the destination of default output.',
        index: 'o'
    },
    {
        name: 'Out-GridView',
        alias: ['ogv'],
        description: 'Set the destination of default output.',
        index: 'o'
    },
    {
        name: 'Out-Host',
        alias: ['oh'],
        description: 'Send output to the host.',
        index: 'o'
    },
    {
        name: 'Out-Null',
        alias: [],
        description: 'Send output to null.',
        index: 'o'
    },
    {
        name: 'Out-Printer',
        alias: ['lp'],
        description: 'Send the output to a printer.',
        index: 'o'
    },
    {
        name: 'Out-String',
        alias: [],
        description: 'Send objects to the host as strings.',
        index: 'o'
    },
    // P
    {
        name: 'Get-Package',
        alias: [],
        description: 'Return a list of all software packages installed using Package Management.',
        index: 'p'
    },
    {
        name: 'Find-Package',
        alias: [],
        description: 'Find software packages in available package sources.',
        index: 'p'
    },
    {
        name: 'Install-Package',
        alias: [],
        description: 'Uninstall one or more software packages.',
        index: 'p'
    },
    {
        name: 'Uninstall-Package',
        alias: [],
        description: 'Uninstall one or more software packages.',
        index: 'p'
    },
    {
        name: 'Install-PackageProvider',
        alias: [],
        description: 'Install one or more Package Management package providers.',
        index: 'p'
    },
    {
        name: 'Param ',
        alias: [],
        description: 'Script Parameters.',
        index: 'p'
    },
    {
        name: 'Get-Partition',
        alias: [],
        description: 'Return a list of partition objects.',
        index: 'p'
    },
    {
        name: 'New-Partition',
        alias: [],
        description: 'Create a new partition on an existing Disk object.',
        index: 'p'
    },
    {
        name: 'Resize-Partition',
        alias: [],
        description: 'Resize a partition and the underlying file system.',
        index: 'p'
    },
    {
        name: 'Set-Partition',
        alias: [],
        description: 'Set attributes of a partition: active, read-only, offline.',
        index: 'p'
    },
    {
        name: 'Convert-Path',
        alias: ['cvpa'],
        description: 'Convert a ps path to a provider path.',
        index: 'p'
    },
    {
        name: 'Join-Path',
        alias: [],
        description: 'Combine a path and one or more child-paths.',
        index: 'p'
    },
    {
        name: 'Resolve-Path',
        alias: ['rvpa'],
        description: 'Resolves the wildcards in a path.',
        index: 'p'
    },
    {
        name: 'Split-Path',
        alias: [],
        description: 'Return part of a path.',
        index: 'p'
    },
    {
        name: 'Test-Path',
        alias: [],
        description: 'Return true if the path exists, otherwise return false.',
        index: 'p'
    },
    {
        name: 'Pause',
        alias: [],
        description: 'Pause and display the message "Press Enter to continue..."',
        index: 'p'
    },
    {
        name: 'Invoke-Pester',
        alias: [],
        description: 'Get pfx certificate information.',
        index: 'p'
    },
    {
        name: 'Export-PfxCertificate',
        alias: [],
        description: 'Get pfx certificate information.',
        index: 'p'
    },
    {
        name: 'Get-PfxCertificate',
        alias: [],
        description: 'Get pfx certificate information.',
        index: 'p'
    },
    {
        name: 'Get-PhysicalDisk',
        alias: [],
        description: 'Set attributes on a specific physical disk.',
        index: 'p'
    },
    {
        name: 'Remove-PhysicalDisk',
        alias: [],
        description: 'Set attributes on a specific physical disk.',
        index: 'p'
    },
    {
        name: 'Set-PhysicalDisk',
        alias: [],
        description: 'Set attributes on a specific physical disk.',
        index: 'p'
    },
    {
        name: 'Get-PnpDevice',
        alias: [],
        description: 'Return information about PnP devices.',
        index: 'p'
    },
    {
        name: 'Pop-Location',
        alias: ['popd'],
        description: 'Set the current working location from the stack.',
        index: 'p'
    },
    {
        name: 'Push-Location',
        alias: ['pushd'],
        description: 'Push a location to the stack.',
        index: 'p'
    },
    {
        name: 'Powershell',
        alias: [],
        description: 'Launch a PowerShell session/run a script.',
        index: 'p'
    },
    {
        name: 'Add-Printer',
        alias: [],
        description: 'Add a printer to the specified computer.',
        index: 'p'
    },
    {
        name: 'Get-Printer',
        alias: [],
        description: 'Retrieve a list of printers installed on a computer.',
        index: 'p'
    },
    {
        name: 'Remove-Printer',
        alias: [],
        description: 'Remove a printer from the specified computer.',
        index: 'p'
    },
    {
        name: 'Set-Printer',
        alias: [],
        description: 'Update the configuration of an existing printer.',
        index: 'p'
    },
    {
        name: 'Add-PrinterDriver',
        alias: [],
        description: 'Install a printer driver on the computer.',
        index: 'p'
    },
    {
        name: 'Add-PrinterPort',
        alias: [],
        description: 'Install a printer port on the computer.',
        index: 'p'
    },
    {
        name: 'Get-PrintJob',
        alias: [],
        description: 'Retrieve a list of print jobs from the specified printer.',
        index: 'p'
    },
    {
        name: 'Process',
        alias: ['ps', 'gps'],
        description: 'Function PROCESS block.',
        index: 'p'
    },
    {
        name: 'Get-Process',
        alias: ['ps', 'gps'],
        description: 'Get a list of processes on a machine.',
        index: 'p'
    },
    {
        name: 'Debug-Process',
        alias: [],
        description: 'Attach a debugger to a running process.',
        index: 'p'
    },
    {
        name: 'Start-Process',
        alias: ['start', 'saps'],
        description: 'Start one or more processes.',
        index: 'p'
    },
    {
        name: 'Stop-Process',
        alias: ['kill', 'spps'],
        description: 'Stop a running process.',
        index: 'p'
    },
    {
        name: 'Wait-Process',
        alias: [],
        description: 'Wait for a process to stop.',
        index: 'p'
    },
    {
        name: 'Enable-PSBreakpoint',
        alias: ['ebp'],
        description: 'Enable a breakpoint in the current console.',
        index: 'p'
    },
    {
        name: 'Disable-PSBreakpoint',
        alias: ['dbp'],
        description: 'Disable a breakpoint in the current console.',
        index: 'p'
    },
    {
        name: 'Get-PSBreakpoint',
        alias: ['gbp'],
        description: 'Get the currently set breakpoints.',
        index: 'p'
    },
    {
        name: 'Set-PSBreakpoint',
        alias: ['sbp'],
        description: 'Set a breakpoint on a line, command, or variable.',
        index: 'p'
    },
    {
        name: 'Remove-PSBreakpoint',
        alias: ['rbp'],
        description: 'Delete breakpoints from the current console.',
        index: 'p'
    },
    {
        name: 'Get-PSCallStack',
        alias: ['gcs'],
        description: 'Display the current call stack.',
        index: 'p'
    },
    {
        name: 'Get-PSDrive',
        alias: ['gdr'],
        description: 'Get drive information (DriveInfo).',
        index: 'p'
    },
    {
        name: 'New-PSDrive',
        alias: ['mount', 'ndr'],
        description: 'Create a mapped network drive.',
        index: 'p'
    },
    {
        name: 'Remove-PSDrive',
        alias: ['rdr'],
        description: 'Remove a provider/drive from its location.',
        index: 'p'
    },
    {
        name: 'Get-PSProvider',
        alias: [],
        description: 'Get information for the specified provider.',
        index: 'p'
    },
    {
        name: 'Set-PSdebug',
        alias: [],
        description: 'Turn script debugging on or off.',
        index: 'p'
    },
    {
        name: 'Disable-PSRemoting',
        alias: [],
        description: 'Disable remote session configuration on the local computer.',
        index: 'p'
    },
    {
        name: 'Enable-PSRemoting',
        alias: [],
        description: 'Configure the computer to receive remote commands.',
        index: 'p'
    },
    {
        name: 'Get-PSRepository',
        alias: [],
        description: 'Get PowerShell repositories.',
        index: 'p'
    },
    {
        name: 'Register-PSRepository',
        alias: [],
        description: 'Register a PowerShell repository.',
        index: 'p'
    },
    {
        name: 'Set-PSRepository',
        alias: [],
        description: 'Set values for a registered repository.',
        index: 'p'
    },
    {
        name: 'Connect-PSSession',
        alias: ['cnsn'],
        description: 'Reconnect to a disconnected session.',
        index: 'p'
    },
    {
        name: 'Disconnect-PSSession',
        alias: ['dnsn'],
        description: 'Disconnect from a session.',
        index: 'p'
    },
    {
        name: 'Enter-PSSession',
        alias: ['etsn'],
        description: 'Start an interactive session with a remote computer.',
        index: 'p'
    },
    {
        name: 'Exit-PSSession',
        alias: ['exsn'],
        description: 'End an interactive session with a remote computer.',
        index: 'p'
    },
    {
        name: 'Export-PSSession',
        alias: ['epsn'],
        description: 'Import commands and save them in a PowerShell module.',
        index: 'p'
    },
    {
        name: 'Get-PSSession',
        alias: ['gsn'],
        description: 'Get the PSSessions in the current session.',
        index: 'p'
    },
    {
        name: 'Import-PSSession',
        alias: ['ipsn'],
        description: 'Import commands from another session.',
        index: 'p'
    },
    {
        name: 'New-PSSession',
        alias: ['nsn'],
        description: 'Close PowerShell sessions.',
        index: 'p'
    },
    {
        name: 'Remove-PSSession',
        alias: ['rsn'],
        description: 'Close PowerShell sessions.',
        index: 'p'
    },
    {
        name: 'Disable-PSSessionConfiguration',
        alias: [''],
        description: 'Enable session configurations on the local computer.',
        index: 'p'
    },
    {
        name: 'Enable-PSSessionConfiguration',
        alias: [],
        description: 'Enable session configurations on the local computer.',
        index: 'p'
    },
    {
        name: 'Enable-PSSessionConfiguration',
        alias: [],
        description: 'Get the registered PS session configuration.',
        index: 'p'
    },
    {
        name: 'Enable-PSSessionConfiguration',
        alias: [],
        description: 'Create and register a new PS session configuration.',
        index: 'p'
    },
    {
        name: 'Enable-PSSessionConfiguration',
        alias: [],
        description: 'Change properties of a registered session configuration.',
        index: 'p'
    },
    {
        name: 'Unregister-PSSessionConfiguration',
        alias: [],
        description: 'Create a file that defines a session configuration.',
        index: 'p'
    },
    {
        name: 'New-PSSessionConfigurationFile',
        alias: [],
        description: 'Create a file that defines a session configuration.',
        index: 'p'
    },
    {
        name: 'New-PSSessionOption',
        alias: [],
        description: 'Advanced options for a PSSession.',
        index: 'p'
    },
    {
        name: 'Add-PsSnapIn',
        alias: ['asnp'],
        description: 'Add snap-ins to the console.',
        index: 'p'
    },
    {
        name: 'Get-PsSnapin',
        alias: ['gsnp'],
        description: 'List PowerShell snap-ins on this computer.',
        index: 'p'
    },
    {
        name: 'Get-PsSnapin',
        alias: ['rsnp'],
        description: 'Remove PowerShell snap-ins from the console.',
        index: 'p'
    },
    // R
    {
        name: 'Get-Random',
        alias: [],
        description: 'Get a random number.',
        index: 'r'
    },
    {
        name: 'Read-Host',
        alias: [],
        description: 'Read a line of input from the host console.',
        index: 'r'
    },
    {
        name: 'Remove-Item',
        alias: ['rm', 'del', 'erase', 'rd', 'ri', 'rmdir'],
        description: 'Remove an item.',
        index: 'r'
    },
    {
        name: 'Rename-Item',
        alias: ['ren', 'rni'],
        description: 'Change the name of an existing item.',
        index: 'r'
    },
    {
        name: 'Rename-ItemProperty',
        alias: [],
        description: 'Rename a property of an item.',
        index: 'r'
    },
    {
        name: 'Restart-Computer',
        alias: [],
        description: 'Restart the operating system on a computer.',
        index: 'r'
    },
    {
        name: 'Return',
        alias: [],
        description: 'Exit the current scope, (function, script, or script block).',
        index: 'r'
    },
    {
        name: 'Run/Call',
        alias: ['&'],
        description: 'Run a command (call operator).',
        index: 'r'
    },
    // S
    {
        name: 'Scheduler cmdlets',
        alias: [],
        description: 'Get/Set scheduled jobs.',
        index: 's'
    },
    {
        name: 'Confirm-SecureBootUEFI',
        alias: [],
        description: 'Confirm that Secure Boot is enabled on the local computer.',
        index: 's'
    },
    {
        name: 'Select-Object',
        alias: ['select'],
        description: 'Select properties of objects.',
        index: 's'
    },
    {
        name: 'Select-XML',
        alias: [],
        description: 'Send an email message.',
        index: 's'
    },
    {
        name: 'Get-Service',
        alias: ['gsv'],
        description: 'Get a list of services.',
        index: 's'
    },
    {
        name: 'New-Service',
        alias: [],
        description: 'Create a new service.',
        index: 's'
    },
    {
        name: 'Restart-Service',
        alias: [],
        description: 'Stop and then restart a service.',
        index: 's'
    },
    {
        name: 'Resume-Service',
        alias: [],
        description: 'Resume a suspended service.',
        index: 's'
    },
    {
        name: 'Set-Service',
        alias: [],
        description: 'Change the start mode/properties of a service.',
        index: 's'
    },
    {
        name: 'Start-Service',
        alias: ['sasv'],
        description: 'Start a stopped service.',
        index: 's'
    },
    {
        name: 'Stop-Service',
        alias: ['spsv'],
        description: 'Stop a running service.',
        index: 's'
    },
    {
        name: 'Suspend-Service',
        alias: [],
        description: 'Suspend a running service.',
        index: 's'
    },
    {
        name: 'Sort-Object',
        alias: ['sort'],
        description: 'Sort objects by property value.',
        index: 's'
    },
    {
        name: 'Get-SmbConnection',
        alias: [],
        description: 'Retrieve the connections established from the SMB client to the SMB servers.',
        index: 's'
    },
    {
        name: 'Get-SmbOpenFile',
        alias: [],
        description: 'Information about files that are open on behalf of SMB server clients.',
        index: 's'
    },
    {
        name: 'Get-SMBMapping',
        alias: [],
        description: 'Get an SMB mapping.',
        index: 's'
    },
    {
        name: 'New-SmbMapping',
        alias: [],
        description: 'Create an SMB mapping.',
        index: 's'
    },
    {
        name: 'Remove-SmbMapping',
        alias: [],
        description: 'Remove an SMB mapping.',
        index: 's'
    },
    {
        name: 'Get-SmbSession',
        alias: [],
        description: 'Retrieve information about current SMB sessions.',
        index: 's'
    },
    {
        name: 'Set-SmbClientConfiguration',
        alias: [],
        description: 'Get the SMB Server configuration.',
        index: 's'
    },
    {
        name: 'Get-SmbClientConfiguration',
        alias: [],
        description: 'Get the SMB Server configuration.',
        index: 's'
    },
    {
        name: 'Set-SmbServerConfiguration',
        alias: [],
        description: 'Set the SMB Server configuration.',
        index: 's'
    },
    {
        name: 'Get-SmbShare',
        alias: [],
        description: 'Retrieve the SMB shares on the computer.',
        index: 's'
    },
    {
        name: 'Set-SmbShare',
        alias: [],
        description: 'Modify the properties of an SMB share.',
        index: 's'
    },
    {
        name: 'New-SmbShare',
        alias: [],
        description: 'Create an SMB share.',
        index: 's'
    },
    {
        name: 'Get-SmbShareAccess',
        alias: [],
        description: 'Add an allow ACE for a trustee to the security descriptor of the SMB share.',
        index: 's'
    },
    {
        name: 'Grant-SmbShareAccess',
        alias: [],
        description: 'Get the names and IDs of apps installed on the Start Menu.',
        index: 's'
    },
    {
        name: 'Set-StrictMode',
        alias: [],
        description: 'Get the names and IDs of apps installed on the Start Menu.',
        index: 's'
    },
    {
        name: 'Get-StartApps',
        alias: [],
        description: 'Suspend shell, script, or runspace activity.',
        index: 's'
    },
    {
        name: 'Export-StartLayout',
        alias: [],
        description: 'Suspend shell, script, or runspace activity.',
        index: 's'
    },
    {
        name: 'Import-StartLayout',
        alias: [],
        description: 'Suspend shell, script, or runspace activity.',
        index: 's'
    },
    {
        name: 'Start-Sleep',
        alias: ['sleep'],
        description: 'Information about long-running Storage module jobs, such as a repair task.',
        index: 's'
    },
    {
        name: 'Get-StorageJob',
        alias: [],
        description: '',
        index: 's'
    },
    {
        name: 'New-StoragePool',
        alias: [],
        description: 'Create a new storage pool using a group of physical disks.',
        index: 's'
    },
    {
        name: 'Switch',
        alias: [],
        description: 'Check multiple conditions.',
        index: 's'
    },
    {
        name: 'ConvertFrom-StringData',
        alias: [],
        description: 'Convert a here-string into a hash table.',
        index: 's'
    },
    {
        name: 'Select-String',
        alias: [],
        description: 'Search through strings or files for patterns.',
        index: 's'
    },
    // T
    {
        name: 'Tee-Object ',
        alias: ['tee'],
        description: 'Send input objects to two places.',
        index: 't'
    },
    {
        name: 'New-Timespan',
        alias: [],
        description: 'Create a timespan object.',
        index: 't'
    },
    {
        name: 'Get-TimeZone',
        alias: ['gtz'],
        description: 'Get the current time zone or a list of available time zones.',
        index: 't'
    },
    {
        name: 'Set-TimeZone',
        alias: ['stz'],
        description: 'Set the system time zone to a specified time zone.',
        index: 't'
    },
    {
        name: 'Get-TlsCipherSuite',
        alias: [],
        description: 'Get the list of cipher suites for TLS for a computer.',
        index: 't'
    },
    {
        name: 'Get-Tpm',
        alias: [],
        description: 'Trusted Platform Module (TPM).',
        index: 't'
    },
    {
        name: 'Trace-Command',
        alias: [],
        description: 'Trace an expression or command.',
        index: 't'
    },
    {
        name: 'Get-Tracesource',
        alias: [],
        description: 'Get components that are instrumented for tracing.',
        index: 't'
    },
    {
        name: 'Set-Tracesource',
        alias: [],
        description: 'Trace a PowerShell component.',
        index: 't'
    },
    {
        name: 'Start-Transaction',
        alias: [],
        description: 'Start a new transaction.',
        index: 't'
    },
    {
        name: 'Complete-Transaction',
        alias: [],
        description: 'Commit the transaction.',
        index: 't'
    },
    {
        name: 'Get-Transaction',
        alias: [],
        description: 'Get information about the active transaction.',
        index: 't'
    },
    {
        name: 'Use-Transaction',
        alias: [],
        description: 'Roll back a transaction.',
        index: 't'
    },
    {
        name: 'Undo-Transaction',
        alias: [],
        description: 'Roll back a transaction.',
        index: 't'
    },
    {
        name: 'Start-Transcript',
        alias: [],
        description: 'Start a transcript of a command shell session.',
        index: 't'
    },
    {
        name: 'Stop-Transcript',
        alias: [],
        description: 'Stop the transcription process.',
        index: 't'
    },
    {
        name: 'Trap',
        alias: [],
        description: 'Handle a terminating error within a scriptblock.',
        index: 't'
    },
    {
        name: 'Try & Catch',
        alias: [],
        description: 'Handle a terminating error within a scriptblock.',
        index: 't'
    },
    {
        name: 'Add-Type',
        alias: [],
        description: 'Add a .NET Framework type to a PowerShell session.',
        index: 't'
    },
    // U
    {
        name: 'Get-Uiculture',
        alias: [],
        description: 'Get the ui culture information.',
        index: 'u'
    },
    {
        name: 'Unblock-File',
        alias: [],
        description: 'Get the unique items in a collection.',
        index: 'u'
    },
    {
        name: 'Get-Unique',
        alias: ['gu'],
        description: 'Get the unique items in a collection.',
        index: 'u'
    },
    {
        name: 'Update-Formatdata',
        alias: [],
        description: 'Update and append format data files.',
        index: 'u'
    },
    {
        name: 'Update-Help',
        alias: [],
        description: 'Download and install help files.',
        index: 'u'
    },
    {
        name: 'Update-Typedata',
        alias: [],
        description: 'Update the current extended type configuration.',
        index: 'u'
    },
    // V
    {
        name: 'Clear-Variable',
        alias: ['clv'],
        description: 'Remove the value from a variable.',
        index: 'v'
    },
    {
        name: 'Get-Variable',
        alias: ['gv'],
        description: 'Get a PowerShell variable.',
        index: 'v'
    },
    {
        name: 'New-Variable',
        alias: ['nv'],
        description: 'Create a new variable.',
        index: 'v'
    },
    {
        name: 'Remove-Variable',
        alias: ['rv'],
        description: 'Remove a variable and its value.',
        index: 'v'
    },
    {
        name: 'Set-Variable',
        alias: [],
        description: 'Set a variable and a value.',
        index: 'v'
    },
    {
        name: 'Get-VirtualDisk',
        alias: [],
        description: 'Return a list of VirtualDisks across storage pools/providers.',
        index: 'v'
    },
    {
        name: 'New-VirtualDisk',
        alias: [],
        description: 'Create a new virtual disk in the specified storage pool.',
        index: 'v'
    },
    {
        name: 'Get-Volume',
        alias: [],
        description: 'Get the specified Volume object, or all Volume objects.',
        index: 'v'
    },
    {
        name: 'Format-Volume',
        alias: [],
        description: 'Format one or more volumes.',
        index: 'v'
    },
    {
        name: 'New-Volume',
        alias: [],
        description: 'Create a volume with the specified file system.',
        index: 'v'
    },
    {
        name: 'Optimize-Volume',
        alias: [],
        description: 'Optimize a volume.',
        index: 'v'
    },
    {
        name: 'Repair-Volume',
        alias: [],
        description: 'Perform repairs on a volume.',
        index: 'v'
    },
    {
        name: 'Add-VpnConnection',
        alias: [],
        description: 'Retrieve the specified VPN connection profile information.',
        index: 'v'
    },
    {
        name: 'Get-VpnConnection',
        alias: [],
        description: 'Add a VPN connection to the Connection Manager phone book.',
        index: 'v'
    },
    {
        name: 'Set-VpnConnection',
        alias: [],
        description: 'Add a route to a VPN connection.',
        index: 'v'
    },
    {
        name: 'Add-VpnConnectionRoute',
        alias: [],
        description: 'Add a route to a VPN connection.',
        index: 'v'
    },
    // W
    {
        name: 'Checkpoint-WebApplicationMonitoring',
        alias: [],
        description: 'Create a checkpoint for an IIS web app.',
        index: 'w'
    },
    {
        name: 'Get-WebApplicationMonitoringStatus',
        alias: [],
        description: 'Get the monitoring status of web apps.',
        index: 'w'
    },
    {
        name: 'New-WebServiceProxy',
        alias: [],
        description: 'Create a Web service proxy object.',
        index: 'w'
    },
    {
        name: 'Invoke-WebRequest',
        alias: [],
        description: 'Filter objects from a collection.',
        index: 'w'
    },
    {
        name: 'Where-Object',
        alias: ['where', '?'],
        description: 'Filter objects from a collection.',
        index: 'w'
    },
    {
        name: 'Where',
        alias: [],
        description: 'Filter objects from a collection.',
        index: 'w'
    },
    {
        name: 'While',
        alias: [],
        description: 'Loop while a condition is True.',
        index: 'w'
    },
    {
        name: 'Add-WindowsCapability',
        alias: [],
        description: 'Install a Windows capability package on the specified OS image.',
        index: 'w'
    },
    {
        name: 'Get-WindowsCapability',
        alias: [],
        description: 'Get capabilities for an image or a running OS.',
        index: 'w'
    },
    {
        name: 'Remove-WindowsCapability',
        alias: [],
        description: 'Retrieve roles, role services, and features.',
        index: 'w'
    },
    {
        name: 'Export-WindowsDriver',
        alias: [],
        description: 'Export Windows Driver',
        index: 'w'
    },
    {
        name: 'Add-WindowsFeature',
        alias: [],
        description: 'Retrieve roles, role services, and features.',
        index: 'w'
    },
    {
        name: 'Get-WindowsFeature',
        alias: [],
        description: 'Retrieve roles, role services, and features.',
        index: 'w'
    },
    {
        name: 'Install-WindowsFeature',
        alias: [],
        description: 'Install roles, role services, or features (Server 2012 R2).',
        index: 'w'
    },
    {
        name: 'Uninstall-WindowsFeature',
        alias: [],
        description: 'Mount a Windows image (WIM or VHD file) to a directory on the local computer.',
        index: 'w'
    },
    {
        name: 'Mount-WindowsImage',
        alias: [],
        description: 'Mount a Windows image (WIM or VHD file) to a directory on the local computer.',
        index: 'w'
    },
    {
        name: 'Repair-WindowsImage',
        alias: [],
        description: 'Repair a Windows image in a WIM or VHD file.',
        index: 'w'
    },
    {
        name: 'Disable-WindowsOptionalFeature',
        alias: [],
        description: 'Enable a feature in a Windows image.',
        index: 'w'
    },
    {
        name: 'Disable-WindowsOptionalFeature',
        alias: [],
        description: 'Enable a feature in a Windows image.',
        index: 'w'
    },
    {
        name: 'Get-WindowsOptionalFeature',
        alias: [],
        description: 'Get information about optional features in a Windows image.',
        index: 'w'
    },
    {
        name: 'Add-WindowsPackage',
        alias: [],
        description: 'Add a single .cab or .msu file to a Windows image.',
        index: 'w'
    },
    {
        name: 'Get-WindowsUpdateLog',
        alias: [],
        description: 'Merge Windows Update .etl files into a single log file.',
        index: 'w'
    },
    {
        name: 'Set-WinSystemLocale',
        alias: [],
        description: 'Set the system locale for the current computer.',
        index: 'w'
    },
    {
        name: 'Set-WinUserLanguageList',
        alias: [],
        description: 'Set the language list/properties for the current user.',
        index: 'w'
    },
    {
        name: 'Write-Debug',
        alias: [],
        description: 'Write an object to the error pipeline (2).',
        index: 'w'
    },
    {
        name: 'Write-Error',
        alias: [],
        description: 'Write an object to the error pipeline (2).',
        index: 'w'
    },
    {
        name: 'Write-Host',
        alias: [],
        description: 'Write an object to the pipeline (1).',
        index: 'w'
    },
    {
        name: ' Write-Information',
        alias: [],
        description: 'Write an object to the pipeline (1).',
        index: 'w'
    },
    {
        name: 'Write-Output',
        alias: ['write', 'echo'],
        description: 'Write an object to the pipeline (1).',
        index: 'w'
    },
    {
        name: 'Write-Progress',
        alias: [],
        description: 'Display a progress bar.',
        index: 'w'
    },
    {
        name: 'Write-Verbose',
        alias: [],
        description: "Write a string to the host's verbose display (4).",
        index: 'w'
    },
    {
        name: 'Write-Warning',
        alias: [],
        description: 'Create or update an instance of an existing WMI class.',
        index: 'w'
    },
    {
        name: 'Set-WmiInstance',
        alias: [],
        description: 'Create or update an instance of an existing WMI class.',
        index: 'w'
    },
    {
        name: 'Invoke-WmiMethod',
        alias: ['iwmi'],
        description: 'Call WMI methods.',
        index: 'w'
    },
    {
        name: 'Get-WmiObject',
        alias: ['gwmi'],
        description: 'Get WMI class information.',
        index: 'w'
    },
    {
        name: 'Remove-WmiObject',
        alias: ['rwmi'],
        description: 'Delete an instance of a WMI class.',
        index: 'w'
    },
    {
        name: 'Connect-WSMan',
        alias: [],
        description: 'Connect to the WinRM service on a remote computer.',
        index: 'w'
    },
    {
        name: 'Disconnect-WSMan',
        alias: [],
        description: 'Disconnect from the WinRM service on a remote computer.',
        index: 'w'
    },
    {
        name: 'Test-WSMan',
        alias: [],
        description: 'Test if a computer is setup to receive remote commands.',
        index: 'w'
    },
    {
        name: 'Invoke-WSManAction',
        alias: [],
        description: 'Invoke an action on a specified object.',
        index: 'w'
    },
    {
        name: 'Disable-WSManCredSSP',
        alias: [],
        description: 'Disable Credential Security Service Provider (SSP) authentication.',
        index: 'w'
    },
    {
        name: 'Enable-WSManCredSSP',
        alias: [],
        description: 'Enable Credential SSP authentication.',
        index: 'w'
    },
    {
        name: 'Get-WSManCredSSP',
        alias: [],
        description: 'Create a new instance of a management resource.',
        index: 'w'
    },
    {
        name: 'New-WSManInstance',
        alias: [],
        description: 'Create a new instance of a management resource.',
        index: 'w'
    },
    {
        name: 'Get-WSManInstance',
        alias: [],
        description: 'Create a new instance of a management resource.',
        index: 'w'
    },
    {
        name: 'New-WSManInstance',
        alias: [],
        description: 'Create a new instance of a management resource..',
        index: 'w'
    },
    {
        name: 'Set-WSManInstance',
        alias: [],
        description: 'Modify the management information related to a resource.',
        index: 'w'
    },
    {
        name: 'Remove-WSManInstance',
        alias: [],
        description: 'Configure the local computer for remote management.',
        index: 'w'
    },
    {
        name: 'Set-WSManQuickConfig',
        alias: [],
        description: 'Configure the local computer for remote management.',
        index: 'w'
    },
    {
        name: 'New-WSManSessionOption',
        alias: [],
        description: 'Options for WSMan commands.',
        index: 'w'
    },
    // Z
    {
        name: 'zipfile',
        alias: [],
        description: 'Compress or Extract zip files.',
        index: 'z'
    },
    {
        name: '#',
        alias: [],
        description: 'Comment / Remark.',
        index: 'z'
    },
    {
        name: '. (source)',
        alias: [],
        description: 'Run a command script in the current shell.',
        index: 'z'
    },
    {
        name: '& (call)',
        alias: [],
        description: 'Run a command, script or function.',
        index: 'z'
    },
    {
        name: '%',
        alias: [],
        description: 'Alias for ForEach-Object.',
        index: 'z'
    },
    {
        name: '--%',
        alias: [],
        description: 'Stop parsing input.',
        index: 'z'
    },
    {
        name: '?',
        alias: [],
        description: 'Alias for Where-Object.',
        index: 'z'
    },
    {
        name: '$variable = "value"',
        alias: [],
        description: 'Define a variable  also: ${n!a#me} = "value".',
        index: 'z'
    },
    {
        name: '$_',
        alias: [],
        description: 'The current pipeline object.',
        index: 'z'
    },
    {
        name: '$(...)',
        alias: [],
        description: 'Force an expression to be evaluated as an array.',
        index: 'z'
    },
    {
        name: '`',
        alias: [],
        description: 'Escape or Continue on the next line.',
        index: 'z'
    },
]