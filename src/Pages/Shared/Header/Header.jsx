import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header =() => {
    return (
        <div className='text-center pt-10'>
           <img className='mx-auto mb-5' src={logo} alt='' />
           <p>Journalism Without Fear or Favour</p>
           <p className="text-xl mt-2">{moment().format("dddd, MMMM D, YYYY ")}</p>
        </div>
    );
};
export default Header;