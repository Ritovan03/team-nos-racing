"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Gauge } from "lucide-react"

export function SpeedTest() {
  const [gameState, setGameState] = useState<"idle" | "ready" | "waiting" | "clicked" | "results">("idle")
  const [startTime, setStartTime] = useState(0)
  const [reactionTime, setReactionTime] = useState(0)
  const [countdownTime, setCountdownTime] = useState(3)
  const timerRef = useRef<NodeJS.Timeout>()
  const countdownRef = useRef<NodeJS.Timeout>()

  const startGame = () => {
    setGameState("ready")
    setCountdownTime(3)

    countdownRef.current = setInterval(() => {
      setCountdownTime((prev) => {
        if (prev <= 1) {
          clearInterval(countdownRef.current)
          setTimeout(() => {
            setGameState("waiting")
            setStartTime(Date.now())

            // Random delay between 1-4 seconds
            const randomDelay = 1000 + Math.random() * 3000
            timerRef.current = setTimeout(() => {
              setGameState("clicked")
            }, randomDelay)
          }, 500)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleClick = () => {
    if (gameState === "idle") {
      startGame()
    } else if (gameState === "waiting") {
      // Clicked too early
      clearTimeout(timerRef.current)
      setReactionTime(-1)
      setGameState("results")
    } else if (gameState === "clicked") {
      // Good click
      const endTime = Date.now()
      setReactionTime(endTime - startTime)
      setGameState("results")
    } else if (gameState === "results") {
      // Restart
      setGameState("idle")
    }
  }

  // Clean up timers
  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
      clearInterval(countdownRef.current)
    }
  }, [])

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-background border border-primary/20 rounded-lg p-6 shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
            <Gauge className="h-5 w-5 text-primary" />
            Reaction Speed Test
          </h3>
          <p className="text-sm text-muted-foreground">Test your reaction time - click when the screen turns green!</p>
        </div>

        <motion.div
          className={`w-full aspect-video rounded-lg flex items-center justify-center mb-6 cursor-pointer ${
            gameState === "idle"
              ? "bg-primary/10"
              : gameState === "ready"
                ? "bg-yellow-500/30"
                : gameState === "waiting"
                  ? "bg-red-500/30"
                  : gameState === "clicked"
                    ? "bg-green-500/30"
                    : "bg-primary/10"
          }`}
          onClick={handleClick}
          whileTap={{ scale: 0.98 }}
        >
          <div className="text-center">
            {gameState === "idle" && <p className="font-bold text-lg">Click to Start</p>}
            {gameState === "ready" && (
              <div>
                <p className="font-bold text-lg">Get Ready!</p>
                <p className="text-3xl font-bold mt-2">{countdownTime}</p>
              </div>
            )}
            {gameState === "waiting" && <p className="font-bold text-lg">Wait for Green...</p>}
            {gameState === "clicked" && <p className="font-bold text-lg">CLICK NOW!</p>}
            {gameState === "results" && (
              <div>
                <p className="font-bold text-lg mb-2">{reactionTime === -1 ? "Too Early!" : "Your Reaction Time:"}</p>
                {reactionTime !== -1 && <p className="text-3xl font-bold">{reactionTime} ms</p>}
                <p className="text-sm mt-4">Click to try again</p>
              </div>
            )}
          </div>
        </motion.div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">The average reaction time is between 200-300ms</p>
        </div>
      </div>
    </div>
  )
}

