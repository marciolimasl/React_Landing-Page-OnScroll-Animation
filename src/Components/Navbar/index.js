import { useState } from "react";
import "./styles.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <span className="navbar_logo">Travel</span>

      {menuClicked ? (
        <FiX size={25} className="navbar__menu" onClick={toggleMenuClick} />
      ) : (
        <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick} />
      )}

      <ul className="navbar_list">
        {navbarLinks.map((item) => {
          return (
            <li className="navbar_item" key={item.title}>
              <a href={item.url} className="navbar_link">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
