"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { MapPin, Briefcase, Award, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Frontend Developer",
    company: "Cross Light Africa",
    location: "Addis Ababa",
    period: "February 2025 - Present",
    description:
      "Frontend Developer focusing on interactive and responsive user interfaces using Next.js, Tailwind CSS, and TypeScript. Involved in designing and building an educational platform for structured learning resources.",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    achievements: [
      "Developed responsive UI components that improved user engagement by 30%",
      "Implemented performance optimizations that reduced page load time by 40%",
      "Collaborated with UX designers to create intuitive user interfaces",
    ],
    color: "#F59E0B", // Amber
  },
  {
    title: "Web Developer",
    company: "JZ PLC",
    location: "Addis Ababa",
    period: "November 2024 - Present",
    description:
      "Developed a modern website using Next.js and Tailwind CSS, Integrating with the backend for real-time updates and incorporating dark mode for improved accessibility.",
    skills: ["Next.js", "Tailwind CSS"],
    achievements: [
      "Built a complete company website from scratch in 3 weeks",
      "Integrating with the backend for real-time updates",
      "Implemented dark mode and accessibility features",
    ],
    color: "#EF4444",
  },
  {
    title: "IT Intern",
    company: "Ministry of Urban Development and Infrastructure (MUDI)",
    location: "Addis Ababa",
    period: "June 1, 2024 - August 23, 2024",
    description:
      "Provided IT support, troubleshooting staff issues and configuring network devices. Gained experience in data center operations and learning government system interfaces.",
    skills: ["IT Support", "Network Configuration", "Troubleshooting"],
    achievements: [
      "Resolved over 100 technical support tickets during internship period",
      "Assisted in configuring and maintaining network infrastructure",
      "Documented common issues and solutions for future reference",
    ],
    color: "#10B981", // Emerald
  },
]

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(0)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [activeExperience, controls])

  useEffect(() => {
    // Scroll to the active experience on mobile
    if (containerRef.current && window.innerWidth < 768) {
      const container = containerRef.current
      const activeButton = container.querySelector(`button:nth-child(${activeExperience + 1})`)
      if (activeButton) {
        const containerRect = container.getBoundingClientRect()
        const buttonRect = activeButton.getBoundingClientRect()
        const scrollLeft = buttonRect.left - containerRect.left - containerRect.width / 2 + buttonRect.width / 2
        container.querySelector(".flex.overflow-x-auto")?.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        })
      }
    }
  }, [activeExperience])

  const handleExperienceClick = (index: number) => {
    controls.start({ opacity: 0, y: 20 }).then(() => {
      setActiveExperience(index)
    })
  }

  const experience = experiences[activeExperience]

  return (
    <section id="experience" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center md:mb-12"
        >
          <h2 className="mb-2 text-2xl font-bold gold-gradient md:text-3xl">Professional Experience</h2>
          <div className="mx-auto h-1 w-20 bg-primary" />
        </motion.div>

        <div className="mx-auto max-w-6xl" ref={containerRef}>
          {/* Timeline Navigation */}
          <div className="mb-8 flex overflow-x-auto pb-4 scrollbar-hide md:mb-12 md:justify-center">
            <div className="flex space-x-6 px-4 md:space-x-8">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex-shrink-0 ${index < experiences.length - 1 ? "" : ""}`}>
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div
                      className={`absolute left-1/2 top-[22px] hidden h-0.5 w-full -translate-x-1/2 bg-gray-700 md:block`}
                    >
                      <div
                        className={`h-full bg-primary transition-all duration-700 ${
                          index < activeExperience ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  )}

                  {/* Timeline node */}
                  <button
                    onClick={() => handleExperienceClick(index)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className="relative flex flex-col items-center"
                  >
                    <motion.div
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        index === activeExperience
                          ? "border-primary bg-primary text-black"
                          : "border-gray-700 bg-black text-gray-400"
                      }`}
                      animate={{
                        scale: index === activeExperience || index === hoverIndex ? 1.2 : 1,
                        borderColor:
                          index === activeExperience ? experience.color : index === hoverIndex ? "#FFD700" : "#374151",
                        backgroundColor: index === activeExperience ? experience.color : "rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      {index + 1}
                      {index === activeExperience && (
                        <motion.div
                          layoutId="activeExperienceBadge"
                          className="absolute inset-0 rounded-full border-2 border-primary"
                          style={{ borderColor: experience.color }}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1.4, opacity: 0.5 }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1.5,
                            repeatType: "reverse",
                          }}
                        />
                      )}
                    </motion.div>

                    <div
                      className={`mt-2 whitespace-nowrap text-xs md:text-sm font-medium transition-all duration-300 ${
                        index === activeExperience ? "text-primary" : "text-gray-400"
                      }`}
                    >
                      {exp.company === "Ministry of Urban Development and Infrastructure (MUDI)" ? (
                        <>
                          <span className="md:hidden">MUDI</span>
                          <span className="hidden md:inline">{exp.company}</span>
                        </>
                      ) : (
                        exp.company
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExperience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="overflow-hidden backdrop-blur-sm">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"
                  style={{
                    background: `linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.9) 100%)`,
                    boxShadow: `inset 0 0 100px 5px ${experience.color}22`,
                  }}
                />

                {/* Glowing border effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-50"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${experience.color}66, transparent)`,
                    backgroundSize: "200% 100%",
                    animation: "shimmer 3s linear infinite",
                  }}
                />

                <CardContent className="relative z-10 p-4 md:p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="mb-6 md:mb-0 md:w-2/3">
                      <div
                        className="mb-4 inline-block rounded-lg px-3 py-1 text-sm font-medium"
                        style={{ backgroundColor: `${experience.color}33`, color: experience.color }}
                      >
                        {experience.period}
                      </div>

                      <h3 className="mb-2 text-2xl font-bold md:text-3xl" style={{ color: experience.color }}>
                        {experience.title}
                      </h3>

                      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                        <div className="flex items-center text-gray-300">
                          <Briefcase className="mr-1 h-4 w-4" style={{ color: experience.color }} />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="mr-1 h-4 w-4" style={{ color: experience.color }} />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <p className="mb-6 text-sm text-gray-300 md:text-base">{experience.description}</p>
                    </div>

                    <div className="md:w-1/3">
                      <div className="mb-4 rounded-lg bg-black/50 p-3 md:p-4">
                        <h4 className="mb-3 flex items-center text-lg font-semibold text-white">
                          <Award className="mr-2 h-5 w-5" style={{ color: experience.color }} />
                          Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <Badge
                              key={skill}
                              className="bg-black/70 text-white"
                              style={{ borderColor: experience.color }}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 text-lg font-semibold text-white">Key Achievements</h4>
                    <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      {experience.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start"
                        >
                          <div
                            className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: `${experience.color}33` }}
                          >
                            <ArrowRight className="h-4 w-4" style={{ color: experience.color }} />
                          </div>
                          <p className="text-sm text-gray-300">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Experience Indicator Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => handleExperienceClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeExperience === index ? "w-8 bg-primary" : "w-2 bg-gray-700 hover:bg-gray-500"
                }`}
                style={{
                  backgroundColor: activeExperience === index ? experience.color : undefined,
                }}
                aria-label={`View experience ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

