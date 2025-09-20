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

Tools included:

- `net-tools` - Legacy networking tools (`ifconfig`, etc.)
- `iproute2` - Modern networking (`ip` command)
- `nmap` - Network scanner
- `git` - Version control
- `dnsutils` - DNS lookup tools (`dig`, `nslookup`)
- `tcpdump` - Packet capture
- `netcat-openbsd` - Network connections (`nc`)
- `curl`, `wget` - Downloading tools
- `john`, `hydra`, `hashcat` - Password cracking
- `binutils` - Binary inspection tools
- `vim or nano` - Editors
- `python3`, `ruby` - Script interpreters
- `openssl` - SSL/TLS tools
- `screen or tmux` - Terminal multiplexers
- `aircrack-ng` - Wireless auditing

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