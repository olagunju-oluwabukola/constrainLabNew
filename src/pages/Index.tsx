import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Purpose from "@/components/Purpose";
import Innovations from "@/components/Innovations";
import Timeline from "@/components/Timeline";
import Founder from "@/components/Founder";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Network from "@/components/Network";
import Ideathon from "@/components/Ideathon";
import Advisory from "@/components/Advisory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="">
        <Hero />
       <div className=" -mt-16 md:-mt-32 relative z-10">
         <Challenge />
       </div>
        <Purpose />
        <div id="innovations">
          <Innovations />
        </div>
        <Timeline />
        <div id="founder">
          <Founder />
        </div>
        <div id="journey">
          <Gallery />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="network">
          <Network />
        </div>
        {/* <Ideathon /> */}
        <Advisory />
        <div id="contact">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
