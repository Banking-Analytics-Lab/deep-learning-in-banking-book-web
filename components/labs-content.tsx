"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, Terminal } from "lucide-react"
import Link from "next/link"

type Lab = {
  chapter: string
  title: string
  description: string
  colab: string
  github: string
  badge?: string
  alternate?: { label: string; colab: string; github: string }
}

const labs: Lab[] = [
  {
    chapter: "Chapter 2",
    title: "Reading Neighborhoods from Above with CNNs",
    badge: "New case",
    description:
      "Can a height map of a neighborhood tell how deprived it is? Using open LiDAR data for Greater London, this lab follows the chapter's algorithms step by step: it trains a CNN from scratch and fine-tunes a pretrained EfficientNet. It then tests whether the image adds to the structured data a bank already has, with a validation design that respects geography.",
    colab: "https://colab.research.google.com/github/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap2_LiDAR_Deprivation_London.ipynb",
    github: "https://github.com/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap2_LiDAR_Deprivation_London.ipynb",
    alternate: {
      label: "Original book case, corrected: LiDAR and loan delinquency in US areas",
      colab: "https://colab.research.google.com/github/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap2_Image_Processing.ipynb",
      github: "https://github.com/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap2_Image_Processing.ipynb",
    },
  },
  {
    chapter: "Chapter 3",
    badge: "Updated",
    title: "Forecasting Delinquencies with Deep Learning",
    description:
      "Dive into sequential modeling using LSTM and GRU architectures to forecast loan delinquency trends. This lab introduces key techniques for temporal prediction using real-world loan performance data.",
    colab: "https://colab.research.google.com/github/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap3_TimeSeries.ipynb",
    github: "https://github.com/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap3_TimeSeries.ipynb",
  },
  {
    chapter: "Chapter 4",
    badge: "Updated",
    title: "NLP for Financial Document Intelligence",
    description:
      "Explore the power of Transformer models for analyzing financial text. Using the Hugging Face library, this lab walks through tokenization, fine-tuning, and evaluating pre-trained models on finance-specific language tasks.",
    colab: "https://colab.research.google.com/github/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap4_Textual_Data.ipynb",
    github: "https://github.com/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap4_Textual_Data.ipynb",
  },
  {
    chapter: "Chapter 5",
    title: "Modeling Relationships in Loan Data with GNNs",
    description:
      "This lab transforms Freddie Mac loan data into graph structures and applies Graph Neural Networks—including GCN, GAT, and GraphSAGE—to predict mortgage defaults. Learn how relational learning improves predictive accuracy in financial contexts.",
    colab: "https://colab.research.google.com/github/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap5_Networks.ipynb",
    github: "https://github.com/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap5_Networks.ipynb",
  },
  {
    chapter: "Chapter 6",
    title: "Prompt Engineering and Fine-Tuning with LLaMA",
    description:
      "Learn how to harness LLaMA 3.2B for domain-specific financial tasks. This lab covers prompt design, model customization, and practical fine-tuning techniques to build more intelligent language-based systems in banking.",
    colab: "https://colab.research.google.com/github/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap6_LLM.ipynb",
    github: "https://github.com/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap6_LLM.ipynb",
  },
  {
    chapter: "Chapter 7",
    title: "Integrating Text, Images, Time-Series & Tabular Data",
    description:
      "Bring everything together with a multimodal approach. This lab combines static financial variables, time-series trends, geospatial images, and text into a unified deep learning model—offering a holistic view of borrower risk.",
    colab: "https://colab.research.google.com/github/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap7_Multimodal_Data.ipynb",
    github: "https://github.com/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap7_Multimodal_Data.ipynb",
  },
  {
    chapter: "Chapter 8",
    title: "Building Ethical and Transparent AI Models",
    description:
      "A two-part lab focused on responsible AI. First, evaluate credit scoring fairness across demographic groups. Then, use SHAP to interpret predictions from language models—reinforcing trust and transparency in model outputs.",
    colab: "https://colab.research.google.com/github/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap8_FairnessandExplainability.ipynb",
    github: "https://github.com/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap8_FairnessandExplainability.ipynb",
  },
]

export function LabsContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="py-16">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight mb-8">
            <span className="text-slate-100">Interactive</span>
            <span className="ml-3" style={{ color: '#BDDBD8' }}>Labs</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore hands-on implementations that bring each chapter to life. Experience real-world banking AI through
            immersive, code-driven learning that transforms complex concepts into actionable insights.
          </p>
        </motion.div>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {labs.map((lab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: 5 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                rotateX: 2,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group"
            >
              <Card className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 hover:border-[#BDDBD8]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#BDDBD8]/10 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-sm font-medium" style={{ color: '#BDDBD8' }} >{lab.chapter}</div>
                        {lab.badge && (
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-[#BDDBD8]/15 text-[#BDDBD8] border border-[#BDDBD8]/30">
                            {lab.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100 group-hover:text-[#BDDBD8] transition-colors duration-300 leading-tight">
                        {lab.title}
                      </h3>
                    </div>
                    <div className="text-[#BDDBD8] opacity-60 transition-transform duration-300 group-hover:rotate-90">
                      <Play className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="text-slate-400 mb-8 leading-relaxed">{lab.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="bg-[#88BFCA] hover:bg-[#6faab7] text-white border-0 flex-1" asChild>
                        <a href={lab.colab} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
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

                  {lab.alternate && (
                    <div className="mt-6 pt-4 border-t border-slate-700/50 text-sm text-slate-400">
                      <div className="mb-2">{lab.alternate.label}</div>
                      <div className="flex gap-4">
                        <a href={lab.alternate.colab} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#88BFCA] hover:text-[#BDDBD8] transition-colors">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Colab
                        </a>
                        <a href={lab.alternate.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#88BFCA] hover:text-[#BDDBD8] transition-colors">
                          <Github className="mr-1 h-3 w-3" />
                          GitHub
                        </a>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
