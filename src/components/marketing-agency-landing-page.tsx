'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brush, Globe, Megaphone, PenTool } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function MarketingAgencyLandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Brush className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">Markit</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#portfolio">
            Portfolio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Elevate Your Brand with Markit
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Eye-catching content. Stunning designs. Effective campaigns. Elegant copy.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-primary hover:bg-gray-100">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <Brush className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Content Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Eye-catching visuals and engaging content that captivate your audience.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Website Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Stunning, responsive websites that leave a lasting impression.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Megaphone className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Campaign Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Effective strategies to boost your brand's reach and impact.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <PenTool className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Copywriting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Elegant and persuasive copy that tells your brand's story.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Portfolio item ${item}`}
                    className="object-cover"
                    width={600}
                    height={400}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Elevate Your Brand?</h2>
                <p className="mx-auto max-w-[600px] md:text-xl">
                  Let's create something extraordinary together. Contact us today to get started.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-white text-primary hover:bg-gray-100">Get in Touch</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Markit Marketing Agency. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}