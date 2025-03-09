"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Plus, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const projects = [
  {
    id: "lemi-kura",
    title: "Lemi Kura Sub City Resporting System",
    description:
      "Designed and developed a modern, responsive website with Next.js and Tailwind CSS. Integrated Firebase for real-time database storage.",
    longDescription:
      "This project involved creating a comprehensive website for Lemi Kura Sub City administration. The site features news updates, service information, and administrative details. I implemented real-time updates using Firebase, allowing administrators to publish content instantly. The responsive design ensures accessibility across all devices.",
      image: "/placeholder.svg?height=400&width=600",
    link: "https://reporting.lemikurapp.org",
    github: "https://github.com/mesi21ori",
    tags: ["Next.js", "Tailwind CSS", "Firebase"],
    category: "web",
  },
  {
    id: "employee-hierarchy",
    title: "Employee Hierarchy Management System",
    description:
      "Developed a web application with Next.js, Tailwind CSS, ShadCN UI components, and TypeScript. Implemented backend functionalities using Node.js and Drizzle ORM with PostgreSQL, focusing on user authentication and hierarchical tracking.",
    longDescription:
      "This enterprise application helps organizations visualize and manage their employee reporting structures. The system features role-based access control, organizational chart visualization, and employee profile management. I implemented the backend using Node.js with Drizzle ORM for efficient database operations and built a responsive frontend with Next.js and TypeScript.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    github: "https://github.com/mesi21ori/mesi-employee-hierarchy",
    tags: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL"],
    category: "web",
  },
  {
    id: "job-finder",
    title: "Job Finder Platform",
    description: "Developed a job matching platform with a filtering system based on location, skills, and experience.",
    longDescription:
      "The Job Finder Platform connects job seekers with employers through an intuitive interface. Users can filter opportunities by location, required skills, and experience level. The platform includes features for resume uploads, application tracking, and employer messaging. I focused on creating an efficient search algorithm to match candidates with appropriate positions.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    github: "#",
    tags: ["React", "JavaScript", "CSS"],
    category: "web",
  },
  {
    id: "travel-tour",
    title: "Travel Tour Web Application",
    description:
      "Created an interactive travel platform with JavaScript, React, PHP, and MySQL, featuring map-based navigation and a responsive UI.",
    longDescription:
      "This travel platform showcases Ethiopian tourist destinations with interactive maps, detailed information, and booking capabilities. Users can explore locations, view photos and reviews, and plan their itineraries. The application features a responsive design that works seamlessly on mobile devices, making it perfect for travelers on the go.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    github: "#",
    tags: ["JavaScript", "React", "PHP", "MySQL"],
    category: "web",
  },
  {
    id: "ethiopian-history",
    title: "Ethiopian History Preservation System",
    description:
      "Built a centralized platform for safeguarding Ethiopia's historical heritage using Next.js, TypeScript, and PostgreSQL. Received an 'A' for this final graduation project.",
    longDescription:
      "The Ethiopian History Preservation System is a digital archive that documents and preserves historical artifacts, documents, and cultural heritage. The platform includes advanced search capabilities, multimedia galleries, and educational resources. As my graduation project, I implemented comprehensive data models for various historical artifacts and created an intuitive interface for researchers and the general public.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    github: "#",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    category: "web",
  },
  {
    id: "ui-ux-projects",
    title: "UI/UX Design Projects",
    description:
      "Designed various UI/UX projects, including responsive web application interfaces, magazine layouts, logos, and flyers.",
    longDescription:
      "My design portfolio includes a diverse range of projects from web interfaces to print materials. I've created user-centered designs for applications, developed brand identities for businesses, and designed editorial layouts for publications. Each project follows a thorough design process including research, wireframing, prototyping, and user testing to ensure optimal results.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    github: "#",
    tags: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    category: "design",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "design", name: "UI/UX Design" },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  const openProjectDialog = (projectId: string) => {
    setSelectedProject(projectId)
    setIsDialogOpen(true)
  }

  const getProjectById = (id: string) => {
    return projects.find((project) => project.id === id)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold gold-gradient">Projects</h2>
          <div className="mx-auto h-1 w-20 bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Here are some of the projects I've worked on. Each project demonstrates different skills and technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all ${
                selectedCategory === category.id ? "text-black" : "bg-black/40 text-white hover:bg-primary/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div
                className="group relative cursor-pointer overflow-hidden rounded-xl backdrop-blur-sm"
                onClick={() => openProjectDialog(project.id)}
              >
                {/* Enhanced golden border effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] opacity-70 animate-pulse-slow" />

                {/* Inner content with padding for the border effect */}
                <div className="relative m-[2px] rounded-xl bg-black p-5">
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary">{project.title}</h3>

                  <p className="mb-4 text-sm text-gray-300 line-clamp-3">{project.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-black/70 text-xs text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-primary hover:bg-primary/10"
                      onClick={(e) => {
                        e.stopPropagation()
                        openProjectDialog(project.id)
                      }}
                    >
                      <Plus className="mr-1 h-4 w-4" /> Details
                    </Button>

                    <div className="flex space-x-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 rounded-full text-primary hover:bg-primary/10"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.github, "_blank")
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 rounded-full text-primary hover:bg-primary/10"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.link, "_blank")
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl bg-black/95 text-white backdrop-blur-md">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">
                    {getProjectById(selectedProject)?.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="overflow-hidden rounded-lg">
                    <div
                      className="aspect-video bg-cover bg-center"
                      style={{ backgroundImage: `url(${getProjectById(selectedProject)?.image})` }}
                    />
                  </div>

                  <div>
                    <DialogDescription className="mb-4 text-gray-300">
                      {getProjectById(selectedProject)?.longDescription}
                    </DialogDescription>

                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold text-gray-400">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {getProjectById(selectedProject)?.tags.map((tag) => (
                          <Badge key={tag} className="bg-primary/20 text-primary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button asChild className="bg-primary text-black hover:bg-primary/90">
                        <a href={getProjectById(selectedProject)?.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> View Project
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        <a href={getProjectById(selectedProject)?.github} target="_blank" rel="noopener noreferrer">
                          <Code className="mr-2 h-4 w-4" /> Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

