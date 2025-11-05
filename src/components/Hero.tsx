import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope } from "lucide-react";

const Hero = () => {



  return (
    <section className="
    min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 to-blue-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,150,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,200,255,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
           <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-primary  rounded-full mb-8  animate-fade-in md:mt-10">
            <Microscope className="w-10 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Engineered with Purpose in Nigeria
            </span>
          </div>

          <h1 className="text-3xl sm:text-xl lg:text-7xl font-bold text-white mb-6 md:mb-10 mt-28 md:mt-0 animate-fade-in-up">
            Cost-Effective Innovation for{" "}
            <span className="text-gradient-accent">Global Health</span>
          </h1>

          <p
            className="text-base sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Transforming cancer diagnosis and care across Africa through
            locally-engineered, clinically-validated medical technologies
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a href="#innovations">
               <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-smooth group text-white"
            >
              Explore Our Innovations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
<a href="#network">
 <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white backdrop-blur-sm transition-smooth"

            >
              Join the Network
            </Button>
</a>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
