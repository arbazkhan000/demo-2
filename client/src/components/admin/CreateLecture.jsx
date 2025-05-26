import React from "react";
import { useNavigate } from "react-router-dom";

const CreateLecture = () => {
const navigate =useNavigate()

    return (
        <div className="mb-4">
            <button
                type="button"
                onClick={() => navigate("/admin")}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Cancel
            </button>
            <form>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        htmlFor="title"
                    >
                        Lecture Title
                    </label>
                    <input
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Enter title here...
                "
                    />
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        htmlFor="video"
                    >
                        video
                    </label>
                    <video
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        src=""
                    ></video>
                </div>
            </form>
        </div>
    );
};

export default CreateLecture ;
