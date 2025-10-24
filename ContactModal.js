function ContactModal({ isOpen, onClose, selectedPlan, showAlert }) {
  try {
    const [formData, setFormData] = React.useState({
      nome: '', email: '', telefone: '', plano: selectedPlan, mensagem: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    React.useEffect(() => {
      setFormData(prev => ({ ...prev, plano: selectedPlan }));
    }, [selectedPlan]);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        // Save to database
        await trickleCreateObject('lead', {
          Nome: formData.nome,
          Email: formData.email,
          Telefone: formData.telefone,
          Plano: formData.plano,
          Mensagem: formData.mensagem,
          Status: 'Novo'
        });
        
        // Prepare WhatsApp message
        const whatsappNumber = '5521971550633';
        let message = `Olá! Gostaria de contratar um plano Conecta Wi-Fi De Bolso.\n\n`;
        message += `*Nome:* ${formData.nome}\n`;
        message += `*Email:* ${formData.email}\n`;
        message += `*Telefone:* ${formData.telefone}\n`;
        if (formData.plano) {
          message += `*Plano de Interesse:* ${formData.plano}\n`;
        }
        if (formData.mensagem) {
          message += `*Mensagem:* ${formData.mensagem}\n`;
        }
        
        // Get plan link based on selected plan
        const planLinks = {
          '6GB': 'https://www.asaas.com/c/px999ktfxzpb6u55',
          '15GB': 'https://www.asaas.com/c/94a59m0l6pq3jg98',
          '20GB': 'https://www.asaas.com/c/epz56y4wsxs2f10f',
          '30GB': 'https://www.asaas.com/c/dv1341x7a7gyierq',
          '40GB': 'https://www.asaas.com/c/vypf7c0lseavv5um',
          '50GB': 'https://www.asaas.com/c/11szfm21fkleeuvk',
          '100GB': 'https://www.asaas.com/c/v15d6zaihqrkwg9n'
        };
        
        if (formData.plano && planLinks[formData.plano]) {
          message += `\n*Link do Plano:* ${planLinks[formData.plano]}`;
        }
        
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp in new window
        window.open(whatsappUrl, '_blank');
        
        showAlert('Redirecionando para WhatsApp...', 'success');
        setFormData({ nome: '', email: '', telefone: '', plano: '', mensagem: '' });
        onClose();
      } catch (error) {
        showAlert('Erro ao enviar. Tente novamente.', 'error');
      } finally {
        setIsSubmitting(false);
      }
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-name="contact-modal" data-file="components/ContactModal.js">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <div className="icon-x text-2xl"></div>
          </button>
          
          <h2 className="text-3xl font-bold mb-2" style={{color: 'var(--primary-color)'}}>Fale Conosco</h2>
          <p className="text-[var(--text-light)] mb-6">Preencha o formulário e entraremos em contato</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Nome Completo *</label>
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:outline-none transition-colors"/>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:outline-none transition-colors"/>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Telefone *</label>
              <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:outline-none transition-colors"/>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Plano de Interesse</label>
              <select name="plano" value={formData.plano} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:outline-none transition-colors">
                <option value="">Selecione um plano</option>
                <option value="6GB">6GB - R$ 69,90/mês</option>
                <option value="15GB">15GB - R$ 84,90/mês</option>
                <option value="20GB">20GB - R$ 99,99/mês</option>
                <option value="30GB">30GB - R$ 114,99/mês</option>
                <option value="40GB">40GB - R$ 129,99/mês</option>
                <option value="50GB">50GB - R$ 144,99/mês</option>
                <option value="100GB">100GB - R$ 159,99/mês</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Mensagem</label>
              <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} rows="3"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:outline-none transition-colors resize-none"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
              {isSubmitting ? 'Enviando...' : 'Enviar Contato'}
            </button>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ContactModal component error:', error);
    return null;
  }
}