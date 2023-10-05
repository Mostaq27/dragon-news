import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRefister = e =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
    
        console.log( name, photo,email,password);

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err=> {
            console.error(err);
        })
    }


    return (
        <div>
            <Navbar></Navbar>

            <div>
                <h2 className="text-4xl font-semibold text-center py-10">Register your account</h2>

                <form onSubmit={handleRefister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary capitalize">Register</button>
                    </div>
                </form>
                <p className=" text-center mt-4">Already have an account? <Link className="font-bold text-blue-700" to="/login">Login</Link></p>
            </div>
        </div>
    );
};
export default Register;