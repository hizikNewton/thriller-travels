import Logo from "@assets/logo.svg";
import Icon from "@components/icons/Icons";
import routes from "../../routes";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between flex-shrink-0 h-screen pb-0 overflow-hidden text-center bg-white sidebar w-60 p-9 gap-y-6 md:fixed">
      <div className="sidebar-logo ">
        <img src={Logo} />
        <div className="flex flex-col items-center mt-6">
          <div className=" w-[100px] h-[100px] border border-black mb-11 rounded-full">
            <div className="relative w-full h-full border-8 rounded-full backgroundImage border-grey-50 bg-profile ">
              <button
                type="button"
                className="text-white bg-slate-700 absolute -bottom-7 left-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
              >
                <Icon name="edit" />
              </button>
            </div>
          </div>
          <p className=" text-zinc-400">illia Jan</p>
        </div>
      </div>

      <nav>
        {routes.map(({ icon, name, path }) => (
          <NavLink
            key={path}
            className={`group ${({ isActive }) => (isActive ? "active" : "")}
            `}
            to={path}
          >
            <div className="flex items-center my-6">
              <Icon name={icon} className="mr-4 group-hover:active" />
              <span className="text-sm text-zinc-400 group-hover:text-slate-700 group-hover:font-medium">
                {name}
              </span>
            </div>
          </NavLink>
        ))}
      </nav>

      <div className="flex my-6">
        <Icon name={"chevRight"} className="items-center mr-4 hover:active" />
        <span className="text-sm text-zinc-400 hover:text-slate-700 group-hover:font-medium">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
