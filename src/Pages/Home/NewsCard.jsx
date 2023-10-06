import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import moment from 'moment';


const NewsCard = ({ news }) => {
    // console.log(news)
    const { title, image_url, details, _id, author: { name, published_date, img }, } = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-6">
            <div className="">
                <div className="flex pl-2">
                    <figure className="h-[40px] rounded-full w-[40px]"><img src={img} alt="image" /></figure>
                    <div className="px-2 flex-grow-1">
                        <div className="">{name}</div>
                        <div className=" text-sm">{moment(published_date).format('yyyy-MM-D')}</div>
                    </div>
                    <div className="flex items-center gap-2 ml-[300px] text-gray-200">
                        <FaRegBookmark />  <FaShareAlt />
                    </div>
                </div>
            </div>
            <figure className=" w-full"><img src={image_url} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                {
                    details.length > 200
                        ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className=" text-blue-700 font-bold">Read More...</Link></p>
                        : <p>{details}</p>
                }


            </div>
        </div>
    );
};
export default NewsCard;