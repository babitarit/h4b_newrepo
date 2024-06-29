export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-center p-8 ">
            <div className="text-black flex flex-wrap items-center justify-center mt-4 md:mt-0">
                <p className="font-bold">&copy; {new Date().getFullYear()} Your Company</p>
                <div className="  font-bold hidden md:block mx-2">|</div>
                <p className=" font-bold md:hidden">|</p>
                <p className="font-bold">All rights reserved.</p>
            </div>
        </footer>
    );
}
