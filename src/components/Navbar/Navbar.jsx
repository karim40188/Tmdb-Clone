import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/29c6fee-blue_short.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#032541] py-3 flex items-center">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="w-[150px] px-2 cursor-pointer">
              <img className="w-full" src={logoImg} alt="Logo" />
            </Link>

            {/* Menu Icon */}
            <div
              className="lg:hidden cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
                console.log("Sidebar toggled: ", !isOpen);
              }}
            >
              <i className="fas fa-bars text-white text-2xl"></i>
            </div>

            {/* Sidebar */}
            <div
              className={`fixed top-0 left-0 w-64 z-[12] h-full bg-[#032541] text-white transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 lg:hidden z-50`}
            >
              <div className="flex justify-end p-4">
                <button onClick={() => setIsOpen(false)}>
                  <i className="fas fa-times text-2xl"></i>
                </button>
              </div>
              <ul className="flex flex-col gap-5 p-4 font-bold">
                <li>
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/tv" onClick={() => setIsOpen(false)}>
                    TV Shows
                  </Link>
                </li>
                <li>
                  <Link to="/people" onClick={() => setIsOpen(false)}>
                    People
                  </Link>
                </li>
                <li>
                  <Link to="/more" onClick={() => setIsOpen(false)}>
                    More
                  </Link>
                </li>
              </ul>
            </div>

            {/* الروابط العادية */}
            <ul className="hidden lg:flex text-white gap-5 ml-5 font-bold">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tv">TV Shows</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
