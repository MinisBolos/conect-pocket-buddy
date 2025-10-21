import { Button } from "@/components/ui/button";
import { Wifi } from "lucide-react";
import heroImage from "@/assets/hero-wifi.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/70 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Conect Wi-fi De Bolso" className="h-32 md:h-40 w-auto" />
          </div>
          
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur-sm px-6 py-2 border border-background/20">
            <Wifi className="h-5 w-5 text-primary-foreground animate-pulse-glow" />
            <span className="text-sm font-medium text-primary-foreground">Internet Portátil Ilimitada</span>
          </div>
          
          <h1 className="mb-6 text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Conectividade sem limites
          </h1>
          
          <p className="mb-8 text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Conectividade sem limites, onde você estiver. Internet de alta velocidade no seu bolso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
              Contratar Agora
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
              Ver Planos
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">100%</div>
              <div className="text-sm text-primary-foreground/80">Cobertura Nacional</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">5G</div>
              <div className="text-sm text-primary-foreground/80">Alta Velocidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-sm text-primary-foreground/80">Suporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
