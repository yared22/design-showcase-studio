import aboutImage from "@/assets/reference/image-3.png";

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background p-4 md:p-8">
      <div className="w-full max-w-5xl">
        <div className="bg-card rounded-lg shadow-2xl overflow-hidden">
          <img 
            src={aboutImage} 
            alt="A little about me - Skills including Illustration, Typography, Creative Direction, and more"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
