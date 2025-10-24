function Features() {
  try {
    const features = [
      {
        icon: 'zap',
        title: 'Internet Ultra Rápida',
        description: 'Velocidade 4G/5G para streaming, downloads e videoconferências sem interrupções.',
        color: '#fbbf24'
      },
      {
        icon: 'shield-check',
        title: 'Conexão Segura',
        description: 'Criptografia avançada para proteger seus dados em qualquer rede.',
        color: '#10b981'
      },
      {
        icon: 'battery-charging',
        title: 'Bateria de Longa Duração',
        description: 'Até 12 horas de uso contínuo para acompanhar seu dia.',
        color: '#3b82f6'
      },
      {
        icon: 'users',
        title: 'Múltiplos Dispositivos',
        description: 'Conecte até 10 dispositivos simultaneamente sem perda de velocidade.',
        color: '#8b5cf6'
      },
      {
        icon: 'map-pin',
        title: 'Cobertura Nacional',
        description: 'Acesso em todo o Brasil com as melhores operadoras.',
        color: '#ec4899'
      },
      {
        icon: 'package',
        title: 'Portátil e Compacto',
        description: 'Design leve e elegante que cabe no seu bolso.',
        color: '#f97316'
      }
    ];

    return (
      <section id="features" className="py-20 px-6 bg-white" data-name="features" data-file="components/Features.js">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Por Que Escolher a Conecta?</h2>
            <p className="text-xl text-[var(--text-light)] max-w-2xl mx-auto">
              Tecnologia de ponta para manter você sempre conectado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="feature-icon" style={{backgroundColor: `${feature.color}20`}}>
                  <div className={`icon-${feature.icon} text-3xl`} style={{color: feature.color}}></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-light)] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}