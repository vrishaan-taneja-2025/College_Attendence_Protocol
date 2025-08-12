import React, { useState } from "react";

// Simple StudentList component
const StudentList = ({ selectedClass, date, time, onBack }) => {
  const studentsData = {
    "Class A": [
      { name: "Aarav Sharma", regNo: "CSE101" },
      { name: "Priya Verma", regNo: "CSE103" },
    ],
    "Class B": [
      { name: "Rajesh Kumar", regNo: "ECE201" },
      { name: "Sneha Kapoor", regNo: "ECE202" },
    ],
  };

  const students = studentsData[selectedClass] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
      >
        ⬅ Back
      </button>

      <h1 className="text-2xl font-bold text-orange-600 mb-4">
        {selectedClass} — {date} ({time})
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

const AdHome = () => {
  const [classes, setClasses] = useState(["Class A", "Class B"]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleCreateClass = () => {
    const className = prompt("Enter new class name:");
    if (className) {
      setClasses([...classes, className]);
    }
  };

  const attendanceDates = [
    { date: "2025-08-05", time: "10:00 AM" },
    { date: "2025-08-06", time: "2:00 PM" },
  ];

  // Back to attendance list
  const handleBack = () => {
    setSelectedDate(null);
    setSelectedTime(null);
  };

  // If a date is selected, show StudentList instead
  if (selectedDate) {
    return (
      <StudentList
        selectedClass={selectedClass}
        date={selectedDate}
        time={selectedTime}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-5 rounded-xl shadow-lg mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-sm opacity-90">Manage your classes & attendance</p>
      </div>

      {/* Create Class Button */}
      <button
        onClick={handleCreateClass}
        className="mb-6 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all"
      >
        ➕ Create Class
      </button>

      {/* Classes Section */}
      <h2 className="text-lg font-semibold text-orange-700 mb-3">Your Classes</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((cls, index) => (
          <div
            key={index}
            onClick={() => setSelectedClass(cls)}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer transition-all border border-orange-200 hover:border-orange-400"
          >
            <h3 className="text-orange-600 font-medium">{cls}</h3>
          </div>
        ))}
      </div>

      {/* Attendance Dates Section */}
      {selectedClass && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-orange-700 mb-3">
            Attendance Records - {selectedClass}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {attendanceDates.map((att, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedDate(att.date);
                  setSelectedTime(att.time);
                }}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer transition-all border border-orange-200 hover:border-orange-400"
              >
                <p className="text-orange-600 font-medium">{att.date}</p>
                <p className="text-gray-500 text-sm">{att.time}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdHome;
