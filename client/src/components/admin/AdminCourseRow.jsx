import { Eye, Pencil, Trash } from "lucide-react";
import React from "react";

const AdminCourseRow = ({ course }) => {
    return (
        <div className="flex items-center justify-between gap-4 px-4 py-3 border-b  pt-10">
            {/* Thumbnail */}
            <div className="flex items-center gap-3 w-[20%]">
                <img
                    src={
                        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                    }
                    alt={course.title}
                    className="w-16 h-16 rounded-md object-cover"
                />
                <div className="text-sm font-medium text-gray-800">
                    {course.title}
                </div>
            </div>

            {/* Created By */}
            <div className="w-[20%] text-gray-600 text-sm">
                {course.createdBy}
            </div>

            {/* Actions */}
            <div className="flex gap-2 w-[30%] justify-end">
                <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-700 hover:text-blue-600">
                    <Eye size={16} /> View
                </button>
                <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-700 hover:text-yellow-500">
                    <Pencil size={16} /> Edit
                </button>
                <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-700 hover:text-red-500">
                    <Trash size={16} /> Delete
                </button>
            </div>
        </div>
    );
};

export default AdminCourseRow;
