"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Rocket } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(10,20,35)] via-[rgb(15,30,55)] to-[rgb(10,25,47)] opacity-100" />

      {/* Floating Glow Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30 animate-float" />
      <div
        className="absolute top-40 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-10 left-1/4 w-80 h-80 bg-accent-warm/10 rounded-full blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary/60 mr-2 animate-pulse" />
                <span className="text-sm font-medium text-primary-light">AI/ML Researcher & Engineer</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">Hi, I&apos;m </span>
                <span className="gradient-text block">Sarmad Khan</span>
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-muted-light">
                Advancing AI through Research & Innovation
              </p>

              <p className="text-lg text-muted-light/80 max-w-2xl leading-relaxed">
                I build cutting-edge AI/ML solutions that drive real-world impact. Specializing in computer vision, RAG systems, and medical imaging—transforming complex problems into elegant solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary inline-flex items-center group"
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                View My Projects
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-secondary inline-flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </button>
            </div>

            <div className="flex space-x-3 pt-4">
              <a
                href="https://github.com/sarmad259"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary/20 border border-primary/30 text-primary-light hover:bg-primary/40 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/sarmad-khan-0071bb24a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary/20 border border-primary/30 text-primary-light hover:bg-primary/40 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
              <a
                href="mailto:khansardarms@gmail.com"
                className="p-3 rounded-lg bg-primary/20 border border-primary/30 text-primary-light hover:bg-primary/40 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-110 group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent-warm rounded-full opacity-30 group-hover:opacity-50 blur transition-all duration-300" />
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 relative bg-card-bg group-hover:border-primary/50 transition-all duration-300">
                <Image
                  src="/images/profile.jpg"
                  alt="Sarmad Khan"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/60" />
        </div>
      </div>
    </section>
  )
}
