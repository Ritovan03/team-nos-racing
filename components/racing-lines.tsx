"use client"

import { useEffect, useRef } from "react"

export function RacingLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full width/height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Lines data
    const lines: {
      x: number
      y: number
      length: number
      speed: number
      width: number
      color: string
    }[] = []

    // Initialize lines
    const initLines = () => {
      lines.length = 0
      const lineCount = Math.min(Math.floor(window.innerWidth / 100), 15)

      for (let i = 0; i < lineCount; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: -100 - Math.random() * 500,
          length: 50 + Math.random() * 150,
          speed: 5 + Math.random() * 15,
          width: 1 + Math.random() * 3,
          color: `rgba(var(--primary-rgb), ${0.1 + Math.random() * 0.3})`,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw lines
      lines.forEach((line) => {
        line.y += line.speed

        // Reset when off screen
        if (line.y > canvas.height + line.length) {
          line.y = -line.length
          line.x = Math.random() * canvas.width
        }

        // Draw line
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x, line.y + line.length)
        ctx.lineWidth = line.width
        ctx.strokeStyle = line.color
        ctx.stroke()
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    // Set up
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    initLines()
    animate()

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" style={{ touchAction: "none" }} />
}

