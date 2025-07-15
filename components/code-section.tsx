"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import Link from "next/link"

function RiskChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 200

    let frame = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw animated risk score chart
      ctx.strokeStyle = "#10b981"
      ctx.lineWidth = 2
      ctx.beginPath()
      for (let x = 0; x < canvas.width; x += 5) {
        const y = 100 + Math.sin((x + frame) * 0.02) * 30 + Math.sin((x + frame) * 0.05) * 15
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Draw glowing dots
      for (let i = 0; i < 5; i++) {
        const x = i * 60 + 30
        const y = 100 + Math.sin((x + frame) * 0.02) * 30
        ctx.fillStyle = "#22d3ee"
        ctx.shadowColor = "#22d3ee"
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      frame += 2
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full opacity-80" />
}

function FraudMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 200

    let frame = 0
    const gridSize = 20

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw matrix grid
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const intensity = Math.sin((x + y + frame) * 0.01) * 0.5 + 0.5
          const color = intensity > 0.7 ? "#ef4444" : "#10b981"
          const alpha = intensity * 0.6
          ctx.fillStyle = `${color}${Math.floor(alpha * 255)
            .toString(16)
            .padStart(2, "0")}`
          ctx.fillRect(x, y, gridSize - 2, gridSize - 2)
        }
      }

      frame += 1
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full opacity-80" />
}

function DeepLearningForecast() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 200

    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.lineWidth = 2

      // Historical data (solid line)
      ctx.strokeStyle = "#10b981"
      ctx.beginPath()
      for (let x = 0; x < canvas.width * 0.6; x += 5) {
        const y = 100 + Math.sin((x + frame) * 0.03) * 20
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Forecasted data (dashed line)
      ctx.strokeStyle = "#22d3ee"
      ctx.setLineDash([5, 5])
      ctx.beginPath()
      const lastX = canvas.width * 0.6 - 5
      const lastY = 100 + Math.sin((lastX + frame) * 0.03) * 20
      ctx.moveTo(lastX, lastY)
      for (let x = lastX; x < canvas.width; x += 5) {
        const y = lastY + Math.sin((x + frame) * 0.03 + Math.PI / 2) * 15 + (x - lastX) * 0.1
        ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.setLineDash([]) // Reset line dash

      // Prediction cone
      ctx.fillStyle = "rgba(34, 211, 238, 0.1)"
      ctx.beginPath()
      ctx.moveTo(lastX, lastY)
      for (let x = lastX; x < canvas.width; x += 5) {
        const yUpper = lastY + Math.sin((x + frame) * 0.03 + Math.PI / 2) * 15 + (x - lastX) * 0.1 - (x - lastX) * 0.05
        ctx.lineTo(x, yUpper)
      }
      for (let x = canvas.width - 5; x >= lastX; x -= 5) {
        const yLower = lastY + Math.sin((x + frame) * 0.03 + Math.PI / 2) * 15 + (x - lastX) * 0.1 + (x - lastX) * 0.05
        ctx.lineTo(x, yLower)
      }
      ctx.closePath()
      ctx.fill()

      frame += 1
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full opacity-80" />
}

function NlpDocumentIntel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 200

    let frame = 0
    const keywords = ["Loan", "Risk", "Default", "Credit", "Score"]
    const docRects = [
      { x: 20, y: 20, width: 60, height: 40 },
      { x: 20, y: 80, width: 60, height: 40 },
      { x: 20, y: 140, width: 60, height: 40 },
    ]

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw document representations
      ctx.fillStyle = "rgba(160, 174, 192, 0.2)"
      ctx.strokeStyle = "rgba(160, 174, 192, 0.5)"
      ctx.lineWidth = 1
      docRects.forEach((rect) => {
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height)
      })

      // Draw keyword nodes and connections
      const centerX = canvas.width / 2 + 50
      const centerY = canvas.height / 2
      const radius = 70

      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      keywords.forEach((keyword, i) => {
        const angle = (i / keywords.length) * Math.PI * 2 + frame * 0.01
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        // Animate connections from documents to keywords
        docRects.forEach((rect, docIdx) => {
          const connectionAlpha = Math.abs(Math.sin((frame * 0.05 + i * 0.1 + docIdx * 0.2) * 0.5))
          ctx.strokeStyle = `rgba(34, 211, 238, ${connectionAlpha * 0.7})` // Cyan for connections
          ctx.beginPath()
          ctx.moveTo(rect.x + rect.width, rect.y + rect.height / 2)
          ctx.lineTo(x, y)
          ctx.stroke()
        })

        // Draw keyword node
        const pulse = Math.sin((frame * 0.05 + i * 0.3) * 0.5) * 0.5 + 0.5
        ctx.fillStyle = `rgba(16, 185, 129, ${pulse * 0.9})` // Green for keywords
        ctx.beginPath()
        ctx.arc(x, y, 15, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "white"
        ctx.fillText(keyword, x, y)
      })

      frame += 1
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="opacity-80"
        style={{ width: "100%", height: "auto", maxHeight: "100%", aspectRatio: "3/2" }}
      />
    </div>
  )
}

function GnnLoanRelationships() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 200

    const nodes = [
      { x: 50, y: 50 },
      { x: 250, y: 50 },
      { x: 150, y: 150 },
      { x: 50, y: 150 },
      { x: 250, y: 150 },
    ]

    const edges = [
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 3],
      [2, 4],
      [3, 4],
    ]

    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw edges
      ctx.lineWidth = 1
      for (const [n1, n2] of edges) {
        const alpha = Math.abs(Math.sin((frame + n1 * 10 + n2 * 5) * 0.05))
        ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})` // Green for edges
        ctx.beginPath()
        ctx.moveTo(nodes[n1].x, nodes[n1].y)
        ctx.lineTo(nodes[n2].x, nodes[n2].y)
        ctx.stroke()
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        const pulse = Math.sin((frame + i * 20) * 0.05) * 2 + 5
        ctx.fillStyle = "#22d3ee"
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulse, 0, Math.PI * 2)
        ctx.fill()
      }

      frame += 1
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="opacity-80"
        style={{ width: "100%", height: "auto", maxHeight: "100%", aspectRatio: "3/2" }}
      />
    </div>
  )
}

function LlamaPromptEng() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 200

    let frame = 0
    const promptText = "Analyze financial reports for key insights."
    const typingSpeed = 2
    const cursorBlinkSpeed = 30

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.font = "16px monospace"
      ctx.textAlign = "left"
      ctx.textBaseline = "top"

      // Calculate typed text
      const typedLength = Math.min(promptText.length, Math.floor(frame / typingSpeed))
      const currentText = promptText.substring(0, typedLength)

      // Draw typed text
      ctx.fillStyle = "#a0aec0"
      ctx.fillText(currentText, 20, 80)

      // Blinking cursor
      if (typedLength < promptText.length) {
        if (Math.floor(frame / cursorBlinkSpeed) % 2 === 0) {
          const textWidth = ctx.measureText(currentText).width
          ctx.fillStyle = "#a0aec0"
          ctx.fillRect(20 + textWidth, 80, 2, 16)
        }
      } else {
        // Reset animation after a delay
        if (frame > promptText.length * typingSpeed + 100) {
          frame = 0
        }
      }

      frame += 1
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full opacity-80" />
}

function MultimodalIntegration() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 200

    let frame = 0
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Define data stream sources from different corners
    const streams = [
      { startX: 0, startY: 0, color: "#10b981", name: "structured" },
      { startX: canvas.width, startY: 0, color: "#22d3ee", name: "visual" },
      { startX: 0, startY: canvas.height, color: "#a855f7", name: "temporal" },
      { startX: canvas.width, startY: canvas.height, color: "#f59e0b", name: "textual" },
    ]

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw central fusion point with pulsing effect
      const pulseRadius = 25 + Math.sin(frame * 0.08) * 8
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseRadius)
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.3)")
      gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.1)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2)
      ctx.fill()

      // Draw flowing streams from each corner
      streams.forEach((stream, streamIndex) => {
        const streamOffset = frame * 0.02 + (streamIndex * Math.PI) / 2

        // Create flowing particles along the stream path
        for (let i = 0; i < 8; i++) {
          const progress = (i / 8 + streamOffset) % 1
          const x = stream.startX + (centerX - stream.startX) * progress
          const y = stream.startY + (centerY - stream.startY) * progress

          // Add wave motion to the path
          const waveOffset = Math.sin(progress * Math.PI * 3 + frame * 0.1) * 15
          const perpX =
            -(stream.startY - centerY) / Math.sqrt((stream.startX - centerX) ** 2 + (stream.startY - centerY) ** 2)
          const perpY =
            (stream.startX - centerX) / Math.sqrt((stream.startX - centerY) ** 2 + (stream.startY - centerY) ** 2)

          const finalX = x + perpX * waveOffset
          const finalY = y + perpY * waveOffset

          // Particle size decreases as it approaches center
          const size = 3 * (1 - progress * 0.7)
          const alpha = 0.8 * (1 - progress * 0.3)

          // Draw particle with glow effect
          ctx.shadowColor = stream.color
          ctx.shadowBlur = 8
          ctx.fillStyle =
            stream.color +
            Math.floor(alpha * 255)
              .toString(16)
              .padStart(2, "0")
          ctx.beginPath()
          ctx.arc(finalX, finalY, size, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }

        // Draw smooth gradient trail
        const trailGradient = ctx.createLinearGradient(stream.startX, stream.startY, centerX, centerY)
        trailGradient.addColorStop(0, stream.color + "40")
        trailGradient.addColorStop(0.8, stream.color + "20")
        trailGradient.addColorStop(1, stream.color + "00")

        ctx.strokeStyle = trailGradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(stream.startX, stream.startY)

        // Create curved path instead of straight line
        const controlX = stream.startX + (centerX - stream.startX) * 0.3
        const controlY = stream.startY + (centerY - stream.startY) * 0.3
        ctx.quadraticCurveTo(controlX, controlY, centerX, centerY)
        ctx.stroke()
      })

      // Draw neural network-like connections in the center
      const connectionRadius = 40
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + frame * 0.03
        const x = centerX + Math.cos(angle) * connectionRadius
        const y = centerY + Math.sin(angle) * connectionRadius

        const nodeAlpha = 0.4 + Math.sin(frame * 0.05 + i) * 0.3
        ctx.fillStyle = `rgba(255, 255, 255, ${nodeAlpha})`
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Connect nodes with thin lines
        if (i > 0) {
          const prevAngle = ((i - 1) / 6) * Math.PI * 2 + frame * 0.03
          const prevX = centerX + Math.cos(prevAngle) * connectionRadius
          const prevY = centerY + Math.sin(prevAngle) * connectionRadius

          ctx.strokeStyle = `rgba(255, 255, 255, 0.2)`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(prevX, prevY)
          ctx.lineTo(x, y)
          ctx.stroke()
        }
      }

      frame += 0.5
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full opacity-80" />
}

function EthicalAiModels() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 200

    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Fairness scale
      const balanceOffset = Math.sin(frame * 0.05) * 5
      ctx.strokeStyle = "#a0aec0"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(50, 150)
      ctx.lineTo(150, 150)
      ctx.moveTo(100, 150)
      ctx.lineTo(100, 100)
      ctx.moveTo(70 + balanceOffset, 100)
      ctx.lineTo(130 + balanceOffset, 100)
      ctx.stroke()

      ctx.fillStyle = "#10b981"
      ctx.beginPath()
      ctx.arc(70 + balanceOffset, 100, 8, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "#ef4444"
      ctx.beginPath()
      ctx.arc(130 + balanceOffset, 100, 8, 0, Math.PI * 2)
      ctx.fill()

      // Transparency/Interpretability
      const revealProgress = Math.abs(Math.sin(frame * 0.03))
      ctx.strokeStyle = "#22d3ee"
      ctx.lineWidth = 1
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.arc(220, 100, 20 + i * 5, 0, Math.PI * 2 * revealProgress)
        ctx.stroke()
      }

      frame += 1
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full opacity-80" />
}

const visualizations = [
  {
    title: "Real-Time Risk Analytics",
    description: "Dynamic credit scoring visualization with neural network predictions",
    type: "risk-chart",
  },
  {
    title: "Image-Based Risk Modeling",
    description: "Visualizing spatial data for credit risk using neural networks.",
    type: "cnn-risk-viz",
  },
  {
    title: "Time-Series Forecasting",
    description: "Sequential modeling for predicting financial trends.",
    type: "deep-learning-forecast",
  },
  {
    title: "Financial Document NLP",
    description: "Analyzing financial text with transformer models.",
    type: "nlp-document-intel",
  },
  {
    title: "Graph-Based Loan Analysis",
    description: "Exploring relationships in loan data with graph neural networks.",
    type: "gnn-loan-relationships",
  },
  {
    title: "Multimodal Learning",
    description: "Integrating text, image, and numerical data for comprehensive analysis.",
    type: "multimodal-integration",
  },
]

export function CodeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getVisualization = (type: string) => {
    switch (type) {
      case "risk-chart":
        return <RiskChart />
      case "cnn-risk-viz":
        return <FraudMatrix />
      case "deep-learning-forecast":
        return <DeepLearningForecast />
      case "nlp-document-intel":
        return <NlpDocumentIntel />
      case "gnn-loan-relationships":
        return <GnnLoanRelationships />
      case "multimodal-integration":
        return <MultimodalIntegration />
      default:
        return <RiskChart />
    }
  }

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white bg-clip-text text-transparent">AI in Motion</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visualizations.map((viz, index) => (
            <Link href="/labs" key={index} passHref legacyBehavior>
              <motion.a
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 15 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="cursor-pointer group"
                style={{ textDecoration: "none" }}
              >
                <Card className="bg-slate-900/30 backdrop-blur-md border border-cyan-500/20 p-6 h-80 group hover:border-cyan-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="h-48 mb-4 rounded-lg overflow-hidden bg-slate-950/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10" />
                    {getVisualization(viz.type)}
                  </div>
                  <h3 className="text-lg font-semibold text-[#44937B] mb-2 group-hover:text-[#44937B] transition-colors">
                    {viz.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{viz.description}</p>
                </Card>
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

