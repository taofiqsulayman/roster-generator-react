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
                <ul>
                    {Object.keys(employeeTasks).map(employee => (
                        <li key={employee}>
                            <h3>{employee}</h3>
                            <ul>
                                {employeeTasks[employee].map(task => (
                                    <li key={task.time}>
                                        <span>{task.time} </span>
                                        <span> {task.su}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="service-users">
                <h2>Service Users</h2>
                <ul>
                    {Object.keys(serviceUserAssignedEmployees).map(serviceUser => (
                        <li key={serviceUser}>
                            <h3>{serviceUser}</h3>
                            <ul>
                                {serviceUserAssignedEmployees[serviceUser].map(employee => (
                                    <li key={employee}>{employee}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        // <div>
        //     <h1>Task Assignments</h1>

        //     <h2>Employees and Their Assigned Service Users and Tasks</h2>
        //     <ul>
        //         {Object.keys(employeeTasks).map((employee) => (
        //             <li key={employee}>
        //                 <h3>{employee}</h3>
        //                 <ul>
        //                     <li>
        //                         Assigned Service Users:
        //                         <ul>
        //                             {employeeAssignedServiceUsers[employee].map(
        //                                 (su) => (
        //                                     <li key={su}>{su}</li>
        //                                 )
        //                             )}
        //                         </ul>
        //                     </li>
        //                     <li>
        //                         Assigned Tasks:
        //                         <ul>
        //                             {employeeTasks[employee].map((task) => (
        //                                 <li key={`${task.time}-${task.su}`}>
        //                                     {task.time} - {task.su}
        //                                 </li>
        //                             ))}
        //                         </ul>
        //                     </li>
        //                 </ul>
        //             </li>
        //         ))}
        //     </ul>

        //     <h2>Service Users and Their Assigned Employees</h2>
        //     <ul>
        //         {Object.keys(serviceUserAssignedEmployees).map(
        //             (serviceUser) => (
        //                 <li key={serviceUser}>
        //                     <h3>{serviceUser}</h3>
        //                     <ul>
        //                         {serviceUserAssignedEmployees[serviceUser].map(
        //                             (employee) => (
        //                                 <li key={employee}>{employee}</li>
        //                             )
        //                         )}
        //                     </ul>
        //                 </li>
        //             )
        //         )}
        //     </ul>
        // </div>
    );
}

export default App;
