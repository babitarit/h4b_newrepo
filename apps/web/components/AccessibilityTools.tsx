// import React from 'react';

// const AccessibilityTools = () => {
//   const tools = [
//     {
//       title: 'Screen Readers',
//       description: 'Enhance your browsing experience with advanced screen readers.',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="h-8 w-8 text-[#fbbf24]"
//         >
//           <circle cx="16" cy="4" r="1"></circle>
//           <path d="m18 19 1-7-6 1"></path>
//           <path d="m5 8 3-3 5.5 3-2.36 3.5"></path>
//           <path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path>
//           <path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path>
//         </svg>
//       ),
//       link: '#',
//     },
//     {
//       title: 'High Contrast Mode',
//       description: 'Improve readability with high contrast mode.',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="h-8 w-8 text-[#fbbf24]"
//         >
//           <circle cx="12" cy="12" r="10"></circle>
//           <path d="M12 18a6 6 0 0 0 0-12v12z"></path>
//         </svg>
//       ),
//       link: '#',
//     },
//     {
//       title: 'Keyboard Navigation',
//       description: 'Explore the web with keyboard-friendly navigation.',
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="h-8 w-8 text-[#fbbf24]"
//         >
//           <path d="M10 8h.01"></path>
//           <path d="M12 12h.01"></path>
//           <path d="M14 8h.01"></path>
//           <path d="M16 12h.01"></path>
//           <path d="M18 8h.01"></path>
//           <path d="M6 8h.01"></path>
//           <path d="M7 16h10"></path>
//           <path d="M8 12h.01"></path>
//           <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//         </svg>
//       ),
//       link: '#',
//     },
//   ];

//   return (
//     <section id="tools" className="bg-[#e2e8f0] py-12 md:py-24">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="space-y-4 text-center">
//           <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#1e293b]">
//             Accessibility Tools and Resources
//           </h2>
//           <p className="text-[#64748b] md:text-xl">
//             Discover a wide range of tools and resources to improve your online experience.
//           </p>
//         </div>
//         <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
//           {tools.map((tool, index) => (
//             <div key={index} className="rounded-lg border border-gray-200 bg-[#f1f5f9] shadow-lg">
//               <div className="flex flex-col items-center space-y-4 p-6">
//                 {tool.icon}
//                 <h3 className="text-xl font-bold text-[#1e293b]">{tool.title}</h3>
//                 <p className="text-[#64748b]">{tool.description}</p>
//                 <a
//                   href={tool.link}
//                   className="inline-flex items-center justify-center rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-medium text-[#1e293b] transition-colors hover:bg-[#f59e0b] focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:ring-offset-2"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AccessibilityTools;


import { useEffect, useRef, useState } from 'react';

const AccessibilityTools = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement | null>(null);

  const tools = [
    {
      title: 'Screen Readers',
      description: 'Enhance your browsing experience with advanced screen readers.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-[#fbbf24]"
        >
          <circle cx="16" cy="4" r="1"></circle>
          <path d="m18 19 1-7-6 1"></path>
          <path d="m5 8 3-3 5.5 3-2.36 3.5"></path>
          <path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path>
          <path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path>
        </svg>
      ),
      link: '#',
    },
    {
      title: 'High Contrast Mode',
      description: 'Improve readability with high contrast mode.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-[#fbbf24]"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 18a6 6 0 0 0 0-12v12z"></path>
        </svg>
      ),
      link: '#',
    },
    {
      title: 'Keyboard Navigation',
      description: 'Explore the web with keyboard-friendly navigation.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-[#fbbf24]"
        >
          <path d="M10 8h.01"></path>
          <path d="M12 12h.01"></path>
          <path d="M14 8h.01"></path>
          <path d="M16 12h.01"></path>
          <path d="M18 8h.01"></path>
          <path d="M6 8h.01"></path>
          <path d="M7 16h10"></path>
          <path d="M8 12h.01"></path>
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        </svg>
      ),
      link: '#',
    },
  ];

  const handleClickOutside = (event: { target: any; }) => {
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setIsSettingsOpen(false);
    }
  };

  useEffect(() => {
    if (isSettingsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSettingsOpen]);

  return (
    <section id="tools" className="bg-[#e2e8f0] py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#1e293b]">
            Accessibility Tools and Resources
          </h2>
          <p className="text-[#64748b] md:text-xl">
            Discover a wide range of tools and resources to improve your online experience.
          </p>
        </div>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-[#f1f5f9] shadow-lg">
              <div className="flex flex-col items-center space-y-4 p-6">
                {tool.icon}
                <h3 className="text-xl font-bold text-[#1e293b]">{tool.title}</h3>
                <p className="text-[#64748b]">{tool.description}</p>
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="inline-flex items-center justify-center rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-medium text-[#1e293b] transition-colors hover:bg-[#f59e0b] focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:ring-offset-2"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 
      {isSettingsOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50" ref={settingsRef}>
          <div className="bg-white w-60 md:w-2/3 h-70 md:h-3/4 p-8 rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-2 text-center">Personalized Settings</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Font Size</span>
                <input
                  type="text"
                  value={'16px'}
                  className="border p-1 rounded"
                />
              </li>
              <li className="flex justify-between items-center">
                <span>Color Contrast</span>
                <select className="border p-1 rounded">
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>
              </li>
              <li className="flex justify-between items-center">
                <span>Text Spacing</span>
                <select className="border p-1 rounded">
                  <option value="normal">Normal</option>
                  <option value="wide">Wide</option>
                </select>
              </li>
              <li className="flex justify-between items-center">
                <span>Color Saturation</span>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={'1'}
                  className="border p-1 rounded"
                />
              </li>
              <li className="flex justify-between items-center">
                <span>Text Align</span>
                <select className="border p-1 rounded">
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </li>
              <li className="flex justify-between items-center">
                <span>Dyslexia Friendly Font</span>
                <select className="border p-1 rounded">
                  <option value="Arial">Arial</option>
                  <option value="Comic Sans MS">Comic Sans MS</option>
                </select>
              </li>
            </ul>
            <div className="flex justify-between mt-8">
              <button
                className="bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded hover:bg-gray-400 transition"
              >
                Reset
              </button>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default AccessibilityTools;

