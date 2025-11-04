import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Network = () => {
  const { ref, isInView } = useInView();

  const benefits = [
    "Access to open innovation resources (Stanford Biodesign eLibrary + frameworks)",
    "Mentorship and collaboration opportunities",
    "A growing cross-disciplinary community of innovators"
  ];

  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card
            ref={ref}
            className={`p-8 lg:p-12 bg-gradient-to-br from-card to-primary/5 border-primary/20 shadow-elegant transition-all duration-700 ${
              isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="md:flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="text-xl sm:text-4xl font-bold mt-4 md:mt-0 mb-4">
                  Join the Device4Constraints Network
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-semibold">
                  A community reimagining what's possible under constraint
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 text-justify">
              The Device4Constraints Network (D4C) brings together students, early-career clinicians,
              engineers, and entrepreneurs passionate about designing frugal medical technologies for
              Africa's biggest health challenges.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Members Gain:</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    }`}
                    style={{ transitionDelay: isInView ? `${index * 100 + 300}ms` : '0ms' }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button size="lg" className="bg-gradient-to-br from-blue-950 to-blue-800  text-primary-foreground shadow-glow hover:shadow-elegant transition-smooth group">
              Join the Network
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Network;
