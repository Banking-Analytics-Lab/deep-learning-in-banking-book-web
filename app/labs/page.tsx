"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { LabsContent } from "@/components/labs-content"
import { motion } from "framer-motion"

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <main className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LabsContent />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
