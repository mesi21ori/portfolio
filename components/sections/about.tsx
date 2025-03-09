"use client"

import { motion } from "framer-motion"
import { User, MapPin, Mail, Phone, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold gold-gradient">About Me</h2>
          <div className="mx-auto h-1 w-20 bg-primary" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="gold-border h-full bg-card/50 p-6 backdrop-blur">
              <CardContent className="p-0">
                <h3 className="mb-4 text-xl font-semibold">Professional Summary</h3>
                <p className="mb-6 text-gray-300">
                  A dedicated and adaptable developer specializing in frontend, backend, and UI/UX design. I possess a
                  strong passion for building efficient and user-friendly systems. My experiences include hands-on
                  internships and remote work, where I have successfully managed tasks independently while collaborating
                  with teams to foster a positive work environment. I continuously strive to enhance my skills to
                  contribute to impactful projects.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <User className="mr-3 h-5 w-5 text-primary" />
                    <span>Meseret Shumet Zenebe</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-primary" />
                    <span>Addis Ababa, Jemo 1</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-primary" />
                    <span>shumetmeseret7@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-primary" />
                    <span>0975336956</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="mr-3 h-5 w-5 text-primary" />
                    <a href="#" className="text-primary hover:underline">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <Card className="gold-border bg-card/50 p-6 backdrop-blur">
              <CardContent className="p-0">
                <h3 className="mb-4 text-xl font-semibold">What I Do</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Design and develop responsive, user-friendly web applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Create elegant UI/UX designs that enhance user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Build robust backend systems with modern technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Implement database solutions for efficient data management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="gold-border shimmer bg-card/50 p-6 backdrop-blur">
              <CardContent className="p-0">
                <h3 className="mb-4 text-xl font-semibold">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-black/50 p-3 text-center">
                    <span className="text-sm">Problem Solving</span>
                  </div>
                  <div className="rounded-lg bg-black/50 p-3 text-center">
                    <span className="text-sm">Communication</span>
                  </div>
                  <div className="rounded-lg bg-black/50 p-3 text-center">
                    <span className="text-sm">Time Management</span>
                  </div>
                  <div className="rounded-lg bg-black/50 p-3 text-center">
                    <span className="text-sm">Adaptability</span>
                  </div>
                  <div className="rounded-lg bg-black/50 p-3 text-center">
                    <span className="text-sm">Teamwork</span>
                  </div>
                  <div className="rounded-lg bg-black/50 p-3 text-center">
                    <span className="text-sm">Attention to Detail</span>
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

