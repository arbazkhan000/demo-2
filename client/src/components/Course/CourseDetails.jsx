import { Book } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../data/mockdata";
import LoadingSpinner from "../LoadingSpinner";

const CourseDetails = () => {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    const courseInfo = courses.find((course) => course.id === id);

    useEffect(() => {
        // simulate loading
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading || !courseInfo) {
        return (
            <div className="text-center py-20">
                <LoadingSpinner />
            </div>
        );
    }

    // handal bool now

    const user = true;

    return (
        <section className="px-4 md:px-8 py-12 bg-gray-50">
            {/* Top section: Info + Thumbnail */}
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
                {/* Course Info */}
                <div className="flex-1 space-y-4">
                    {/* Tags */}
                    <div className="flex gap-4 text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                            {courseInfo.category}
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                            {courseInfo.level}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                        {courseInfo.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600">
                        {courseInfo.description}
                    </p>

                    {/* Instructor */}
                    <p className="text-md text-gray-700 font-medium">
                        Instructor: {courseInfo.instructor}
                    </p>
                </div>

                {/* Sidebar Info */}
                <div className="w-full lg:w-[35%] bg-white rounded-lg shadow p-4 space-y-4">
                    <img
                        src={courseInfo.thumbnail}
                        alt={courseInfo.title}
                        className="w-full rounded-md object-cover"
                    />

                    <button
                        onClick={() => {
                            if (user) {
                                alert("Waiting for payment integration");
                            } else {
                                navigate("/login");
                            }
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
                    >
                        Enroll Now
                    </button>

                    <div className="flex items-center gap-2 text-gray-700">
                        <Book className="w-5 h-5" />
                        <span>{courseInfo.lessonsCount} lessons</span>
                    </div>
                </div>
            </div>

            {/* Curriculum Section */}
            <div className="max-w-4xl mx-auto mt-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Course Curriculum
                </h2>

                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-4">
                        Course Content
                    </h3>

                    <details className="mb-4 cursor-pointer">
                        <summary className="font-medium text-blue-600">
                            Introduction to Course
                        </summary>
                        <p className="text-gray-600 mt-2">
                            Epcot is a theme park at Walt Disney World Resort
                            featuring exciting attractions, international
                            pavilions, award-winning fireworks and seasonal
                            special events.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
