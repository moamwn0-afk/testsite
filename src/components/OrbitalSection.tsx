import { useEffect, useState } from 'react';

interface Profile {
  id: number;
  image: string;
  name: string;
  orbit: number; // 1, 2, or 3 for different orbital rings
  startAngle: number; // Starting position in degrees
  speed: number; // Rotation speed
}

const OrbitalSection = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Profile data - you can replace these with actual images
  const profiles: Profile[] = [
    { id: 1, image: 'https://i.pravatar.cc/150?img=1', name: 'Profile 1', orbit: 1, startAngle: 0, speed: 1 },
    { id: 2, image: 'https://i.pravatar.cc/150?img=2', name: 'Profile 2', orbit: 1, startAngle: 120, speed: 1 },
    { id: 3, image: 'https://i.pravatar.cc/150?img=3', name: 'Profile 3', orbit: 1, startAngle: 240, speed: 1 },
    { id: 4, image: 'https://i.pravatar.cc/150?img=4', name: 'Profile 4', orbit: 2, startAngle: 45, speed: 0.8 },
    { id: 5, image: 'https://i.pravatar.cc/150?img=5', name: 'Profile 5', orbit: 2, startAngle: 165, speed: 0.8 },
    { id: 6, image: 'https://i.pravatar.cc/150?img=6', name: 'Profile 6', orbit: 2, startAngle: 285, speed: 0.8 },
    { id: 7, image: 'https://i.pravatar.cc/150?img=7', name: 'Profile 7', orbit: 3, startAngle: 30, speed: 0.6 },
    { id: 8, image: 'https://i.pravatar.cc/150?img=8', name: 'Profile 8', orbit: 3, startAngle: 150, speed: 0.6 },
  ];

  const getOrbitRadius = (orbit: number) => {
    switch (orbit) {
      case 1:
        return 180; // Inner orbit
      case 2:
        return 280; // Middle orbit
      case 3:
        return 380; // Outer orbit
      default:
        return 180;
    }
  };

  const calculatePosition = (profile: Profile) => {
    const radius = getOrbitRadius(profile.orbit);
    const angle = ((profile.startAngle + rotation * profile.speed) * Math.PI) / 180;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 overflow-hidden flex items-center justify-center py-20">
      {/* Top Card */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20 animate-float">
        <div className="bg-white rounded-3xl shadow-2xl px-10 py-5 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">
            أوائل فاروق
          </h3>
          <p className="text-gray-400 text-base">لغة عربية</p>
        </div>
      </div>

      {/* Orbital Container */}
      <div className="relative w-full max-w-5xl aspect-square flex items-center justify-center">
        {/* Orbital Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3].map((orbit) => (
            <div
              key={orbit}
              className="absolute rounded-full border-2 border-blue-200/40"
              style={{
                width: `${getOrbitRadius(orbit) * 2}px`,
                height: `${getOrbitRadius(orbit) * 2}px`,
              }}
            />
          ))}
        </div>

        {/* Central Circle */}
        <div className="relative z-10 w-72 h-72 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl flex flex-col items-center justify-center text-white">
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-7 h-7 text-green-400 animate-pulse"
                style={{ animationDelay: `${star * 0.1}s` }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          {/* Arabic Text */}
          <div className="text-center px-6">
            <p className="text-2xl font-bold leading-relaxed text-white">
              انطلق معنا
            </p>
            <p className="text-2xl font-bold leading-relaxed text-white">
              نحو النجاح
            </p>
          </div>
        </div>

        {/* Orbiting Profiles */}
        {profiles.map((profile) => {
          const { x, y } = calculatePosition(profile);
          return (
            <div
              key={profile.id}
              className="absolute transition-transform duration-100"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="relative group">
                {/* Profile Image */}
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white transform transition-transform group-hover:scale-110">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Star Badge */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Connecting Lines (subtle) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {profiles.map((profile) => {
          const { x, y } = calculatePosition(profile);
          return (
            <line
              key={`line-${profile.id}`}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${x}px)`}
              y2={`calc(50% + ${y}px)`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              className="animate-pulse"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default OrbitalSection;
