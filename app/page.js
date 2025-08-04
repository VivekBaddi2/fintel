"use client"
import About from "@/components/About";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <About />
      <Testimonials />
    </>
  );
}
