import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CourseDetails from "./components/Course/CourseDetails";
import Courses from "./components/Course/Courses";
import AdminCourseRow from "./components/admin/AdminCourseRow";
import CreateCourse from "./components/admin/CreateCourse";
import CreateLecture from "./components/admin/CreateLecture";
import AdminLayout from "./components/layout/AdminLayout";
import UserLayout from "./components/layout/UserLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

const ProtectedRoutes = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token) return Navigate("/");
    return children;
};

function App() {
    return (
        <>
            <Routes>
                {/* Public */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Protected Routes */}
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Da />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/courses/:id" element={<CourseDetails />} />
                </Route>

                {/* admin panel */}

                <Route path="/admin" element={<AdminLayout />}>
                    <Route
                        index
                        element={
                            <AdminCourseRow
                                course={{
                                    thumbnail:
                                        "https://via.placeholder.com/150",
                                    title: "React for Beginners",
                                    createdBy: "Amit Kumar",
                                }}
                            />
                        }
                    />
                    <Route path="course/create" element={<CreateCourse />} />
                    <Route path="course/lecture" element={<CreateLecture />} />
                    <Route
                        path="course/edit/:id"
                        element={<h1>Edit Course</h1>}
                    />
                    <Route
                        path="course/delete/:id"
                        element={<h1>Delete Course</h1>}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
