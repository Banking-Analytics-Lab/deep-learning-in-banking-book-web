"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter, Zap } from "lucide-react"

const labs = [
  {
    chapter: "Chapter 3",
    title: "Credit Risk Modeling with Neural Networks",
    description: "Build and train deep learning models for credit risk assessment using real banking data.",
    topic: "Risk Management",
    difficulty: "Intermediate",
    colab: "https://colab.research.google.com",
    github: "https://github.com",
    color: "emerald",
  },
  {
    chapter: "Chapter 5",
    title: "Fraud Detection with Autoencoders",
    description: "Implement unsupervised learning techniques to detect fraudulent transactions in real-time.",
    topic: "Security",
    difficulty: "Advanced",
    colab: "https://colab.research.google.com",
    github: "https://github.com",
    color: "cyan",
  },
  {
    chapter: "Chapter 7",
    title: "Algorithmic Trading with Reinforcement Learning",
    description: "Develop intelligent trading agents using deep reinforcement learning algorithms.",
    topic: "Trading",
    difficulty: "Expert",
    colab: "https://colab.research.google.com",
    github: "https://github.com",
    color: "blue",
  },
  {
    chapter: "Chapter 9",
    title: "Customer Segmentation with Deep Clustering",
    description: "Apply advanced clustering techniques to understand customer behavior patterns.",
    topic: "Analytics",
    difficulty: "Intermediate",
    colab: "https://colab.research.google.com",
    github: "https://github.com",
    color: "teal",
  },
]

const topics = ["All", "Risk Management", "Security", "Trading", "Analytics"]

export function LabsSection() {
  const [selectedTopic, setSelectedTopic] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredLabs = selectedTopic === "All" ? labs : labs.filter((lab) => lab.topic === selectedTopic)

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 hover:border-emerald-400/50",
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 hover:border-cyan-400/50",
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-400/50",
      teal: "from-teal-500/20 to-teal-600/20 border-teal-500/30 hover:border-teal-400/50",
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <section id="labs" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-[#BDDBD8] to-blue-400 bg-clip-text text-transparent">
              Hands-On Labs
            </span>
          </h2>

          {/* Topic Filter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {topics.map((topic) => (
              <Button
                key={topic}
                variant={selectedTopic === topic ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTopic(topic)}
                className={`${
                  selectedTopic === topic
                    ? "bg-gradient-to-r from-emerald-500 to-[#BDDBD8] text-white border-0"
                    : "border-[#BDDBD8]/30 text-[#BDDBD8] hover:bg-[#BDDBD8]/10 bg-transparent"
                } transition-all duration-300`}
              >
                <Filter className="mr-2 h-3 w-3" style={{ color: '#BDDBD8' }} />
                {topic}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredLabs.map((lab, index) => (
            <motion.div
              key={`${lab.chapter}-${selectedTopic}`}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group"
            >
              <Card
                className={`bg-gradient-to-br from-emerald-500/20 to-[#BDDBD8]/20 border-emerald-500/30 hover:border-[#BDDBD8]/50 backdrop-blur-md border transition-all duration-500 hover:shadow-2xl hover:shadow-[#BDDBD8]/10 h-full`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm font-medium mb-1" style={{ color: '#BDDBD8' }} >{lab.chapter}</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#BDDBD8] transition-colors duration-300">
                        {lab.title}
                      </h3>
                    </div>
                    <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }} style={{ color: '#BDDBD8' }}>
                      <Zap className="h-5 w-5" />
                    </motion.div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 text-xs bg-slate-800/50 rounded-full" style={{ color: '#BDDBD8' }} >{lab.topic}</span>
                    <span className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded-full">
                      {lab.difficulty}
                    </span>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">{lab.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className="bg-[#88BFCA] hover:bg-[#6faab7] text-white border-0 group/btn"
                        asChild
                      >
                        <a href={lab.colab} target="_blank" rel="noopener noreferrer">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            className="mr-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </motion.div>
                          Launch in Colab
                        </a>
                      </Button>
                    </motion.div>
                    <Button
                      variant="outline"
                      className="border-[#BDDBD8]/30 text-[#BDDBD8] hover:bg-[#BDDBD8]/10 bg-transparent"
                      asChild
                    >
                      <a href={lab.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
