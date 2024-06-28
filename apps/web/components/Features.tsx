export default function Features(){
    return(
        <div className="flex flex-col items-center p-8 bg-[#8BABF1]">
            <h1 className="text-3xl font-bold mb-4">Accessibility Features</h1>
            <h2 className="text-xl mb-12 ">Our commitment to making technology accessible</h2>
    
            <div className="flex items-center mb-12">
                <img 
                    src="https://res.cloudinary.com/dafdencvh/image/upload/v1719204193/TTS_cfnc7l.png" 
                    alt="Text to Speech" 
                    className="w-32 h-32 rounded-full mr-8"
                />
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Text to Speech</h3>
                    <p className="mb-4">This feature converts written text into spoken words, enhancing accessibility for users with visual impairments.</p>
                    <a 
                        href="/text-to-speech" 
                        className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Explore
                    </a>
                </div>
            </div>
    
            <div className="flex items-center mb-12 flex-row-reverse">
                <img 
                    src="https://res.cloudinary.com/dafdencvh/image/upload/v1719204409/sign_lang_hup9g0.jpg" 
                    alt="Sign Chart" 
                    className="w-32 h-32 rounded-full ml-8"
                />
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Sign Chart</h3>
                    <p className="mb-4">This feature provides a comprehensive chart for sign language, making communication easier for users with hearing impairments.</p>
                    <a 
                        href="/sign-chart" 
                        className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Explore
                    </a>
                </div>
            </div>
    
            <div className="flex items-center mb-12">
                <img 
                    src="https://res.cloudinary.com/dafdencvh/image/upload/v1719204505/learning_vmceqd.svg" 
                    alt="Learning Module" 
                    className="w-32 h-32 rounded-full mr-8"
                />
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Learning Module</h3>
                    <p className="mb-4">This module offers various learning tools and resources designed to support diverse learning needs.</p>
                    <a 
                        href="/learning-module" 
                        className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Explore
                    </a>
                </div>
            </div>
        </div>
    )
}


