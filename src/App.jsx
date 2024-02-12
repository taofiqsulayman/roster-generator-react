// import { useState } from "react";
import testData from "./test_input";

// Function to assign tasks to employees
function assignTasksToEmployees(employees, serviceUsers) {
    const taskAssignments = {};
    let availableEmployees = [...employees]; // Clone the array of employees

    serviceUsers.forEach((user) => {
        user.tasks.forEach((task) => {
            let assignedEmployee = null;
            let attempts = 0;

            // First try to assign to a qualified employee
            while (!assignedEmployee && attempts < availableEmployees.length) {
                const employee = availableEmployees[attempts]; // Get the employee based on attempts

                // Check if the employee is qualified and available to perform the task
                if (
                    employee.jobTitle === task.taskType &&
                    employee.shift === task.timeOfDay
                ) {
                    const employeeName = `${employee.firstName} ${employee.lastName}`;
                    taskAssignments[employeeName] =
                        taskAssignments[employeeName] || [];

                    if (
                        !taskAssignments[employeeName].find(
                            (t) => t.taskId === task.taskId
                        )
                    ) {
                        assignedEmployee = employee;
                        taskAssignments[employeeName].push(task);
                    }
                }

                attempts++;
            }

            // If no qualified employee was found, assign to the next available employee in the same shift
            if (!assignedEmployee) {
                attempts = 0;
                while (
                    !assignedEmployee &&
                    attempts < availableEmployees.length
                ) {
                    const employee = availableEmployees[attempts];

                    if (employee.shift === task.timeOfDay) {
                        const employeeName = `${employee.firstName} ${employee.lastName}`;
                        taskAssignments[employeeName] =
                            taskAssignments[employeeName] || [];

                        if (
                            !taskAssignments[employeeName].find(
                                (t) => t.taskId === task.taskId
                            )
                        ) {
                            assignedEmployee = employee;
                            taskAssignments[employeeName].push(task);
                        }
                    }

                    attempts++;
                }
            }
        });
    });

    console.log("Task Assignments", taskAssignments);

    return taskAssignments;
}

function App() {
    // const [taskAssignments, setTaskAssignments] = useState([]);
    const employees = testData.employees;
    const serviceUsers = testData.serviceUsers;

    // Function to generate task assignments
    const generateTaskAssignments = () => {
        assignTasksToEmployees(employees, serviceUsers);
        // setTaskAssignments(assignments);
        console.log(serviceUsers);
    };

    return (
        <div>
            <h1>Task Assignments</h1>
            <button onClick={generateTaskAssignments}>
                Generate Task Assignment
            </button>

        </div>
    );
}

export default App;
