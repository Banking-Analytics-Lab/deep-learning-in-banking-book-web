"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import Link from "next/link"

// Existing Animations (kept as is)
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

function TradingFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    canvas.width = 300
    canvas.height = 200
    const particles: Array<{ x: number; y: number; vx: number; vy: number; life: number }> = []
    const animate = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      // Add new particles
      if (Math.random() < 0.3) {
        particles.push({
          x: 0,
          y: Math.random() * canvas.height,
          vx: 2 + Math.random() * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
        })
      }
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.01
        if (p.life <= 0 || p.x > canvas.width) {
          particles.splice(i, 1)
          continue
        }
        ctx.fillStyle = `rgba(34, 211, 238, ${p.life * 0.8})`
        ctx.fillRect(p.x, p.y, 2, 2)
      }
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

// Refined Animations for the 7 Notebooks

function CnnRiskViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    canvas.width = 300
    canvas.height = 200

    const layers = [
      { x: 50, nodes: 8 }, // Input
      { x: 120, nodes: 6 }, // Conv
      { x: 190, nodes: 4 }, // Hidden
      { x: 260, nodes: 2 }, // Output
    ]
    const nodeRadius = 4
    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.lineWidth = 0.5
      for (let i = 0; i < layers.length - 1; i++) {
        const currentLayer = layers[i]
        const nextLayer = layers[i + 1]
        for (let j = 0; j < currentLayer.nodes; j++) {
          for (let k = 0; k < nextLayer.nodes; k++) {
            const y1 = canvas.height / 2 - (currentLayer.nodes / 2 - j - 0.5) * 20
            const y2 = canvas.height / 2 - (nextLayer.nodes / 2 - k - 0.5) * 20
            const activation = Math.sin((frame * 0.05 + j * 0.1 + k * 0.1) * 0.5) * 0.5 + 0.5
            ctx.strokeStyle = `rgba(34, 211, 238, ${activation * 0.7})` // Cyan for connections
            ctx.beginPath()
            ctx.moveTo(currentLayer.x, y1)
            ctx.lineTo(nextLayer.x, y2)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i]
        for (let j = 0; j < layer.nodes; j++) {
          const y = canvas.height / 2 - (layer.nodes / 2 - j - 0.5) * 20
          const pulse = Math.sin((frame * 0.1 + j * 0.2) * 0.5) * 0.5 + 0.5
          ctx.fillStyle = `rgba(16, 185, 129, ${pulse * 0.8})` // Green for nodes
          ctx.beginPath()
          ctx.arc(layer.x, y, nodeRadius, 0, Math.PI * 2)
          ctx.fill()
        }
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
        style={{ width: '100%', height: 'auto', maxHeight: '100%', aspectRatio: '3/2' }}
      />
    </div>
  )
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
      ctx.strokeStyle = "#10b981" // Green
      ctx.beginPath()
      for (let x = 0; x < canvas.width * 0.6; x += 5) {
        const y = 100 + Math.sin((x + frame) * 0.03) * 20
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Forecasted data (dashed line)
      ctx.strokeStyle = "#22d3ee" // Cyan
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
      ctx.fillStyle = "rgba(160, 174, 192, 0.2)" // Light gray for documents
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
        style={{ width: '100%', height: 'auto', maxHeight: '100%', aspectRatio: '3/2' }}
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
        ctx.fillStyle = "#22d3ee" // Cyan for nodes
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
        style={{ width: '100%', height: 'auto', maxHeight: '100%', aspectRatio: '3/2' }}
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
    const typingSpeed = 2 // characters per frame
    const cursorBlinkSpeed = 30 // frames per blink cycle

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = "16px monospace"
      ctx.textAlign = "left"
      ctx.textBaseline = "top"

      // Calculate typed text
      const typedLength = Math.min(promptText.length, Math.floor(frame / typingSpeed))
      const currentText = promptText.substring(0, typedLength)

      // Draw typed text
      ctx.fillStyle = "#a0aec0" // Light gray for text
      ctx.fillText(currentText, 20, 80) // Centered vertically, slightly left

      // Blinking cursor
      if (typedLength < promptText.length) {
        if (Math.floor(frame / cursorBlinkSpeed) % 2 === 0) {
          const textWidth = ctx.measureText(currentText).width
          ctx.fillStyle = "#a0aec0" // Cursor color
          ctx.fillRect(20 + textWidth, 80, 2, 16) // Draw cursor
        }
      } else {
        // Reset animation after a delay
        if (frame > promptText.length * typingSpeed + 100) {
          // Wait 100 frames after typing
          frame = 0 // Reset frame to restart animation
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

    const dataSources = [
      { type: "text", color: "#a0aec0", icon: "T", startX: 20, startY: 20 },
      { type: "image", color: "#ef4444", icon: "🖼️", startX: 280, startY: 20 },
      { type: "time-series", color: "#10b981", icon: "📈", startX: 20, startY: 180 },
      { type: "tabular", color: "#22d3ee", icon: "📊", startX: 280, startY: 180 },
    ]

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw central processing unit
      ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.abs(Math.sin(frame * 0.05)) * 0.2})`
      ctx.beginPath()
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
      ctx.lineWidth = 1
      ctx.stroke()

      dataSources.forEach((source, i) => {
        const progress = Math.min(1, (frame - i * 10) * 0.02) // Staggered arrival
        if (progress < 0) return

        const currentX = source.startX + (centerX - source.startX) * progress
        const currentY = source.startY + (centerY - source.startY) * progress

        // Draw data particle
        ctx.fillStyle = source.color
        ctx.beginPath()
        ctx.arc(currentX, currentY, 6, 0, Math.PI * 2)
        ctx.fill()

        // Draw trail
        ctx.strokeStyle = source.color
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(source.startX, source.startY)
        ctx.lineTo(currentX, currentY)
        ctx.stroke()

        // Draw icon at source
        ctx.font = "16px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillStyle = source.color
        ctx.fillText(source.icon, source.startX, source.startY)
      })

      frame += 1
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
    title: "AI-Powered Trading Flows",
    description: "Live algorithmic trading decision streams and market analysis",
    type: "trading-flow",
  },
  {
    title: "Fraud Detection Matrix",
    description: "Interactive anomaly detection with real-time transaction monitoring",
    type: "fraud-matrix",
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
]

export function CodeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getVisualization = (type: string) => {
    switch (type) {
      case "risk-chart":
        return <RiskChart />
      case "trading-flow":
        return <TradingFlow />
      case "fraud-matrix":
        return <FraudMatrix />
      case "cnn-risk-viz":
        return <CnnRiskViz />
      case "deep-learning-forecast":
        return <DeepLearningForecast />
      case "nlp-document-intel":
        return <NlpDocumentIntel />
      case "gnn-loan-relationships":
        return <GnnLoanRelationships />
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
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI in Motion
            </span>
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
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
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

