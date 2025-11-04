import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Lightbulb, Users, Award } from "lucide-react";
import wideNabImage from "@/assets/wide-nab-device.png";
import precisionVacImage from "@/assets/precisionvac-device.png";
import { useInView } from "@/hooks/useInView";

const Innovations = () => {
  const { ref: titleRef, isInView: titleInView } = useInView();
  const { ref: wideNabRef, isInView: wideNabInView } = useInView();
  const { ref: precisionVacRef, isInView: precisionVacInView } = useInView();

  return (
    <section className=" pt-4 md:pt-10 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-10  md:mb-16 lg:mb-20 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4  bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">
            Our Innovation
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Breakthrough medical devices making cancer diagnosis accessible and affordable
          </p>
        </div>

        <div className="max-w-7xl md:mx-auto space-y-10  md:space-y-20 mb-8">
          {/* Wide-NAB */}
          <Card
            ref={wideNabRef}
            className={`overflow-hidden border-1 border-blue-500 bg-gray-50 shadow-xl rounded-3xl transition-all duration-700 hover:shadow-2xl hover:border-blue-900 ${
              wideNabInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid lg:grid-cols-5 gap-0 ">
              {/* Image Box */}
              <div className="lg:col-span-2 relative bg-muted/50 p-8 flex items-center justify-center">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-br from-blue-950 to-blue-800 text-primary-foreground shadow-lg">
                    Manual Device
                  </Badge>
                </div>
                <img
                  src={wideNabImage}
                  alt="Wide Needle Aspiration Biopsy Device"
                  className="h-48 md:h-72 object-contain hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl"
                />
              </div>

              {/* Content Box */}
              <div className="lg:col-span-3 p-8 md:p-10 lg:p-12">
                <h3 className="block text-xl md:text-3xl bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent mb-2 md:mb-4 font-bold">
                  Wide Needle Aspiration Biopsy (Wide-NAB)
                </h3>

                <p className="text-muted-foreground mb-6 md:mb-8 text-base md:text-base leading-relaxed text-justify">
                  A manually operated, syringe-powered vacuum biopsy system that makes tissue sampling
                  for breast cancer diagnosis <strong className="bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">92% more affordable</strong>.
                </p>

                {/* Key Innovation Box */}
                <div className="mb-8 p-6 rounded-xl bg-muted/50 border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h4 className="font-bold bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent  md:text-lg">Key Innovation</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Reusable stainless-steel plunger stabilizer (T-Lock) that improves suction stability,
                    prevents plunger snap-back, and enables consistent vacuum generation.
                  </p>
                </div>

                {/* Validation Box */}
                <div className="p-6 m-4zy rounded-xl  bg-muted/50 border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">Validation Results</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Randomized pilot study at Obafemi Awolowo University Teaching Hospitals Complex:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/60">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>100% diagnostic concordance</strong> with standard core-needle biopsy</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/60">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Preferred by patients</strong> for simplicity and comfort</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/60">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Cost:</strong> ~$120 vs. $1,500+ for commercial systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* PrecisionVac */}
          <Card
            ref={precisionVacRef}
            className={`overflow-hidden border-1 border-blue-500 shadow-xl rounded-3xl transition-all duration-700  hover:border-blue-900 ${
              precisionVacInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Content Box */}
              <div className="lg:col-span-3 p-8 lg:p-12 order-2 lg:order-1 ">
                <h3 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">
                  PrecisionVac Automated Biopsy System
                </h3>

                <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                  Building on Wide-NAB's success, PrecisionVac adds motorized, pressure-regulated vacuum
                  assistance for enhanced consistency and reduced operator fatigue.
                </p>

                {/* Partners Box */}
                <div className="mb-8 p-6 rounded-xl  bg-muted/50 border ">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-blue-900" />
                    <h4 className="font-bold text-lg bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">Co-Development Partners</h4>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                      <span>University College London (UCL) Engineers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                      <span>Nigerian fabrication artisans</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                      <span>OAUTHC clinical team</span>
                    </div>
                  </div>
                </div>

                {/* Advantages Box */}
                <div className="p-6 rounded-xl bg-muted/50 border border-border">
                  <h4 className="font-bold  mb-4 bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">Advantages</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/60">
                      <CheckCircle2 className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Real-time suction modulation</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/60">
                      <CheckCircle2 className="w-5 h-5 text- text-blue-900 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Optimized tissue yield</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/60">
                      <CheckCircle2 className="w-5 h-5  text-blue-900 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Locally manufacturable</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/60">
                      <CheckCircle2 className="w-5 h-5  text-blue-900 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Cost-effective solution</span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-6">
                  <Badge variant="outline" className="border-accent text-accent px-4 py-2 text-sm">
                  First-in-human trials approved (2025)
                  </Badge>
                </div>
              </div>

              {/* Image Box */}
              <div className="lg:col-span-2 relative bg-muted/50 p-8 flex items-center justify-center order-1 lg:order-2">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-br from-blue-950 to-blue-800  shadow-lg">
                    Automated System
                  </Badge>
                </div>
                <img
                  src={precisionVacImage}
                  alt="PrecisionVac Automated Biopsy System"
                  className="h-80 w-auto object-contain hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Innovations;
