import { createContext, useContext, useState } from "react";
import {axiosInstance} from "../utils/axiosInstance";

export const AuthContext = createContext(); 
const AppProvider = ({ children }) => {
    //  globel state
    const [user, setUser] = useState(null);

    // User register
    const RegisterApi = async (username, email, password) => {
        try {
            const { data } = await axiosInstance.post("/auth/register", {
                username,
                email,
                password,
            });
            return data;
        } catch (error) {
            console.log("Error in Register API:", error.message);
            throw error;
        }
    };

    // User login
    const LoginApi = async (email, password) => {
        try {
            const { data } = await axiosInstance.post("/user/login", {
                email,
                password,
            });

            if (data.token) {
                localStorage.setItem("token", data.token); // Store token
                setUser(localStorage.setItem("user", { data: user })); //store user
            }

            return data;
        } catch (error) {
            console.log("Error in Login API:", error.message);
            throw error;
        }
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem("token"); // Remove token
        setUser(null); // Clear user state
    };

    // All Course

    const AllCourseApi = async () => {
        try {
            const { data } = await axiosInstance.get("/course/allcourse");
            return data;
        } catch (error) {
            console.log("Error in AllCourse Api:", error.message);
            throw error;
        }
    };

    return (
        <AuthContext.Provider
            value={{ RegisterApi, LoginApi, user, logout, AllCourseApi }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AppProvider;


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AppProvider");
    }
    return context;
};

// export default useAuth;