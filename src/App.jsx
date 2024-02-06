import { useState } from "react";

class Employee {
    constructor(name, jobTitle, shiftStart, shiftEnd) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.shiftStart = new Date(`1970-01-01T${shiftStart}`);
        this.shiftEnd = new Date(`1970-01-01T${shiftEnd}`);
    }

    isAvailable(taskTime) {
        taskTime = new Date(`1970-01-01T${taskTime}`);
        return taskTime >= this.shiftStart && taskTime <= this.shiftEnd;
    }
}

class Task {
    constructor(
        description,
        startTime,
        endTime,
        recommendedStaff,
        assignedEmployee = null
    ) {
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.recommendedStaff = recommendedStaff;
        this.assignedEmployee = assignedEmployee;
    }
}

class ServiceUser {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    assignTask(task) {
        this.tasks.push(task);
    }
}

function App() {
    const [employeeInput, setEmployeeInput] = useState("");
    const [employees, setEmployees] = useState([]);
    const [serviceUserInput, setServiceUserInput] = useState("");
    const [taskAssignments, setTaskAssignments] = useState([]);

    // function assignTasksToEmployees(employees, serviceUsers) {
    //     const taskAssignments = {};
    //     const assignedTimes = {}; // Keep track of assigned times for each employee
    //     let availableEmployees = [...employees]; // Clone the array of employees

    //     serviceUsers.forEach((user) => {
    //         user.tasks.forEach((task) => {
    //             let assignedEmployee = null;
    //             let attempts = 0;

    //             while (attempts < employees.length) {
    //                 if (availableEmployees.length === 0) {
    //                     // If all employees have been assigned a task, reset the available employees array
    //                     availableEmployees = [...employees];
    //                 }

    //                 const employee = availableEmployees.shift(); // Get the first available employee

    //                 if (
    //                     employee.isAvailable(task.startTime) &&
    //                     !assignedTimes[employee.name]?.includes(task.startTime)
    //                 ) {
    //                     const employeeName = employee.name;
    //                     taskAssignments[employeeName] =
    //                         taskAssignments[employeeName] || [];

    //                     if (
    //                         !taskAssignments[employeeName].includes(
    //                             task.description
    //                         ) &&
    //                         employee.jobTitle === task.recommendedStaff
    //                     ) {
    //                         assignedEmployee = employee;
    //                         taskAssignments[employeeName].push(
    //                             task.description
    //                         );
    //                         task.assignedEmployee = assignedEmployee;

    //                         // Keep track of assigned time for the employee
    //                         assignedTimes[employeeName] =
    //                             assignedTimes[employeeName] || [];
    //                         assignedTimes[employeeName].push(task.startTime);

    //                         break;
    //                     }
    //                 }

    //                 attempts++;
    //             }
    //         });
    //     });

    //     return taskAssignments;
    // }

    const assignTasksToEmployees = (employees, serviceUsers) => {
        const taskAssignments = {};
        const assignedTimes = {};

        serviceUsers.forEach((user) => {
            user.tasks.forEach((task) => {
                const matchingEmployees = employees.filter(
                    (emp) =>
                        emp.jobTitle === task.recommendedStaff &&
                        emp.isAvailable(task.startTime)
                );

                if (matchingEmployees.length > 0) {
                    const employee = matchingEmployees[0];
                    const employeeName = employee.name;
                    taskAssignments[employeeName] =
                        taskAssignments[employeeName] || [];
                    taskAssignments[employeeName].push(task);
                    assignedTimes[employeeName] =
                        assignedTimes[employeeName] || [];
                    assignedTimes[employeeName].push(task.startTime);
                }
            });
        });

        return taskAssignments;
    };


    const generateServiceUsersWithTasks = () => {
        const users = [];
        try {
            const userArray = JSON.parse(serviceUserInput);
            userArray.forEach((userObject) => {
                const userName = userObject.name.trim();
                const user = new ServiceUser(userName);

                if (userObject.tasks && Array.isArray(userObject.tasks)) {
                    userObject.tasks.forEach((taskObject) => {
                        const taskDescription = taskObject.description.trim();
                        const taskStartTime = taskObject.startTime.trim();
                        const taskEndTime = taskObject.endTime.trim();
                        const recommendedStaff =
                            taskObject.recommendedStaff.trim();
                        const task = new Task(
                            taskDescription,
                            taskStartTime,
                            taskEndTime,
                            recommendedStaff
                        );
                        user.assignTask(task);
                    });
                }

                users.push(user);
            });
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }

        return users;
    };


    const displayTaskAssignments = (assignments) => {
        setTaskAssignments(assignments);
    };

    const handleSubmit = () => {
        const employees = employeeInput.split("\n").map((line) => {
            const [name, jobTitle, shiftStart, shiftEnd] = line
                .split(",")
                .map((value) => value.trim());
            return new Employee(name, jobTitle, shiftStart, shiftEnd);
        });

        setEmployees(employees);

        const serviceUsers = generateServiceUsersWithTasks();
        const taskAssignments = assignTasksToEmployees(employees, serviceUsers);

        displayTaskAssignments(taskAssignments);
    };

const renderTasks = () => {
    return (
        <div id="taskAssignments">
            {Object.entries(taskAssignments).map(([employee, tasks]) => (
                <div key={employee}>
                    <p>
                        {employee} |{" "}
                        {employees
                            .find((emp) => emp.name === employee)
                            .jobTitle} | {" "}
                        whose shift starts at{" "}
                        {employees
                            .find((emp) => emp.name === employee)
                            .shiftStart.toTimeString()
                            .substring(0, 5)}{" "}
                        and ends at{" "}
                        {employees
                            .find((emp) => emp.name === employee)
                            .shiftEnd.toTimeString()
                            .substring(0, 5)}{" "}
                        is assigned to:
                    </p>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index}>
                                {task.description} from {task.startTime} to{" "}
                                {task.endTime} (Recommended:{" "}
                                {task.recommendedStaff})
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};


    return (
        <div>
            <h1>Task Assignment System</h1>

            <h2>Enter List of Employees</h2>
            <textarea
                value={employeeInput}
                onChange={(e) => setEmployeeInput(e.target.value)}
                rows="5"
                cols="50"
            ></textarea>

            <h2>Enter List of Service Users</h2>
            <textarea
                value={serviceUserInput}
                onChange={(e) => setServiceUserInput(e.target.value)}
                rows="5"
                cols="50"
            ></textarea>

            <div>
                <button onClick={handleSubmit}>
                    Generate Task Assignments
                </button>
            </div>

            {renderTasks()}
        </div>
    );
}

export default App;
