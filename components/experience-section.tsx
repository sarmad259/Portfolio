"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

export function ExperienceSection() {
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

  const experiences = [
    {
      company: "German Research Center for Artificial Intelligence (DFKI)",
      position: "Research Assistant",
      type: "Remote",
      duration: "Oct 2025 - Apr 2026",
      period: "7 mos",
      location: "Germany · Remote",
      description:
        "Designed a novel CNN architecture for medical image classification, raising diagnostic accuracy from 92% to 97% across clinical datasets. Applied KDLight distillation on VGG (92% size reduction) and MobileNet (2x compression, only 3% accuracy loss) using student-teacher architecture.",
      skills: ["CNN", "Medical Imaging", "Knowledge Distillation", "PyTorch", "Computer Vision"],
    },
    {
      company: "Owlvest",
      position: "AI Engineer",
      type: "Part-time",
      duration: "May 2025 - Dec 2025",
      period: "8 mos",
      location: "Islamabad, Pakistan · Remote",
      description:
        "Sole developer of an end-to-end RAG pipeline serving 17,000+ users across Discord and LinkedIn. Fine-tuned LLMs for domain-specific financial reasoning, reducing hallucination rate across active users.",
      skills: ["RAG Systems", "LLMs", "Discord API", "Financial AI", "Python", "JavaScript"],
    },
    {
      company: "Bytewise Fellowship",
      position: "Machine Learning Intern",
      duration: "June 2023 - Oct 2023",
      period: "5 mos",
      location: "Remote",
      description:
        "Engineered a pneumonia detection CNN in PyTorch achieving 92% accuracy, with optimized feature engineering pipelines for medical image analysis.",
      skills: ["PyTorch", "CNN", "Medical Imaging", "Python", "Data Augmentation"],
    },
  ]

  return (
    <section ref={sectionRef} id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="section-title mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-light/80 max-w-3xl mx-auto leading-relaxed">
            Hands-on expertise in AI/ML research and production-scale systems
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`card-modern card-hover group p-6 md:p-8 ${
                isVisible ? "animate-fade-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                {/* Left Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/20 flex-shrink-0 group-hover:bg-primary/40 transition-colors duration-300">
                      <Building className="h-5 w-5 text-primary-light" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--primary))] group-hover:via-[rgb(var(--secondary))] group-hover:to-[rgb(var(--accent-warm))] group-hover:bg-clip-text">
                        {exp.company}
                      </h3>
                    </div>
                  </div>

                  <div className="ml-11 space-y-2 mb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <p className="text-lg font-semibold text-muted-light">{exp.position}</p>
                      {exp.type && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary-light border border-primary/30 font-medium">
                          {exp.type}
                        </span>
                      )}
                    </div>
                    {exp.location && (
                      <p className="text-sm text-muted-light/70 flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                        {exp.location}
                      </p>
                    )}
                  </div>

                  <p className="ml-11 text-sm md:text-base text-muted-light/90 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="ml-11 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md font-medium bg-secondary/20 text-secondary border border-secondary/30 group-hover:border-secondary/50 transition-all duration-300"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Timeline */}
                <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                  <div className="flex items-center gap-2 text-primary-light font-semibold">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm md:text-base">{exp.duration}</span>
                  </div>
                  <span className="text-xs text-muted-light/70 font-medium">{exp.period}</span>
                  <div className="h-12 w-px bg-gradient-to-b from-primary/40 to-transparent mt-2 hidden md:block"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
