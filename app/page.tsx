"use client"

import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Instagram, Mail, MapPin, Phone, Zap, Shield, Gauge } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { MobileMenu } from "@/components/mobile-menu"
import { FuturisticCard } from "@/components/futuristic-card"
import { InteractiveParticles } from "@/components/interactive-particles"
import { RacingLines } from "@/components/racing-lines"
import { InteractiveCar } from "@/components/interactive-car"
import { SpeedTest } from "@/components/speed-test"
import LeafletMapWithMarker from "@/components/LeafletMapWithMarker";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"view" | "interact" | "specs">("view")

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/60 border-b border-primary/20">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-70 blur-sm"></div>
              <Zap className="relative h-7 w-7 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-wider relative">
              TEAM NOS
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </span>
          </div>

          {/* Desktop Navigation */}
<nav className="hidden md:flex items-center gap-8">
  {["About", "Our Car", "Sponsors", "Contact"].map((item, index) => (
    <Link
      key={index}
      href={`#${item.toLowerCase().replace(" ", "")}`}
      className="group relative text-sm font-medium transition-colors hover:text-primary"
    >
      <span className="relative z-10">{item}</span>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  ))}
</nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          <ModeToggle />
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="flex-1">
        {/* Hero Section with enhanced animations */}
        <section className="relative py-32 md:py-48 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/5 to-background"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-70"></div>
          </div>

          {/* Racing lines animation */}
          <RacingLines />

          {/* Interactive particles */}
          <InteractiveParticles />

          <div className="container relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-6"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 to-primary/30 opacity-70 blur"></div>
              <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight">TEAM NOS RACING</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mb-10"
            >
              Pushing the boundaries of speed, innovation, and precision in F1 in Schools
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 transform group-hover:translate-x-full opacity-30"></span>
                  <Instagram className="h-5 w-5" />
                  Follow Our Journey
                </Button>
              </Link>
              <Link href="#speedtest">
                <Button size="lg" variant="outline" className="gap-2">
                  <Gauge className="h-5 w-5" />
                  Test Your Speed
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* About Us section */}
        <section id="about" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">About Us</h2>
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-lg text-muted-foreground text-center">
                Team NOS Racing is a dedicated group of students passionate about engineering, design, and motorsport.
                We compete in F1 in Schools, the world's largest STEM competition, where we design, analyze,
                manufacture, and race miniature F1 cars. Our mission is to innovate, inspire, and excel in every aspect
                of the competition.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-center">Meet the Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Prem Divekar", role: "Team Manager", avatar: "AJ" },
                { name: "Dharya Sharma", role: "Design and Manufacturing Engineer", avatar: "SR" },
                { name: "Sushmita Dasgupta", role: "Graphic Designer", avatar: "TK" },
                { name: "Dnyanda Kale", role: "Finance & Sponsorship Lead", avatar: "JS" },
                { name: "Mihika Nair", role: "Resources Manager", avatar: "CW" },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FuturisticCard>
                    <div className="flex flex-col items-center">
                      <div className="mb-4 relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 opacity-0 group-hover:opacity-100 blur transition-opacity duration-700"></div>
                        <Avatar className="h-20 w-20 relative">
                          <AvatarImage src={`/placeholder.svg?height=80&width=80`} alt={member.name} />
                          <AvatarFallback className="text-lg">{member.avatar}</AvatarFallback>
                        </Avatar>
                      </div>
                      <h4 className="text-lg font-medium">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </FuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Car Section - Enhanced with interactive 3D car */}
        <section id="ourcar" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Our Car</h2>

            <div className="mb-12">
              <div className="flex justify-center mb-6">
                <div className="inline-flex rounded-md border border-primary/20 p-1">
                  <button
                    onClick={() => setActiveTab("view")}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === "view" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
                    }`}
                  >
                    View Car
                  </button>
                  <button
                    onClick={() => setActiveTab("specs")}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === "specs" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
                    }`}
                  >
                    Specifications
                  </button>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 border border-primary/10">
                {activeTab === "view" && (
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">NOS-X1 Racer</h3>
                      <p className="text-lg text-muted-foreground mb-8">
                        Engineered for speed and precision, our car represents the pinnacle of our team's innovation and
                        technical expertise.
                      </p>
                      <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                          <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium">Lightweight Materials</h3>
                            <p className="text-muted-foreground">
                              Carbon fiber and advanced composites for optimal weight-to-strength ratio
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium">Aerodynamic Bodywork</h3>
                            <p className="text-muted-foreground">
                              CFD-optimized design to minimize drag and maximize downforce
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Gauge className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium">Precision Manufacturing</h3>
                            <p className="text-muted-foreground">
                              CNC machined components with tolerances measured in microns
                            </p>
                          </div>
                        </li>
                      </ul>
                      <Button size="lg" className="gap-2">
                        See Technical Details
                      </Button>
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Team NOS Racing Car"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "interact" && (
                  <div>
                    <InteractiveCar />
                  </div>
                )}

                {activeTab === "specs" && (
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FuturisticCard>
                        <h4 className="text-lg font-medium mb-4">Performance</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Top Speed</span>
                            <span className="font-medium">78 km/h</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Acceleration</span>
                            <span className="font-medium">0-20m in 1.2s</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Reaction Time</span>
                            <span className="font-medium">0.15s</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Race Distance</span>
                            <span className="font-medium">20m</span>
                          </li>
                        </ul>
                      </FuturisticCard>

                      <FuturisticCard>
                        <h4 className="text-lg font-medium mb-4">Physical</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Weight</span>
                            <span className="font-medium">55g</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Length</span>
                            <span className="font-medium">210mm</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Width</span>
                            <span className="font-medium">85mm</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Height</span>
                            <span className="font-medium">65mm</span>
                          </li>
                        </ul>
                      </FuturisticCard>

                      <FuturisticCard>
                        <h4 className="text-lg font-medium mb-4">Materials</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Body</span>
                            <span className="font-medium">Carbon Fiber</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Wheels</span>
                            <span className="font-medium">Polyurethane</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Axles</span>
                            <span className="font-medium">Titanium Alloy</span>
                          </li>
                        </ul>
                      </FuturisticCard>

                      <FuturisticCard>
                        <h4 className="text-lg font-medium mb-4">Design</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Drag Coefficient</span>
                            <span className="font-medium">0.18</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Downforce</span>
                            <span className="font-medium">0.8N</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Design Software</span>
                            <span className="font-medium">Autodesk Fusion 360</span>
                          </li>
                        </ul>
                      </FuturisticCard>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Speed Test Game Section */}
        <section id="speedtest" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">Test Your Reaction Speed</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
              F1 drivers need lightning-fast reflexes. See how your reaction time compares to the pros!
            </p>

            <SpeedTest />

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Professional F1 drivers have reaction times as low as 150ms. The average person's reaction time is
                between 200-300ms.
              </p>
            </div>
          </div>
        </section>

        {/* Sponsorship Section */}
        <section id="sponsors" className="py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Partner With Us!</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join Team NOS Racing as a sponsor and be part of our journey to the world finals. Your support helps us
              innovate and compete at the highest level.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Brand Exposure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Your logo on our car, uniforms, and marketing materials</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Media Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Visibility in competitions, social media, and press releases</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>STEM Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Demonstrate your commitment to education and innovation</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <Link href="mailto:sponsor@teamnosracing.com">
              <Button size="lg" variant="default">
                Become a Sponsor
              </Button>
            </Link>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Ryan International School chembur</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">nosofficialindia1@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+91 83560 80351</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                    </Link>
                    <Link
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </Link>
                    <Link
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                        <path d="m10 15 5-3-5-3z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
  <LeafletMapWithMarker />
</div>





            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/50 to-transparent opacity-50 blur-sm"></div>
              <Zap className="relative h-5 w-5 text-primary" />
            </div>
            <span className="font-semibold">TEAM NOS RACING</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Team NOS Racing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

