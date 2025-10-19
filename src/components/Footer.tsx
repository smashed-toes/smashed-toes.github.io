import {
  FaImdb,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

const ICON_SIZE = 36;

function Footer() {
  return (
    <footer className="header-footer-background backdrop-blur-[20px] text-white p-4 text-center rounded-t-2xl">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.imdb.com/name/nm10824725/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaImdb size={ICON_SIZE} style={{ color: "white" }} />
        </a>
        <a
          href="https://www.instagram.com/smashed_toes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={ICON_SIZE} style={{ color: "white" }} />
        </a>
        <a
          href="https://www.tiktok.com/@smashed_toes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={ICON_SIZE} style={{ color: "white" }} />
        </a>
        <a
          href="https://twitter.com/smashed_toes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={ICON_SIZE} style={{ color: "white" }} />
        </a>
        <a href="mailto:sam.masto@gmail.com">
          <FaEnvelope size={ICON_SIZE} style={{ color: "white" }} />
        </a>
      </div>
      <div className="mt-2">&copy; 2025 Sam's Acting Website</div>
    </footer>
  );
}

export default Footer;
