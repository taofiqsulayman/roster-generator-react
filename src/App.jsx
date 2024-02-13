import { useEffect, useState } from "react";
import testData from "./test_input";
import { runTaskAssignment } from "./su-assign";

function App() {
  const [taskAssignments, setTaskAssignments] = useState([]);

  useEffect(() => {
    const {
      suAndAssignedEmployees,
      employeeAndAssignedSu,
      employeeAndAssignedTasks,
    } = runTaskAssignment(testData.employees, testData.tasks);

    console.log({
      suAndAssignedEmployees,
      employeeAndAssignedSu,
      employeeAndAssignedTasks,
    });
  }, []);

  // Function to generate task assignments
  const generateTaskAssignments = () => {
    const assignments = assignTasksToEmployees(employees, serviceUsers);
    setTaskAssignments(assignments);
  };

  return (
    <div>
      <h1>Task Assignments</h1>
      <button onClick={generateTaskAssignments}>
        Generate Task Assignment
      </button>
      <div>
        {Object.keys(taskAssignments).map((employeeName, index) => (
          <div key={index}>
            <h3>
              {employeeName} |{" "}
              {employees.find((emp) => emp.name === employeeName).jobTitle} |
              whose shift starts at{" "}
              {employees.find((emp) => emp.name === employeeName).shiftStart}
              {" and ends at "}
              {employees.find((emp) => emp.name === employeeName).shiftEnd}
            </h3>
            <ul>
              {taskAssignments[employeeName].map(
                (assignment, assignmentIndex) => (
                  <li key={assignmentIndex}>
                    Service User: {assignment.serviceUser}, Task:{" "}
                    {assignment.task}, Start Time: {assignment.startTime}, End
                    Time: {assignment.endTime}, Recommended staff:{" "}
                    {assignment.recommendedStaff}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
