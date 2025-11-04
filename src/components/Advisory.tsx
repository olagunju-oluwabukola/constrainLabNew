import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Wrench, FileCheck, GraduationCap, ArrowRight } from "lucide-react";

const Advisory = () => {
  const services = [
    {
      icon: Search,
      title: "Needs Assessment & Ideation Facilitation",
      description: "Identify real clinical needs and develop targeted solutions"
    },
    {
      icon: Wrench,
      title: "Prototype & Design Review",
      description: "Expert feedback on device prototypes and engineering design"
    },
    {
      icon: FileCheck,
      title: "Regulatory Navigation",
      description: "Guidance on ethics, IP, and device classification processes"
    },
    {
      icon: GraduationCap,
      title: "Capacity Building & Workshops",
      description: "Training programs for innovation teams and institutions"
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">
              MedTech Advisory & Implementation Support
            </h2>
            <p className="text-xl text-muted-foreground italic max-w-3xl mx-auto">
              Sharing practical expertise to help others innovate responsibly
            </p>
          </div>

          <Card className="p-8 lg:p-12 border-primary/20 shadow-elegant mb-8">
            <p className="text-lg text-muted-foreground mb-8 text-center">
              ConstrainLab offers targeted advisory support to innovators, hospitals, and organizations
              developing affordable, context-appropriate technologies.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="border-primary hover:from-blue-950 to-blue-800 border hover:text-white transition-smooth group">
                Request Advisory Support
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Advisory;
