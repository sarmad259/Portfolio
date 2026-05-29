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
      image: "/images/formilate-hero.jpg",
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

  const handleGitHubClick = (url: string) => {
    try {
      window.open(url, "_blank")
    } catch (error) {
      console.error("Failed to open GitHub link:", error)
    }
  }

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="section-title mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-light/80 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI and ML solutions with real-world impact
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
                  <div
                    className={`card-modern card-hover group h-full overflow-hidden ${
                      project.featured ? "ring-2 ring-accent-warm/30" : ""
                    } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col h-full">
                      {/* Image Section */}
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative flex-shrink-0">
                        {project.featured && (
                          <div className="absolute top-3 right-3 z-10 animate-pulse">
                            <div className="bg-gradient-to-r from-accent-warm to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                              <Star className="h-3 w-3 fill-current" />
                              Featured
                            </div>
                          </div>
                        )}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col flex-grow p-6 space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground transition-all duration-300 flex items-center gap-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--primary))] group-hover:via-[rgb(var(--secondary))] group-hover:to-[rgb(var(--accent-warm))] group-hover:bg-clip-text">
                            {project.title}
                            {project.featured && <Star className="h-4 w-4 text-accent-warm fill-current" />}
                          </h3>
                        </div>

                        <p className="text-sm text-muted-light/90 leading-relaxed flex-grow">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={tech}
                              className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all duration-300 ${
                                project.featured
                                  ? "bg-accent-warm/10 text-accent-warm border border-accent-warm/20"
                                  : "bg-primary/10 text-primary-light border border-primary/20"
                              } group-hover:border-opacity-50`}
                              style={{ animationDelay: `${i * 0.05}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Button */}
                        <div className="flex gap-3 pt-2">
                          <button
                            onClick={() => handleGitHubClick(project.github)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/40 border border-primary/30 hover:border-primary text-primary-light hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 font-medium text-sm group/btn"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            aria-label="Previous project"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 p-2 rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/30 hover:border-primary text-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextProject}
            aria-label="Next project"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 p-2 rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/30 hover:border-primary text-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "w-8 bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30"
                    : "w-2 bg-muted/50 hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-modern card-hover group overflow-hidden ${
                project.featured ? "ring-2 ring-accent-warm/30" : ""
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col">
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative">
                  {project.featured && (
                    <div className="absolute top-3 right-3 z-10 animate-pulse">
                      <div className="bg-gradient-to-r from-accent-warm to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        Featured
                      </div>
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      {project.title}
                      {project.featured && <Star className="h-4 w-4 text-accent-warm fill-current" />}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-light/90 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded-md font-medium ${
                          project.featured
                            ? "bg-accent-warm/10 text-accent-warm border border-accent-warm/20"
                            : "bg-primary/10 text-primary-light border border-primary/20"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => handleGitHubClick(project.github)}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/20 hover:bg-primary/40 border border-primary/30 hover:border-primary text-primary-light hover:text-white transition-all duration-300 font-medium text-sm mt-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
