import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
    const [name, setName] = useState('');
    const [pin, setPin] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
                name,
                email, 
                mobile,
                role,
                pin
            })
            setSuccessMessage(res.data.message)
        }
        catch (error) {
            console.log(error.message)
        }

    }

    return (
        <div className="container mx-auto my-20 text-center flex flex-col items-center justify-center">
            <h1 className="text-5xl my-20">Register Here</h1>

            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={name} placeholder="Your Name" className="input input-bordered" onChange={(e) => setName(e.target.value)} required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input type="number" value={mobile} placeholder="Your mobile number" className="input input-bordered" onChange={(e) => setMobile(e.target.value)} required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <select className="select select-primary w-full max-w-xs"
                        defaultValue={role} onChange={(e)=> setRole(e.target.value)}>
                            <option disabled selected>Choose your role?</option>
                            <option>Agent</option>
                            <option>New User</option>
                        </select>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PIN</span>
                        </label>
                        <input type="password" placeholder="Enter your PIN" className="input input-bordered" value={pin} onChange={(e) => setPin(e.target.value)} required />

                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                    <p>Already have an account? Please
                        <Link to="/login" className="text-blue-800 hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Registration;