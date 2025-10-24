function ReviewsModal({ isOpen, onClose }) {
  try {
    const allReviews = [
      {
        name: 'Maria Silva',
        role: 'Empreendedora Digital',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        content: 'Trabalho viajando pelo Brasil e a Conecta revolucionou minha vida profissional. Internet estável em qualquer lugar!',
        rating: 5,
        date: '15/10/2025'
      },
      {
        name: 'João Santos',
        role: 'Estudante',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        content: 'Perfeito para estudar online. Nunca mais tive problemas de conexão durante as aulas.',
        rating: 5,
        date: '12/10/2025'
      },
      {
        name: 'Ana Costa',
        role: 'Gerente de Vendas',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        content: 'Conectividade confiável para minha equipe. O suporte é excelente e os preços são justos.',
        rating: 5,
        date: '10/10/2025'
      },
      {
        name: 'Carlos Oliveira',
        role: 'Fotógrafo',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        content: 'Essencial para fazer uploads rápidos das minhas fotos em eventos. A bateria dura o dia todo!',
        rating: 5,
        date: '08/10/2025'
      },
      {
        name: 'Fernanda Lima',
        role: 'Consultora',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
        content: 'Ótimo custo-benefício. Uso em reuniões com clientes e nunca me decepciona.',
        rating: 4,
        date: '05/10/2025'
      },
      {
        name: 'Ricardo Mendes',
        role: 'Desenvolvedor',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
        content: 'Velocidade excelente para trabalhar remotamente. Consigo fazer videochamadas sem travamentos.',
        rating: 5,
        date: '02/10/2025'
      }
    ];

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-name="reviews-modal" data-file="components/ReviewsModal.js">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full p-8 max-h-[90vh] overflow-y-auto">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <div className="icon-x text-2xl"></div>
          </button>
          
          <h2 className="text-3xl font-bold mb-2" style={{color: 'var(--primary-color)'}}>Avaliações dos Clientes</h2>
          <p className="text-[var(--text-light)] mb-8">Veja o que nossos clientes estão falando sobre a Conecta</p>
          
          <div className="space-y-6">
            {allReviews.map((review, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4"/>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-sm text-[var(--text-light)]">{review.role}</p>
                    </div>
                  </div>
                  <span className="text-sm text-[var(--text-light)]">{review.date}</span>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`icon-star text-lg ${i < review.rating ? 'text-[#fbbf24]' : 'text-gray-300'}`}></div>
                  ))}
                </div>
                <p className="text-[var(--text-dark)] leading-relaxed">"{review.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ReviewsModal component error:', error);
    return null;
  }
}