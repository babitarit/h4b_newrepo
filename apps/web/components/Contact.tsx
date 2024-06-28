export default function Contact() {
    return (
        <div className="min-h-screen bg-[#d9e4ff] flex flex-col md:flex-row items-center justify-center p-4">
            {/* <div className="md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-4xl font-bold text-ring-blue-500 text-center md:text-left mb-4 md:mb-0">
                    Please Contact Us & Let Us Know How We Can Help You
                </h2>
            </div> */}
            <div className="md:w-1/2 mt-8 md:mt-0">
    <h2 className="text-4xl font-bold text-blue-500  text-center md:text-left mb-4 md:mb-0">
        Please Contact Us & Let Us Know How We Can Help You
    </h2>
</div>

            <div className="md:w-1/2 p-8 max-w-lg w-full">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Contact Us</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
                <div className="mt-8 text-center text-gray-600">
                    <p>Or reach out to us directly:</p>
                    <p>Email: <a href="mailto:support@learningplatform.com" className="text-blue-600">support@learningplatform.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="text-blue-600">+1 234 567 890</a></p>
                </div>
            </div>
        </div>
    );
}
