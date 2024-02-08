import { useState } from "react";
import testData from "./test_input";

// Function to assign tasks to employees and group tasks by employee
function assignTasksToEmployees(employees, serviceUsers) {
    const assignmentsByEmployee = {};
    const unassignedTasks = [];

    // Initialize assignmentsByEmployee with employee names as keys
    employees.forEach((employee) => {
        assignmentsByEmployee[employee.name] = [];
    });

    // Iterate through each service user
    for (const serviceUser of serviceUsers) {
        // Iterate through each task of the service user
        for (const task of serviceUser.tasks) {
            // Find eligible employees for the task
            const eligibleEmployees = filterEmployeesByExpertiseAndAvailability(
                employees,
                task.recommendedStaff,
                task.startTime,
                task.endTime
            ).filter((employee) => {
                // Filter out employees who already have a task at the same time
                const tasks = assignmentsByEmployee[employee.name];
                return !tasks.some(
                    (existingTask) =>
                        (existingTask.startTime >= task.startTime &&
                            existingTask.startTime < task.endTime) ||
                        (existingTask.endTime > task.startTime &&
                            existingTask.endTime <= task.endTime)
                );
            });

            if (eligibleEmployees.length > 0) {
                // Sort eligible employees by shift start time (earliest first)
                eligibleEmployees.sort((a, b) => {
                    return a.shiftStart.localeCompare(b.shiftStart);
                });
                // Assign the task to the first eligible employee
                const employee = eligibleEmployees[0];
                assignTaskToEmployee(
                    assignmentsByEmployee,
                    employee.name,
                    serviceUser.name,
                    task.description,
                    task.recommendedStaff,
                    task.startTime,
                    task.endTime
                );
            } else {
                // No eligible employees, add task to unassigned tasks
                unassignedTasks.push({
                    serviceUser: serviceUser.name,
                    task: task.description,
                    startTime: task.startTime,
                    endTime: task.endTime,
                });
            }
        }
    }

    console.log("Unassigned tasks: ", unassignedTasks);

    return assignmentsByEmployee;
}

// Function to assign a task to an employee and group tasks by employee
function assignTaskToEmployee(
    assignmentsByEmployee,
    employeeName,
    serviceUserName,
    taskDescription,
    recommendedStaff,
    startTime,
    endTime
) {
    assignmentsByEmployee[employeeName].push({
        serviceUser: serviceUserName,
        task: taskDescription,
        recommendedStaff,
        startTime,
        endTime,
    });
}

// Function to filter employees by expertise and availability
function filterEmployeesByExpertiseAndAvailability(
    employees,
    recommendedStaff,
    startTime,
    endTime
) {
    return employees.filter((employee) => {
        return (
            employee.jobTitle === recommendedStaff &&
            isEmployeeAvailable(employee, startTime, endTime)
        );
    });
}

// Function to check if an employee is available during a given time period
function isEmployeeAvailable(employee, startTime, endTime) {
    // Convert times to Date objects for easier comparison
    const shiftStart = new Date(`1970-01-01T${employee.shiftStart}`);
    const shiftEnd = new Date(`1970-01-01T${employee.shiftEnd}`);
    const taskStart = new Date(`1970-01-01T${startTime}`);
    const taskEnd = new Date(`1970-01-01T${endTime}`);

    // // Check if shift spans across midnight
    // if (shiftEnd < shiftStart) {
    //     // Shift spans across midnight
    //     return (
    //         // Task starts after shift starts or ends after midnight
    //         (taskStart >= shiftStart && taskEnd > taskStart) ||
    //         // Task ends before shift ends or starts before midnight
    //         (taskEnd <= shiftEnd && taskStart < taskEnd)
    //     );
    // } else {
    //     // Shift does not span across midnight
    return taskStart >= shiftStart && taskEnd <= shiftEnd;
    // }
}

function App() {
    const [taskAssignments, setTaskAssignments] = useState([]);
    const employees = testData.employees;
    const serviceUsers = testData.serviceUsers;

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
                            {
                                employees.find(
                                    (emp) => emp.name === employeeName
                                ).jobTitle
                            }{" "}
                            | whose shift starts at{" "}
                            {
                                employees.find(
                                    (emp) => emp.name === employeeName
                                ).shiftStart
                            }
                            {" and ends at "}
                            {
                                employees.find(
                                    (emp) => emp.name === employeeName
                                ).shiftEnd
                            }
                        </h3>
                        <ul>
                            {taskAssignments[employeeName].map(
                                (assignment, assignmentIndex) => (
                                    <li key={assignmentIndex}>
                                        Service User: {assignment.serviceUser},
                                        Task: {assignment.task}, Start Time:{" "}
                                        {assignment.startTime}, End Time:{" "}
                                        {assignment.endTime}, Recommended staff:{" "}
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
