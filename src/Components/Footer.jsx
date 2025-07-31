import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>© 2025. Larissa Lucio dos Santos</p>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Footer;
