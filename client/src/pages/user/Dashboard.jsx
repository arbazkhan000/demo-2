import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../../components/data/mockdata";
import { axiosInstance } from "../../utils/axiosInstance";

const Dashboard = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchCourse() {
        try {
            setLoading(true);
            setError(null);
            const { data } = await axiosInstance.get("/courses");
            console.log("Fetch course", data.data);
            setCourses(data.data || []);
        } catch (error) {
            console.error("Error fetching courses:", error);
            setError("Failed to load courses. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCourse();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-20">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20">
                <p className="text-red-500 mb-4">{error}</p>
                <button
                    onClick={fetchCourse}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Unlock Your Potential with Nova Learning
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Access high-quality courses and take your skills to the
                        next level with our expert-led learning platform.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => navigate("/courses")}
                            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
                        >
                            Explore Courses
                        </button>
                        <button
                            onClick={() => navigate("/courses")}
                            className="border border-gray-300 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
                        >
                            Join for Free
                        </button>
                    </div>
                </div>
            </section>

            {/* Popular Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Popular Categories
                        </h2>
                        <button
                            onClick={() => navigate("/categories")}
                            className="flex items-center text-blue-600 hover:underline"
                        >
                            View All <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-white shadow rounded-lg p-6 text-center hover:shadow-md transition"
                            >
                                <div className="mb-4 text-3xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-gray-500 mb-4">
                                    {category.coursesCount} courses
                                </p>
                                <button
                                    onClick={() =>
                                        navigate(`/categories/${category.id}`)
                                    }
                                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                                >
                                    Explore
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                Featured Courses
                            </h2>
                            <p className="text-gray-600">
                                Explore our top-rated courses and start learning
                                today!
                            </p>
                        </div>
                        <button
                            onClick={() => navigate("/courses")}
                            className="flex items-center text-blue-600 hover:underline"
                        >
                            View All <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.length === 0 ? (
                            <div className="col-span-full text-center py-10">
                                <p>No courses available at the moment.</p>
                            </div>
                        ) : (
                            courses.map((course) => (
                                <div
                                    onClick={() =>
                                        navigate(`/courses/${course.id}`)
                                    }
                                    key={course.id || course._id}
                                    className="bg-white shadow rounded-lg p-6 hover:shadow-md transition cursor-pointer"
                                >
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title || "Course thumbnail"}
                                        className="w-full h-40 object-cover rounded mb-4"
                                        onError={(e) => {
                                            e.target.src =
                                                "/placeholder-course.jpg";
                                        }}
                                    />
                                    <div className="flex justify-between items-center mb-2 text-sm">
                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                            {course.category || "Uncategorized"}
                                        </span>
                                        <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">
                                            {course.level || "All Levels"}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {course.title || "Untitled Course"}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                        {course.description ||
                                            "No description available"}
                                    </p>

                                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                                        <span>
                                            {course.lessonsCount || 0} lessons
                                        </span>
                                        <span>
                                            {course.duration || "Flexible"}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">
                                            {course.price || "Free"}
                                        </span>
                                        <button className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 transition text-sm">
                                            View Course
                                        </button>
                                    </div>

                                    <p className="text-[15px] py-8">
                                        Instructor:{" "}
                                        {course.instructor || "Unknown"}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-8 bg-secondary/50 rounded-xl p-8 my-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Why Choose Nova Learning?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-8 w-8 text-blue-500"
                            >
                                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                <path d="M5 3v4" />
                                <path d="M19 17v4" />
                                <path d="M3 5h4" />
                                <path d="M17 19h4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2">
                            Expert Instructors
                        </h3>
                        <p className="text-muted-foreground">
                            Learn from industry professionals with real-world
                            experience.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-8 w-8 text-blue-500"
                            >
                                <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" />
                                <path d="m15 9-6 6" />
                                <path d="m9 9 6 6" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2">
                            Flexible Learning
                        </h3>
                        <p className="text-muted-foreground">
                            Study at your own pace, anywhere and anytime.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-8 w-8 text-blue-500"
                            >
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                <path d="M4 22h16" />
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2">
                            Certificates
                        </h3>
                        <p className="text-muted-foreground">
                            Earn recognized certificates upon course completion.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Start Learning?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Join thousands of students already learning on our
                        platform.
                    </p>
                    <button
                        onClick={() => navigate("/courses")}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
                    >
                        Browse All Courses
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
