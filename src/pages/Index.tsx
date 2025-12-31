import sittingDrawing from "@/assets/illustrations/sitting-drawing.png";
import walking from "@/assets/illustrations/walking.png";
import atDesk from "@/assets/illustrations/at-desk.png";
import lyingPapers from "@/assets/illustrations/lying-papers.png";
import thankYou from "@/assets/illustrations/thank-you.png";

const Index = () => {
  return (
    <main className="bg-card">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8 md:p-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-muted-foreground text-lg md:text-xl tracking-widest mb-6">PORTFOLIO 2025</p>
          <h1 className="text-5xl md:text-8xl font-bold text-primary mb-6 leading-tight">Adonay Gesite</h1>
          <p className="text-2xl md:text-3xl text-muted-foreground">
            Graphic Designer, Illustrator, Visualizer
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="min-h-screen flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src={sittingDrawing} 
              alt="Adonay drawing on chair"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-muted-foreground text-lg md:text-xl tracking-widest mb-4">HELLO!</p>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              I'm Adonay Gesite
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Graphic Designer, Illustrator, Visualizer
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-6xl flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src={walking} 
              alt="Adonay walking"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 text-center md:text-left">
              A little about me
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-muted/50 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors">
                <p className="font-bold text-xl text-primary">Illustration</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors">
                <p className="font-bold text-xl text-primary">Typography</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors">
                <p className="font-bold text-xl text-primary">Creative Direction</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors">
                <p className="font-bold text-xl text-primary">Brand Identity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="min-h-screen flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src={atDesk} 
              alt="Adonay at desk"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 text-center md:text-left">
              Tools I'm fluent in
            </h2>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary/10 hover:bg-primary/20 text-primary text-lg px-6 py-3 rounded-full transition-colors">
                Adobe Creative Suite
              </span>
              <span className="bg-primary/10 hover:bg-primary/20 text-primary text-lg px-6 py-3 rounded-full transition-colors">
                Figma
              </span>
              <span className="bg-primary/10 hover:bg-primary/20 text-primary text-lg px-6 py-3 rounded-full transition-colors">
                Blender
              </span>
              <span className="bg-primary/10 hover:bg-primary/20 text-primary text-lg px-6 py-3 rounded-full transition-colors">
                Procreate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-6xl flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src={lyingPapers} 
              alt="Adonay lying on papers"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 text-center md:text-left">
              Where I've worked
            </h2>
            <ul className="space-y-4 text-xl md:text-2xl text-muted-foreground">
              <li className="flex items-center gap-4 group">
                <span className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="group-hover:text-primary transition-colors">Schbang</span>
              </li>
              <li className="flex items-center gap-4 group">
                <span className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="group-hover:text-primary transition-colors">Beacon Infotech</span>
              </li>
              <li className="flex items-center gap-4 group">
                <span className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="group-hover:text-primary transition-colors">World Happiness Code</span>
              </li>
              <li className="flex items-center gap-4 group">
                <span className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="group-hover:text-primary transition-colors">Freelance Designer</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Contents Section */}
      <section className="min-h-screen flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-12 text-center">
            What You'll Find Inside
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Illustrations', 'Branding', 'Social Media', 
              'Storyboards', '3D Designs', 'Animations'
            ].map((item) => (
              <div 
                key={item}
                className="bg-muted/50 hover:bg-primary/10 rounded-xl p-6 text-center transition-colors group"
              >
                <p className="text-xl font-bold text-primary group-hover:scale-105 transition-transform">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="min-h-screen flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-2/5">
            <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight mb-4">
              What I do
            </h2>
            <p className="text-2xl md:text-3xl text-primary/70 italic">
              (and love doing)
            </p>
          </div>
          <div className="md:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num}
                className="aspect-square bg-muted/50 hover:bg-primary/10 rounded-xl flex items-center justify-center text-muted-foreground text-lg font-medium hover:text-primary transition-all hover:scale-105"
              >
                Work {num}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="min-h-screen flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-6xl text-center">
          <img 
            src={thankYou} 
            alt="Thank You!"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </section>

    </main>
  );
};

export default Index;
