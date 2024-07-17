import { NavLink } from "react-router-dom";

const MenuItems = ({label, address, icon: Icon}) => {
    return (
        <div>
            <NavLink
            to={address}
            end
            className={({isActive})=>
                `flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-green-400 hover:text-gray-600 ${isActive ? 'bg-green-300 rounded-md text-gray-700' : 'text-slate-800'}`
            }
            >
                <Icon className="w-5 h-5"/>
                <span className="mx-4 font-medium">{label}</span>

            </NavLink>
            
        </div>
    );
};

export default MenuItems;