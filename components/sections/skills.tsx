"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  FileJson,
  Coffee,
  Cpu,
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  LayoutDashboard,
  Layers,
  Palette,
  Server,
  Terminal,
  Database,
  GitBranch,
  Github,
  FileCode2,
  Figma,
  Image,
  PenTool,
} from "lucide-react"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <FileJson className="h-6 w-6 text-yellow-400" /> },
      { name: "TypeScript", icon: <Code2 className="h-6 w-6 text-blue-400" /> },
      { name: "Java", icon: <Coffee className="h-6 w-6 text-orange-500" /> },
      { name: "C++", icon: <Cpu className="h-6 w-6 text-blue-500" /> },
    ],
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML", icon: <Html5 className="h-6 w-6 text-orange-500" /> },
      { name: "CSS", icon: <Css3 className="h-6 w-6 text-blue-500" /> },
      { name: "React", icon: <LayoutDashboard className="h-6 w-6 text-cyan-400" /> },
      { name: "Next.js", icon: <Layers className="h-6 w-6 text-white" /> },
      { name: "Tailwind CSS", icon: <Palette className="h-6 w-6 text-cyan-400" /> },
      { name: "ShadCN UI", icon: <Layers className="h-6 w-6 text-purple-400" /> },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", icon: <Server className="h-6 w-6 text-green-500" /> },
      { name: "Express", icon: <Terminal className="h-6 w-6 text-gray-400" /> },
      { name: "Prisma", icon: <Database className="h-6 w-6 text-blue-400" /> },
      { name: "Drizzle ORM", icon: <Database className="h-6 w-6 text-yellow-500" /> },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <Database className="h-6 w-6 text-blue-500" /> },
      { name: "MySQL", icon: <Database className="h-6 w-6 text-orange-500" /> },
      { name: "Firebase", icon: <Server className="h-6 w-6 text-yellow-500" /> },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <GitBranch className="h-6 w-6 text-orange-500" /> },
      { name: "GitHub", icon: <Github className="h-6 w-6 text-white" /> },
      { name: "Swagger", icon: <FileCode2 className="h-6 w-6 text-green-400" /> },
    ],
  },
  {
    name: "UI/UX Design",
    skills: [
      { name: "Figma", icon: <Figma className="h-6 w-6 text-purple-400" /> },
      { name: "Adobe Photoshop", icon: <Image className="h-6 w-6 text-blue-500" /> },
      { name: "Adobe Illustrator", icon: <PenTool className="h-6 w-6 text-orange-500" /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2 gold-gradient">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full gold-border bg-black/80 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary text-center mb-4">{category.name}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + skillIndex * 0.1,
                        }}
                        className="flex flex-col items-center"
                      >
                        <div className="h-12 w-12 rounded-full bg-black/80 border border-primary/30 flex items-center justify-center mb-2 p-2 skill-icon-container">
                          {skill.icon}
                        </div>
                        <span className="text-xs text-center">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

