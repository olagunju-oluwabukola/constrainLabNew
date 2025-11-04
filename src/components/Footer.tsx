import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We welcome collaborations and ideas that advance affordable innovation for global health
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-smooth"
              asChild
            >
              <a href="mailto:info@constrainlab.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@constrainlab.com
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-smooth"
              asChild
            >
              <a
                href="https://linkedin.com/in/akinolaodedeyi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Dr. Akinola Odedeyi
              </a>
            </Button>
          </div>

          <div className="text-center pt-8 border-t border-white/20">
            <p className="text-white/70 mb-2">🇳🇬 © 2025 ConstrainLab. All rights reserved.</p>
            <p className="text-white/60 italic">Engineered with purpose in Nigeria.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
