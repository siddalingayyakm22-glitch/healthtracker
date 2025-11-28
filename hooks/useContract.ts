"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface HealthData {
  age: number
  weight: number
  height: number
  steps: number
}

export interface ContractState {
  isLoading: boolean
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  hash: `0x${string}` | undefined
  error: Error | null
}

export interface ContractActions {
  updateHealth: (age: number, weight: number, height: number, steps: number) => Promise<void>
}

export const useHealthContract = () => {
  const { address } = useAccount()

  const { data: health, refetch: refetchHealth } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getMyHealth",
    query: { enabled: !!address }
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isConfirmed) refetchHealth()
  }, [isConfirmed, refetchHealth])

  const updateHealth = async (age: number, weight: number, height: number, steps: number) => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "updateHealth",
        args: [BigInt(age), BigInt(weight), BigInt(height), BigInt(steps)]
      })
    } catch (err) {
      console.error("Error updating health:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const parsedHealth: HealthData = {
    age: health ? Number(health[0]) : 0,
    weight: health ? Number(health[1]) : 0,
    height: health ? Number(health[2]) : 0,
    steps: health ? Number(health[3]) : 0,
  }

  const actions: ContractActions = { updateHealth }

  const state: ContractState = {
    isLoading: isLoading || isPending || isConfirming,
    isPending,
    isConfirming,
    isConfirmed,
    hash,
    error
  }

  return { data: parsedHealth, actions, state }
}
