import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';



const LeftSideNav = () => {


    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    })


    return (
        <div>
            <div className=" space-y-6">
                <h2 className="text-2xl font-semibold bg-slate-100 rounded-lg p-6">All Categories </h2>
                {
                    categories.map(category => <Link
                        className="block ml-4 text-lg font-normal text-blue-600"
                        key={category.id}
                        to={`/category/${category.id}`}
                    >{category.name}</Link>)
                }
            </div>
            <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-10">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src= {img1}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">
                    <h4 className="font-poppins text-lg font-medium">
                    Bayern Slams Authorities Over Flight Delay to Club World Cup
                    </h4>
                     
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center -space-x-3">
                         <h6 className="text-xl text-black">Sports</h6>
                    </div>
                    <div className="flex gap-1 items-center">
                    <p><FaCalendarCheck></FaCalendarCheck></p>
                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        Jan 10, 2023
                    </p>
                    </div>
                </div>
            </div>
            <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-3">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src= {img2}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">
                    <h4 className="font-poppins text-lg font-medium">
                    Bayern Slams Authorities Over Flight Delay to Club World Cup
                    </h4>
                     
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center -space-x-3">
                         <h6 className="text-xl text-black">Sports</h6>
                    </div>
                    <div className="flex gap-1 items-center">
                    <p><FaCalendarCheck></FaCalendarCheck></p>
                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        Jan 10, 2023
                    </p>
                    </div>
                </div>
            </div>
            <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-3">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src= {img3}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">
                    <h4 className="font-poppins text-lg font-medium">
                    Bayern Slams Authorities Over Flight Delay to Club World Cup
                    </h4>
                     
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center -space-x-3">
                         <h6 className="text-xl text-black">Sports</h6>
                    </div>
                    <div className="flex gap-1 items-center">
                    <p><FaCalendarCheck></FaCalendarCheck></p>
                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased text-gray-400">
                        Jan 10, 2023
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LeftSideNav;
