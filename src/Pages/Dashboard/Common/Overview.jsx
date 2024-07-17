import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { LuContact } from "react-icons/lu";

const Overview = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="container mx-auto my-20">
            <div className="ml-10"> 
            <h1 className="text-5xl mb-10">Overview</h1>
            <div className="bg-base-100 p-10 flex items-center justify-center shadow-md ">
                <div className="w-1/2">
                <p><strong>Name:</strong> {user?.name}</p>
                <p><strong>Role:</strong> {user?.role}</p>
                <p><strong>Account Balance:</strong> $ {user?.balance}</p>
                </div>
                <div className="w-1/2">
                <h3 className="flex items-center gap-2"><LuContact size={20} className="text-green-700" />
                <strong>Contact info-</strong>
                </h3>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Phone:</strong> {user?.mobile}</p>
                </div>
                
            </div>
        </div>
            
        </div>
    );
};

export default Overview;