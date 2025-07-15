"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, Terminal } from "lucide-react"
import Link from "next/link"

const labs = [
  {
    chapter: "Chapter 2",
    title: "Visualizing Credit Risk with CNNs",
    description:
      "This hands-on lab explores how convolutional neural networks (CNNs) can be used to analyze LIDAR image data to predict loan delinquency by region. Readers will learn to build a custom image-based model using PyTorch and torchvision—bridging spatial data with financial insight.",
    colab: "https://colab.research.google.com/github/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap2_Image_Processing.ipynb",
    github: "https://github.com/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap2_Image_Processing.ipynb",
  },
  {
    chapter: "Chapter 3",
    title: "Forecasting Delinquencies with Deep Learning",
    description:
      "Dive into sequential modeling using LSTM and GRU architectures to forecast loan delinquency trends. This lab introduces key techniques for temporal prediction using real-world loan performance data.",
    colab: "https://colab.research.google.com/github/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap3_TimeSeries.ipynb",
    github: "https://github.com/Banking-Analytics-Lab/DLinBankingBook/blob/main/Labs/TextBook_Lab_Chap3_TimeSeries.ipynb",
  },
  {
    chapter: "Chapter 4",
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
            <span className="text-teal-400 ml-3">Labs</span>
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
              <Card className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 hover:border-teal-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-sm text-teal-400 font-medium mb-2">{lab.chapter}</div>
                      <h3 className="text-xl font-semibold text-slate-100 group-hover:text-teal-300 transition-colors duration-300 leading-tight">
                        {lab.title}
                      </h3>
                    </div>
                    <div className="text-teal-400 opacity-60 transition-transform duration-300 group-hover:rotate-90">
                      <Play className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="text-slate-400 mb-8 leading-relaxed">{lab.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white border-0 flex-1" asChild>
                        <a href={lab.colab} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Launch in Colab
                        </a>
                      </Button>
                    </motion.div>
                    <Button
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
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
    </div>
  )
}
