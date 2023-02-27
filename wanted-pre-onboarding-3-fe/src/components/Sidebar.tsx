import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <Link to="/">Main</Link>
      <Link to="/pagea">Page A</Link>
      <Link to="/pageb">Page B</Link>
      <Link to="/pagec">Page C</Link>
    </aside>
  );
};

export default Sidebar;
