function Plans({ openModal }) {
  try {
    const plans = [
      {
        name: '6GB',
        price: '69,90',
        period: 'mês',
        description: 'Ideal para uso leve',
        features: ['6GB de dados', 'Até 5 dispositivos', 'Velocidade 4G', 'Suporte por email'],
        popular: false,
        link: 'https://www.asaas.com/c/px999ktfxzpb6u55'
      },
      {
        name: '15GB',
        price: '84,90',
        period: 'mês',
        description: 'Para uso moderado',
        features: ['15GB de dados', 'Até 8 dispositivos', 'Velocidade 4G/5G', 'Suporte prioritário'],
        popular: false,
        link: 'https://www.asaas.com/c/94a59m0l6pq3jg98'
      },
      {
        name: '20GB',
        price: '99,99',
        period: 'mês',
        description: 'Uso frequente',
        features: ['20GB de dados', 'Até 10 dispositivos', 'Velocidade 5G', 'Suporte 24/7'],
        popular: false,
        link: 'https://www.asaas.com/c/epz56y4wsxs2f10f'
      },
      {
        name: '30GB',
        price: '114,99',
        period: 'mês',
        description: 'Melhor custo-benefício',
        features: ['30GB de dados', 'Até 10 dispositivos', 'Velocidade 5G', 'Suporte prioritário 24/7', 'Sem contratos'],
        popular: true,
        link: 'https://www.asaas.com/c/dv1341x7a7gyierq'
      },
      {
        name: '40GB',
        price: '129,99',
        period: 'mês',
        description: 'Para uso intenso',
        features: ['40GB de dados', 'Até 15 dispositivos', 'Velocidade 5G+', 'Suporte dedicado'],
        popular: false,
        link: 'https://www.asaas.com/c/vypf7c0lseavv5um'
      },
      {
        name: '50GB',
        price: '144,99',
        period: 'mês',
        description: 'Alto consumo',
        features: ['50GB de dados', 'Até 15 dispositivos', 'Velocidade 5G+', 'Suporte dedicado', 'Prioridade na rede'],
        popular: false,
        link: 'https://www.asaas.com/c/11szfm21fkleeuvk'
      },
      {
        name: '100GB',
        price: '159,99',
        period: 'mês',
        description: 'Uso profissional',
        features: ['100GB de dados', 'Dispositivos ilimitados', 'Velocidade 5G+', 'Suporte dedicado', 'VPN empresarial', 'Faturamento corporativo'],
        popular: false,
        link: 'https://www.asaas.com/c/v15d6zaihqrkwg9n'
      }
    ];

    return (
      <section id="plans" className="py-20 px-6" style={{backgroundColor: 'var(--bg-light)'}} data-name="plans" data-file="components/Plans.js">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Planos Para Todas as Necessidades</h2>
            <p className="text-xl text-[var(--text-light)] max-w-2xl mx-auto">
              Escolha o plano perfeito para você. Sem taxas ocultas, sem surpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`card relative ${plan.popular ? 'ring-4 ring-[var(--primary-color)]' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-semibold" style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'}}>
                    Mais Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-[var(--text-light)] text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold" style={{color: 'var(--primary-color)'}}>R${plan.price}</span>
                    <span className="text-[var(--text-light)] ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="icon-check text-lg mr-3 mt-0.5" style={{color: 'var(--primary-color)'}}></div>
                      <span className="text-[var(--text-light)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => window.open(plan.link, '_blank')} className={plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full hover:bg-[var(--primary-color)] hover:text-white'}>
                  Escolher Plano
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Plans component error:', error);
    return null;
  }
}