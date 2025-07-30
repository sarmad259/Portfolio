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
    <section ref={sectionRef} id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate AI student with hands-on experience in machine learning and data science
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`space-y-6 ${isVisible ? "slide-in-left" : "opacity-0"}`}>
            <p className="text-lg leading-relaxed">
              As a student at the National University of Computer and Emerging Sciences, I am pursuing a Bachelor's
              degree in Artificial Intelligence. I have gained practical experience through internships at Bytewise
              Limited and Doctor Billing Experts L.L.C, where I applied my skills in data science and programming to
              real-world projects.
            </p>
            <p className="text-lg leading-relaxed">
              I am passionate about leveraging AI to solve complex problems and create innovative solutions. I am also
              certified in Google AI Essentials and Microsoft Excel, which enhance my ability to analyze and visualize
              data effectively.
            </p>
            <p className="text-lg leading-relaxed">
              My goal is to continue learning and growing as an AI professional, and to contribute to the advancement of
              this field.
            </p>
          </div>

          <div className={`${isVisible ? "slide-in-right" : "opacity-0"}`}>
            <Card className="card-hover bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`card-hover bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 ${
                isVisible ? "fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
