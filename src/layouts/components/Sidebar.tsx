import { useContext } from "react"
import { MobileNavContext } from "../Layout"
import Logo from "@assets/logo.svg";
import Icon from "@components/icons/Icons";
import routes from '../../routes';

type Props = {}


const Sidebar = (props: Props) => {

    const { open } = useContext(MobileNavContext)
    return (
        <div className={`sidebar flex flex-col justify-between text-center flex-shrink-0 h-screen border border-black w-60 
        p-9 pb-0 gap-y-6 overflow-hidden  md:fixed ${open ? "open" : ""}`} >
            <div className="sidebar-logo ">
                <img src={Logo} />
                <div className="profile-img">
                    <div className=" w-[100px] h-[100px] border-8 border-gray-50 rounded-full">
                    </div>
                    <p>illia Jan</p>
                </div>
            </div>

            <nav>
                {routes.map(({ icon, name }) =>
                    <div className="flex my-6">
                        <div className="active-dots"></div>
                        <Icon name={icon} className="mr-4" />
                        <span>{name}</span>

                    </div>)}
            </nav>

            <div className="flex my-6">
                <div className="active-dots"></div>
                <Icon name={"chevRight"} className="mr-4" />
                <span>Logout</span>

            </div>
        </div>
    )
}

export default Sidebar