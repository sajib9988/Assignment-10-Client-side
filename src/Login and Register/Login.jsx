import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Shared/Navbar";

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                const from = location.state?.from?.pathname || '/';
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                const from = location.state?.from?.pathname || '/';
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("Error during Google Sign-In: ", error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <iframe
                        src="https://lottie.host/embed/b23c9409-cfc8-4fe3-8964-3f48be3debb2/ZwUuUorMBo.json"
                        className="w-full h-64 lg:h-full"
                        style={{ border: 'none' }}
                        title="Lottie Animation"
                    ></iframe>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-3xl my-10 text-center">Please Login</h2>
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-secondary w-3/4 md:w-1/2 mb-4"
                    >
                        Sign in with Google
                    </button>
                    <form onSubmit={handleLogin} className="w-3/4 md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center mt-4">Do not have an account? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
