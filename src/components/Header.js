import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p>Header</p>
      <Link to="/details">Vers details</Link>
    </div>
  );
};

export default Header;
