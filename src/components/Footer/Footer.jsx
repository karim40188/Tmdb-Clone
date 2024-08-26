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
    <footer className="bg-[#032540]">
      <div className="container">
        <div className="flex  justify-around text-white py-3">
            <div className="w-[150px]">
            <img className="object-cover object-center w-full" src={logo} alt="" />

            </div>
          {links.map((link, index) => {
            return (
              <ul key={index} className="mt-[50px]">
                <>
                  <li className="font-bold text-xl">{link.title}</li>
                  {link.links.map((link, index) => {
                    return <li className="cursor-pointer" key={index}>{link}</li>;
                  })}
                </>
              </ul>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
