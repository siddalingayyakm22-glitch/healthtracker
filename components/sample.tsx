"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useHealthContract } from "@/hooks/useContract"

const SampleIntregation = () => {
  const { isConnected } = useAccount()

  const [age, setAge] = useState("")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [steps, setSteps] = useState("")

  const { data, actions, state } = useHealthContract()

  const canUpdate =
    age && weight && height && steps &&
    Number(age) >= 0 &&
    Number(weight) >= 0 &&
    Number(height) >= 0 &&
    Number(steps) >= 0

  const handleUpdate = async () => {
    try {
      await actions.updateHealth(
        Number(age),
        Number(weight),
        Number(height),
        Number(steps)
      )
      setAge("")
      setWeight("")
      setHeight("")
      setSteps("")
    } catch (err) {
      console.error("Error:", err)
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-2">Health Tracker</h2>
          <p className="text-muted-foreground">Please connect your wallet to continue.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-xl mx-auto space-y-8">
        
        <div>
          <h1 className="text-3xl font-bold">My Health Data</h1>
          <p className="text-muted-foreground mt-1">Fetched directly from your smart contract</p>
        </div>

        {/* Display Health Info */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card border p-4 rounded-lg">
            <p className="text-xs text-muted-foreground uppercase">Age</p>
            <p className="text-xl font-medium">{data.age}</p>
          </div>
          <div className="bg-card border p-4 rounded-lg">
            <p className="text-xs text-muted-foreground uppercase">Weight</p>
            <p className="text-xl font-medium">{data.weight}</p>
          </div>
          <div className="bg-card border p-4 rounded-lg">
            <p className="text-xs text-muted-foreground uppercase">Height</p>
            <p className="text-xl font-medium">{data.height}</p>
          </div>
          <div className="bg-card border p-4 rounded-lg">
            <p className="text-xs text-muted-foreground uppercase">Steps</p>
            <p className="text-xl font-medium">{data.steps}</p>
          </div>
        </div>

        {/* Update Form */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Update My Health</h2>

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-card"
          />
          <input
            type="number"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-card"
          />
          <input
            type="number"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-card"
          />
          <input
            type="number"
            placeholder="Steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-card"
          />

          <button
            onClick={handleUpdate}
            disabled={!canUpdate || state.isLoading}
            className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg disabled:opacity-50"
          >
            {state.isLoading ? "Updating..." : "Update Health"}
          </button>
        </div>

        {/* Status */}
        {state.hash && (
          <div className="p-4 bg-card border rounded-lg">
            <p className="text-xs text-muted-foreground">Transaction Hash</p>
            <p className="font-mono text-sm break-all">{state.hash}</p>
            {state.isConfirming && <p className="text-primary mt-2">Waiting for confirmation...</p>}
            {state.isConfirmed && <p className="text-green-500 mt-2">Health Updated!</p>}
          </div>
        )}

        {state.error && (
          <div className="p-4 border border-destructive bg-card rounded-lg">
            <p className="text-destructive-foreground">Error: {state.error.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SampleIntregation
