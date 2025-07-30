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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg dark:gradient-bg opacity-90" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl floating" />
      <div
        className="absolute top-40 right-20 w-20 h-20 bg-purple-500/10 rounded-full blur-xl floating"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-20 w-18 h-18 bg-indigo-500/10 rounded-full blur-xl floating"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? "slide-in-left" : "opacity-0"}`}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gray-100">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Sarmad Khan
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-medium">
                Artificial Intelligence Student at FAST-NUCES
              </p>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                Passionate about leveraging AI to solve complex problems and create innovative solutions. Experienced in
                machine learning, deep learning, and data science.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white border-0 transition-all duration-300 hover:scale-105"
              >
                <Rocket className="mr-2 h-5 w-5" />
                View My Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-400/30 text-gray-200 hover:bg-gray-800/20 transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? "slide-in-right" : "opacity-0"}`}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
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
