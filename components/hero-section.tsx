"use client"
import { motion } from "framer-motion"
import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [endorsementIndex, setEndorsementIndex] = useState(0)
  const endorsements = [
    {
      quote:
        "Not just presenting models, but providing the critical framework for building trust in them. A must-read for anyone serious about managing next-generation risk and building intelligent financial systems.",
      author:
        "Dhagash Mehta, Head of Applied AI Research, Blackrock. Editorial Board Member at the Journal of Financial Data Science.",
    },
    {
      quote:
        "An essential resource for fintech innovators and banking leaders, this book underscores the importance of deep learning in financial technology, offering tangible implementation frameworks and crucial regulatory details from respected authorities.",
      author: "Paul Edwards, Director of Risk, Wealthsimple",
    },
    {
      quote:
        "A comprehensive and timely guide that bridges advanced machine-learning methods with the realities of banking practice. Written by internationally recognised experts in data science, it combines technical rigour, regulatory insight, and practical case studies. This book offers a rare one-stop resource for deploying deep learning responsibly in financial services. Essential reading for data scientists, risk professionals, and academics shaping the future of AI in banking. And an excellent textbook for students preparing to enter the field.",
      author:
        "Professor Galina Andreeva, Director of Credit Research Centre, University of Edinburgh Business School",
    },
    {
      quote:
        "Deep Learning in Banking is a groundbreaking guide for the future of finance. The authors have crafted a visionary guide that redefines how artificial intelligence can—and should—be applied in financial services. With unmatched clarity, academic rigor, and practical insight, this work is a masterclass in responsible innovation.\n\nWhether you're a data scientist, banking executive, or regulator, this book is your essential companion for navigating the evolving landscape of financial AI. It doesn’t just explain deep learning—it equips you to use it ethically, effectively, and with real-world impact. Each chapter delivers not only deep conceptual understanding but also hands-on code implementations, making this book a true toolkit for the future.\n\nIf you're serious about staying ahead in financial risk and innovation, Deep Learning in Banking deserves a permanent place on your shelf—and in your strategic thinking.",
      author:
        "Matt Fabian, Director, Financial Services Research and Consulting, TransUnion",
    },
  ]

  // Auto-rotate endorsements every 7 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setEndorsementIndex((i) => (i + 1) % endorsements.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden flex flex-col justify-center">
      {/* Unified background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20 z-0" />

      {/* Large, seamless orb behind the book (stronger) */}
      <motion.div
        animate={{
          opacity: [0.7, 1, 0.7],
          x: ["-50%", "50%", "-50%"], 
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
          x: { duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }, // Add x transition
        }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-radial from-primary/60 via-primary/30 to-transparent rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{ pointerEvents: "none" }}
      />

      {/* Intense core glow behind the book */}
      <motion.div
        animate={{
          opacity: [0.8, 1, 0.8],
          x: ["-50%", "50%", "-50%"],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
          x: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }, // Add x transition
        }}
        className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-gradient-radial from-primary/80 via-primary/40 to-transparent rounded-full blur-[40px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{ pointerEvents: "none" }}
      />

      {/* Main content container */}
      <div className="relative z-20 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Content area - mobile: bottom, desktop: left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8 order-2 lg:order-1"
          >
            {/* On Sale badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full w-fit"
              style={{ backgroundColor: 'rgba(34, 197, 94, 0.3)' }}
            >
              <span className="text-sm font-semibold" style={{ color: '#86efac' }}>Buy Now!</span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Deep Learning <span style={{ color: '#BDDBD8' }}>in Banking</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#88BFCA' }}>
                Integrating Artificial Intelligence for Next-Generation Financial Services
              </h2>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Structured for both academic and professional use, the book offers real-world case studies and actionable insights,
                covering trust, regulation, fairness, and explainability.
              </p>
            </motion.div>

            {/* Endorsement carousel */}
            <div className="relative max-w-xl mb-8 overflow-visible flex items-start">
              {endorsements.map((endorsement, idx) =>
                endorsementIndex === idx && (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <div
                      className="bg-slate-900/40 px-6 py-4 rounded-lg shadow"
                      style={{ borderLeft: '4px solid #88BFCA' }}
                    >
                      <p className="italic text-slate-200 text-base md:text-lg mb-2">“{endorsement.quote}”</p>
                      <span className="block text-cyan-300 text-sm font-medium" style={{ color: '#88BFCA' }}>
                        {endorsement.author}
                      </span>
                    </div>
                  </motion.div>
                )
              )}
            </div>
            
            {/* Why Buy bullet list */}

            {/* Retailer buttons section removed */}
          </motion.div>

          {/* 3D Book area - mobile: top, desktop: right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center order-1 lg:order-2 relative group"
            style={{ zIndex: 30 }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* 3D Book Container with enhanced effects */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotateY: 8,
                  rotateX: -3,
                  z: 50,
                }}
                animate={{
                  scale: [1, 1.02, 1],
                  rotateY: [0, 2, 0],
                  z: [0, 10, 0],
                }}
                transition={{
                  scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                  rotateY: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                  z: { duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                }}
                className="relative perspective-1000 transform-gpu"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 30px rgba(107, 159, 255, 0.2))",
                }}
              >
                <div className="relative transform-gpu">
                  <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
                    {/* Glowy animated gradient background behind the book */}
                    <motion.div
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl z-0"
                    />
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full z-0 pointer-events-none blur-2xl"
                      style={{
                        background: `radial-gradient(350px circle at 50% 50%, rgba(59,130,246,0.22) 0%, rgba(16,185,129,0.16) 40%, transparent 100%)`,
                      }}
                    />
                    {/* Floating book image */}
                    <motion.img
                      src="/book2.png"
                      alt="Deep Learning in Banking Book Cover"
                      className="h-full object-contain drop-shadow-2xl rounded-xl relative z-10"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                      animate={{ y: [0, -18, 0, 18, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* decorative elements with better positioning */}
      <motion.div
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary/40 rounded-full"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
      />
      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.5,
        }}
        className="absolute top-1/2 left-1/3 w-2.5 h-2.5 bg-primary/25 rounded-full"
      />
    </section>
  )
}
