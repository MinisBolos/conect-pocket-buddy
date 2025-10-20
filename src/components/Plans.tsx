import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "6GB",
    price: "R$ 69,90",
    data: "6GB",
    features: [
      "6GB de Internet",
      "MDM Incluído",
      "Conexão Portátil",
      "Suporte via WhatsApp",
    ],
    highlighted: false,
  },
  {
    name: "15GB",
    price: "R$ 84,90",
    data: "15GB",
    features: [
      "15GB de Internet",
      "MDM Incluído",
      "Conexão Portátil",
      "Suporte via WhatsApp",
    ],
    highlighted: false,
  },
  {
    name: "20GB",
    price: "R$ 99,99",
    data: "20GB",
    features: [
      "20GB de Internet",
      "MDM Incluído",
      "Conexão Portátil",
      "Suporte prioritário",
    ],
    highlighted: false,
  },
  {
    name: "30GB",
    price: "R$ 114,99",
    data: "30GB",
    features: [
      "30GB de Internet",
      "MDM Incluído",
      "Conexão Portátil",
      "Suporte prioritário",
    ],
    highlighted: true,
  },
  {
    name: "40GB",
    price: "R$ 129,99",
    data: "40GB",
    features: [
      "40GB de Internet",
      "MDM Incluído",
      "Conexão Portátil",
      "Suporte prioritário",
    ],
    highlighted: false,
  },
  {
    name: "50GB",
    price: "R$ 144,99",
    data: "50GB",
    features: [
      "50GB de Internet",
      "MDM Incluído",
      "Conexão Portátil",
      "Suporte prioritário",
    ],
    highlighted: false,
  },
  {
    name: "100GB",
    price: "R$ 159,99",
    data: "100GB",
    features: [
      "100GB de Internet",
      "MDM Incluído",
      "Conexão Portátil",
      "Suporte VIP 24/7",
    ],
    highlighted: false,
  },
];

const PAYMENT_URL = "https://www.asaas.com/c/px999ktfxzpb6u55";
const WHATSAPP_NUMBER = "5521971550633";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

              <CardFooter className="flex-col gap-2">
                <Button 
                  className="w-full" 
                  variant={plan.highlighted ? "hero" : "default"}
                  size="lg"
                  onClick={() => window.open(PAYMENT_URL, '_blank')}
                >
                  Contratar
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Após assinatura, entre em contato via{" "}
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
