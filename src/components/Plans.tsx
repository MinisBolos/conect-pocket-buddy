import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "R$ 79,90",
    description: "Perfeito para uso pessoal",
    features: [
      "Internet Ilimitada",
      "Velocidade até 10 Mbps",
      "1 Dispositivo conectado",
      "Suporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "R$ 129,90",
    description: "Ideal para profissionais",
    features: [
      "Internet Ilimitada",
      "Velocidade até 50 Mbps",
      "Até 5 Dispositivos",
      "Suporte prioritário 24/7",
      "Wi-Fi 5G",
    ],
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "R$ 199,90",
    description: "Para pequenas empresas",
    features: [
      "Internet Ilimitada",
      "Velocidade até 100 Mbps",
      "Até 10 Dispositivos",
      "Suporte dedicado 24/7",
      "Wi-Fi 5G",
      "IP Fixo",
    ],
    highlighted: false,
  },
];

const Plans = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha seu plano ideal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Planos flexíveis para todas as necessidades. Sem taxa de instalação ou fidelidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.highlighted 
                  ? 'border-primary shadow-glow scale-105' 
                  : 'border-border'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.highlighted ? "hero" : "default"}
                  size="lg"
                >
                  Contratar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
