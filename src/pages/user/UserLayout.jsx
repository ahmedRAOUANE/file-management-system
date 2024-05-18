import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const UserLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default UserLayout