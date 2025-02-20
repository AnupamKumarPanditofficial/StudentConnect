import React from "react";

const TutorDashboard: React.FC = () => {
  const tutor = {
    name: "John Doe",
    subject: "Mathematics",
    students: [
      { id: 1, name: "Alice", progress: "80%" },
      { id: 2, name: "Bob", progress: "60%" },
      { id: 3, name: "Charlie", progress: "90%" },
    ],
    tasks: [
      { id: 1, title: "Algebra Homework", status: "Pending" },
      { id: 2, title: "Trigonometry Quiz", status: "Completed" },
    ],
    earnings: "$250",
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Tutor Dashboard</h1>

      {/* Tutor Profile */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-semibold">{tutor.name}</h2>
        <p className="text-gray-600">Subject: {tutor.subject}</p>
      </div>

      {/* Student List */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Assigned Students</h2>
        <ul>
          {tutor.students.map((student) => (
            <li key={student.id} className="border-b py-2 flex justify-between">
              <span>{student.name}</span>
              <span className="text-gray-500">Progress: {student.progress}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Task Management */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Task Management</h2>
        <ul>
          {tutor.tasks.map((task) => (
            <li key={task.id} className="border-b py-2 flex justify-between">
              <span>{task.title}</span>
              <span
                className={`${
                  task.status === "Completed" ? "text-green-500" : "text-red-500"
                }`}
              >
                {task.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Earnings Overview */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Earnings Overview</h2>
        <p className="text-green-600 font-bold text-lg">{tutor.earnings}</p>
      </div>
    </div>
  );
};

export default TutorDashboard;
