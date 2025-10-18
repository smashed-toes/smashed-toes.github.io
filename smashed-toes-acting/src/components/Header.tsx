import { Link } from "react-router-dom";

function Header() {
  const navLinkStyles = "font-heading text-2xl text-white-500";

  return (
    <header className="bg-primary-color text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-4xl font-bold font-heading">Sam Masto</div>
        <div className="flex space-x-4 text-color-white">
          <Link to="/" className={navLinkStyles} style={{ color: "white" }}>
            Home
          </Link>
          <Link
            to="/about"
            className={navLinkStyles}
            style={{ color: "white" }}
          >
            About
          </Link>
          <Link to="/film" className={navLinkStyles} style={{ color: "white" }}>
            Film
          </Link>
          <Link
            to="/theater"
            className={navLinkStyles}
            style={{ color: "white" }}
          >
            Theater
          </Link>
          <Link
            to="/sketches"
            className={navLinkStyles}
            style={{ color: "white" }}
          >
            Sketches
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
