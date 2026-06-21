import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, Moon, Sun } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { useTheme } from '@/hooks/use-theme'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'portfolio' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme, mounted, isTransitioning } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Creative Studio
            </motion.button>

            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  onClick={() => scrollToSection(link.id)}
                  className={`relative transition-colors ${
                    activeSection === link.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative overflow-hidden"
                aria-label="Toggle theme"
                disabled={isTransitioning}
              >
                {mounted && (
                  <motion.div
                    initial={false}
                    animate={{ 
                      rotate: theme === 'dark' ? 180 : 0,
                      scale: isTransitioning ? 0.8 : 1
                    }}
                    transition={{ 
                      rotate: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                      scale: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
                    }}
                  >
                    {theme === 'dark' ? (
                      <Moon weight="fill" className="text-primary" />
                    ) : (
                      <Sun weight="fill" className="text-accent" />
                    )}
                  </motion.div>
                )}
              </Button>
              
              <Button
                onClick={() => scrollToSection('contact')}
                size="sm"
              >
                Get Started
              </Button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                disabled={isTransitioning}
              >
                {mounted && (
                  <motion.div
                    initial={false}
                    animate={{ 
                      scale: isTransitioning ? 0.8 : 1 
                    }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.4, 0, 0.2, 1] 
                    }}
                  >
                    {theme === 'dark' ? (
                      <Moon weight="fill" className="text-primary" />
                    ) : (
                      <Sun weight="fill" className="text-accent" />
                    )}
                  </motion.div>
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <List size={24} weight="bold" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="w-full sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left text-2xl font-bold">
              Menu
            </SheetTitle>
            <SheetDescription className="text-left">
              Navigate to any section
            </SheetDescription>
          </SheetHeader>
          
          <div className="flex flex-col gap-2 mt-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button
                  variant={activeSection === link.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full justify-start text-lg py-6 ${
                    activeSection === link.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-secondary'
                  }`}
                >
                  {link.label}
                </Button>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              className="mt-4"
            >
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="w-full py-6 text-lg"
              >
                Get Started
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: (navLinks.length + 1) * 0.1 }}
              className="mt-6 pt-6 border-t border-border"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={toggleTheme}
                className="w-full py-6 text-lg justify-start gap-3"
                disabled={isTransitioning}
              >
                {mounted && (
                  <>
                    <motion.div
                      animate={{ 
                        scale: isTransitioning ? 0.8 : 1 
                      }}
                      transition={{ 
                        duration: 0.2, 
                        ease: [0.4, 0, 0.2, 1] 
                      }}
                    >
                      {theme === 'dark' ? (
                        <Moon weight="fill" className="text-primary" />
                      ) : (
                        <Sun weight="fill" className="text-accent" />
                      )}
                    </motion.div>
                    <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
