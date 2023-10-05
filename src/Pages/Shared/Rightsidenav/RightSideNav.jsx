import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'



const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full capitalize text-blue-700">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full capitalize text-green-500">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            <div className='p-4  mb-6'>
                <h2 className="text-3xl font-semibold mb-5">Find Us On</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg text-blue-600' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x text-green-400' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg text-red-500' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
    
                {/* Q zone */}
                <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl font-semibold pb-3">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;