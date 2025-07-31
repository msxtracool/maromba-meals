import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        padding: "2rem 1rem",
        paddingTop: "80px",
        paddingBottom: "10vh",
        margin: "0.9rem",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <h1>404 Not Found</h1>
      <br />
      <Link to="/">Back</Link>
    </div>
  );
};
export default NotFoundPage;
