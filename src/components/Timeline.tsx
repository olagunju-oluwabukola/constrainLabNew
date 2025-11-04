"use client";

import {
  Calendar,
  FlaskConical,
  Award,
  Microscope,
  Activity,
  Hospital,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";

const Timeline = () => {
  const { ref, isInView } = useInView();

  const milestones = [
    {
      year: "2022–2023",
      title: "Concept & Testing",
      description: "Concept design and bench testing of Wide-NAB",
      icon: Microscope,
    },
    {
      year: "2023",
      title: "Clinical Validation",
      description:
        "Randomized pilot trial: 100% diagnostic concordance achieved",
      icon: Activity,
    },
    {
      year: "2024",
      title: "Grant Award",
      description: "ARCON Seed Grant awarded for PrecisionVac development",
      icon: Award,
    },
    {
      year: "2025",
      title: "Animal Studies",
      description: "Successful animal validation studies completed",
      icon: FlaskConical,
    },
    {
      year: "2025",
      title: "Human Trials",
      description:
        "First-in-human trials approved under OAUTHC Ethics Committee",
      icon: Hospital,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-background overflow-hidden relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">
            Journey from Concept to Clinical Impact
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-800/40 to-blue-400/40" />

          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 transition-all duration-700 ${
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{
                    transitionDelay: isInView ? `${index * 120}ms` : "0ms",
                  }}
                >
                  {/* Icon bubble (centered on all screens now) */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-blue-800 to-blue-500 rounded-full text-white shadow-glow border-4 border-background z-10">
                    <Icon className="w-5 h-5 md:w-7 md:h-7" />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full mt-12 md:mt-0 md:w-1/2 ${
                      isLeft
                        ? "md:pr-10 md:text-right"
                        : "md:pl-10 md:text-left md:ml-auto"
                    }`}
                  >
                    <Card className="p-5 sm:p-6 md:p-7 hover:shadow-elegant transition-smooth relative z-0">
                      <div
                        className={`flex items-center gap-2 text-primary mb-3 ${
                          isLeft ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-semibold">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;