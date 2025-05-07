import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold">
            <Link href="/">Sarmad Khan</Link>
          </div>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#education" className="text-sm font-medium transition-colors hover:text-primary">
              Education
            </Link>
            <Link href="#certifications" className="text-sm font-medium transition-colors hover:text-primary">
              Certifications
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/sarmad259" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/sarmad-khan-0071bb24a" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.instagram.com/msarmad.k/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Hi, I'm <span className="text-primary">Sarmad Khan</span>
              </h1>
              <p className="text-xl text-muted-foreground">Artificial Intelligence Student at FAST-NUCES</p>
              <p className="text-muted-foreground">
                Passionate about leveraging AI to solve complex problems and create innovative solutions. Experienced in
                machine learning, deep learning, and data science.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#projects">View My Projects</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
                <img src="/images/profile.png" alt="Sarmad Khan" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h2 className="mb-8 text-3xl font-bold">About Me</h2>
          <div className="rounded-lg border p-6">
            <p className="mb-4 text-muted-foreground">
              As a student at the National University of Computer and Emerging Sciences, I am pursuing a Bachelor's
              degree in Artificial Intelligence. I have gained practical experience through internships at Bytewise
              Limited and Doctor Billing Experts L.L.C, where I applied my skills in data science and programming to
              real-world projects.
            </p>
            <p className="mb-4 text-muted-foreground">
              I am passionate about leveraging AI to solve complex problems and create innovative solutions. I am also
              certified in Google AI Essentials and Microsoft Excel, which enhance my ability to analyze and visualize
              data effectively.
            </p>
            <p className="text-muted-foreground">
              My goal is to continue learning and growing as an AI professional, and to contribute to the advancement of
              this field.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="mb-8 text-3xl font-bold">My Top Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Project 1 */}
            <Card>
              <CardHeader>
                <CardTitle>ML Project</CardTitle>
                <CardDescription>Machine Learning Research & Implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-md bg-muted">
                  <img
                    src="/images/ml-project.jpeg"
                    alt="ML Project"
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    A comprehensive machine learning project showcasing various algorithms and techniques for data
                    analysis and prediction.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>Machine Learning</Badge>
                  <Badge>Data Science</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/sarmad259/ML-Project" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Project 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Pneumonia Detector</CardTitle>
                <CardDescription>Medical Imaging with CNN</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-md bg-muted">
                  <img
                    src="/images/pneumonia-detector.webp"
                    alt="Pneumonia Detector"
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    A deep learning model using Convolutional Neural Networks to detect pneumonia from chest X-ray
                    images, aiding in medical diagnosis.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Deep Learning</Badge>
                  <Badge>CNN</Badge>
                  <Badge>Medical AI</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://github.com/sarmad259/Pneumonia-Detector-Using-CNN"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Project 3 */}
            <Card>
              <CardHeader>
                <CardTitle>OOP Project</CardTitle>
                <CardDescription>Object-Oriented Programming Implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-md bg-muted">
                  <img
                    src="/images/oop-project.jpeg"
                    alt="OOP Project"
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    A project demonstrating object-oriented programming principles and design patterns for building
                    scalable and maintainable software.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>OOP</Badge>
                  <Badge>Software Design</Badge>
                  <Badge>Programming</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/sarmad259/OOP-Project" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Additional Project */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Cats vs. Dogs Classification</CardTitle>
                <CardDescription>Deep Learning Image Classification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="aspect-video overflow-hidden rounded-md bg-muted">
                    <img
                      src="/images/cats-dogs.webp"
                      alt="Cats vs Dogs Classification"
                      className="h-full w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Developed a machine learning model to classify images of cats and dogs using deep learning
                      techniques. The project utilized convolutional neural networks (CNNs) for feature extraction and
                      image classification.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Employed Python with libraries such as TensorFlow and Keras to build, train, and evaluate the
                      model, achieving high accuracy in distinguishing between cat and dog images. This project enhanced
                      my skills in data preprocessing, model optimization, and performance evaluation.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>CNN</Badge>
                      <Badge>TensorFlow</Badge>
                      <Badge>Keras</Badge>
                      <Badge>Image Classification</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://github.com/sarmad259/Cats-Vs-Dogs-using-CNN-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="mb-8 text-3xl font-bold">Work Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <CardTitle>ML Internship</CardTitle>
                    <CardDescription>Bytewise Limited</CardDescription>
                  </div>
                  <Badge variant="outline">Jun 2024 - Sep 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Completed a Machine Learning / Deep Learning fellowship at Bytewise Limited, gaining hands-on
                  experience and deepening knowledge in AI.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Machine Learning</Badge>
                  <Badge>Artificial Intelligence</Badge>
                  <Badge>Deep Learning</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <CardTitle>IT Executive Intern</CardTitle>
                    <CardDescription>Doctor Billing Experts L.L.C</CardDescription>
                  </div>
                  <Badge variant="outline">Jun 2023 - Aug 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Worked as an IT Executive Intern at Doctor Billing Experts L.L.C, applying technical skills in a
                  professional environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <h2 className="mb-8 text-3xl font-bold">Education</h2>
          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <CardTitle>Bachelor's degree, Artificial Intelligence</CardTitle>
                  <CardDescription>National University of Computer and Emerging Sciences (FAST-NUCES)</CardDescription>
                </div>
                <Badge variant="outline">Aug 2022 - Aug 2026</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Currently pursuing a Bachelor's degree in Artificial Intelligence, focusing on machine learning, deep
                learning, neural networks, and other AI technologies.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16">
          <h2 className="mb-8 text-3xl font-bold">Certifications</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Google AI Essentials</CardTitle>
                <CardDescription>Google</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive certification covering essential concepts and applications of artificial intelligence.
                </p>
                <Badge className="mt-4">Issued Jun 2024</Badge>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">Credential ID: WWQ7ZHDQJFX3</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bytewise Fellowship Batch 3</CardTitle>
                <CardDescription>United Latino Students Association</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Completed the Bytewise Fellowship program focusing on machine learning and deep learning technologies.
                </p>
                <Badge className="mt-4">Issued May 2024</Badge>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">Credential ID: 8e2925e5-db4f-4701-beb9-dab7b960c851</p>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="mb-8 text-3xl font-bold">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Deep Learning",
                    "Neural Networks",
                    "Python",
                    "TensorFlow",
                    "Keras",
                  ].map((skill) => (
                    <Badge key={skill} className="mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools & Software</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["VS Code", "Git", "GitHub", "Jupyter Notebook", "Google Colab", "Microsoft Excel"].map((skill) => (
                    <Badge key={skill} className="mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Problem Solving",
                    "Critical Thinking",
                    "Communication",
                    "Teamwork",
                    "Time Management",
                    "Adaptability",
                  ].map((skill) => (
                    <Badge key={skill} className="mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="mb-8 text-3xl font-bold">Get In Touch</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-6 text-muted-foreground">
                I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out
                through any of the platforms below.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GithubIcon className="h-5 w-5 text-primary" />
                  <Link href="https://github.com/sarmad259" target="_blank" className="hover:underline">
                    github.com/sarmad259
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="h-5 w-5 text-primary" />
                  <Link
                    href="https://www.linkedin.com/in/sarmad-khan-0071bb24a"
                    target="_blank"
                    className="hover:underline"
                  >
                    linkedin.com/in/sarmad-khan-0071bb24a
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon className="h-5 w-5 text-primary" />
                  <Link href="https://www.instagram.com/msarmad.k/" target="_blank" className="hover:underline">
                    instagram.com/msarmad.k
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sarmad Khan. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/sarmad259" target="_blank">
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/sarmad-khan-0071bb24a" target="_blank">
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.instagram.com/msarmad.k/" target="_blank">
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
