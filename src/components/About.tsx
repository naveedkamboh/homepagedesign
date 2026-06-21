import React from 'react'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ letterSpacing: '-0.01em' }}>
              Crafting Digital Excellence Since 2018
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                We're a creative studio that believes design is more than aesthetics—it's about 
                solving problems, telling stories, and creating experiences that resonate.
              </p>
              <p>
                With expertise spanning graphic design, app development, and web engineering, 
                we bring a holistic approach to every project. Our team combines strategic 
                thinking with technical excellence to deliver work that doesn't just look 
                good, but performs brilliantly.
              </p>
              <p>
                From early-stage startups to established brands, we partner with clients who 
                value quality, innovation, and meaningful results. Every pixel, every line of 
                code, every interaction is crafted with intention and care.
              </p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 p-8">
                  <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-accent mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-primary mb-2">6</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-accent mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
