"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">


        {/* Heading */}
        <h1
          className="pb-6 leading-none mx-auto text-center"
          style={{ maxWidth: "50%", fontFamily: "var(--font-oswald)" }}
        >
          <span
            className="block text-5xl md:text-7xl lg:text-8xl font-bold"
            style={{ color: "rgb(140, 140, 140)", letterSpacing: "-0.04em" }}
          >
            Smarter Financial Management
          </span>
          <span
            className="block text-5xl md:text-7xl lg:text-[6.5rem] font-bold"
            style={{ color: "#0a0a0a", letterSpacing: "-0.04em" }}
          >
            Powered by AI
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience intelligent money management with AI-driven insights that help you track, analyze, and refine your spending effortlessly
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
