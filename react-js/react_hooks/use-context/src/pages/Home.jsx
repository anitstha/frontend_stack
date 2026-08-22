import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

const Home = () => {
  const studentData = useContext(StudentContext);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Student Management
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Students
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Browse the complete list of students and their academic details.
          </p>
        </div>

        {/* Student Count */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Students</h2>

          <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            {studentData.length} Students
          </span>
        </div>

        {/* Student Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {studentData.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              faculty={student.faculty}
              age={student.age}
              gender={student.gender}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
