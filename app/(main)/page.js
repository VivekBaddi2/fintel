"use client"
import About from "@/components/About";
import Feature from "@/components/Feature";
import FeatureGrid from "@/components/FeatureGrid";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Transition properties
      >
        <Hero />
        <Feature />
        <FeatureGrid />
        {/* <About /> */}
        <Testimonials />
      </motion.div>
    </>
  );
}
