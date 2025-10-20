import { ShoppingCart, Package, Wifi, Smile } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Escolha seu plano",
    description: "Selecione o plano que melhor atende suas necessidades",
  },
  {
    icon: Package,
    title: "Receba em casa",
    description: "Seu dispositivo chega em até 3 dias úteis",
  },
  {
    icon: Wifi,
    title: "Ative e conecte",
    description: "Processo simples e rápido, em apenas 2 minutos",
  },
  {
    icon: Smile,
    title: "Aproveite",
    description: "Navegue ilimitadamente onde estiver",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simples, rápido e sem complicação. Veja como é fácil ter internet no bolso.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="mb-4 inline-flex p-4 rounded-full bg-gradient-primary shadow-glow animate-float">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="mb-2 text-sm font-semibold text-primary">Passo {index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-accent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
