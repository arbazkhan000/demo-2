import React from "react";

const AppSidebar = () => {
    return (
        <aside className="hidden sm:flex flex-col gap-4 border-r border-gray-200 p-4 w-64">
            <button className="text-left hover:bg-gray-200 px-2 py-2 rounded-sm cursor-pointer ">
                Home
            </button>
            <button className="text-left  hover:bg-gray-200 px-2 py-2 rounded-sm cursor-pointer">
                Course
            </button>
        </aside>
    );
};

export default AppSidebar;
