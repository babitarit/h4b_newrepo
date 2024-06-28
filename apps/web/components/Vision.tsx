export default function Vision() {
    const cardsData = [
        {
            title: "Inclusive Learning ",
            description: "This is a description for card 1. It gives a brief overview of the content inside the card.",
            imageSrc: "https://res.cloudinary.com/dafdencvh/image/upload/v1719207246/inc_d6ihvr.jpg",
        },
        {
            title: "Enhance Reading Experience",
            description: "This is a description for card 2. It gives a brief overview of the content inside the card.",
            imageSrc: "https://res.cloudinary.com/dafdencvh/image/upload/v1719206990/enhance_l5lkvg.png",
        },
        {
            title: "Empower Learning ",
            description: "This is a description for card 3. It gives a brief overview of the content inside the card.",
            imageSrc: "https://res.cloudinary.com/dafdencvh/image/upload/v1719207066/lear_kkidie.jpg",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#d9e4ff]  p-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Our Vision</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {cardsData.map((card, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                        <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mb-4">
                            <img
                                src={card.imageSrc}
                                alt={`Card Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                        <p className="text-gray-600 text-center">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
