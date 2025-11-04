import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Trophy, BookOpen, ArrowRight } from "lucide-react";

const Ideathon = () => {
  return (
    <section className="py-10 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-accent/10 via-card to-primary/5 border-accent/30 shadow-elegant">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center animate-float">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                  Upcoming: ConstrainLab MedTech Ideathon 2026
                </h2>

              </div>

            </div>
<p className="text-xl text-muted-foreground italic mb-6">
                  From Need to Solution: Building the Next Generation of Frugal Innovations
                </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Format</h3>
                </div>
                <p className="text-muted-foreground">
                  Teams of 3 (2 healthcare workers + 1 engineer/computer scientist) identify unmet
                  clinical needs through stakeholder engagement at OAUTHC and pitch implementable solutions
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Prizes</h3>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 p-3 bg-accent/10 rounded-lg text-center">
                    <div className="text-2xl font-bold text-accent">₦300K</div>
                    <div className="text-xs text-muted-foreground">1st Prize</div>
                  </div>
                  <div className="flex-1 p-3 bg-primary/10 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">₦210K</div>
                    <div className="text-xs text-muted-foreground">2nd Prize</div>
                  </div>
                  <div className="flex-1 p-3 bg-secondary/10 rounded-lg text-center">
                    <div className="text-2xl font-bold text-secondary">₦150K</div>
                    <div className="text-xs text-muted-foreground">3rd Prize</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Resources</h3>
                </div>
                <p className="text-muted-foreground">
                  Curated materials from Stanford Biodesign eLibrary and open-source innovation frameworks
                </p>
              </div>
            </div>

            {/* <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-smooth group">
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button> */}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Ideathon;
