import Header from "../../components/Header";
import HomeNavBar from "../../components/HomeNavBar";
import Home from "./homePage/Home";

const UserLayout = () => {
    return (
        <div>
            <Header />
            <HomeNavBar />
            <Home />
        </div>
    )
}

export default UserLayout