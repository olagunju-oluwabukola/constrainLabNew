"use client";

import {
  Award,
  Lightbulb,
  Globe2,
  GraduationCap,
  Medal,
  Quote,
  Sparkles,
} from "lucide-react";
import founderImage from "@/assets/dr-odedeyi.jpg";
import { useInView } from "@/hooks/useInView";

const Founder = () => {
  const { ref, isInView } = useInView();

  const achievements = [
    {
      icon: <Medal className="w-5 h-5 text-blue-600" />,
      text: "Rising Star Award – Best Medical Brain in Nigeria (2024)",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-indigo-500" />,
      text: "ARCON Seed Grant for breast biopsy innovation (2023/24)",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-sky-600" />,
      text: "ESR/ESOR Oncologic Imaging Fellow – LMU Munich (2025, sole global awardee)",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-700" />,
      text: "ALTOR Fellow – Africa Leadership Training in Oncology Research (2025)",
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-600" />,
      text: "First Prize – NMA National Essay Competition on Medical Brain Drain",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-10 md:py-20 bg-gradient-to-b from-orange-50 via-orange-50 to-blue-50/30 overflow-hidden"
    >
      {/* background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* header text */}
        <div
          className={`text-center md:mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">
            Meet the Founder
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering global healthcare innovation through radiology, design thinking,
            and engineering excellence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* founder image */}
          <div
            className={`relative flex justify-center transition-all duration-700 ${
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-72 h-72 md:w-80 md:h-80">
              <img
                src={founderImage}
                alt="Dr. Akinola Odedeyi"
                className="w-full h-full object-cover object-top rounded-full transition-transform duration-700 hover:scale-105"
              />
              <Sparkles className="absolute bottom-4 right-6 text-blue-500 w-6 h-6 animate-pulse" />
            </div>
          </div>

          {/* text content */}
          <div className="flex-1">
            <div
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-xl md:text-3xl font-bold text-blue-900 mb-2">
                Dr. Akinola Odedeyi, MBChB, FWACS
              </h3>
              <p className="text-md text-gray-500 mb-8">
                Consultant Radiologist · Clinician-Innovator · Founder
              </p>

              <blockquote className="relative mb-10">
                <Quote className="absolute -top-3 -left-3 w-5 h-5 text-orange-500" />
                <p className="italic text-gray-700 border-l-4 border-orange-500 pl-4 leading-relaxed">
                  “Redefining medical innovation from the Global South — bridging radiology, design,
                  and frugal engineering to make cancer diagnosis equitable.”
                </p>
              </blockquote>

              <div className="grid sm:grid-cols-2 gap-5">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 bg-white/70 p-4 rounded-xl shadow-sm backdrop-blur-sm border border-gray-100 transition-all duration-500 ${
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <p className="text-sm text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
