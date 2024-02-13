import { useEffect, useState } from "react";
import testData from "./test_input";
import { runTaskAssignment } from "./su-assign";

function App() {
    const [employeeTasks, setEmployeeTasks] = useState([]);
    const [employeeAssignedServiceUsers, setEmployeeAssignedServiceUsers] = useState([]);
    const [serviceUserAssignedEmployees, setServiceUserAssignedEmployees] = useState([]);

    const employees = testData.employees;
    const tasks = testData.tasks;

    useEffect(() => {
        const {
            suAndAssignedEmployees,
            employeeAndAssignedSu,
            employeeAndAssignedTasks,
        } = runTaskAssignment(employees, tasks);

        setEmployeeTasks(employeeAndAssignedTasks);
        setEmployeeAssignedServiceUsers(employeeAndAssignedSu);
        setServiceUserAssignedEmployees(suAndAssignedEmployees);

        console.log({
            suAndAssignedEmployees,
            employeeAndAssignedSu,
            employeeAndAssignedTasks,
        });
    }, []);

    return (
        <div className="roster">
            <div className="employees">
                <h2>Employees</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Shift</th>
                            <th>Role</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(employeeTasks).map((employee) => {
                            const empDetails = employees.find(
                                (emp) => emp.name === employee
                            );
                            return (
                                <tr key={employee}>
                                    <td>{employee}</td>
                                    <td>
                                        {empDetails && (
                                            <div>
                                                {empDetails.shift.start} - {empDetails.shift.end}
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {empDetails && <div>{empDetails.role}</div>}
                                    </td>
                                    <td>
                                        <ul>
                                            {employeeTasks[employee].map((task) => (
                                                <li key={`${task.time} + ${task.su}`}>
                                                    <span>{task.time}</span>
                                                    <span>{task.su}</span>
                                                    <span>Recommended support: {task.supportPersonel}</span>
                                                    <span>Number of support: {task.noSupportPersonel}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="service-users">
                <h2>Service Users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Service User</th>
                            <th>Assigned Employees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(serviceUserAssignedEmployees).map((serviceUser) => (
                            <tr key={serviceUser}>
                                <td>{serviceUser}</td>
                                <td>
                                    <ul>
                                        {serviceUserAssignedEmployees[serviceUser].map((employee) => (
                                            <li key={employee}>{employee}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default App;
