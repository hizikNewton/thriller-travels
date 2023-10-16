
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";



const Layout = () => {
    return (
        <div className="flex relative ">
            <Sidebar />

            <main className="w-[calc(100%-16rem)] ml-64">

                <div className="flex flex-col gap-y-6 bg-gray-100 px-5 main-container">
                    <Header />
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
export default Layout;
