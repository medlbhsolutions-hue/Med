
import React, { useState, useEffect } from 'react';
import img1 from '../assets/images/Capture d’écran 2025-10-09 110643.png';
import img2 from '../assets/images/Capture d’écran 2025-10-09 110712.png';
import img3 from '../assets/images/Capture d’écran 2025-10-09 110744.png';
import img4 from '../assets/images/Capture d’écran 2025-10-09 110810.png';
import img5 from '../assets/images/Capture d’écran 2025-10-09 110843.png';
import img6 from '../assets/images/Capture d’écran 2025-10-09 110914.png';
import img7 from '../assets/images/Capture d’écran 2025-10-09 110935.png';
import img8 from '../assets/images/Capture d’écran 2025-10-09 110955.png';
import img9 from '../assets/images/logo.png';
import img10 from '../assets/images/team_medical.png';
import img11 from '../assets/images/Capture d’écran 2025-10-08 170329.png';
import img12 from '../assets/images/Capture d’écran 2025-10-08 172033.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3500);
    return () => clearInterval(timer);
  }, [length]);

  const goTo = (idx) => setCurrent(idx);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-8 relative">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[current]}
          alt="MedLBH visuel"
          className="w-full h-64 object-cover transition-all duration-700 ease-in-out"
        />
      </div>
      {/* Navigation points */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-700' : 'bg-blue-200'} transition-all duration-300`}
            onClick={() => goTo(idx)}
            aria-label={`Aller à l'image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
