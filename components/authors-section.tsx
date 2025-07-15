"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, ExternalLink } from "lucide-react"

const authors = [
  {
    name: "Cristian Bravo",
    title: "Professor and Canada Research Chair in Banking and Insurance Analytics",
    institution: "Western University, Canada",
    bio: `Cristián Bravo is Professor and the Canada Research Chair in Banking and Insurance Analytics at Western University, Canada, where he also serves as the Director of the Banking Analytics Lab. His research lies at the intersection of data science, analytics, and credit risk, researching how techniques such as multimodal deep learning, social network analysis, and causal inference can be used to understand relations between consumers and financial institutions. He has over 75 academic works in high-impact journals and conferences in operational research, finance, and computer science. He serves as an editorial board member in Applied Soft Computing and the Journal of Business Analytics and is the co-author of the book “Profit Driven Business Analytics” (2017), which has sold over 6,000 copies to date, and of “Deep Learning in Banking” (2025). Dr. Bravo has been quoted by The Wall Street Journal, WIRED, RFE (France), CTV, The Toronto Star, The Globe and Mail, and Global News, among others. He is also a regular panelist at CBC News’ Weekend Business Panel where he discusses the latest news in Banking, Finance and Artificial Intelligence. He can be reached via LinkedIn, by Bluesky @cribravo.bsky.social, or through his lab’s website at https://thebal.ai/` ,
    image: "/author_images/CristianBravo.jpg",
    linkedin: "https://www.linkedin.com/in/cristianbravor/",
    scholar: "https://scholar.google.com/citations?user=mR2FtsAAAAAJ&hl=en",
  },
  {
    name: "Sebastian Maldonado",
    title: "Full Professor",
    institution: "School of Economics and Business, University of Chile",
    bio: `Sebastián Maldonado is currently Full Professor at the School of Economics and Business, University of Chile. He received his B.S. and M.S. degrees from the University of Chile, in 2007, and his Ph.D. degree from the University of Chile, in 2011. Sebastián Maldonado has published more than 100 scientific contributions (WOS papers) in the last 15 years. He was chair (president) of the Chilean chapter of the IEEE Computational Intelligence Society, and the Chilean chapter of the IFORS' Operational Research Society (ICHIO). He was also a member of the Academic Senate of the University of Chile, and author of the book "Analytics and Big Data: Data science applied to the business world" (ISBN: 978-84-18982-63-7, in Spanish). His research interests focus on machine learning and business analytics, with applications in finance, marketing, and customer service.` ,
    image: "/author_images/SebastianMoldonado.jpg",
    linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-maldonado-7409432/",
    scholar: "https://scholar.google.com/citations?hl=en&user=Qzl7WeYAAAAJ",
  },
  {
    name: "Maria Oskarsdottir",
    title: "Lecturer and Associate Professor",
    institution: "University of Southampton / Reykjavik University",
    bio: `María Óskarsdóttir is a Lecturer at the School of Mathematical Sciences of the University of Southampton and an Associate Professor at the Department of Computer Science at Reykjavík University. She holds a Ph.D. in Business Analytics from the Faculty of Economics and Business at KU Leuven in Belgium. Her research is focused on the intersection of network science and machine learning, looking at practical applications of data science and analytics whereby she leverages advanced machine learning techniques, network science, and various sources of data with the goal of increasing the impact of the analytics process and facilitating better usage of data science for decision making in various domains, such as finance, learning, marketing, health care and sustainability. She has over 50 publications in high-impact journals and conferences in the domains of operations research, network science and information systems. She serves as editor at Machine Learning.` ,
    image: "/author_images/MariaOskarsdottir.jpg",
    linkedin: "https://www.linkedin.com/in/mariaoskarsdottir/",
    scholar: "https://scholar.google.com/citations?user=-R5x1_QAAAAJ&hl=en",
  },
]

export function AuthorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="authors" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Meet the Authors
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Leading experts in machine learning and financial technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {authors.map((author, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group"
            >
              <Card className="bg-slate-900/30 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green to-slate p-1">
                      <img
                        src={author.image || "/placeholder.svg"}
                        alt={author.name}
                        className="w-full h-full rounded-full object-cover bg-lightnavy aspect-square"
                        style={{ objectFit: 'cover', width: '100%', height: '100%', maxWidth: '128px', maxHeight: '128px' }}
                      />
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {author.name}
                  </motion.h3>

                  <motion.p
                    className="text-cyan-400 font-medium mb-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {author.title}
                  </motion.p>

                  <motion.p
                    className="text-sm text-slate-400 mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {author.institution}
                  </motion.p>

                  <motion.p
                    className="text-slate-300 text-sm leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    {author.bio}
                  </motion.p>

                  <motion.div
                    className="flex justify-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                  >
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                        asChild
                      >
                        <a href={author.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                        asChild
                      >
                        <a href={author.scholar} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
