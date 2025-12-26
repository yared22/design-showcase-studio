import sittingDrawing from "@/assets/illustrations/sitting-drawing.png";
import walking from "@/assets/illustrations/walking.png";
import atDesk from "@/assets/illustrations/at-desk.png";
import lyingPapers from "@/assets/illustrations/lying-papers.png";
import thankYou from "@/assets/illustrations/thank-you.png";

const Index = () => {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl bg-card rounded-lg shadow-2xl overflow-hidden">
        
        {/* Hero Section */}
        <section className="p-8 md:p-16 text-center">
          <p className="text-muted-foreground text-sm tracking-widest mb-4">PORTFOLIO 2025</p>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Adonay Gesite</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Graphic Designer, Illustrator, Visualizer
          </p>
        </section>

        {/* Intro Section */}
        <section className="p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src={sittingDrawing} 
              alt="Adonay drawing on chair"
              className="w-full max-w-sm mx-auto"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-muted-foreground text-sm tracking-widest mb-2">HELLO!</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              I'm Adonay Gesite
            </h2>
            <p className="text-lg text-muted-foreground">
              Graphic Designer, Illustrator, Visualizer
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="p-8 md:p-16 flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src={walking} 
              alt="Adonay walking"
              className="w-full max-w-sm mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              A little about me
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="font-semibold text-primary">Illustration</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="font-semibold text-primary">Typography</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="font-semibold text-primary">Creative Direction</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="font-semibold text-primary">Brand Identity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src={atDesk} 
              alt="Adonay at desk"
              className="w-full max-w-sm mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Tools I'm fluent in
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Adobe Creative Suite</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Figma</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Blender</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Procreate</span>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="p-8 md:p-16 flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src={lyingPapers} 
              alt="Adonay lying on papers"
              className="w-full max-w-sm mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Where I've worked
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Schbang
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Beacon Infotech
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                World Happiness Code
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Freelance Designer
              </li>
            </ul>
          </div>
        </section>

        {/* Portfolio Contents Section */}
        <section className="p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            What You'll Find Inside
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="font-semibold text-primary">Illustrations</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="font-semibold text-primary">Branding</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="font-semibold text-primary">Social Media</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="font-semibold text-primary">Storyboards</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="font-semibold text-primary">3D Designs</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="font-semibold text-primary">Animations</p>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="p-8 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              What I do
            </h2>
            <p className="text-2xl md:text-3xl text-primary/70 italic">
              (and love doing)
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-3 gap-4">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">Work 1</div>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">Work 2</div>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">Work 3</div>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">Work 4</div>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">Work 5</div>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">Work 6</div>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="p-8 md:p-16 text-center">
          <img 
            src={thankYou} 
            alt="Thank You!"
            className="w-full max-w-lg mx-auto"
          />
        </section>

      </div>
    </main>
  );
};

export default Index;
