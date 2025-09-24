#!/usr/bin/env node
import Table, {} from "cli-table3";
import { Command } from 'commander';
import { spawn } from 'child_process';
const packages = [
    { name: 'net-tools', description: 'Includes ifconfig, netstat, route' },
    { name: 'iproute2', description: 'Modern replacement for net-tools (ip command)' },
    { name: 'nmap', description: 'Network scanning & enumeration tool' },
    { name: 'git', description: 'Version control (clone pentest scripts/tools)' },
    { name: 'dnsutils', description: 'Tools like dig, nslookup' },
    { name: 'tcpdump', description: 'Packet capture tool' },
    { name: 'netcat-openbsd', description: 'nc command (netcat alternative)' },
    { name: 'curl', description: 'Data transfer over various protocols' },
    { name: 'wget', description: 'Download files from web' },
    { name: 'john', description: 'John the Ripper password cracking tool' },
    { name: 'hydra', description: 'Password cracking (online brute forcing)' },
    { name: 'binutils', description: 'Binary tools like strings, objdump' },
    { name: 'vim', description: 'Powerful terminal-based text editor' },
    { name: 'python3', description: 'Python interpreter (often needed for scripts)' },
    { name: 'ruby', description: 'Ruby interpreter (some tools require it)' },
    { name: 'openssl', description: 'SSL/TLS toolkit (for crypto, certs, etc.)' },
    { name: 'hashcat', description: 'GPU accelerated password cracking' },
    { name: 'screen', description: 'Terminal multiplexer to manage multiple shell sessions' },
    { name: 'aircrack-ng', description: 'Wireless network auditing tools' },
    { name: 'exploitdb', description: 'CLI tool to search Exploit-DB' },
    { name: 'openssh-server', description: 'SSH server to allow secure remote login' },
    { name: 'iputils-ping', description: 'Provides the ping command to test network connectivity' },
    { name: 'wordlists', description: 'Installs common cracking wordlists (e.g., rockyou.txt)' },
    { name: 'hash-identifier', description: 'Identifies hash types (e.g., MD5, SHA1) based on length and format' },
    { name: 'ffuf', description: 'Web fuzzer for directories, subdomains, and parameters' },
    { name: 'fcrackzip', description: 'Fast ZIP password cracker using brute-force or wordlists' },
    { name: 'dirbuster', description: 'Brute-forces hidden web files and directories using wordlists' },
    { name: 'metasploit-framework', description: 'Powerful pentesting framework for exploits, payloads, and scanning' }
];
const program = new Command();
const table = new Table({
    head: ['Package Name', 'Description'],
    colWidths: [23, 70]
});
function showPackages(table, packages) {
    for (const pkg of packages) {
        table.push([pkg.name, pkg.description]);
    }
    console.log(table.toString());
}
// Install packages
const packageNames = packages.map(pkg => pkg.name);
function printBoxedMessage(message) {
    const line = '='.repeat(message.length + 4); // padding for box edges
    console.log('\n' + line);
    console.log(`| ${message} |`);
    console.log(line + '\n');
}
function installPackageCore(pkgName) {
    return new Promise((resolve, reject) => {
        const child = spawn('apt-get', ['install', '-y', pkgName], { stdio: 'inherit' });
        child.on('error', reject);
        child.on('close', code => code === 0 ? resolve() : reject(new Error(`Exit code ${code}`)));
    });
}
// Wrapper with logging
async function installPackage(pkgName) {
    printBoxedMessage(`⬇️ Starting installation: ${pkgName}`);
    try {
        await installPackageCore(pkgName);
        printBoxedMessage(`✅ Successfully installed: ${pkgName} 🎉`);
    }
    catch (err) {
        const error = err;
        printBoxedMessage(`❌ Failed to install ${pkgName}: ${error.message}`);
        throw error;
    }
}
async function installPackagesSequential(packages) {
    for (const [index, pkg] of packages.entries()) {
        try {
            printBoxedMessage(`📦 Installing package #${index + 1}: ${pkg}`);
            await installPackage(pkg);
        }
        catch (err) {
            printBoxedMessage(`⚠️ Skipping package ${pkg} due to an error.`);
            console.log('\n');
            console.log('-'.repeat(80));
        }
    }
    printBoxedMessage('🎯 All packages processed successfully!');
}
// commands execution
program
    .name("kali-docker-essential-tools")
    .description('CLI tool to show packages info and install those packge')
    .version('1.0.0');
program
    .command('show')
    .description('Show the list of packages with descriptions')
    .action(() => showPackages(table, packages));
program
    .command('install')
    .description('Install essential packages')
    .option('-n,--name <packages...>', 'Specify package names to install (space separated)')
    .action((options) => {
    const packagesToInstall = options.name ?? packageNames;
    installPackagesSequential(packagesToInstall);
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map