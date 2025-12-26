import heroImage from "@/assets/reference/image.png";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center bg-background px-4 md:px-8 pt-8 md:pt-16">
      <div className="w-full max-w-5xl">
        <div className="bg-card rounded-lg shadow-2xl overflow-hidden">
          <img 
            src={heroImage} 
            alt="Portfolio 2025 - Abdulla Shahad - Graphic Designer, Illustrator, Visualizer"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
