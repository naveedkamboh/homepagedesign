import React from 'react'
import { Toaster } from '@/components/ui/sonner'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Portfolio } from '@/components/Portfolio'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'

function App() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Contact />
            <Toaster />
        </div>
    )
}

export default App