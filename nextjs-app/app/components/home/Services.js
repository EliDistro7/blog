import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { Camera, Utensils, Share2, Mic2 } from 'lucide-react';

// Mock language hook since the actual one isn't available
const useLanguage = () => {
  const [language, setLanguage] = useState('en');
  
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'sw' : 'en');
  };
  
  return { language, toggleLanguage };
};

export default function ServicesVisualization() {
  const mountRef = useRef(null);
  const containerRef = useRef(null);
  const { language, toggleLanguage } = useLanguage();
  const [activeService, setActiveService] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  
  // Service data with much wider spacing
  const services = [
    {
      id: 'web-design',
      link: '/services/web-design',
      title: {
        en: "Web Design",
        sw: "Uundaji wa Tovuti"
      },
      desc: {
        en: "Stunning, responsive websites tailored to your brand identity and business goals.",
        sw: "Tovuti zenye kuvutia na zinazobadilika kulingana na kifaa, zilizobuniwa kwa kufuata utambulisho wa chapa yako na malengo ya biashara."
      },
      icon: <Camera className="w-10 h-10" />,
      color: "#6366F1", // Brand accent (indigo)
      position: new THREE.Vector3(3.5, 0, 0),
      labelPosition: { x: 75, y: 50 }
    },
    {
      id: 'catering',
      link: '/services/catering',
      title: {
        en: "Catering Services",
        sw: "Huduma za Chakula"
      },
      desc: {
        en: "Exquisite gourmet experiences and flawless event catering for memorable occasions.",
        sw: "Uzoefu wa hali ya juu wa vyakula na huduma bora za chakula kwa hafla zisizosahaulika."
      },
      icon: <Utensils className="w-10 h-10" />,
      color: "#F97316", // Brand coral (orange)
      position: new THREE.Vector3(-3.5, 0, 0),
      labelPosition: { x: 25, y: 50 }
    },
    {
      id: 'social-media',
      link: '/services/social-media',
      title: {
        en: "Social Media Management",
        sw: "Usimamizi wa Mitandao ya Kijamii"
      },
      desc: {
        en: "Strategic campaigns to amplify your digital presence and engagement.",
        sw: "Kampeni za kimkakati za kuongeza uwepo wako mtandaoni."
      },
      icon: <Share2 className="w-10 h-10" />,
      color: "#0D9488", // Brand teal
      position: new THREE.Vector3(0, 3.5, 0),
      labelPosition: { x: 50, y: 20 }
    },
    {
      id: 'mc',
      link: '/services/mc-services',
      title: {
        en: "Master of Ceremonies",
        sw: "Mwenye Sherehe"
      },
      desc: {
        en: "Charismatic hosts to elevate your events with professional flair.",
        sw: "Wenyeji wenye ukarimu wa kuinua hafla zako kwa ufundi wa kitaaluma."
      },
      icon: <Mic2 className="w-10 h-10" />,
      color: "#1E293B", // Brand deep
      position: new THREE.Vector3(0, -3.5, 0),
      labelPosition: { x: 50, y: 80 }
    }
  ];

  // Update dimensions when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        // Calculate height based on aspect ratio or use fixed height
        const height = Math.min(window.innerHeight * 0.6, 600);
        setDimensions({ width, height });
      }
    };

    // Initial dimensions
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Setup and animate 3D scene
  useEffect(() => {
    if (!mountRef.current || !dimensions.width) return;
    
    // Clean up any previous canvas
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    
    // Scene setup with better contrast
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1E293B); // Dark blue background

    // Create a gradient background using a fixed Color instead of texture
    // This avoids potential immutable texture issues
    scene.background = new THREE.Color(0x1E293B);
    
    // Camera with adjusted position for better view
    const camera = new THREE.PerspectiveCamera(
      60, 
      dimensions.width / dimensions.height, 
      0.1, 
      1000
    );
    camera.position.set(0, 0, 8); // Position further back
    
    // High-quality renderer with proper parameters
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      powerPreference: "high-performance",
      alpha: true
    });
    renderer.setSize(dimensions.width, dimensions.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio to prevent performance issues
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Add renderer canvas to DOM
    mountRef.current.appendChild(renderer.domElement);
    
    // Controls with limits to prevent disorientation
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.maxDistance = 15;
    controls.minDistance = 4;
    controls.maxPolarAngle = Math.PI * 0.7; // Limit vertical rotation
    
    // Improved lighting for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);
    
    // Add a point light at center for better illumination
    const pointLight = new THREE.PointLight(0x3B82F6, 1.5, 10);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);
    
    // Company center sphere with glow effect
    const companyGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const companyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3B82F6, // Brand blue
      emissive: 0x1E40AF,
      shininess: 90,
      transparent: true,
      opacity: 0.9
    });
    const companySphere = new THREE.Mesh(companyGeometry, companyMaterial);
    companySphere.castShadow = true;
    companySphere.receiveShadow = true;
    scene.add(companySphere);
    
    // Add glow effect for company sphere
    const glowGeometry = new THREE.SphereGeometry(1.0, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x3B82F6,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowSphere);
    
    // Service nodes with text labels
    const serviceNodes = [];
    const serviceConnections = [];
    
    services.forEach((service) => {
      // Create larger service sphere with custom shader for better visibility
      const geometry = new THREE.SphereGeometry(0.7, 32, 32);
      const material = new THREE.MeshPhongMaterial({ 
        color: new THREE.Color(service.color),
        emissive: new THREE.Color(service.color).multiplyScalar(0.4),
        shininess: 70,
        transparent: true,
        opacity: 0.9
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.copy(service.position);
      sphere.userData = { id: service.id };
      sphere.castShadow = true;
      sphere.receiveShadow = true;
      scene.add(sphere);
      serviceNodes.push(sphere);
      
      // Add subtle glow to each service node
      const serviceGlowGeometry = new THREE.SphereGeometry(0.85, 32, 32);
      const serviceGlowMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(service.color),
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide
      });
      const serviceGlow = new THREE.Mesh(serviceGlowGeometry, serviceGlowMaterial);
      serviceGlow.position.copy(service.position);
      scene.add(serviceGlow);
      
      // Create thicker connection line
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(
          service.position.x * 0.5, 
          service.position.y * 0.5,
          service.position.z * 0.5
        ),
        service.position
      );
      
      const points = curve.getPoints(20);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: new THREE.Color(service.color),
        linewidth: 1, // WebGL only supports linewidth of 1
        opacity: 0.7,
        transparent: true
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
      serviceConnections.push(line);
    });
    
    // Particle system for background effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Position particles in a sphere around the scene
      const radius = 15 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random subtle colors
      colors[i * 3] = 0.5 + Math.random() * 0.5;
      colors[i * 3 + 1] = 0.5 + Math.random() * 0.5;
      colors[i * 3 + 2] = 0.5 + Math.random() * 0.5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.5
    });
    
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);
    
    // Raycaster for better interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    function onMouseMove(event) {
      // Calculate mouse position in normalized device coordinates
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Update the raycaster
      raycaster.setFromCamera(mouse, camera);
      
      // Check for intersections with service nodes
      const intersects = raycaster.intersectObjects(serviceNodes);
      
      if (intersects.length > 0) {
        const hoveredService = intersects[0].object;
        document.body.style.cursor = 'pointer';
        
        // Scale up hovered service node
        hoveredService.scale.set(1.1, 1.1, 1.1);
        
        if (activeService !== hoveredService.userData.id) {
          setActiveService(hoveredService.userData.id);
        }
      } else {
        document.body.style.cursor = 'auto';
        
        // Reset scale of all service nodes
        serviceNodes.forEach(node => {
          node.scale.set(1, 1, 1);
        });
        
        if (activeService !== null) {
          setActiveService(null);
        }
      }
    }
    
    function onClick(event) {
      // Same calculation as in onMouseMove
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(serviceNodes);
      
      if (intersects.length > 0) {
        const clickedService = intersects[0].object;
        setActiveService(clickedService.userData.id);
      }
    }
    
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onClick);
    
    // Better animation with time-based movement
    const clock = new THREE.Clock();
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate company sphere
      companySphere.rotation.y = elapsedTime * 0.5;
      glowSphere.rotation.y = elapsedTime * 0.25;
      
      // Rotate particle system slowly
      particleSystem.rotation.y = elapsedTime * 0.025;
      
      // Animate service nodes with different phases
      serviceNodes.forEach((node, index) => {
        const offset = index * (Math.PI / 2);
        node.position.y = services[index].position.y + Math.sin(elapsedTime + offset) * 0.2;
        
        // Update connection lines
        const curve = new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(
            services[index].position.x * 0.5, 
            services[index].position.y * 0.5 + Math.sin(elapsedTime + offset) * 0.1,
            services[index].position.z * 0.5
          ),
          node.position
        );
        
        const points = curve.getPoints(20);
        serviceConnections[index].geometry.setFromPoints(points);
      });
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (mountRef.current) {
        renderer.domElement.removeEventListener('mousemove', onMouseMove);
        renderer.domElement.removeEventListener('click', onClick);
      }
      
      // Properly dispose of Three.js resources
      serviceNodes.forEach((node) => {
        node.geometry.dispose();
        node.material.dispose();
      });
      
      serviceConnections.forEach((line) => {
        line.geometry.dispose();
        line.material.dispose();
      });
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      
      companySphere.geometry.dispose();
      companySphere.material.dispose();
      glowSphere.geometry.dispose();
      glowMaterial.dispose();
      
      controls.dispose();
      renderer.dispose();
    };
  }, [dimensions, services, language, activeService]);
  
  // Find active service details
  const activeServiceDetails = activeService 
    ? services.find(service => service.id === activeService) 
    : null;
  
  return (
    <div ref={containerRef} className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6 gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center sm:text-left">
          {language === 'en' ? 'Our Services' : 'Huduma Zetu'}
        </h2>
        <button 
          onClick={toggleLanguage}
          className="px-6 py-3 text-base font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-700 transition-colors shadow-wave"
        >
          {language === 'en' ? 'Switch to Swahili' : 'Switch to English'}
        </button>
      </div>
      
      <div className="relative w-full">
        {/* Service labels positioned around the 3D canvas */}
        <div 
          ref={mountRef} 
          className="w-full rounded-xl shadow-depth mb-8 overflow-hidden"
          style={{ height: `${dimensions.height}px` }}
        />
        
        {/* Overlay text labels for services */}
        <div className="absolute inset-0 pointer-events-none">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`absolute transform ${activeService === service.id ? 'scale-110' : ''} transition-transform`}
              style={{ 
                left: `${service.labelPosition.x}%`, 
                top: `${service.labelPosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div 
                className={`flex items-center justify-center p-2 rounded-lg shadow-md bg-white bg-opacity-90 border-l-4`}
                style={{ borderLeftColor: service.color }}
              >
                <span className="font-bold text-gray-900">
                  {service.title[language]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {activeServiceDetails && (
        <div className="w-full p-6 rounded-xl bg-white shadow-layer border-l-4 mb-8 transition-all duration-300 transform hover:shadow-glow"
             style={{ borderLeftColor: activeServiceDetails.color }}>
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full mr-4" style={{ backgroundColor: activeServiceDetails.color }}>
              {React.cloneElement(activeServiceDetails.icon, { className: "w-12 h-12 text-white" })}
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {activeServiceDetails.title[language]}
              </h3>
              <p className="text-lg text-gray-600">
                {activeServiceDetails.desc[language]}
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href={activeServiceDetails.link} 
              className="px-6 py-3 rounded-lg text-lg font-semibold text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              style={{ backgroundColor: activeServiceDetails.color }}
            >
              {language === 'en' ? 'Get Quote' : 'Pata Bei'}
            </a>
            <a 
              href={activeServiceDetails.link} 
              className="px-6 py-3 rounded-lg text-lg font-semibold border-2 transition-all hover:bg-gray-50 transform hover:-translate-y-1"
              style={{ borderColor: activeServiceDetails.color, color: activeServiceDetails.color }}
            >
              {language === 'en' ? 'Learn more →' : 'Jifunze zaidi →'}
            </a>
          </div>
        </div>
      )}
      
      <div className="mb-8 p-4 bg-gray-100 rounded-lg border border-gray-200 w-full">
        <h3 className="font-bold text-lg mb-2 text-gray-800">
          {language === 'en' ? 'How to interact:' : 'Jinsi ya kutumia:'}
        </h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            {language === 'en' 
              ? 'Click on a service sphere to view detailed information' 
              : 'Bofya kwenye duara la huduma kuona maelezo zaidi'}
          </li>
          <li>
            {language === 'en' 
              ? 'Drag to rotate the 3D view for different perspectives' 
              : 'Buruta kubadilisha mtazamo wa 3D kwa mitazamo tofauti'}
          </li>
          <li>
            {language === 'en' 
              ? 'Use mouse wheel to zoom in/out' 
              : 'Tumia gurudumu la kipanya kuzoom ndani/nje'}
          </li>
        </ul>
      </div>
    </div>
  );
}