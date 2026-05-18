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
      
      // Using Web3Forms - Free form service
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "10879ca7-8194-488d-bb53-b3f239719495",
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
            <p className="text-xl md:text-2xl text-white/80"> AI/ML Researcher & Engineer || MERN Stack Developer </p>
            <p className="max-w-[600px] text-white/70">
               Bridging the gap between rigorous machine learning research and scalable software engineering to solve complex, real-world problems.  
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
    I am an AI/ML Researcher and Software Engineer focused on bridging the gap between advanced deep learning and scalable production systems. I specialize in engineering end-to-end intelligent applications that seamlessly unite robust software architecture with cutting-edge GenAI.
  </p>
  
  <p className="text-white/70">
    My technical expertise spans TinyML, computer vision, NLP, and Explainable AI (XAI). Backed by peer-reviewed research, I design lightweight, high-precision architectures—ranging from edge-optimized models to fine-tuned LLMs—while building local-first developer tools that streamline machine learning workflows.
  </p>
  
  <p className="text-white/70">
    Grounded in core computer engineering principles and high-performance problem-solving in C++, I thrive on optimizing systems under strict real-world constraints—always prioritizing high execution speed, minimal latency, and robust data privacy.
  </p>

              <div className="pt-4">
                <h4 className="font-semibold mb-3 text-white/90">My Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python", 
  "C++", 
  "JavaScript", 
  "Data Structures & Algorithms",
  
  // Advanced AI / ML & Research
  "PyTorch", 
  "Hugging Face", 
  "Generative AI & LLMs",
  "Computer Vision", 
  "Natural Language Processing (NLP)", 
  "TinyML / Edge AI", 
  "Explainable AI (XAI)",
  
  // Full-Stack & Architecture
  "MERN Stack", 
  "PostgreSQL", 
  "Model Context Protocol (MCP)",
  "Streamlit"
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
  title: "ModelViz: PyTorch Architecture Visualizer",
  description: "A VS Code extension that automatically converts complex PyTorch AI code into interactive visual graphs. Built with a local-first architecture to ensure data privacy, helping developers easily debug and trace machine learning models in real time.",
  tags: ["TypeScript", "Python", "PyTorch", "MCP", "React"],
  image: "/icon.png",
  link: "https://github.com/Soham-droid-pixel/ModelViz", 
},
              {
                title: "MindTrack: Mental Health Analyzer (HuggingFace)",
                description: "An NLP system using DistilBERT and LIME to detect mental health risks from text, with a live Streamlit dashboard for Reddit monitoring.",
                tags: ["Python", "NLP", "Hugging Face", "LIME", "Streamlit"],
                image: "/MindTrack.png",
                link: "https://github.com/Soham-droid-pixel/Mind_Track_Project",
              },
              {
  title: "SecureRAG: Encrypted Document Chatbot",
  description: "A secure AI chatbot that allows users to upload private PDF documents and ask context-aware questions. Engineered with enterprise-grade data privacy, featuring database-level text encryption and strict JWT authentication to protect sensitive documents.",
  tags: ["FastAPI", "LangChain", "ChromaDB", "React", "Cryptography"],
  image: "/SecureRAG.png",
  link: "https://github.com/Soham-droid-pixel/FAQ-Chatbot-RAG", 
},
              {
                title: "Course Allocation System",
                description: "A full-stack university app (React/FastAPI) to automate course allocation. Students submit preferences and admins run the allocation algorithm.",
                tags: ["React.js", "FastAPI", "MongoDB", "Full Stack", "JWT"],
                image: "/CourseAllocation.png",
                link: "https://github.com/Soham-droid-pixel/Course_Allocation",
              },
 {
  title: "jqlite: Compiler & Query Engine Visualizer (Private Repository:IP Protected)",
  description: "An educational tool built to demystify compiler internals by 'visualizing the black box.' It provides an interactive way to teach lexical analysis, syntactic parsing, and AST optimization, using a low-latency web UI that lets students trace how raw JSON queries are parsed and executed under the hood.",
  tags: ["C", "Flex/Bison", "Compiler Design", "Node.js", "Systems Programming"],
  image: "/jqlite.jpeg",
  link: "#", // Kept private/hidden as per IP protection
},
              {
  title: "Cloud-Sentry: Serverless Malware Scanner",
  description: "An automated security pipeline that scans cloud file uploads for malware in real time using an event-driven AWS architecture. It ensures strict data privacy by analyzing secure file hashes against 70+ antivirus engines without exposing actual file contents, automatically isolating threats into a quarantine zone.",
  tags: ["AWS Lambda", "Amazon S3", "Python (Boto3)", "DynamoDB", "Cybersecurity"],
  image: "/CloudSentry.png",
  link: "https://github.com/Soham-droid-pixel/CCL_MiniProject_Cloud-Sentry", 
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
                  {project.link && (
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
                  )}
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