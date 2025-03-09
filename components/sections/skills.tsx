"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Java", icon: "/icons/java.svg" },
      { name: "C++", icon: "/icons/cpp.svg" },
    ],
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      { name: "ShadCN UI", icon: "/icons/shadcn.svg" },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express", icon: "/icons/express.svg" },
      { name: "Prisma", icon: "/icons/prisma.svg" },
      { name: "Drizzle ORM", icon: "/icons/drizzle.svg" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "Swagger", icon: "/icons/swagger.svg" },
    ],
  },
  {
    name: "UI/UX Design",
    skills: [
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Adobe Photoshop", icon: "/icons/photoshop.svg" },
      { name: "Adobe Illustrator", icon: "/icons/illustrator.svg" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-black/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold gold-gradient">Technical Skills</h2>
          <div className="mx-auto h-1 w-20 bg-primary" />
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
              <Card className="gold-border h-full bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-center text-xl font-semibold text-primary">{category.name}</h3>
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
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-black p-2">
                          <div className="skill-icon relative h-8 w-8">
                            {/* Placeholder for icon - in a real app, you'd use actual icons */}
                            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-primary/20 text-xs text-primary">
                              {skill.name.substring(0, 2)}
                            </div>
                          </div>
                        </div>
                        <span className="text-center text-xs">{skill.name}</span>
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

