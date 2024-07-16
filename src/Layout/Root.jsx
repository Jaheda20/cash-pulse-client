import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="flex items-center justify-center">
           <Outlet></Outlet>
        </div>
    );
};

export default Root;