import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Obafemi Awolowo University Teaching Hospitals Complex",
      role: "Clinical validation & needs assessment"
    },
    {
      name: "University College London (UCL)",
      role: "Engineering design & biomedical innovation"
    },
    {
      name: "Memorial Sloan Kettering Cancer Center - Global Cancer Disparities Initiative",
      role: "Research collaboration & clinical mentorship"
    },
    {
      name: "African Research Group for Oncology (ARGO)",
      role: "Regional capacity building"
    },
    {
      name: "Prototype Engineering Development Institute (PEDI, NASENI)",
      role: "Local manufacturing scale-up"
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">
            Collaborative Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto italic">
            Our work thrives at the intersection of medicine, engineering, and design
          </p>

{/*
            <p className="text-base md:text-lg text-center text-muted-foreground  mt-4 md:mt-8">
            ConstrainLab partners with visionary institutions to co-create context-appropriate technologies
          </p> */}
        </div>

        <div className="max-w-5xl mx-auto">


          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground italic">{partner.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
