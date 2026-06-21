import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from '@phosphor-icons/react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: 'Brand Identity System',
    category: 'Graphic Design',
    description: 'Complete visual identity for a modern fintech startup, including logo, typography, and brand guidelines.',
    tags: ['Branding', 'Logo Design', 'Style Guide'],
    featured: true,
    gradient: 'from-violet-500/20 to-purple-500/20',
    hoverGradient: 'from-violet-500/40 to-purple-500/40',
    accentColor: 'oklch(0.65 0.25 290)'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'App Design',
    description: 'Intuitive iOS and Android banking app with seamless UX for managing finances on the go.',
    tags: ['UI/UX', 'Mobile', 'Financial'],
    featured: true,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    hoverGradient: 'from-cyan-500/40 to-blue-500/40',
    accentColor: 'oklch(0.60 0.18 220)'
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'High-converting online store built with React, featuring advanced filtering and checkout flows.',
    tags: ['React', 'E-Commerce', 'Full Stack'],
    featured: false,
    gradient: 'from-pink-500/20 to-rose-500/20',
    hoverGradient: 'from-pink-500/40 to-rose-500/40',
    accentColor: 'oklch(0.65 0.22 350)'
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Data-rich analytics dashboard with real-time updates and beautiful data visualizations.',
    tags: ['Dashboard', 'Analytics', 'TypeScript'],
    featured: false,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    hoverGradient: 'from-emerald-500/40 to-teal-500/40',
    accentColor: 'oklch(0.60 0.18 165)'
  }
]

type Category = 'All' | 'Graphic Design' | 'App Design' | 'Web Development'

const categories: Category[] = ['All', 'Graphic Design', 'App Design', 'Web Development']

export function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ letterSpacing: '-0.01em' }}>
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of our recent projects across design and development disciplines
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: activeCategory === category ? 'var(--primary)' : undefined,
                  borderColor: activeCategory === category ? 'var(--primary)' : undefined,
                }}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card 
                className="h-full overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl group cursor-pointer"
                style={{
                  boxShadow: hoveredProject === project.id 
                    ? `0 20px 50px -10px ${project.accentColor}40` 
                    : undefined,
                  borderColor: hoveredProject === project.id 
                    ? project.accentColor 
                    : undefined,
                  transform: hoveredProject === project.id 
                    ? 'translateY(-8px)' 
                    : undefined
                }}
              >
                <div 
                  className={`h-48 bg-gradient-to-br ${hoveredProject === project.id ? project.hoverGradient : project.gradient} flex items-center justify-center relative overflow-hidden transition-all duration-500`}
                  style={{
                    background: hoveredProject === project.id
                      ? `linear-gradient(135deg, ${project.accentColor}30, ${project.accentColor}15)`
                      : undefined
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div 
                      className="absolute -inset-full animate-[shimmer_2s_infinite]"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${project.accentColor}20, transparent)`,
                      }}
                    />
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge 
                        className="flex items-center gap-1 transition-all duration-300"
                        style={{
                          backgroundColor: hoveredProject === project.id ? project.accentColor : undefined,
                          color: hoveredProject === project.id ? 'white' : undefined,
                        }}
                      >
                        <Star 
                          weight="fill" 
                          size={14}
                          className="transition-transform duration-300 group-hover:rotate-12"
                        />
                        Featured
                      </Badge>
                    </div>
                  )}
                  
                  <div 
                    className="text-6xl font-bold transition-all duration-500 relative z-10"
                    style={{
                      color: hoveredProject === project.id 
                        ? `${project.accentColor}20` 
                        : 'currentColor',
                      transform: hoveredProject === project.id 
                        ? 'scale(1.15) rotate(5deg)' 
                        : 'scale(1)'
                    }}
                  >
                    {project.id.toString().padStart(2, '0')}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundImage: `linear-gradient(to right, transparent, ${project.accentColor}, transparent)`
                    }}
                  />
                </div>
                
                <CardContent className="p-6 transition-colors duration-500">
                  <div className="mb-2">
                    <Badge 
                      variant="secondary" 
                      className="mb-3 transition-all duration-300"
                      style={{
                        backgroundColor: hoveredProject === project.id ? `${project.accentColor}15` : undefined,
                        borderColor: hoveredProject === project.id ? `${project.accentColor}40` : undefined,
                        color: hoveredProject === project.id ? project.accentColor : undefined,
                      }}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 
                    className="text-2xl font-semibold mb-3 transition-colors duration-300"
                    style={{
                      color: hoveredProject === project.id ? project.accentColor : undefined
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs transition-all duration-300"
                        style={{
                          borderColor: hoveredProject === project.id ? `${project.accentColor}40` : undefined,
                          color: hoveredProject === project.id ? project.accentColor : undefined,
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
