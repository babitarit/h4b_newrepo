// import React, { useEffect, useRef, useState } from 'react';

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);
//   const [theme, setTheme] = useState('light');
//   const [fontSize, setFontSize] = useState('16px');
//   const [colorContrast, setColorContrast] = useState('normal');
//   const [textSpacing, setTextSpacing] = useState('normal');
//   const [saturation, setSaturation] = useState('1');
//   const [dyslexiaFont, setDyslexiaFont] = useState('Arial');
//   const [textAlign, setTextAlign] = useState('left');
//   const settingsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.classList.toggle('dark', savedTheme === 'dark');
//     }
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleSettings = () => {
//     setIsSettingsOpen(!isSettingsOpen);
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
//       setIsSettingsOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isSettingsOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isSettingsOpen]);

//   const handleReset = () => {
//     setFontSize('16px');
//     setColorContrast('normal');
//     setTextSpacing('normal');
//     setSaturation('1');
//     setDyslexiaFont('Arial');
//     setTextAlign('left');
//     document.documentElement.style.fontFamily = 'Arial, sans-serif';
//   };

//   const handleApplyChanges = () => {
//     document.documentElement.style.fontSize = fontSize;
//     document.documentElement.style.setProperty('--color-contrast', colorContrast);
//     document.documentElement.style.setProperty('--text-spacing', textSpacing);
//     document.documentElement.style.setProperty('--color-saturation', saturation);
//     document.documentElement.style.setProperty('--text-align', textAlign);
//     document.documentElement.style.fontFamily = dyslexiaFont === 'Comic Sans MS' ? 'Comic Sans MS, Comic Sans, cursive' : 'Arial, sans-serif';
//     setIsSettingsOpen(false);
//   };

//   const handleLinkClick = () => {
//     setIsMenuOpen(false); // Close the mobile menu when a link is clicked
//   };

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 md:p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#d9e4ff] text-gray-900'}`}>
//       {/* Logo */}
//       <div className="flex items-center ">
//         <img src="https://res.cloudinary.com/dafdencvh/image/upload/v1719174922/lspdifilmukp9tkpji3v.avif" alt="Logo" className="h-12 md:h-10" />
//         <h1 className="ml-2 text-lg md:text-xl">EduFit</h1>
//       </div>
//       {/* Navigation Links */}
//       <ul className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block md:space-y-2`}>
//         <li className="mx-2 md:mx-4"><a href="#" onClick={handleLinkClick}></a></li>
//         <li className="mx-2 md:mx-4"><a href="#screen" onClick={handleLinkClick}>Screen Reader</a></li>
//         <li className="mx-2 md:mx-4"><a href="#vision" onClick={handleLinkClick}>Vision</a></li>
//         <li className="mx-2 md:mx-4"><a href="#features" onClick={handleLinkClick}>Features</a></li>
//         <li className="mx-2 md:mx-4"><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
//       </ul>
//       {/* Sign In, Theme Toggle, and Settings */}
//       <div className="flex items-center space-x-4">
//         <a className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">Sign In</a>
//         {/* Settings */}
//         <button onClick={toggleSettings} className="text-current focus:outline-none">
//           <img src="https://res.cloudinary.com/dafdencvh/image/upload/v1719175346/set_qkyuva.png" alt="Settings" className="h-6 w-6" />
//         </button>
//         {/* Hamburger Menu for Mobile */}
//         <button onClick={toggleMenu} className="md:hidden text-current focus:outline-none">
//           <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//           </svg>
//         </button>
//       </div>
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden flex flex-col space-y-4 mt-4">
//           <a href="#vision" onClick={handleLinkClick}>Vision</a>
//           <a href="#features" onClick={handleLinkClick}>Features</a>
//           <a href="#contact" onClick={handleLinkClick}>Contact</a>
//           <a href="#" className="px-4 py-2 border border-current rounded hover:bg-current hover:text-gray-900 transition" onClick={handleLinkClick}>Sign In</a>
//         </div>
//       )}
//       {/* Settings Dialog Box */}
//       {isSettingsOpen && (
//         <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50" ref={settingsRef}>
//           <div className="bg-white w-60 md:w-2/3 h-70 md:h-3/4 p-8 rounded shadow-lg">
//             <h3 className="text-lg font-semibold mb-2 text-center">Personalized Settings</h3>
//             <ul className="space-y-4">
//               <li className="flex justify-between items-center">
//                 <span>Font Size</span>
//                 <input
//                   type="text"
//                   value={fontSize}
//                   onChange={(e) => setFontSize(e.target.value)}
//                   className="border p-1 rounded"
//                 />
//               </li>
//               <li className="flex justify-between items-center">
//                 <span>Color Contrast</span>
//                 <select
//                   value={colorContrast}
//                   onChange={(e) => setColorContrast(e.target.value)}
//                   className="border p-1 rounded"
//                 >
//                   <option value="normal">Normal</option>
//                   <option value="high">High</option>
//                 </select>
//               </li>
//               <li className="flex justify-between items-center">
//                 <span>Text Spacing</span>
//                 <select
//                   value={textSpacing}
//                   onChange={(e) => setTextSpacing(e.target.value)}
//                   className="border p-1 rounded"
//                 >
//                   <option value="normal">Normal</option>
//                   <option value="wide">Wide</option>
//                 </select>
//               </li>
//               <li className="flex justify-between items-center">
//                 <span>Color Saturation</span>
//                 <input
//                   type="range"
//                   min="0"
//                   max="2"
//                   step="0.1"
//                   value={saturation}
//                   onChange={(e) => setSaturation(e.target.value)}
//                   className="border p-1 rounded"
//                 />
//               </li>
//               <li className="flex justify-between items-center">
//                 <span>Text Align</span>
//                 <select
//                   value={textAlign}
//                   onChange={(e) => setTextAlign(e.target.value)}
//                   className="border p-1 rounded"
//                 >
//                   <option value="left">Left</option>
//                   <option value="center">Center</option>
//                   <option value="right">Right</option>
//                 </select>
//               </li>
//               <li className="flex justify-between items-center">
//                 <span>Dyslexia Friendly Font</span>
//                 <select
//                   value={dyslexiaFont}
//                   onChange={(e) => setDyslexiaFont(e.target.value)}
//                   className="border p-1 rounded"
//                 >
//                   <option value="Arial">Arial</option>
//                   <option value="Comic Sans MS">Comic Sans MS</option>
//                 </select>
//               </li>
//             </ul>
//             <div className="flex justify-between mt-8">
//               <button
//                 onClick={handleReset}
//                 className="bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded hover:bg-gray-400 transition"
//               >
//                 Reset
//               </button>
//               <button
//                 onClick={handleApplyChanges}
//                 className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
