const EquipmentCategoriesSection = ({ language, categories, selectedCategory, setSelectedCategory }) => (
  <section className="py-20 bg-brand-dark">
    {/* ... existing content ... */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {categories.map((category, index) => (
        <div 
          key={category.id}
          className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border ${
            selectedCategory === index 
              ? 'bg-brand-gold/10 border-brand-gold text-brand-gold shadow-gold' 
              : 'bg-brand-medium border-brand-gold/30 text-white hover:bg-brand-gold/10 hover:text-brand-gold'
          }`}
          onClick={() => setSelectedCategory(index)}
        >
          {/* ... existing content ... */}
        </div>
      ))}
    </div>
    {/* ... existing content ... */}
  </section>
);

export default EquipmentCategoriesSection;