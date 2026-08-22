import { createContext } from "react";
import { studentData } from "../data/studentData";

export const StudentContext = createContext()

export const StudentProvider = ({children}) => {

    return(
        <StudentContext.Provider value={studentData}>
            {children}
        </StudentContext.Provider>
    )
}
