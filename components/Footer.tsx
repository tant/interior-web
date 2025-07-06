'use client'
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { titleVariants } from "@/utils/animation";

export default function Footer() {
  return (
    <div className="bg-tertiary"> 
      <div className="container lg:grid lg:grid-cols-2 py-14"> 
        <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3"> 
          {/* Column 1: Navigation */}
          <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          > 
            <h2 className="pb-4 text-xl font-semibold uppercase">
              Navigation
            </h2>

            <div className="flex flex-col">
              <Link href="/about" className="py-1 hover:underline">About Us</Link>
              <Link href="/gallery" className="py-1 hover:underline">Gallery</Link>
              <Link href="/projects" className="py-1 hover:underline">Projects</Link>
              <Link href="/contact" className="py-1 hover:underline">Contact</Link>
            </div>
          </motion.div>
          {/* Column 2: Services */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          > 
            <h2 className="pb-4 text-xl font-semibold uppercase">
              Services
            </h2>

            <div className="flex flex-col">
              <Link href="#" className="py-1 hover:underline">Interior Design</Link>
              <Link href="#" className="py-1 hover:underline">Renovation</Link>
              <Link href="#" className="py-1 hover:underline">Consultation</Link>
              <Link href="#" className="py-1 hover:underline">Project Management</Link>
            </div>
          </motion.div>
          {/* Column 3: Social */}
          <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          > 
            <h2 className="pb-4 text-xl font-semibold uppercase">
              Social
            </h2>

            <div className="flex flex-col">
              <Link href="https://instagram.com" target="_blank" className="py-1 hover:underline">Instagram</Link>
              <Link href="https://facebook.com" target="_blank" className="py-1 hover:underline">Facebook</Link>
              <Link href="https://linkedin.com" target="_blank" className="py-1 hover:underline">LinkedIn</Link>
            </div>
          </motion.div>
        </div>

        <div>
          <p className="pb-4 text-xl font-semibold"> 
            Stay updated
          </p>
          <div className="relative lg:max-w-sm">
            <Input type='email' id='newsletter-email' placeholder="Email address" />
            <Button className="absolute bg-black text-white rounded-full h-10 px-3 text-sm top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary">
              Subscribe
            </Button>
          </div>
          <p className="pt-4 text-gray-500"> 
            By providing your email, you agree to receive updates from us about new projects and design tips.
          </p>
        </div>
      </div>
      {/* Copyright */}
      <div className="py-10 bg-black dark:bg-primary">
        <div className="container text-white text-center lg:justify-between lg:flex">
          <div className="pb-4 lg:pb-0">
            <p>&copy; 2025 Interior Studio. All rights reserved.</p>
          </div>
          <div>
            <Link href="/privacy-policy" className="p-4 hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="p-4 hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  )
}