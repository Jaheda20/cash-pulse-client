import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const [identifier, setIdentifier] = useState('');
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await login(identifier, pin)
            navigate('/dashboard')
        }
        catch(error){
            setError((error.response?.data?.message) || 'Login failed')
        }

    }
    


    return (
        <div className="container mx-auto my-20 text-center flex flex-col items-center justify-center">
            <h1 className="text-5xl my-20">Please Login !</h1>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email or Mobile Number</span>
                        </label>
                        <input type="text" placeholder="Email or Mobile Number" className="input input-bordered" value={identifier}  onChange={(e)=>setIdentifier(e.target.value)} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PIN</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" 
                        value={pin} 
                        onChange={(e)=>setPin(e.target.value)}
                        required />
                        {error && <p style={{color: 'red'}}>{error}</p>}
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Are you new here? 
                        <Link to="/register" className="text-blue-800 hover:underline">
                         Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;