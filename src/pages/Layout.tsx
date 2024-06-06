import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
    return <div className="min-h-screen font-montserrat flex flex-col">
        <div className="flex-1 flex flex-col">
            <Outlet />
        </div>
    </div>
}
export default Layout;