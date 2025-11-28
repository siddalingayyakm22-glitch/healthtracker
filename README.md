# 🩺 Health Tracker – Web3 Smart Contract DApp

A decentralized, blockchain-powered **Health Tracking Application** that allows users to securely store and update their personal health metrics directly on-chain. This ensures full ownership, transparency, and tamper-proof access to personal wellness data.

---

## 📌 Contract Address  
**0x1C67100B4fE07A90057c453A81B9E2E7F16520e8**  
Explorer: https://coston2-explorer.flare.network/address/0x1C67100B4fE07A90057c453A81B9E2E7F16520e8

---

## 📘 Project Description

This project is a Web3-based **On-Chain Health Tracker** that lets users record and manage their health data—such as age, weight, height, and daily steps—directly on the blockchain. Using decentralized storage ensures that users maintain **full control and ownership** of their health information.

The contract exposes two main functions:

- `getMyHealth()` → Retrieves the user's health data  
- `updateHealth(age, weight, height, steps)` → Updates the user's health data on-chain  

A frontend UI built with React + Wagmi allows users to **view and update** this information through seamless wallet interactions.

---

## ⭐ Features

### **🔐 Decentralized Personal Health Records**
Your data is stored on the blockchain, ensuring transparency and tamper-proof access.

### **👤 User-Specific Health Profiles**
Each wallet address maintains its own personal health dataset.

### **⚡ Real-Time Contract Interaction**
Automatic UI updates after blockchain confirmations.

### **💻 Clean and Minimal UI**
A simple dashboard displays:
- Age  
- Weight  
- Height  
- Daily Steps  

### **🔄 Live Data Updates**
Any update triggers a refresh from the smart contract using Wagmi hooks.

### **🛡️ Secure Wallet Gating**
Only connected wallet owners can view or update their health information.

---

## 🧩 How It Solves the Problem

Traditional health apps store sensitive user data on centralized servers. These systems bring risks:

- Data leaks  
- Unauthorized access  
- Lack of ownership  
- No global portability  

This DApp solves these issues by shifting health data storage to the blockchain, enabling:

### ✅ **True Data Ownership**
Only the wallet owner can update or access their health metrics.

### ✅ **Global Portability**
Your data follows your wallet—usable across devices and ecosystems.

### ✅ **Transparency and Trust**
Smart contracts ensure open, verifiable data access.

### ✅ **Tamper-Proof Records**
No one—even the app developer—can modify user data.

### **Use Cases**
- Personal fitness tracking  
- Decentralized health monitoring apps  
- Web3 wellness platforms  
- Self-sovereign identity health modules  

---

## 📁 Contract Source Code

Located at: