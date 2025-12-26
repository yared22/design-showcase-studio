import thankYouImage from "@/assets/reference/image-7.png";

const ThankYouSection = () => {
  return (
    <section className="flex items-center justify-center bg-background px-4 md:px-8 pt-4 pb-8 md:pb-16">
      <div className="w-full max-w-5xl">
        <div className="bg-card rounded-lg shadow-2xl overflow-hidden">
          <img 
            src={thankYouImage} 
            alt="Thank You!"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
