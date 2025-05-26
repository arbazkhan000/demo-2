import React from "react";
import { Outlet } from "react-router-dom";
import AdminCourseRow from "../admin/AdminCourseRow";
import AdminNavbar from "../admin/AdminNavbar";

const AdminLayout = () => {
    return (
        <div>
            <AdminNavbar />

            <div>
                {/* <AdminCourseRow
                    course={{
                        thumbnail: "https://via.placeholder.com/150",
                        title: "React for Beginners",
                        createdBy: "Amit Kumar",
                    }}
                /> */}
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
