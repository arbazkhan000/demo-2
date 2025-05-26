import { createContext } from "react";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
    // createCourse

    //updatecourse

    // delete course

    return (
        <CourseContext.Provider value={{}}>{children}</CourseContext.Provider>
    );
};
