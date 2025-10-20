import { Wifi, Zap, Shield, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Wifi,
    title: "Conectividade Ilimitada",
    description: "Internet sem limite de dados para você navegar, trabalhar e se divertir sem preocupações.",
  },
  {
    icon: Zap,
    title: "Velocidade 5G",
    description: "Tecnologia de ponta com velocidades ultrarrápidas para streaming, downloads e chamadas de vídeo.",
  },
  {
    icon: Shield,
    title: "Conexão Segura",
    description: "Rede criptografada e protegida para garantir sua privacidade e segurança online.",
  },
  {
    icon: Globe,
    title: "Cobertura Nacional",
    description: "Leve sua internet para qualquer lugar do Brasil com nossa ampla cobertura em todo território nacional.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Por que escolher o Conect?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para estar sempre conectado, de forma simples e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-border bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-primary">
                  <benefit.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
