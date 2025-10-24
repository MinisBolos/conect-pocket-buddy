function Hero({ openModal }) {
  try {
    return (
      <section className="pt-32 pb-20 px-6" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)'}} data-name="hero" data-file="components/Hero.js">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm mb-6 shadow-sm">
                <span className="text-[var(--primary-color)] font-semibold">✨ Internet Portátil</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Wi-Fi de Bolso <span style={{color: 'var(--primary-color)'}}>Para Onde Você For</span>
              </h1>
              <p className="text-xl text-[var(--text-light)] mb-8 leading-relaxed">
                Conectividade móvel. Trabalhe, estude e se divirta com segurança e alta velocidade em qualquer lugar do Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => openModal()} className="btn-primary">
                  Escolher Plano
                  <div className="icon-arrow-right inline-block ml-2 text-lg"></div>
                </button>
                <button onClick={() => {
                  const element = document.getElementById('features');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }} className="btn-secondary hover:bg-[var(--primary-color)] hover:text-white">
                  Saiba Mais
                </button>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold" style={{color: 'var(--primary-color)'}}>50K+</div>
                  <div className="text-sm text-[var(--text-light)]">Clientes Satisfeitos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{color: 'var(--primary-color)'}}>99.9%</div>
                  <div className="text-sm text-[var(--text-light)]">Tempo de Atividade</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{color: 'var(--primary-color)'}}>24/7</div>
                  <div className="text-sm text-[var(--text-light)]">Suporte</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img src="https://app.trickle.so/storage/app/Design3.png" alt="Wi-Fi Portátil" className="rounded-3xl shadow-2xl"/>
              </div>
              <div className="absolute top-10 -right-6 w-32 h-32 bg-[var(--secondary-color)] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-6 w-40 h-40 bg-[var(--accent-color)] rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}