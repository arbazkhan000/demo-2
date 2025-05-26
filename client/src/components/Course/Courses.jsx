import { useEffect, useState } from "react";
import { categories, courses } from "../data/mockdata";
import LoadingSpinner from "../LoadingSpinner";
import CourseCard from "./CourseCard";
// import { data } from "react-router-dom";

const Courses = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate loading
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading || !courses) {
        return (
            <div className="text-center py-20">
                <LoadingSpinner />
            </div>
        );
    }
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Explore Courses
                    </h2>
                    <p className="text-lg text-gray-600">
                        Discover our wide range of courses and start learning
                        today.
                    </p>
                </div>

                {/* Search + Filter Controls */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                    <input
                        type="search"
                        placeholder="Search courses..."
                        className="w-full md:w-80 px-4 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select className="w-full md:w-60 px-4 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option value={category.name} key={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
