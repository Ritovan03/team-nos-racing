"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function InteractiveCar() {
  const [rotateY, setRotateY] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isInteracting) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const relativeX = x / rect.width

    // Convert to rotation (-30 to 30 degrees)
    const newRotateY = (relativeX - 0.5) * 60
    setRotateY(newRotateY)
  }

  return (
    <div
      className="relative w-full aspect-[16/9] max-w-2xl mx-auto perspective"
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsInteracting(true)}
      onMouseUp={() => setIsInteracting(false)}
      onMouseLeave={() => setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => setIsInteracting(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-grab active:cursor-grabbing"
        animate={{
          rotateY: `${rotateY}deg`,
          rotateX: isInteracting ? "5deg" : "0deg",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="absolute inset-0 backface-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Team NOS Racing Car - Front View"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm font-medium">Drag to rotate</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-4 flex justify-center gap-4">
        <div className="text-center">
          <p className="text-sm font-medium mb-1">Interact with the car</p>
          <p className="text-xs text-muted-foreground">Click and drag to rotate</p>
        </div>
      </div>
    </div>
  )
}

