import { useContext } from "react"
import { MobileNavContext } from "../Layout"
import Logo from "@assets/logo.svg";
import Icon from "@components/icons/Icons";
import routes from '../../routes';
import { NavLink } from "react-router-dom";

type Props = {}


const Sidebar = (props: Props) => {

    const { open } = useContext(MobileNavContext)
    return (
        <div className={`sidebar flex flex-col justify-between text-center flex-shrink-0 h-screen  w-60 
        p-9 pb-0 gap-y-6 overflow-hidden  md:fixed ${open ? "open" : ""}`} >
            <div className="sidebar-logo ">
                <img src={Logo} />
                <div className="flex flex-col items-center mt-6">
                    <div className=" w-[100px] h-[100px] border border-black mb-11 rounded-full">
                        <div className=" w-full h-full relative border-8 border-grey-50  rounded-full " style={{ backgroundImage: `url(${"src/assets/kate.webp"})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "148px" }}>
                            <button type="button" className="text-white bg-slate-700 absolute -bottom-7 left-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2">
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
                        className={`group ${({
                            isActive,
                        }) => (isActive ? "active" : "")}
            `}
                        to={path}
                    >
                        <div className="flex my-6 items-center">
                            <Icon name={icon} className="mr-4 group-hover:active" />
                            <span className=" text-sm text-zinc-400 group-hover:text-slate-700 group-hover:font-medium">{name}</span>

                        </div>
                    </NavLink>))}
            </nav>

            <div className="flex my-6">
                <Icon name={"chevRight"} className="mr-4 hover:active items-center" />
                <span className=" text-sm text-zinc-400 hover:text-slate-700 group-hover:font-medium">Logout</span>

            </div>
        </div>
    )
}

export default Sidebar