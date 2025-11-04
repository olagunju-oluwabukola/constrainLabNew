import { Target, Globe, Lightbulb } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Purpose = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-10 md:py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">
            Our Purpose
          </h2>
          <p className="text-sm md:text-xl leading-relaxed">
We democratize access to lifesaving medical technologies{" "}
            by designing affordable diagnostic and interventional devices through need-driven research,
            local engineering, and global collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Target,
              title: "Need-Driven",
              description: "Technologies designed from real clinical needs in African healthcare settings",
              delay: "0s"
            },
            {
              icon: Lightbulb,
              title: "Locally Engineered",
              description: "Built in collaboration with local artisans and manufacturing facilities",
              delay: "0.1s"
            },
            {
              icon: Globe,
              title: "Globally Validated",
              description: "Clinically tested and validated to international standards",
              delay: "0.2s"
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`group p-6 md:p-8 bg-card border border-border rounded-2xl hover:shadow-elegant hover:scale-105 hover:-translate-y-2 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isInView ? `${index * 150}ms` : '0ms' }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-950 to-blue-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <item.icon className="w-7 h-7 text-white " />
              </div>
              <h3 className= "text-lg md:text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-12 text-center">
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Our work empowers healthcare systems to deliver{" "}
            equitable, high-quality cancer care{" "}
            - everywhere, regardless of resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
