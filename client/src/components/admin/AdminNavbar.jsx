import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return (
        <div className=" flex justify-between items-center px-4 py-2 border-b-2 p-10">
            <h1>Dashboard</h1>

            <div className="flex gap-4 items-center">
                <button>
                    <Link
                        to="/admin/course/create"
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full"
                    >
                        Create Course
                    </Link>
                </button>

                <button
                    //   onClick={logoutHandel}
                    className="w-fit px-3 py-1 rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white "
                >
                    logout
                </button>
            </div>
        </div>
    );
};

export default AdminNavbar;
