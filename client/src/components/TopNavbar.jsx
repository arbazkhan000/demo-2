import { Menu, Search, User } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNavbar = () => {
    // const user = null;

    const user = localStorage.getItem("user") || false;
    const [openDropDown, setOpenDropDown] = useState(false);

    return (
        <header className="border-b sticky top-0 z-30 bg-white">
            <div className="flex h-16 items-center px-4 md:px-6">
                {/* Mobile menu icon */}
                <button className="md:hidden mr-2 p-2 hover:bg-gray-100 rounded">
                    <Menu className="h-5 w-5" />
                </button>

                {/* App name (mobile only) */}
                <div className="md:hidden flex-1">
                    <h1 className="text-lg font-semibold">Nova LMS</h1>
                </div>

                {/* Right side */}
                <div className="ml-auto flex items-center gap-4">
                    {/* Desktop search bar */}
                    <div className="relative hidden md:flex items-center">
                        <Search className="absolute left-3 h-4 w-4 text-gray-400" />
                        <input
                            type="search"
                            placeholder="Search courses..."
                            className="pl-9 w-64 md:w-80 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Auth buttons */}
                    {!user ? (
                        <div className="flex items-center gap-2">
                            <Link
                                to="/login"
                                className="hidden sm:inline-block"
                            >
                                <button className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100">
                                    Log in
                                </button>
                            </Link>
                            <Link to="/login" className="sm:hidden">
                                <button className="p-2 rounded hover:bg-gray-100">
                                    <span className="sr-only">Log in</span>
                                    <User className="h-5 w-5" />
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                    Sign up
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <span className="hidden md:inline-block text-sm font-medium mr-2">
                                Welcome, {user.name}
                            </span>
                            <button className="rounded-full border p-1">
                                <span className="sr-only">User menu</span>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white text-sm">
                                    {/* {user.name.charAt(0)} */}
                                </div>

                                <span onClick={() => setOpenDropDown(true)}>
                                    {openDropDown ? "open" : "close"}
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile search bar */}
            <div className="md:hidden px-4 pb-3">
                <div className="relative flex items-center">
                    <Search className="absolute left-3 h-4 w-4 text-gray-400" />
                    <input
                        type="search"
                        placeholder="Search courses..."
                        className="pl-9 w-full py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </header>
    );
};

export default TopNavbar;
