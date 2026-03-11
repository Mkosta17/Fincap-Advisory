export default function CalendlyEmbed() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Reserva una sesión</h2>
        <div className="calendly-inline-widget" data-url="https://calendly.com/your-username" style={{ minWidth: '320px', height: '630px' }}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>
    </section>
  );
}
