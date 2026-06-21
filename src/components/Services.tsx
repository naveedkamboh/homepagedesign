import React from 'react'
import { motion } from 'framer-motion'
import { PaintBrush, DeviceMobile, Code } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: PaintBrush,
    title: 'Graphic Design',
    description: 'Bold visual identities, stunning brand assets, and eye-catching marketing materials that make your brand unforgettable.',
    color: 'text-primary'
  },
  {
    icon: DeviceMobile,
    title: 'App Design',
    description: 'Intuitive mobile and desktop applications with beautiful interfaces that users love, built for iOS, Android, and beyond.',
    color: 'text-accent'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'High-performance websites and web applications powered by modern frameworks, optimized for speed and conversion.',
    color: 'text-primary'
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ letterSpacing: '-0.01em' }}>
            What We Create
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-spectrum design and development services to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full border-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/40 group">
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                      <IconComponent className={`${service.color}`} size={32} weight="duotone" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
