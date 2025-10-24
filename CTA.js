function CTA({ openModal }) {
  try {
    return (
      <section className="py-20 px-6 bg-white" data-name="cta" data-file="components/CTA.js">
        <div className="container mx-auto">
          <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden" style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'}}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pronto Para Ficar Conectado?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de clientes satisfeitos. Comece hoje mesmo com 7 dias de garantia ou seu dinheiro de volta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => openModal()} className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Contratar Agora
                  <div className="icon-arrow-right inline-block ml-2 text-lg"></div>
                </button>
                <button onClick={() => openModal()} className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300">
                  Falar com Especialista
                </button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-8 text-white/80 flex-wrap">
                <div className="flex items-center">
                  <div className="icon-info text-xl mr-2"></div>
                  <span>Fidelidade 12 meses</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-package text-xl mr-2"></div>
                  <span>Frete por conta do cliente</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-check-circle text-xl mr-2"></div>
                  <span>7 dias de garantia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CTA component error:', error);
    return null;
  }
}
