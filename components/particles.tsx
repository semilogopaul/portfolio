"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  element: HTMLDivElement
}

const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particleCount = window.innerWidth < 768 ? 15 : 30
    const particles: Particle[] = []

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 5 + 2
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const speedX = Math.random() * 0.2 - 0.1
      const speedY = Math.random() * -0.5 - 0.1

      const element = document.createElement("div")
      element.className = "particle"
      element.style.width = `${size}px`
      element.style.height = `${size}px`
      element.style.left = `${x}px`
      element.style.top = `${y}px`
      element.style.opacity = (Math.random() * 0.5 + 0.3).toString()
      element.style.animation = `float-up ${Math.random() * 20 + 10}s linear infinite`
      element.style.animationDelay = `${Math.random() * 5}s`

      container.appendChild(element)

      particles.push({
        x,
        y,
        size,
        speedX,
        speedY,
        element,
      })
    }

    particlesRef.current = particles

    // Handle resize
    const handleResize = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      // Remove existing particles
      particles.forEach((particle) => {
        container.removeChild(particle.element)
      })

      // Clear the array
      particles.length = 0
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      particles.forEach((particle) => {
        if (container.contains(particle.element)) {
          container.removeChild(particle.element)
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />
}

export default Particles
