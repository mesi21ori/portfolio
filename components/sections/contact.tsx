"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { contactFormSchema } from "@/lib/schema"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    console.log(`Changed ${name} to ${value}`) // Debugging
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validate form data
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "Validation Error",
        description: validation.error.errors[0].message,
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "success",
          duration: 5000,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again later.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
    },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com", color: "bg-blue-600" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com", color: "bg-blue-700" },
    { name: "GitHub", icon: Github, url: "https://github.com", color: "bg-gray-800" },
  ]

  return (
    <section id="contact" className="bg-black/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold">
            <span className="relative inline-block">
              <span className="gold-gradient">Get In Touch</span>
              <span
                className="absolute -bottom-1 left-0 h-1 w-full"
                style={{ background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)" }}
              ></span>
            </span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Feel free to reach out if you have any questions or want to work together.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="gold-border h-full bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>

                <div className="mb-8 space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Email</h4>
                      <a
                        href="mailto:shumetmeseret7@gmail.com"
                        className="text-sm hover:text-primary hover:underline transition-colors"
                      >
                        shumetmeseret7@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                      <a href="tel:0975336956" className="text-sm hover:text-primary hover:underline transition-colors">
                        0975336956
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Location</h4>
                      <p className="text-sm">Addis Ababa, Jemo 1</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-5 text-xl font-semibold">Follow Me</h3>
                  <div className="flex space-x-5 items-center">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-black/30 border border-gray-800"
                        style={{ zIndex: 1 }} // Ensure the link is on top
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div
                          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{ background: social.color }}
                        />
                        <social.icon className="relative z-10 h-4 w-4 text-primary transition-all duration-300 group-hover:text-white" />
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-8 p-4 rounded-lg bg-black/30 text-sm leading-relaxed">
                    <p className="mb-2 font-semibold text-primary">Let's create something amazing together!</p>
                    <p className="text-gray-300">
                      Whether you're looking for a web developer for your next project or just want to connect, I'm
                      always open to discussing new opportunities and ideas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="gold-border h-full bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-semibold">Send Me a Message</h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 bg-black/60 p-5 rounded-lg border border-gray-800 relative z-10"
                >
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-700 bg-black/50 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
                      tabIndex={0}
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-700 bg-black/50 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
                      tabIndex={0}
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-gray-700 bg-black/50 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
                      tabIndex={0}
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] border-gray-700 bg-black/50 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
                      tabIndex={0}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black hover:bg-primary/90 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

