import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div
      style={{
        padding: "2rem 1rem",
        paddingTop: "100px", // esse valor depende da altura do seu Navbar
        paddingBottom: "10vh", // espaço pro Footer
        margin: "0.9rem",
        color: "#fff",
        minHeight: "100vh",
        backgroundColor: "#000", // opcional, só pra destacar
      }}
    >
      <p>
        This is a clean and simple meal diary app. You can easily log your clean
        meals, make edits on the fly and search your past entries.
      </p>
      <br />
      <Link to="/">Back</Link>
    </div>
  );
};

export default AboutPage;
