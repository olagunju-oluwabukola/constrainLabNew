import ImageCarousel from "./ImageCarousel";
import workshopImage from "@/assets/workshop-blacksmith.jpg";
import clinicianImage from "@/assets/clinician-innovator.jpg";
import inVivoImage from "@/assets/in-vivo-trials.jpg";
import conferenceImage from "@/assets/conference-accra.jpg";
import awardImage from "@/assets/best-abstract-award.jpg";
import aorticImage from "@/assets/aortic-president.jpg";

const Gallery = () => {
  const images = [
    {
      src: workshopImage,
      alt: "Prototyping the T-lock device with a local blacksmith",
      caption: "Prototyping the T-lock device with a local blacksmith",
    },
    {
      src: clinicianImage,
      alt: "The clinician-innovator solving Africa's biggest healthcare problems",
      caption: "The clinician-innovator solving Africa's biggest healthcare problems",
    },
    {
      src: inVivoImage,
      alt: "In-vivo trials of the PrecisionVac biopsy device in a live pig model",
      caption: "In-vivo trials of the PrecisionVac biopsy device in a live pig model",
    },
    {
      src: conferenceImage,
      alt: "Dr Akinola Odedeyi at the Pan-African Conference",
      caption: "Dr Akinola Odedeyi at the Pan-African Basic and Translational Cancer Conference, Accra, Ghana",
    },
    {
      src: awardImage,
      alt: "Receiving the Best Abstract Award",
      caption: "Receiving the 'Best Abstract Award' at the Pan-African Basic and Translational Cancer Conference",
    },
    {
      src: aorticImage,
      alt: "Meeting with AORTIC leadership",
      caption: "Dr Akinola Odedeyi with the President and General Secretary of AORTIC",
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-br from-blue-950 to-blue-800 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From workshop to clinical validation – see our innovation process in action
          </p>
        </div>

        <ImageCarousel images={images} />
      </div>
    </section>
  );
};

export default Gallery;
