import { useEffect, useState } from 'react'
import { useKV } from '@github/spark/hooks'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setThemeKV] = useKV<Theme>('theme-preference', 'light')
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    root.classList.remove('light', 'dark')
    if (theme) {
      root.classList.add(theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setIsTransitioning(true)
    
    const root = document.documentElement
    root.style.setProperty('--theme-transition-active', '1')
    
    setThemeKV((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
    
    setTimeout(() => {
      setIsTransitioning(false)
      root.style.removeProperty('--theme-transition-active')
    }, 400)
  }

  return { theme, toggleTheme, mounted, isTransitioning }
}
