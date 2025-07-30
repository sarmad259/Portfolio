"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CertificationsSection() {
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

  const certifications = [
    {
      title: "Google AI Essentials",
      issuer: "Google",
      description:
        "Comprehensive certification covering fundamental AI concepts, machine learning principles, and practical applications of AI technologies.",
      skills: ["Artificial Intelligence", "Machine Learning", "AI Ethics", "AI Applications"],
      link: "#",
    },
    {
      title: "Microsoft Excel",
      issuer: "Microsoft",
      description:
        "Advanced certification in Microsoft Excel for data analysis, visualization, and business intelligence applications.",
      skills: ["Data Analysis", "Data Visualization", "Business Intelligence", "Excel Advanced Functions"],
      link: "#",
    },
  ]

  return (
    <section ref={sectionRef} id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that enhance my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`card-hover bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 ${
                isVisible ? "fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6 text-blue-500" />
                  {cert.title}
                </CardTitle>
                <p className="text-lg text-muted-foreground">{cert.issuer}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-accent/50 transition-all duration-200 hover:scale-105 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
