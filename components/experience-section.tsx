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
    <section ref={sectionRef} id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience in data science and software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`card-hover bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 ${
                isVisible ? "slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl flex items-center gap-2 mb-2">
                      <Building className="h-6 w-6 text-blue-500" />
                      {exp.company}
                    </CardTitle>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-xl font-semibold text-foreground">{exp.position}</p>
                      {exp.type && (
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      )}
                    </div>
                    {exp.location && (
                      <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground"></span>
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
