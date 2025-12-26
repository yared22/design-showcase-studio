import thankYouImage from "@/assets/reference/image-7.png";

const ThankYouSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background p-4 md:p-8">
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
