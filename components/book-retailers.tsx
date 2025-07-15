"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ShoppingCart, BookOpen, Store, Building2 } from "lucide-react"

export function BookRetailers() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 z-0" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-white"
        >
          Get Your Copy Today
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
        >
          <motion.div whileHover={{ scale: 1.08, rotate: 2 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="bg-[#3E6764] hover:bg-[#33534F] text-white px-6 py-4 rounded-lg font-semibold shadow transition-transform duration-200 group"
            >
              <a
                href="https://mybook.to/DeepLearnBank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ShoppingCart className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                Amazon
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08, rotate: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="bg-[#BDDBD8] hover:bg-[#A2C2BC] text-[#3E6764] px-6 py-4 rounded-lg font-semibold shadow transition-transform duration-200 group"
            >
              <a
                href="https://www.barnesandnoble.com/w/deep-learning-in-banking-cristian-bravo/1147563948?ean=9781394295371"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <BookOpen className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                Barnes & Noble
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08, rotate: 2 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="bg-[#4B90A0] hover:bg-[#397282] text-white px-6 py-4 rounded-lg font-semibold shadow transition-transform duration-200 group"
            >
              <a
                href="https://bookshop.org/p/books/deep-learning-in-banking-leveraging-artificial-intelligence-for-next-generation-financial-services-cristian-bravo/22669711?ean=9781394295371&next=t&next=t"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Store className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                Bookshop.org
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08, rotate: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="bg-[#44937B] hover:bg-[#35725F] text-white px-6 py-4 rounded-lg font-semibold shadow transition-transform duration-200 group"
            >
              <a
                href="https://www.porchlightbooks.com/products/deep-learning-in-banking-cristian-bravo-9781394295371"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Building2 className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                Porchlight
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
