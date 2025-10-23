import React, { useState, useRef } from 'react';
import { Building2, Heart, Briefcase, Bed, Home, Droplets, Hammer } from 'lucide-react';

const SectorsSlider = () => {
  // Sectors data
  const sectorsData = [
    {
      id: 1,
      name: 'Industrial',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1200&h=800&fit=crop',
      projectsCompleted: '180+',
      ongoingProjects: '15+'
    },
    {
      id: 2,
      name: 'Healthcare',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop',
      projectsCompleted: '150+',
      ongoingProjects: '20+'
    },
    {
      id: 3,
      name: 'Commercial',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      projectsCompleted: '320+',
      ongoingProjects: '30+'
    },
    {
      id: 4,
      name: 'Hospitality',
      icon: Bed,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
      projectsCompleted: '275+',
      ongoingProjects: '25+'
    },
    {
      id: 5,
      name: 'Residential',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      projectsCompleted: '450+',
      ongoingProjects: '40+'
    },
    {
      id: 6,
      name: 'Water',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1583224964878-db6c2c40c422?w=1200&h=800&fit=crop',
      projectsCompleted: '95+',
      ongoingProjects: '12+'
    },
    {
      id: 7,
      name: 'Infrastructure',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
      projectsCompleted: '210+',
      ongoingProjects: '18+'
    }
  ];

  // State
  const [activeIndex, setActiveIndex] = useState(3); // Hospitality as default
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs
  const section1Ref = useRef(null);
  const srvLftBx = useRef(null);
  const srvttlRef = useRef(null);
  const srvsRghtBx = useRef(null);
  const srvsImgRef = useRef(null);

  // Handle sector click with step-by-step animation
  const handleSectorClick = (targetIndex) => {
    if (isAnimating || targetIndex === activeIndex) return;
    
    const totalSectors = sectorsData.length;
    let currentIndex = activeIndex;
    
    // Calculate shortest path
    const forwardDistance = (targetIndex - currentIndex + totalSectors) % totalSectors;
    const backwardDistance = (currentIndex - targetIndex + totalSectors) % totalSectors;
    
    const steps = forwardDistance <= backwardDistance ? forwardDistance : -backwardDistance;
    const direction = steps > 0 ? 1 : -1;
    const totalSteps = Math.abs(steps);
    
    setIsAnimating(true);
    
    // Animate step by step
    let step = 0;
    const interval = setInterval(() => {
      step++;
      currentIndex = (currentIndex + direction + totalSectors) % totalSectors;
      setActiveIndex(currentIndex);
      
      if (step >= totalSteps) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 400);
  };

  // Calculate visible sectors for circular carousel
  const getVisibleSectors = () => {
    const visible = [];
    const totalSectors = sectorsData.length;
    
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + totalSectors) % totalSectors;
      visible.push({
        sector: sectorsData[index],
        position: i,
        index: index
      });
    }
    
    return visible;
  };

  const visibleSectors = getVisibleSectors();
  const activeSector = sectorsData[activeIndex];

  return (
    <section 
      ref={section1Ref} 
      className="absolute top-0 left-0 w-full h-full bg-transparent" 
      style={{ visibility: "visible", zIndex: 0 }}
    >
      <div id="section1" className="h-screen relative overflow-hidden whitebgref scroll-area">
        <div className="grid grid-cols-[800px_auto] 3xl:grid-cols-[1021px_auto] h-full">
          {/* left start */}
          <div className="flex h-full bg-white">
            <div className="w-full pt-33 pl-[245px] 3xl:pl-[310px]" ref={srvLftBx}>
              <div className="ml-[80px] 3xl:ml-[110px] flex flex-col h-full">
                <h1
                  ref={srvttlRef}
                  className="text-34 xl:text-48 3xl:text-60 font-light gradient-text leading-[70px] max-w-[13ch]"
                >
                  Shaping Diverse Sectors
                </h1>
                <div className="w-full flex flex-col h-full mt-5 relative">
                  <div className="pb-4 relative h-[400px]">
                    {/* Vertical slider with sectors name */}
                    <div className="relative h-full flex flex-col justify-center">
                      {visibleSectors.map(({ sector, position, index }) => {
                        const IconComponent = sector.icon;
                        const isActive = position === 0;

                        // Calculate vertical position and opacity
                        const translateY = position * 80; // 80px spacing
                        const opacity = isActive ? 1 : Math.max(0.3, 1 - Math.abs(position) * 0.3);
                        const scale = isActive ? 1 : 0.85;

                        return (
                          <div
                            key={`${sector.id}-${position}`}
                            onClick={() => handleSectorClick(index)}
                            className="absolute cursor-pointer transition-all duration-500 ease-out"
                            style={{
                              transform: `translateY(${translateY}px) scale(${scale})`,
                              opacity: opacity,
                              top: '50%',
                              marginTop: '-32px'
                            }}
                          >
                            {isActive ? (
                              <div className="flex items-center">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                                  <IconComponent className="w-7 h-7 text-blue-600" />
                                </div>
                                <span className="ml-4 text-2xl font-medium text-gray-800">
                                  {sector.name}
                                </span>
                              </div>
                            ) : (
                              <span className="text-xl text-gray-500 hover:text-gray-800 transition-colors">
                                {sector.name}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* left end*/}

          {/* right start */}
          <div className="relative w-full h-[100vh] z-[-1]" ref={srvsRghtBx}>
            <div className="absolute h-full w-full" ref={srvsImgRef}>
              {/* Image that changes according to the vertical slider */}
              <img
                src={activeSector.image}
                key={activeSector.id}
                alt={activeSector.name}
                className="object-cover absolute w-full h-full transition-opacity duration-500"
              />

              {/* Absolute positioned box with project details */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-700 text-white p-12 shadow-2xl w-[520px]">
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="text-5xl font-bold mb-2">
                        {activeSector.projectsCompleted}
                      </div>
                      <div className="text-sm text-blue-200">
                        Projects Completed
                      </div>
                    </div>
                    <div>
                      <div className="text-5xl font-bold mb-2">
                        {activeSector.ongoingProjects}
                      </div>
                      <div className="text-sm text-blue-200">
                        Ongoing Projects
                      </div>
                    </div>
                  </div>

                  <button className="flex items-center text-sm font-medium hover:gap-3 transition-all group">
                    <span>VIEW PROJECTS</span>
                    <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* right end*/}
        </div>
      </div>
    </section>
  );
};

export default SectorsSlider;