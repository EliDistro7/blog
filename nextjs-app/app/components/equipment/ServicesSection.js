const ServicesSection = ({ language, services }) => (
  <section className="py-20 bg-brand-deep">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ... existing content ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-brand-medium p-8 rounded-lg hover:bg-brand-gold/10 transition-all duration-300 border border-brand-gold/20">
            <div className="text-brand-gold mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold text-brand-gold mb-4">{service.title[language]}</h3>
            <p className="text-gray-300">{service.description[language]}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);