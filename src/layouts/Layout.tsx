import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import MobileHeader from "./components/MobileHeader";
import Sidebar from "./components/Sidebar";

interface MobileNavContextType {
    open: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
}

export const MobileNavContext = createContext<MobileNavContextType>({
    open: false,
    toggle: () => { },
});

const Layout = () => {
    const [open, toggle] = useState(false);
    return (
        <MobileNavContext.Provider value={{ open, toggle }}>
            <MobileHeader />
            <div className="flex relative mx-8">
                <Sidebar />
                <main className="w-[calc(100%-15rem)] ml-60">
                    <div className="flex flex-col gap-y-6 bg-gray-100 px-5 main-container">
                        <Outlet />
                    </div>
                </main>
            </div>
        </MobileNavContext.Provider>
    );
};
export default Layout;
