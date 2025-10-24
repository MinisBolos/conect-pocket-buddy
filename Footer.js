function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-dark)] text-white py-12 px-6" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <img src="https://app.trickle.so/storage/public/images/usr_0a844351e0000001/5204942d-776c-48ba-aa6f-7fd270e65be0.png" alt="Conecta Wi-Fi De Bolso" className="h-10 w-auto"/>
            </div>
            <p className="text-gray-400 mb-4">
              Wi-Fi portátil para manter você conectado em qualquer lugar.
            </p>
            <p className="text-sm text-gray-500 italic">
              *Fidelidade de 12 meses. Frete do roteador por conta do cliente.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}