import heroImage from "@/assets/reference/image.png";
import introImage from "@/assets/reference/image-2.png";
import aboutImage from "@/assets/reference/image-3.png";
import toolsImage from "@/assets/reference/image-4.png";
import experienceImage from "@/assets/reference/image-5.png";
import contentsImage from "@/assets/reference/image-6.png";
import thankYouImage from "@/assets/reference/image-7.png";

const Index = () => {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl bg-card rounded-lg shadow-2xl overflow-hidden">
        <img 
          src={heroImage} 
          alt="Portfolio 2025 - Abdulla Shahad - Graphic Designer, Illustrator, Visualizer"
          className="w-full h-auto"
        />
        <img 
          src={introImage} 
          alt="Hello! I'm Abdulla Shahad - Graphic Designer, Illustrator, Visualizer"
          className="w-full h-auto"
        />
        <img 
          src={aboutImage} 
          alt="A little about me - Skills including Illustration, Typography, Creative Direction, and more"
          className="w-full h-auto"
        />
        <img 
          src={toolsImage} 
          alt="Tools I'm fluent in - Adobe Creative Suite, Figma, Blender, Procreate"
          className="w-full h-auto"
        />
        <img 
          src={experienceImage} 
          alt="Where I've worked - Schbang, Beacon Infotech, World Happiness Code, Freelance Designer"
          className="w-full h-auto"
        />
        <img 
          src={contentsImage} 
          alt="What You'll Find Inside - Illustrations, Branding, Social Media, Storyboards, 3D Designs, Animations"
          className="w-full h-auto"
        />
        <img 
          src={thankYouImage} 
          alt="Thank You!"
          className="w-full h-auto"
        />
      </div>
    </main>
  );
};

export default Index;
