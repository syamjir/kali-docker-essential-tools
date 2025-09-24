# kali-docker-essential-tools

> 🛠️ CLI tool to display and install essential Kali Linux packages — perfect for Docker or Debian-based environments, minimal installs, or custom setups.

---

## 📦 What is this?

`essential-kali-tools` is a CLI utility that:

- 📋 Shows a table of essential pentesting/networking tools
- 🔧 Installs tools via `apt-get`, either all or specific ones
- 💻 Perfect for Docker images, minimal Kali/Ubuntu setups, or automation

---

## 🚀 Features

- List commonly-used pentesting tools
- Install all or selected packages
- Clear terminal UI with progress messages
- Lightweight and scriptable

---

## 📚 Package List

#### Networking Tools
- **openssh-server**: SSH server to allow secure remote login
- **iputils-ping**: Provides the ping command to test network connectivity
- **net-tools**: Legacy networking tools (e.g., `ifconfig`)
- **iproute2**: Modern networking tools (e.g., `ip` command)
- **nmap**: Network scanner for discovering hosts and services
- **tcpdump**: Packet capture tool for network analysis
- **netcat-openbsd**: Network connections (`nc`) for troubleshooting and data transfer
- **curl**: Command-line tool for transferring data with URLs
- **wget**: Non-interactive network downloader

#### Exploit Database Tools
- **exploitdb**: CLI tool to search Exploit-DB

#### Password Cracking Tools
- **wordlists**: Installs common cracking wordlists (e.g., `rockyou.txt`)
- **hash-identifier**: Identifies hash types (e.g., MD5, SHA1) based on length and format
- **john**: Fast password cracking tool
- **hydra**: Network logon cracker supporting many protocols
- **hashcat**: GPU/CPU password cracker for many hash types
- **fcrackzip**: Fast ZIP password cracker using brute-force or wordlists

#### Web Application Security Tools
- **ffuf**: Web fuzzer for directories, subdomains, and parameters
- **dirbuster**: Brute-forces hidden web files and directories using wordlists
- **metasploit-framework**: Powerful pentesting framework for exploits, payloads, and scanning

#### Other Useful Tools
- **git**: Version control system for code management
- **dnsutils**: DNS lookup tools (`dig`, `nslookup`)
- **binutils**: Binary inspection tools for disassembling and analyzing executables
- **vim**: Advanced text editor for code and configuration files
- **python3**: Python 3 interpreter for scripting
- **ruby**: Ruby interpreter for scripting
- **openssl**: SSL/TLS tools for encryption and certificate management
- **screen**: Terminal multiplexer for managing multiple sessions
- **aircrack-ng**: Wireless auditing tools for cracking WiFi passwords and analyzing networks

---

## 🧑‍💻 Requirements

- Node.js 18+
- npm (comes bundled with Node.js)

 #### 📥 Install Node.js (Kali Linux / Debian / Ubuntu)
```bash
sudo apt update
sudo apt install nodejs npm -y
```

## 📦 USAGE

### 2. Install the CLI tool globally

#### 🐧 For Kali Linux, Docker, or Debian-based environments

On most Unix-like systems, you might need to use `sudo` to install globally due to permission restrictions:

```bash
 npm install -g kali-docker-essential-tools
``` 
### 3. Run scans

1. 🔎 Show Available Packages

```bash
kalitools show
```
2. 📦 Install All Packages

```bash
kalitools install
```
3. 🛠️ Install Selected Packages

```bash
kalitools install -n <package-name> <package-name> ...
# or
kalitools install --name <package-name> <package-name> ...
```
4. 🆘 Show Help
```bash
kalitools -h
```