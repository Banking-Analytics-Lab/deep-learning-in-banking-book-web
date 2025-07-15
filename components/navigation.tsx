"use client"

import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Navigation() {
  const [isDark, setIsDark] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-darknavy/90 backdrop-blur-xl border-b border-lightnavy/50"
    >
      <div className="container mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            <span className="text-white">Deep Learning</span>
            <span className="text-green ml-2">in Banking</span>
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-slate hover:text-green transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link
              href="/authors"
              className="text-slate hover:text-green transition-colors duration-300 font-medium"
            >
              Authors
            </Link>
            <Link
              href="/labs"
              className="text-slate hover:text-green transition-colors duration-300 font-medium"
            >
              Labs
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pb-6 border-t border-slate-800/50"
          >
            <div className="flex flex-col space-y-6 mt-6">
              <Link href="/" className="text-slate hover:text-green transition-colors font-medium">
                Home
              </Link>
              <Link href="/authors" className="text-slate hover:text-green transition-colors font-medium">
                Authors
              </Link>
              <Link href="/labs" className="text-slate hover:text-green transition-colors font-medium">
                Labs
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
