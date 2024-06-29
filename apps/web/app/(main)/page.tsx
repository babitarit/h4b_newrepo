"use client";

import React, { useEffect } from "react";

import Contact from "../../components/Contact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Vision from "../../components/Vision";
import AccessibilityTools from "../../components/AccessibilityTools";



export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);


  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <Hero />
  <AccessibilityTools />

      <section id="vision">
        <Vision />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
