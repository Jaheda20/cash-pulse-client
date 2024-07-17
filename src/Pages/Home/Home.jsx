import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen min-w-full bg-green-700 flex items-center justify-center flex-col">
            <div className="text-center">
                <h2 className="text-slate-300 text-5xl font-semibold">Welcome to</h2>
                <h1 className="text-8xl font-bold text-white">Cash Pulse</h1>
            </div>
            <Link to="/login">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-8"> Login Here</button>
            
            </Link>
            
        </div>
    );
};

export default Home;