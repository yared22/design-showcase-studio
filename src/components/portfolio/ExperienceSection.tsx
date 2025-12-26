import experienceImage from "@/assets/reference/image-5.png";

const ExperienceSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background p-4 md:p-8">
      <div className="w-full max-w-5xl">
        <div className="bg-card rounded-lg shadow-2xl overflow-hidden">
          <img 
            src={experienceImage} 
            alt="Where I've worked - Schbang, Beacon Infotech, World Happiness Code, Freelance Designer"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
