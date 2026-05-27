"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Zap } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "Data Science",
    "Computer Vision",
    "NLP",
    "React",
    "Node.js",
    "SQL",
  ]

  const features = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Expertise in developing intelligent systems and predictive models",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building end-to-end applications with modern technologies",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Extracting insights from complex datasets and visualizations",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Creating cutting-edge solutions for real-world problems",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="section-title mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-light/80 max-w-3xl mx-auto leading-relaxed">
            Pushing the boundaries of AI/ML with research-driven implementations and production-ready systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <p className="text-lg leading-relaxed text-muted-light/90">
              AI research enthusiast exploring the frontiers of computer vision, knowledge distillation, and RAG systems. I combine rigorous academic training with practical experience building production-scale ML systems that solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-muted-light/90">
              Currently advancing medical imaging with novel CNN architectures at DFKI, while architecting intelligent form digitization pipelines. I am passionate about bridging the gap between cutting-edge research and deployable solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-light/90">
              Committed to continuous learning and pushing the boundaries of what&apos;s possible with AI—whether through optimized model compression, domain-specific fine-tuning, or innovative system design.
            </p>
          </div>

          <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="card-modern card-hover p-8 space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-light bg-clip-text text-transparent">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-primary/20 text-primary-light border border-primary/30 hover:border-primary/60 hover:bg-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`card-modern card-hover group p-6 text-center ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl flex items-center justify-center group-hover:from-primary/50 group-hover:to-secondary/50 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-primary-light" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--primary))] group-hover:via-[rgb(var(--secondary))] group-hover:to-[rgb(var(--accent-warm))] group-hover:bg-clip-text">{feature.title}</h3>
              <p className="text-sm text-muted-light/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
