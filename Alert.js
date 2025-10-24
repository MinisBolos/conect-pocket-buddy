function Alert({ message, type }) {
  try {
    const colors = {
      success: { bg: '#10b981', icon: 'check-circle' },
      error: { bg: '#ef4444', icon: 'alert-circle' }
    };
    const color = colors[type] || colors.success;

    return (
      <div className="fixed top-6 right-6 z-50 animate-slide-in" data-name="alert" data-file="components/Alert.js">
        <div className="bg-white rounded-xl shadow-2xl p-4 flex items-center gap-3 min-w-[300px]">
          <div className={`icon-${color.icon} text-2xl`} style={{color: color.bg}}></div>
          <p className="text-[var(--text-dark)] font-medium">{message}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Alert component error:', error);
    return null;
  }
}