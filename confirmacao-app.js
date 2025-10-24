function ConfirmationPage() {
  try {
    const [formData, setFormData] = React.useState({
      nome: '', email: '', telefone: '', plano: '', numeroAssinatura: ''
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendToWhatsApp = () => {
      if (!formData.nome || !formData.email || !formData.telefone || !formData.plano) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      const whatsappNumber = '5521971550633';
      let message = `Olá, Aqui Está Todas As Informações Do Plano De Internet Que Contratei.\n\n`;
      message += `*Nome:* ${formData.nome}\n`;
      message += `*Email:* ${formData.email}\n`;
      message += `*Telefone:* ${formData.telefone}\n`;
      message += `*Plano Contratado:* ${formData.plano}\n`;
      if (formData.numeroAssinatura) {
        message += `*Número da Assinatura:* ${formData.numeroAssinatura}\n`;
      }

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };

    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)'}}>
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'}}>
                <div className="icon-check text-4xl text-white"></div>
              </div>
              <h1 className="text-4xl font-bold mb-4" style={{color: 'var(--primary-color)'}}>
                Parabéns pela Assinatura!
              </h1>
              <p className="text-xl text-[var(--text-light)]">
                Agora envie suas informações pelo WhatsApp para finalizarmos o processo
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-2">Nome Completo *</label>
                <input type="text" name="nome" value={formData.nome} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:outline-none transition-colors"/>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:outline-none transition-colors"/>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Telefone *</label>
                <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:outline-none transition-colors"/>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Plano Contratado *</label>
                <select name="plano" value={formData.plano} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:outline-none transition-colors">
                  <option value="">Selecione o plano</option>
                  <option value="6GB - R$ 69,90/mês">6GB - R$ 69,90/mês</option>
                  <option value="15GB - R$ 84,90/mês">15GB - R$ 84,90/mês</option>
                  <option value="20GB - R$ 99,99/mês">20GB - R$ 99,99/mês</option>
                  <option value="30GB - R$ 114,99/mês">30GB - R$ 114,99/mês</option>
                  <option value="40GB - R$ 129,99/mês">40GB - R$ 129,99/mês</option>
                  <option value="50GB - R$ 144,99/mês">50GB - R$ 144,99/mês</option>
                  <option value="100GB - R$ 159,99/mês">100GB - R$ 159,99/mês</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Número da Assinatura (opcional)</label>
                <input type="text" name="numeroAssinatura" value={formData.numeroAssinatura} onChange={handleChange}
                  placeholder="Ex: #12345"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:outline-none transition-colors"/>
              </div>
            </div>

            <button onClick={sendToWhatsApp} className="btn-primary w-full mb-4">
              <div className="icon-message-circle inline-block mr-2 text-xl"></div>
              Enviar para WhatsApp
            </button>

            <a href="index.html" className="block text-center text-[var(--primary-color)] hover:underline">
              Voltar para a página inicial
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ConfirmationPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ConfirmationPage />);