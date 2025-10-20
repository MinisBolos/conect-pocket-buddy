import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Designer Freelancer",
    content: "Trabalho remoto ficou muito mais fácil! Levo meu Wi-Fi de bolso para qualquer lugar e nunca fico sem internet.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Empresário",
    content: "Excelente custo-benefício. A velocidade é ótima e o suporte sempre rápido para resolver qualquer questão.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Estudante",
    content: "Perfeito para estudar em qualquer lugar. Uso na faculdade, em casa e até no parque. Vale cada centavo!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milhares de pessoas já confiam no Conect Wi-fi De Bolso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
