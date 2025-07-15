"use client"

import { motion } from "framer-motion"
import { Cpu, ShieldCheck, Code } from "lucide-react"

export function AboutBookSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-slate-900 text-slate-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 z-0" />
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400"
        >
          About Deep Learning in Banking
        </motion.h2>

        <div className="space-y-8 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Deep Learning in Banking is a comprehensive resource at the intersection of artificial intelligence and
            financial services, combining academic depth with practical insight to address the real-world complexities
            of deploying deep learning technologies in banking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-start gap-4"
          >
            <Cpu className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <p>
              The book explores advanced machine learning techniques, including convolutional neural networks, graph
              neural networks, transformers, and large language models, providing a deep dive into their application
              within the financial sector.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-start gap-4"
          >
            <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <p>
              It also examines critical themes such as fairness, regulatory compliance, explainability, and trust. These
              considerations are central to developing responsible AI systems that meet the unique demands of the
              financial industry, ensuring ethical and robust implementation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex items-start gap-4"
          >
            <Code className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <p>
              Designed for academics, practitioners, regulators, and graduate students alike, the book integrates
              real-world case studies drawn from financial applications with hands-on labs and open-source code to
              support experiential learning. It also provides a clear framework for understanding both the technical and
              ethical dimensions of artificial intelligence in finance. More than just a textbook, this is a
              forward-looking guide for building intelligent, transparent, and compliant financial systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 