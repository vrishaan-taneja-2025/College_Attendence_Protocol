import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StudentList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { classId, date, time } = location.state || {};

  // Example students data
  const studentsData = {
    1: [
      { name: "Aarav Sharma", regNo: "CSE101" },
      { name: "Priya Verma", regNo: "CSE102" },
    ],
    2: [
      { name: "Rajesh Kumar", regNo: "ECE201" },
      { name: "Sneha Kapoor", regNo: "ECE202" },
    ],
  };

  const students = studentsData[classId] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
      >
        Back
      </button>

      <h1 className="text-2xl font-bold text-orange-600 mb-4">
        Students for {date} — {time}
      </h1>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-orange-500">
        {students.length > 0 ? (
          students.map((student, idx) => (
            <div
              key={idx}
              className="px-4 py-3 border-b last:border-none flex justify-between"
            >
              <span className="text-gray-800">{student.name}</span>
              <span className="text-gray-500">{student.regNo}</span>
            </div>
          ))
        ) : (
          <div className="px-4 py-3 text-gray-500">No students found</div>
        )}
      </div>
    </div>
  );
};

export default StudentList;
