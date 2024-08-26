import { Link } from "react-router-dom";
import logoImg from "../../assets/29c6fee-blue_short.svg";
function Navbar() {
  return (
    <nav className="bg-[#032541] py-3 flex items-center  ">
      <div className="container">
        <div className="flex items-center">
          <Link to="/" className="w-[150px] px-2 cursor-pointer">
            <img className="w-full" src={logoImg} alt="" />
          </Link>
          <ul className="flex text-white gap-3  ml-5 font-bold  ">
            <li className="relative group">
              <a className="cursor-pointer py-4">
                Home
              </a>
                <ul className="bg-white absolute hidden  z-50 font-semibold group-hover:block    w-[140px] h-[120px]  rounded-md top-[35px] p-3 text-slate-900">
                  <li className="hover:bg-gray-200">
                    <Link to='/popular'>Popular</Link>
                  </li>
                  <li>
                    <Link to="/upcoming">Upcoming</Link>
                  </li>
                  <li><Link to="/topRated">
                  Top Rated</Link></li>
                </ul>
            </li>
            <li>
              <Link to="/tv">TV Shows</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/">More</Link>
            </li>
          </ul>
          <ul className="text-white flex ms-auto gap-5 items-center  ">
            <li>
              <i className="fas fa-plus cursor-pointer"></i>
            </li>
            <li className="border cursor-pointer border-white px-1 py-1">EN</li>
            <li>
              <i className="fas cursor-pointer fa-bell"></i>
            </li>
            <li className=" cursor-pointer bg-[#01D277] rounded-full w-8 h-8 flex justify-center items-center ">
              K
            </li>
            <li>
              <i className="fab cursor-pointer fa-searchengin"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
