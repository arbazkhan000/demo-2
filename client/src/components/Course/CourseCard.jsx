import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
    console.log("Courses", course);
    const navigate = useNavigate();

    const user = false;

    return (
        <div
            onClick={() => navigate(`/courses/${course.id || course._id}`)}
            key={course.id}
            className="bg-white shadow rounded-lg p-6 hover:shadow-md transition"
        >
            <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover rounded mb-4"
            />
            <div className="flex justify-between items-center mb-2 text-sm">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {course.category}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {course.level}
                </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{course.description}</p>

            <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>{course.lessonsCount} lessons</span>
                <span>{course.duration}</span>
            </div>

            <div className="flex justify-between items-center">
                <span className="font-bold">{course.price}</span>
                <button
                    onClick={() => {
                        if (user) {
                            navigate(`/courses/${course.id}`);
                        } else {
                            navigate("/login");
                        }
                    }}
                    className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 transition text-sm "
                >
                    {" "}
                    View Course
                </button>
                {/* <button className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 transition text-sm"></button> */}
            </div>

            {/* author name */}

            <p className="text-[15px] pt-4">{course.instructor}</p>
        </div>
    );
};

export default CourseCard;
