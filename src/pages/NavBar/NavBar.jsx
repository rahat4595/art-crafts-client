import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/Context";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showUsername, setShowUsername] = useState(false);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <NavLink className={({ isActive }) => isActive ? 'text-lg font-semibold text-[#23BE0A] border px-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-lg font-semibold text-[#23BE0A] border px-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'} to="/arts">All Art & craft</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-lg font-semibold text-[#23BE0A] border px-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'} to="/adds">Add Craft</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-lg font-semibold text-[#23BE0A] border px-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'} to="/crafts">My Art & Craft</NavLink>
    </>;

    return (
        <div>
            <div className="navbar mt-4 lg:mt-10 bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <h1 className="text-md lg:text-2xl font-bold">Arts Gallery</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex gap-5 menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    {
                        user && (
                            <div
                                className="relative"
                                onMouseEnter={() => setShowUsername(true)}
                                onMouseLeave={() => setShowUsername(false)}
                            >
                                <img
                                    className="btn border-2 rounded-full border-blue-600 p-1"
                                    src={user?.photoURL || "https://i.ibb.co/FBZQVTZ/defalt.jpg"}
                                    alt="User Profile"
                                />
                                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow p-2 ${showUsername ? 'block' : 'hidden'}`}>
                                    {user.displayName || 'User'}
                                </div>
                            </div>
                        )
                    }
                    {user ? (
                        <button onClick={handleSignOut} className="btn bg-[#23BE0A] text-white">
                            Log Out
                        </button>
                    ) : (
                       <div className="flex gap-4">
                         <Link to="/login">
                            <button className="btn bg-[#23BE0A] text-white">Login</button>
                        </Link>

                         <Link to="/register">
                            <button className="btn bg-[#0abea9] text-white">Register</button>
                        </Link>

                       </div>
                       
                    )
                    
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
