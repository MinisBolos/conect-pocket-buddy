function Testimonials({ openReviewsModal }) {
  try {
    const testimonials = [
      {
        name: 'Maria Silva',
        role: 'Empreendedora Digital',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        content: 'Trabalho viajando pelo Brasil e a Conecta revolucionou minha vida profissional. Internet estável em qualquer lugar!',
        rating: 5
      },
      {
        name: 'João Santos',
        role: 'Estudante',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        content: 'Perfeito para estudar online. Nunca mais tive problemas de conexão durante as aulas.',
        rating: 5
      },
      {
        name: 'Ana Costa',
        role: 'Gerente de Vendas',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        content: 'Conectividade confiável para minha equipe. O suporte é excelente e os preços são justos.',
        rating: 5
      }
    ];

    return (
      <section id="testimonials" className="py-20 px-6" style={{backgroundColor: 'var(--bg-light)'}} data-name="testimonials" data-file="components/Testimonials.js">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{color: 'var(--primary-color)'}}>Roteadores Que Trabalhamos, Consulte a Disponibilidade!</h2>
            <div className="mb-12 flex justify-center">
              <img src="https://app.trickle.so/storage/app/Design sem nome (3).png" alt="Roteadores Disponíveis" className="rounded-2xl shadow-xl max-w-2xl w-full object-cover"/>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-[var(--text-light)] max-w-2xl mx-auto">
              Milhares de pessoas confiam no Conect todos os dias
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card cursor-pointer hover:scale-105 transition-transform" onClick={openReviewsModal}>
                <div className="flex items-center mb-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4"/>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--text-light)]">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="icon-star text-lg" style={{color: '#fbbf24'}}></div>
                  ))}
                </div>
                <p className="text-[var(--text-light)] leading-relaxed italic mb-4">"{testimonial.content}"</p>
                <p className="text-sm text-[var(--primary-color)] font-semibold">Clique para ver mais avaliações →</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    return null;
  }
}