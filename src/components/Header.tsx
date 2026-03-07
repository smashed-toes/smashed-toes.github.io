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
    { path: "/improv", label: "Improv" },
  ];

  const getLinkStyle = (link: string) => ({
    color: hoveredLink === link ? "#999999" : "white",
    transition: "color 0.2s ease",
  });

  const linkElements = linkArray.map((link) => (
    <a
      key={link.path}
      href={link.path}
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
    </a>
  ));

  return (
    <header className="header-footer-background backdrop-blur-[20px] text-white p-4 sticky top-0 z-50 rounded-b-2xl">
      <nav className="flex justify-between items-center">
        <div className="text-4xl font-bold font-heading">Sam Masto</div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="block lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6">{linkElements}</div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mt-4 w-full border-t border-white/20 flex flex-col items-center space-y-3 py-4 lg:hidden rounded-b-2xl">
          {linkElements}
        </div>
      )}
    </header>
  );
}

export default Header;
