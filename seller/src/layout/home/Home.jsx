import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <p>
        <Link to="/signup">Signup</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>
      </p>
    </div>
  );
};

export default Home;
