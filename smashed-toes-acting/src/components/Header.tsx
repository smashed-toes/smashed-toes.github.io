import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState("");
  const navLinkStyles = "font-heading text-2xl";

  const linkArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/film", label: "Film" },
    { path: "/theater", label: "Theater" },
    { path: "/sketches", label: "Sketches" },
  ];

  const getLinkStyle = (link: string) => ({
    color: hoveredLink === link ? "#999999" : "white",
    transition: "color 0.2s ease",
  });

  /**
   * All the styled links in the navbar
   */
  const linkElements = linkArray.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      className={navLinkStyles}
      style={getLinkStyle(link.path)}
      onClick={() => {
        setIsOpen(false);
        setHoveredLink("");
      }}
      onMouseEnter={() => setHoveredLink(link.path)}
      onMouseLeave={() => setHoveredLink("")}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="bg-primary-color text-white p-4 relative">
      <nav className="flex justify-between items-center">
        <div className="text-4xl font-bold font-heading">Sam Masto</div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="block md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">{linkElements}</div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-primary-color border-t border-white flex flex-col items-center space-y-3 py-4 md:hidden z-50">
          {linkElements}
        </div>
      )}
    </header>
  );
}

export default Header;
