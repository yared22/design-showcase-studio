import contentsImage from "@/assets/reference/image-6.png";

const PortfolioContentsSection = () => {
  return (
    <section className="flex items-center justify-center bg-background px-4 md:px-8 py-4">
      <div className="w-full max-w-5xl">
        <div className="bg-card rounded-lg shadow-2xl overflow-hidden">
          <img 
            src={contentsImage} 
            alt="What You'll Find Inside - Illustrations, Branding, Social Media, Storyboards, 3D Designs, Animations"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioContentsSection;
