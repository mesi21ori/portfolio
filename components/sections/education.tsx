"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold gold-gradient">Education & Achievements</h2>
          <div className="mx-auto h-1 w-20 bg-primary" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="gold-border h-full bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>

                <div className="mb-6 rounded-lg bg-black/30 p-4">
                  <h4 className="mb-1 text-lg font-medium text-primary">Bachelor of Science in Computer Science</h4>
                  <p className="mb-1 text-sm">Hope Enterprise University College</p>
                  <p className="mb-1 text-sm text-gray-400">Lafto Subcity, Kebele 01B, Lebu Campus</p>
                  <p className="mb-2 text-sm text-gray-400">Expected Graduation: February 22, 2025</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Major GPA: 3.54</span>
                    <span className="text-sm">Overall GPA: 3.59</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Relevant Coursework</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Data Structures</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Database Systems</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Web Development</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Software Engineering</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>UI/UX Design</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="gold-border h-full bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  <Award className="mr-3 h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Certifications & Achievements</h3>
                </div>

                <div className="space-y-6">
                  <div className="rounded-lg bg-black/30 p-4">
                    <h4 className="mb-2 text-lg font-medium text-primary">Academic Achievements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Awarded as a higher honor student in Computer Science from my university.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>
                          Recognized for outstanding academic performance in secondary school: top 3 students in grade
                          10.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Consistently ranked among the top 10 students in the success club.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-black/30 p-4">
                    <h4 className="mb-2 text-lg font-medium text-primary">Project Recognition</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>
                          Received an 'A' grade for the Ethiopian History Preservation and Transmission System (EHTPS)
                          final graduation project.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

