import { Pages } from "pages/Pages";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      {Pages.map(({ name, path }) => {
        return (
          <Link to={path} key={name}>
            {name}
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
