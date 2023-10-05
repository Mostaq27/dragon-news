import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breaking = () => {
    return (
        <div className="flex mt-6 mb-6">
            <button className="btn btn-secondary capitalize">Breakinng News</button>
            <Marquee pauseOnHover={true} speed={100}>
               <Link className="mr-12 text-red-600" to="/">
               Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
               </Link>
               <Link className="mr-12 text-blue-800" to="/">
               Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
               </Link>
               <Link className="mr-12 text-green-500" to="/">
               Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
               </Link>
            </Marquee>
        </div>
    );
};
export default Breaking;