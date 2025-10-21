"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
  User,
  Code,
  Briefcase,
  Send,
  Star,
  Sparkles,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, FormEvent } from "react"
import { toast } from "sonner"

export default function Portfolio() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      
      // Convert FormData to JSON
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      }
      
      // Get access key from environment variable
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      
      if (!accessKey) {
        toast.error("Form configuration error. Please contact me directly at sohamkalg@gmail.com")
        console.error("Web3Forms access key is not configured")
        return
      }
      
      // Using Web3Forms - Free form service
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          from_name: "Portfolio Contact Form",
          to_email: "sohamkalg@gmail.com",
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon. 🎉")
        form.reset()
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast.error("Failed to send message. Please email me directly at sohamkalg@gmail.com")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#" className="text-xl font-bold text-gradient">
            Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium text-white/80 hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium text-white/80 hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white/80 hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-accent glow-accent mb-2 animate-float">
              <Image src="/My Professional pic.jpg" alt="Profile" fill className="object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="text-gradient">Soham</span> Kalgutkar
            </h1>
            <p className="text-xl md:text-2xl text-white/80">MERN Stack Developer || AI ML Data Science Enthusiast</p>
            <p className="max-w-[600px] text-white/70">
              Building efficient full-stack applications and solving problems with Python-based AI/ML.
              <br />
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://github.com/Soham-droid-pixel"
                className="rounded-full p-2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-accent border border-white/10 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/soham-kalgutkar-0a4b0428a/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-accent border border-white/10 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="pt-8">
              <Link
                href="#about"
                className="flex flex-col items-center text-white/60 hover:text-accent transition-colors"
              >
                <span className="text-sm">Scroll Down</span>
                <ChevronDown className="h-4 w-4 animate-bounce mt-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-white/5 rounded-lg mb-4 border border-white/10">
              <User className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gradient">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mt-4 mb-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/My Professional pic.jpg"
                alt="About Me"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gradient">Hi, I'm Soham Kalgutkar</h3>
              <p className="text-white/70">
                I'm a developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) and PostgreSQL to build modern web applications.
              </p>
              <p className="text-white/70">
                My core passion lies in AI, Machine Learning, and Data Science using Python. I also sharpen my problem-solving skills with DSA in C++ and have explored mobile development with React Native and Kotlin.
              </p>
              <p className="text-white/70">
                I have a strong interest in core computer engineering subjects and enjoy applying that knowledge to create practical, data-driven solutions.
              </p>

              <div className="pt-4">
                <h4 className="font-semibold mb-3 text-white/90">My Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Machine Learning",
                    "Data Science",
                    "JavaScript",
                    "MERN Stack",
                    "C++",
                    "PostgreSQL",
                    "Data Structures & Algorithms",
                    "React Native (Exploring)",
                    "Kotlin (Exploring)"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                asChild
                className="mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-white/5 rounded-lg mb-4 border border-white/10">
              <Code className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gradient">My Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mt-4 mb-6 rounded-full"></div>
            <p className="text-white/70 max-w-[600px]">
              Here are some of my recent projects. Each project is unique and showcases different skills and
              technologies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "MindTrack: Mental Health Analyzer (HuggingFace)",
                description: "An NLP system using DistilBERT and LIME to detect mental health risks from text, with a live Streamlit dashboard for Reddit monitoring.",
                tags: ["Python", "NLP", "Hugging Face", "LIME", "Streamlit"],
                image: "/MindTrack.png",
                link: "https://github.com/Soham-droid-pixel/Mind_Track_Project",
              },
              {
                title: "AmazonX: Product Recommendation Engine",
                description: "An intelligent engine using KMeans clustering and user behavior (browsing, abandoned carts) to provide dynamic, personalized product suggestions.",
                tags: ["Python", "Machine Learning", "KMeans", "Data Science"],
                image: "/AmazonX.png",
                link: "https://github.com/Soham-droid-pixel/AmazonProj",
              },
              {
                title: "Smart Stock Suggester",
                description: "A data-driven prototype for shops to optimize inventory and pricing using location-based demand, profitability, and stock-level metrics.",
                tags: ["Python", "Data Analysis", "Flask", "Streamlit"],
                image: "/SmartStockSugg.png",
                link: "https://github.com/Soham-droid-pixel/SmartStockSuggester",
              },
              {
                title: "Course Allocation System",
                description: "A full-stack university app (React/FastAPI) to automate course allocation. Students submit preferences and admins run the allocation algorithm.",
                tags: ["React.js", "FastAPI", "MongoDB", "Full Stack", "JWT"],
                image: "/CourseAllocation.png",
                link: "https://github.com/Soham-droid-pixel/Course_Allocation",
              },
              {
                title: "MedVault: Medical Record Manager",
                description: "A secure MERN stack app for managing medical records and appointments, featuring Cloudinary storage, JWT auth, and automated email reminders.",
                tags: ["MERN Stack", "Node.js", "React.js", "MongoDB", "Nodemailer"],
                image: "/MedVault.png",
                link: "https://github.com/Soham-droid-pixel/MedVault2.0",
              },
              {
                title: "Bank Document Protection Tool",
                description: "A production-ready Python desktop app (GUI/CLI) for encrypting PDF & Excel files with audit logging and secure Windows Credential Management.",
                tags: ["Python", "Security", "Desktop App", "Finance"],
                image: "/BankDoc.png",
                link: "https://github.com/Soham-droid-pixel/Bank_Document_Protection_Tool",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer z-10 opacity-0 group-hover:opacity-100"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                  />
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-white/70">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white/10 rounded-md text-xs border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-1 border-white/20 text-white hover:bg-white/10 hover:text-accent group-hover:border-accent/50 transition-all duration-300"
                    >
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-accent hover:border-accent/50 transition-all duration-300"
            >
              <Link href="https://github.com/Soham-droid-pixel" target="_blank" rel="noopener noreferrer" className="group">
                View All Projects{" "}
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-white/5 rounded-lg mb-4 border border-white/10">
              <Send className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gradient">Get In Touch</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mt-4 mb-6 rounded-full"></div>
            <p className="text-white/70 max-w-[600px]">
              Have a project in mind or want to collaborate? Feel free to reach out to me using the form below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded-full border border-white/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <p className="text-white/70">sohamkalg@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded-full border border-white/10">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Work Inquiries</h3>
                  <p className="text-white/70">+ 91 7045470742</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-bold mb-4 text-white">Follow Me</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/Soham-droid-pixel"
                    className="bg-white/5 rounded-full p-3 text-white/80 hover:text-accent hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/soham-kalgutkar-0a4b0428a/"
                    className="bg-white/5 rounded-full p-3 text-white/80 hover:text-accent hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>

              <div className="pt-8 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25"></div>
                <div className="relative bg-white/5 border border-white/10 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <h3 className="font-bold text-white">Let's Create Something Amazing</h3>
                  </div>
                  <p className="text-white/70">
                    I'm currently available for freelance work. If you have a project that needs some creative touch,
                    I'd love to help you with it.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/10 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a0f]/80 p-6 rounded-lg">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white/90">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="bg-white/5 border-white/10 focus:border-accent/50 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/90">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="hello@example.com"
                        required
                        className="bg-white/5 border-white/10 focus:border-accent/50 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white/90">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="bg-white/5 border-white/10 focus:border-accent/50 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/90">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      className="min-h-[120px] bg-white/5 border-white/10 focus:border-accent/50 text-white placeholder:text-white/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? "Opening Email..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Soham Kalgutkar. All rights reserved.</p>
            <div className="flex items-center gap-1 text-white/60">
              <p className="text-sm">Designed & Built with</p>
              <Star className="h-4 w-4 text-accent fill-accent" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}