import toolsImage from "@/assets/reference/image-4.png";

const ToolsSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background p-4 md:p-8">
      <div className="w-full max-w-5xl">
        <div className="bg-card rounded-lg shadow-2xl overflow-hidden">
          <img 
            src={toolsImage} 
            alt="Tools I'm fluent in - Adobe Creative Suite, Figma, Blender, Procreate"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
