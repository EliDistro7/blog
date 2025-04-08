import ServiceHeader from "@/app/components/services/ServiceHeader";

import ServiceProcess from "@/app/components/services/ServiceProcess";
import ProjectCard from "@/app/components/portifolio/ProjectCard";

export default function Portfolio() {
    return (
      <div className="bg-brand-foam">
        <ServiceHeader
          title="Our"
          highlight="Digital Creations"
          subtitle="Though we're new, our solutions deliver real impact"
          bgClass="bg-gradient-to-br from-brand-dark to-brand-deep "
        />
  
        {/* Current Projects */}
        <div className="container mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">
            <span className="text-brand-accent">Featured</span> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProjectCard 
              title="Pichazangu.store"
              description="Media storage platform for photographers"
              url="https://pichazangu.store"
              image="/images/preview-pichazangu.png"
              status="Live with paying users"
              metrics={["50+ users", "10TB stored"]}
            />
            <ProjectCard 
              title="KKKTyombo.org"
              description="Church management system"
              url="https://kkktyombo.org"
              image="/images/preview-yombo.png"
              status="Pilot phase"
              metrics={["5 churches", "100% adoption"]}
            />
          </div>
        </div>
  
        {/* Process Showcase */}
        
              {/* Process Section */}
              <ServiceProcess
                title="Our Design Process"
                steps={[
                  {
                    number: "01",
                    title: "Discovery",
                    description: "Understanding your business goals and audience"
                  },
                  {
                    number: "02",
                    title: "Wireframing",
                    description: "Creating blueprints for seamless experiences"
                  },
                  {
                    number: "03",
                    title: "Development",
                    description: "Building with clean, scalable code"
                  },
                  {
                    number: "04",
                    title: "Launch",
                    description: "Deploying and optimizing for success"
                  }
                ]}
              />
  
        {/* CTA */}
        <div className="container mx-auto py-20 px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">
            Have a project that could be our next case study?
          </h3>
          <button className="px-8 py-3 bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full font-bold shadow-depth">
            Let&apos;s Discuss Your Idea 
          </button>
        </div>
      </div>
    );
  }