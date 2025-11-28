export const contractAddress = "0x1C67100B4fE07A90057c453A81B9E2E7F16520e8";

// Export only the ABI array expected by viem/wagmi
export const contractABI = [
  {
    "inputs": [],
    "name": "getMyHealth",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "weight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "height",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "steps",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_age",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_weight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_height",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_steps",
        "type": "uint256"
      }
    ],
    "name": "updateHealth",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;