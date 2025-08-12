"use client"
import About from "@/components/About";
import Feature from "@/components/Feature";
import FeatureGrid from "@/components/FeatureGrid";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <FeatureGrid />
      {/* <About /> */}
      <Testimonials />
    </>
  );
}
