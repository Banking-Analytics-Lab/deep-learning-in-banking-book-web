"use client"

import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import { CodeSection } from "@/components/code-section"
import Link from "next/link"
import { Terminal } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import React from "react"
import "prismjs/themes/prism-tomorrow.css"
import { BookRetailers } from "@/components/book-retailers"
import { AboutBookSection } from "@/components/about-book"
import { highlightCode } from "@/lib/utils"

function RiskAssessmentPipelineSnippet() {
  const codeSnippet = `import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler\n\nclass RiskAssessment:\n    def __init__(self):\n        self.scaler = StandardScaler()\n        self.model = None\n    \n    def preprocess_data(self, data):\n        # Feature engineering for financial data\n        features = data[['income', 'debt_ratio', 'credit_history']]\n        scaled_features = self.scaler.fit_transform(features)\n        return scaled_features\n    \n    def predict_default_probability(self, customer_data):\n        processed = self.preprocess_data(customer_data)\n        probability = self.model.predict(processed)\n        return probability[0][0]`
  const codeRef = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prismLoaded, setPrismLoaded] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (currentIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(codeSnippet.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 18)
      return () => clearTimeout(timeout)
    } else {
      // Wait 2 seconds, then restart
      const resetTimeout = setTimeout(() => {
        setDisplayedCode("")
        setCurrentIndex(0)
      }, 2000)
      return () => clearTimeout(resetTimeout)
    }
  }, [mounted, currentIndex, codeSnippet])

    useEffect(() => {
    if (mounted && codeRef.current) {
      // Load Prism.js and highlight code
      highlightCode(displayedCode, "python", codeRef.current).then(() => {
        setPrismLoaded(true)
      }).catch(() => {
        // Fallback: just set the text content
        if (codeRef.current) {
          codeRef.current.textContent = displayedCode
        }
      })
    }
  }, [mounted, displayedCode])

  useEffect(() => {
    if (mounted && prismLoaded && codeRef.current) {
      // Re-highlight when Prism is loaded and code changes
      highlightCode(displayedCode, "python", codeRef.current).catch(() => {
        // Fallback: just set the text content
        if (codeRef.current) {
          codeRef.current.textContent = displayedCode
        }
      })
    }
  }, [mounted, prismLoaded, displayedCode])

  if (!mounted) return null
  return (
    <div className="my-20 max-w-3xl mx-auto">
      {/* Centered Explore Labs Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl font-extrabold text-green tracking-tight mb-2 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-green" />
          Explore Labs
        </h2>
        <p className="text-slate text-lg mb-5 max-w-xl">
          Dive deeper into hands-on AI labs and interactive code examples. Click below to discover more practical fintech experiments and learning resources.
        </p>
        <Link href="/labs" passHref legacyBehavior>
          <a className="inline-block bg-gradient-to-r from-green to-slate hover:from-green/80 hover:to-slate/80 text-darknavy font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200">
            Go to Labs
          </a>
        </Link>
      </div>
      <div
        className="bg-darknavy/80 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-lightnavy/50"
        style={{ height: "33em", minHeight: "33em", overflowY: "hidden" }}
      >
        <pre
          className="language-python"
          style={{ margin: 0, height: "100%", whiteSpace: "pre" }}
        >
          <code ref={codeRef} className="language-python" />
        </pre>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-darknavy text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <main>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}>
          <HeroSection />
          {/* Add a visually distinct divider and spacing between Hero and Labs */}

          <AboutBookSection />

          {/* Book Retailers Section */}
          <BookRetailers />
          
          {/* Explore Labs Section - centered and organized */}
          <div className="flex justify-center px-4">
            <div className="w-full max-w-3xl">
              <RiskAssessmentPipelineSnippet />
            </div>
          </div>
          {/* CodeSection below Labs */}
          <div className="mt-20">
            <CodeSection />
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
