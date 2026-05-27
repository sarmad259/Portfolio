"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ChevronLeft, ChevronRight, Star } from "lucide-react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
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

  const projects = [
    {
      title: "Formilate — AI Form Digitization Pipeline",
      description:
        "Architected an end-to-end pipeline digitizing physical forms using YOLOv11 object detection and a novel weighted spatial clustering algorithm, improving accuracy from 56% to 72%. Designed an agentic self-learning system via OpenRouter that extracts correction rules from user feedback into PostgreSQL JSONB for automated prompt injection. Shipped a full-stack app (Django REST + React 19) with JWT auth, Monaco Editor, and ReactFlow.",
      technologies: ["YOLOv11", "ONNX", "Tesseract", "GPT-4", "Django REST", "React 19", "PostgreSQL"],
      image: "/images/formilate.jpg",
      github: "https://github.com/sarmad259/formilate",
      featured: true,
    },
    {
      title: "Pneumonia Detector",
      description:
        "Trained a CNN-based medical image classifier achieving 92% accuracy on chest X-ray data using PyTorch, with data augmentation to improve generalization. Deployed model via Flask REST API with real-time inference visualization, enabling clinicians to receive instant predictions with confidence scores.",
      technologies: ["Python", "PyTorch", "CNN", "Flask", "Medical Imaging"],
      image: "/images/pneumonia-detector.jpg",
      github: "https://github.com/sarmad259/pneumonia-detector",
    },
    {
      title: "Kisan Saathi — Agricultural Advisory Platform",
      description:
        "Launched an agri-tech platform with a Gemini 1.5 Flash advisory chatbot and CV-based plant disease detection, delivering real-time crop diagnosis to smallholder farmers. Integrated Node.js backend with RESTful APIs serving crop health recommendations and disease alerts based on user-uploaded field images.",
      technologies: ["React", "Node.js", "Gemini 1.5 Flash", "Computer Vision", "REST APIs"],
      image: "/images/kisan-saathi.jpg",
      github: "https://github.com/sarmad259/kisan-saathi",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-muted/30" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my latest work in AI, machine learning, and system development
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card
                    className={`card-hover bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 ${
                      project.featured ? "ring-2 ring-yellow-500/20" : ""
                    } ${isVisible ? "fade-in" : "opacity-0"}`}
                  >
                    <CardHeader>
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg mb-4 overflow-hidden relative">
                        {project.featured && (
                          <div className="absolute top-2 right-2 z-10">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                              <Star className="h-3 w-3 fill-current" />
                              Featured
                            </div>
                          </div>
                        )}
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        {project.title}
                        {project.featured && <Star className="h-5 w-5 text-yellow-500 fill-current" />}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className={`${
                              project.featured
                                ? "bg-gradient-to-r from-yellow-500/10 to-orange-500/10"
                                : "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                            }`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-accent/50 transition-all duration-200 hover:scale-105 bg-transparent"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm hover:bg-accent/50"
            onClick={prevProject}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm hover:bg-accent/50"
            onClick={nextProject}
            aria-label="Next project"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentProject ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentProject(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`card-hover bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 ${
                project.featured ? "ring-2 ring-yellow-500/20" : ""
              } ${isVisible ? "fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg mb-4 overflow-hidden relative">
                  {project.featured && (
                    <div className="absolute top-2 right-2 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        Featured
                      </div>
                    </div>
                  )}
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl flex items-center gap-2">
                  {project.title}
                  {project.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`text-xs ${
                        project.featured
                          ? "bg-gradient-to-r from-yellow-500/10 to-orange-500/10"
                          : "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-accent/50 transition-all duration-200 hover:scale-105 bg-transparent"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
