import { AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";

const Challenge = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="md:pt-20 pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          ref={ref}
          className={`max-w-5xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-card to-muted border-primary/20 shadow-elegant transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="md:flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className={`w-16 h-16 bg-primary/10 rounded-2xl hidden md:flex items-center justify-center transition-all duration-500 delay-200 ${
                isInView ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
              }`}>
                <AlertCircle className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div>
              <div className="flex gap-4">
                 <div className={`w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center transition-all duration-500 delay-200 mb-4 md:mb-0 fllex md:hidden ${
                isInView ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
              }`}>
                <AlertCircle className="w-8 h-8 text-primary" />
              </div>

              <h2 className="text-lg  md:text-3xl font-bold mb-4 bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">
                The Challenge We're Solving
              </h2>
              </div>

              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-4">
                In many African hospitals, women with breast lumps wait weeks, or never receive an accurate diagnosis because standard biopsy devices are costly, imported, and often unavailable. As a result, late-stage presentation remains the norm, and survival rates lag far behind global averages. ConstrainLab was created to change this reality. By re-engineering the breast biopsy process through locally built, low-cost, high-performance systems, we aim to make early, accurate diagnosis accessible to every woman regardless of income or geography.
              </p>

            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Challenge;
