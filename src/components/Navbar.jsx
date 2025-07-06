export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white sticky top-0 z-50 shadow-md">
      <div className="text-2xl font-bold">Alpha Tutoring</div>
      <ul className="flex space-x-6 font-medium">
        <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-300">About Us</a></li>
        <li><a href="#testimonials" className="hover:text-yellow-300">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-yellow-300">Contact Us</a></li>
      </ul>
    </nav>
  );
}
