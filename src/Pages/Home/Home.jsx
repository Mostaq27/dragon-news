import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/Rightsidenav/RightSideNav";
import Breaking from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    // console.log(news)
    return (
        <div>
            <Header />
            <Breaking/>
            <Navbar />
             
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav />
                </div>
                {/* news container */}
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard
                             key={aNews._id}
                             news={aNews}
                             ></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;