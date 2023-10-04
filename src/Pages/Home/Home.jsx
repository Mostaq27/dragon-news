import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/Rightsidenav/RightSideNav";
import Breaking from "./BreakingNews";


const Home = () => {

    return (
        <div>
            <Header />
            <Breaking/>
            <Navbar />
             
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav />
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-4xl">News coming soon...</h2>
                </div>
                <div className="border">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;