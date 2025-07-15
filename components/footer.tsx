"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-slate-950 text-slate-400 py-8 md:py-12 border-t border-slate-800"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">
            Deep Learning <span className="text-[#BDDBD8]">in Banking</span>
          </h3>
          <p className="text-sm">By Cristián Bravo, Sebastián Maldonado, and María Óskarsdóttir</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-sm">
          <Link
            href="https://github.com/Banking-Analytics-Lab/DLinBankingBook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4B90A0] transition-colors"
          >
            Labs (GitHub)
          </Link>
          <Link
            href="https://www.wiley.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4B90A0] transition-colors"
          >
            Wiley
          </Link>
        </nav>
        <div className="mb-4">
          <span className="text-sm">Contact: <a href="mailto:contact@bankingbook.ml" className="text-[#4B90A0] hover:underline">contact@bankingbook.ml</a></span>
        </div>
        <p className="text-xs">&copy; 2025 Deep Learning in Banking. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}
