function HowItWorks() {
  try {
    const steps = [
      {
        number: '1',
        icon: 'shopping-cart',
        title: 'Escolha Seu Plano',
        description: 'Selecione o plano que melhor atende suas necessidades'
      },
      {
        number: '2',
        icon: 'package',
        title: 'Receba em Casa',
        description: 'Entregamos seu dispositivo com frete grátis em todo Brasil'
      },
      {
        number: '3',
        icon: 'power',
        title: 'Ative e Conecte',
        description: 'Ligue o dispositivo e conecte seus aparelhos em segundos'
      },
      {
        number: '4',
        icon: 'globe',
        title: 'Navegue Livre',
        description: 'Aproveite internet onde você estiver'
      }
    ];

    return (
      <section id="how-it-works" className="py-20 px-6 bg-white" data-name="how-it-works" data-file="components/HowItWorks.js">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Como Funciona?</h2>
            <p className="text-xl text-[var(--text-light)] max-w-2xl mx-auto">
              Em apenas 4 passos simples, você estará conectado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mb-6 relative inline-block">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'}}>
                    <div className={`icon-${step.icon} text-3xl text-white`}></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center font-bold text-lg" style={{color: 'var(--primary-color)'}}>
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-[var(--text-light)]">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <div className="icon-arrow-right text-2xl" style={{color: 'var(--primary-color)', opacity: 0.3}}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HowItWorks component error:', error);
    return null;
  }
}