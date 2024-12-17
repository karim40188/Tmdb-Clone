import { useState } from "react";
import logo from "../../assets/gVZIvphd_400x400.jpg";

function Footer() {
  let [links, setLinks] = useState([
    {
      title: "About TMDB",
      links: ["Contact Us", "Support Forums", "API", "System Status"],
    },
    {
      title: "Get Involved",
      links: ["Contribution Bible", "Add New Movie", "Add New TV Show"],
    },
    {
      title: "Community",
      links: ["Guidelines", "Discussions", "Leaderboard"],
    },
    {
      title: "Legal",
      links: [
        "Terms of Use",
        "API Terms of Use",
        "Privacy Policy",
        "DMCA Policy",
      ],
    },
  ]);

  return (
    <footer className="bg-[#032540] py-6">
      <div className="container">
        <div className="flex flex-wrap justify-between text-white gap-6">
          <div className="w-full md:w-[150px] flex justify-center md:justify-start">
            <img className="object-cover object-center w-full max-w-[100px]" src={logo} alt="" />
          </div>
          {links.map((link, index) => (
            <ul key={index} className="w-full sm:w-auto">
              <li className="font-bold text-xl mb-3">{link.title}</li>
              {link.links.map((link, index) => (
                <li className="cursor-pointer mb-2" key={index}>
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
