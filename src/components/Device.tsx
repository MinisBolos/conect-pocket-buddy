import router1 from "@/assets/router-1.webp";
import router2 from "@/assets/router-2.webp";
import { Check } from "lucide-react";

const Device = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Roteador Que Você Receberá Em Sua Casa!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dispositivo moderno, compacto e portátil com tecnologia 5G
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <img 
              src={router1} 
              alt="Roteador Wi-Fi portátil - vista 1" 
              className="w-full h-auto rounded-lg mb-6"
            />
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <img 
              src={router2} 
              alt="Roteador Wi-Fi portátil - vista 2" 
              className="w-full h-auto rounded-lg mb-6"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Especificações do Dispositivo</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Conectividade 5G</p>
                  <p className="text-sm text-muted-foreground">Velocidade ultra rápida</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Bateria de Longa Duração</p>
                  <p className="text-sm text-muted-foreground">Até 12 horas de uso</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Conecte Até 10 Dispositivos</p>
                  <p className="text-sm text-muted-foreground">Wi-Fi simultâneo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Design Compacto</p>
                  <p className="text-sm text-muted-foreground">Cabe no bolso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Device;
