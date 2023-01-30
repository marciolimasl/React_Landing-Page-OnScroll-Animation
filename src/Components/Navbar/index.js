import "./styles.css";

const Navbar = ({ navbarLinks }) => {
  return (
    <nav className="navbar">
      <span className="navbar_logo">Travel</span>
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
