import { Link } from "react-router-dom";

const Button = ({ to }) => {
  return (
    <Link to={to} className="btn">
      back to home
    </Link>
  );
};

export default Button;
