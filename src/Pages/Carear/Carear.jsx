import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Carear = () => {
    return (
        <div>
            <Navbar></Navbar>
        <div className="p-20  lg:flex justify-center items-center h-screen">
            <div className="  lg:w-1/2 h-1/2 border">
                <img src="https://i.ibb.co/fxRFxhz/2142357.jpg" />
            </div>
           
        </div>
        
        <div className="p-36 mt-12 lg:flex justify-center items-center relative bottom-[200px]">
                <Link to="/">
                    <button className="btn btn-secondary capitalize font-semibold">Go Back Home</button>
                </Link>
            </div>
        </div>
         
    );
};
export default Carear;