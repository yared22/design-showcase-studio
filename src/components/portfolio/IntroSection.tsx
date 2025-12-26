import introImage from "@/assets/reference/image-2.png";

const IntroSection = () => {
  return (
    <section className="flex items-center justify-center bg-background px-4 md:px-8 py-4">
      <div className="w-full max-w-5xl">
        <div className="bg-card rounded-lg shadow-2xl overflow-hidden">
          <img 
            src={introImage} 
            alt="Hello! I'm Abdulla Shahad - Graphic Designer, Illustrator, Visualizer"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
