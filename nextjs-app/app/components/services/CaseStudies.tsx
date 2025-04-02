interface CaseStudy {
    platform: string;
    title: string;
    result: string;
    description: string;
    icon: string;
  }
  
  export default function CaseStudies({ caseStudies, title, highlight, bgClass }: { 
    caseStudies: CaseStudy[];
    title: string;
    highlight: string;
    bgClass: string;
  }) {
    return (
      <div className={`container mx-auto py-20 px-4 ${bgClass}`}>
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">
          {title} <span className="text-brand-accent">{highlight}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-brand-teal/10 flex items-center justify-center text-5xl">
                {study.icon} {/* Display icon */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-700 font-semibold mb-2">{study.result}</p>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <button className="text-brand-teal font-semibold hover:underline">
                  Read Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  