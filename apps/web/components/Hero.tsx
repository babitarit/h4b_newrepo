// export default function Hero() {
//     return (
//         <div className="w-full h-screen flex flex-col">
//             <main className="flex-1">
//                 <section className="w-full h-full bg-[#f1f5f9] flex items-center">
//                     <div className="container mx-auto px-4 md:px-6 h-full flex">
//                         <div className="flex flex-col md:flex-row w-full h-full">
                           
//                             <div className="flex-1 flex flex-col justify-center text-center md:text-left md:pr-8 h-full">
//                                 <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-[#1e293b] mb-4">
//                                     Empowering Accessibility for All
//                                 </h1>
//                                 <p className="text-[#64748b] md:text-xl">
//                                     Our web application is designed to assist individuals with disabilities, providing a range of tools
//                                     and resources to enhance their online experience.
//                                 </p>
//                             </div>

                            
//                             <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 h-full">
//                                 <img
//                                     src="https://res.cloudinary.com/dafdencvh/image/upload/v1719174721/hero_section_jkfu0i.png" 
//                                     alt="Accessibility"
//                                     className="w-full h-full object-cover rounded-xl"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// }


export default function Hero() {
    return (
        <div className="w-full h-screen flex flex-col">
            <main className="flex-1">
                <section className="w-full h-full bg-[#f1f5f9] flex items-center">
                    <div className="container mx-auto px-4 md:px-6 h-full flex">
                        <div className="flex flex-col md:flex-row w-full h-full">
                            {/* Text Section (Left Half) */}
                            <div className="flex-1 flex flex-col justify-center text-center md:text-left md:pr-8 h-full">
                                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-[#1e293b] mb-4">
                                    Empowering Accessibility for All
                                </h1>
                                <p className="text-[#64748b] md:text-xl">
                                    Our web application is designed to assist individuals with disabilities, providing a range of tools
                                    and resources to enhance their online experience.
                                </p>
                            </div>

                            {/* Image Section (Right Half) */}
                            <div className="flex-1 flex items-center justify-center h-full relative">
                                <div className="relative w-3/4 h-3/4">
                                    <img
                                        src="https://res.cloudinary.com/dafdencvh/image/upload/v1719174721/hero_section_jkfu0i.png" // Replace with your Cloudinary image URL
                                        alt="Accessibility"
                                        className="absolute inset-0 w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
