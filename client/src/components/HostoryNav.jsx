import { NavLink } from "react-router-dom";

export default function SubsectionNav() {
  return (
    <nav className="mb-4 border-b pb-2">
      <NavLink
        to="tab1"
        className={({ isActive }) =>
          isActive ? "mr-4 font-bold text-blue-600" : "mr-4 text-gray-600"
        }
      >
        Tab 1
      </NavLink>
      <NavLink
        to="tab2"
        className={({ isActive }) =>
          isActive ? "font-bold text-blue-600" : "text-gray-600"
        }
      >
        Tab 2
      </NavLink>
    </nav>
  );
}
