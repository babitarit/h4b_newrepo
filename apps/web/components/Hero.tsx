export default function Hero() {
    return (
        <div className="flex flex-col min-h-[100dvh]">

            <main className="flex-1">
                <section className="bg-[#f1f5f9] py-12 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-[#1e293b]">
                                    Empowering Accessibility for All
                                </h1>
                                <p className="text-[#64748b] md:text-xl">
                                    Our web application is designed to assist individuals with disabilities, providing a range of tools
                                    and resources to enhance their online experience.
                                </p>
                            </div>
                            <img
                                src="/placeholder.svg"
                                width="550"
                                height="400"
                                alt="Accessibility"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                            />
                        </div>
                    </div>
                </section>
                <section id="tools" className="bg-[#e2e8f0] py-12 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#1e293b]">
                                Accessibility Tools and Resources
                            </h2>
                            <p className="text-[#64748b] md:text-xl">
                                Discover a wide range of tools and resources to improve your online experience.
                            </p>
                        </div>
                        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-lg border text-card-foreground bg-[#f1f5f9] shadow-lg" data-v0-t="card">
                                <div className="flex flex-col space-y-1.5 p-6">
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
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#1e293b]">Screen Readers</h3>
                                    <p className="text-[#64748b]">Enhance your browsing experience with advanced screen readers.</p>
                                </div>
                                <div className="flex items-center p-6">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-medium text-[#1e293b] transition-colors hover:bg-[#f59e0b] focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:ring-offset-2"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="rounded-lg border text-card-foreground bg-[#f1f5f9] shadow-lg" data-v0-t="card">
                                <div className="flex flex-col space-y-1.5 p-6">
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
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#1e293b]">High Contrast Mode</h3>
                                    <p className="text-[#64748b]">Improve readability with high contrast mode.</p>
                                </div>
                                <div className="flex items-center p-6">
                                    <a
                                        className="inline-flex items-center justify-center rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-medium text-[#1e293b] transition-colors hover:bg-[#f59e0b] focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:ring-offset-2"
                                        href="#"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="rounded-lg border text-card-foreground bg-[#f1f5f9] shadow-lg" data-v0-t="card">
                                <div className="flex flex-col space-y-1.5 p-6">
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
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#1e293b]">Keyboard Navigation</h3>
                                    <p className="text-[#64748b]">Explore the web with keyboard-friendly navigation.</p>
                                </div>
                                <div className="flex items-center p-6">
                                    <a
                                        className="inline-flex items-center justify-center rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-medium text-[#1e293b] transition-colors hover:bg-[#f59e0b] focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:ring-offset-2"
                                        href="#"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
