class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo deu errado</h1>
            <p className="text-gray-600 mb-4">Desculpe, algo inesperado aconteceu.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedPlan, setSelectedPlan] = React.useState('');
    const [alert, setAlert] = React.useState({ show: false, message: '', type: '' });
    const [isReviewsModalOpen, setIsReviewsModalOpen] = React.useState(false);

    const openModal = (plan = '') => {
      setSelectedPlan(plan);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedPlan('');
    };

    const showAlert = (message, type = 'success') => {
      setAlert({ show: true, message, type });
      setTimeout(() => setAlert({ show: false, message: '', type: '' }), 5000);
    };

    const openReviewsModal = () => {
      setIsReviewsModalOpen(true);
    };

    const closeReviewsModal = () => {
      setIsReviewsModalOpen(false);
    };

    return (
      <div className="min-h-screen" data-name="app" data-file="app.js">
        <Header openModal={openModal} />
        <Hero openModal={openModal} />
        <Features />
        <Plans openModal={openModal} />
        <HowItWorks />
        <Testimonials openReviewsModal={openReviewsModal} />
        <CTA openModal={openModal} />
        <Footer />
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          selectedPlan={selectedPlan}
          showAlert={showAlert}
        />
        <ReviewsModal isOpen={isReviewsModalOpen} onClose={closeReviewsModal} />
        {alert.show && <Alert message={alert.message} type={alert.type} />}
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => console.log('ServiceWorker registered'))
      .catch(err => console.log('ServiceWorker registration failed'));
  });
}
