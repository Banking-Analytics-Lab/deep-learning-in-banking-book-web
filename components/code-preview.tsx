"use client"

import { useEffect, useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { highlightCode } from "@/lib/utils"
import "prismjs/themes/prism-tomorrow.css"

const codeSnippets = [
  {
    title: "Neural Network Implementation",
    code: `import tensorflow as tf
from tensorflow.keras import layers, models

# Build deep learning model for credit scoring
model = models.Sequential([
    layers.Dense(128, activation='relu', input_shape=(20,)),
    layers.Dropout(0.3),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(32, activation='relu'),
    layers.Dense(1, activation='sigmoid')
])

model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy', 'precision', 'recall']
)`,
  },
  {
    title: "Risk Assessment Pipeline",
    code: `import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

class RiskAssessment:
    def __init__(self):
        self.scaler = StandardScaler()
        self.model = None
    
    def preprocess_data(self, data):
        # Feature engineering for financial data
        features = data[['income', 'debt_ratio', 'credit_history']]
        scaled_features = self.scaler.fit_transform(features)
        return scaled_features
    
    def predict_default_probability(self, customer_data):
        processed = self.preprocess_data(customer_data)
        probability = self.model.predict(processed)
        return probability[0][0]`,
  },
]

function TypewriterCode({ code, isVisible }: { code: string; isVisible: boolean }) {
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isVisible) return

    const timer = setInterval(() => {
      if (currentIndex < code.length) {
        setDisplayedCode(code.slice(0, currentIndex + 1))
        setCurrentIndex((prev) => prev + 1)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [code, currentIndex, isVisible])

  // Apply syntax highlighting when code changes
  useEffect(() => {
    if (codeRef.current && displayedCode) {
      highlightCode(displayedCode, "python", codeRef.current).catch(() => {
        // Fallback: just set the text content
        if (codeRef.current) {
          codeRef.current.textContent = displayedCode
        }
      })
    }
  }, [displayedCode])

  return (
    <pre className="text-sm font-mono leading-relaxed bg-slate-900/50 rounded p-4 overflow-x-auto">
      <code ref={codeRef} className="language-python">
        {displayedCode}
        <span className="animate-pulse text-emerald-400">|</span>
      </code>
    </pre>
  )
}

export function CodePreview() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    const cards = document.querySelectorAll("[data-code-card]")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="code" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Live Code Examples
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore real implementations from the book with interactive Python snippets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {codeSnippets.map((snippet, index) => (
            <Card
              key={index}
              data-code-card
              data-index={index}
              className="bg-slate-900/50 backdrop-blur-md border border-emerald-500/20 p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
              style={{
                transform: `perspective(1000px) rotateX(${index % 2 === 0 ? "5deg" : "-5deg"}) rotateY(${index % 2 === 0 ? "-5deg" : "5deg"})`,
              }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">{snippet.title}</h3>
              </div>
              <div className="bg-slate-950/50 rounded-lg p-4 overflow-hidden">
                <TypewriterCode code={snippet.code} isVisible={visibleCards[index]} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
