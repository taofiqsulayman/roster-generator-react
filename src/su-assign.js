import moment from "moment";

// EMPLOYEE MATCHABILITY SCORE
// - Su has been previously assigned to me.
// - I am available within the time frame.
// - I have the desired skills.
// -- Number of su's I already have at hand. lesser su at hand, gets higer propability of being chosen.

// Top n matching employees are chosen for the task.
// n is the number of employees needed.

export const runTaskAssignment = (employees, tasks) => {
  const suAndAssignedEmployees = {};
  const employeeAndAssignedSu = {};
  const employeeAndAssignedTasks = {};

  tasks.forEach((task, index) => {
    // Initialize suAndAssignedEmployees if not already initialized
    if (!suAndAssignedEmployees[task.su]) {
      suAndAssignedEmployees[task.su] = [];
    }

    // Adding unique descriptions to each task
    task.description = `Task - ${index + 1}`;

    employees.forEach((employee) => {
      let score = 0;
      const { role, shift, name } = employee;

      // Calculate score based on role
      if (role === task.supportPersonel) {
        score += 2;
      }

      // Calculate score based on shift overlap
      const empShiftStart = moment(shift.start, "h:mma");
      const empShiftEnd = moment(shift.end, "h:mma");
      const taskTime = moment(task.time, "h:mma");

      if (
        taskTime.isSameOrAfter(empShiftStart) &&
        taskTime.isBefore(empShiftEnd)
      ) {
        score += 4; // Increased weight for shift overlap
      }

      // previous assignments to the same SU should be given preference
      // if (suAndAssignedEmployees[task.su]) {
      //   if (suAndAssignedEmployees[task.su].includes(name)) {
      //     score += 1; // Increased weight for previous assignments
      //   }
      // }

      // employees yet to be assigned to any service user should be given preference
      if (!employeeAndAssignedSu[name]) {
        score += 3;
      }

      // Additional score if the employee has the least number of assigned tasks
      const numTasksAssignedToEmployee = (employeeAndAssignedTasks[name] || []).length;
      const leastTasks = Math.min(...Object.values(employeeAndAssignedTasks).map(tasks => tasks.length));
      if (numTasksAssignedToEmployee === leastTasks) {
        score += 1;
      }

      // Assign the calculated score to the employee
      employee.score = score;
    });

    // Sorting logic with adjusted tie-breaking
    employees.sort((a, b) => {
      // Sort by score in descending order
      if (a.score !== b.score) {
        return b.score - a.score;
      } else {
        // If scores are tied, consider number of assignments to the same SU
        const aAssignmentsToSu =
          (suAndAssignedEmployees[task.su] || []).filter(
            (assignedEmp) => assignedEmp === a.name
          ).length || 0;
        const bAssignmentsToSu =
          (suAndAssignedEmployees[task.su] || []).filter(
            (assignedEmp) => assignedEmp === b.name
          ).length || 0;

        // Sort by the number of assignments to the same SU in ascending order
        return aAssignmentsToSu - bAssignmentsToSu;
      }
    });

    const assignedEmployees = employees.slice(0, task.noSupportPersonel);

    assignedEmployees.forEach((assignedEmp) => {
      // Check if the employee is not already assigned to this SU
      if (!suAndAssignedEmployees[task.su].includes(assignedEmp.name)) {
        suAndAssignedEmployees[task.su].push(assignedEmp.name);
      }

      employeeAndAssignedSu[assignedEmp.name] =
        employeeAndAssignedSu[assignedEmp.name] || [];
      if (!employeeAndAssignedSu[assignedEmp.name].includes(task.su)) {
        employeeAndAssignedSu[assignedEmp.name].push(task.su);
      }

      employeeAndAssignedTasks[assignedEmp.name] =
        employeeAndAssignedTasks[assignedEmp.name] || [];
      employeeAndAssignedTasks[assignedEmp.name].push(task);
    });
  });

  console.log({ suAndAssignedEmployees, employeeAndAssignedSu, employeeAndAssignedTasks });

  return {
    suAndAssignedEmployees,
    employeeAndAssignedSu,
    employeeAndAssignedTasks,
  };
};


// export const runTaskAssignment = (employees, tasks) => {
//   const suAndAssignedEmployees = {};

//   const employeeAndAssignedSu = {};

//   const employeeAndAssignedTasks = {};

//   tasks.forEach((task) => {
//     let assignedEmployees = [];
//     const prevAssignedEmployees = suAndAssignedEmployees[task.su] || [];

//     employees.forEach((employee) => {
//       let score = 0;
//       const { role, shift, name } = employee;

//       if (role === task.supportPersonel) {
//         score++;
//       }
//       const empShiftStart = moment(shift.start, "h:mma");
//       const empShiftEnd = moment(shift.end, "h:mma");

//       const taskTime = moment(task.time, "h:mma");

//       if (
//         taskTime.isSameOrAfter(empShiftStart) &&
//         taskTime.isBefore(empShiftEnd)
//       ) {
//         score += 4;
//       }

//       if (prevAssignedEmployees.includes(name)) {
//         score++;
//       }

//       const employeeToAdd = { employee, score };

//       if (!assignedEmployees.length) {
//         assignedEmployees.push(employeeToAdd);
//       } else if (assignedEmployees.length < task.noSupportPersonel) {
//         let indexToInsert;
//         for (let i = 0; i < assignedEmployees.length; i++) {
//           if (assignedEmployees[i].score >= score) {
//             indexToInsert = i;
//             break;
//           }
//         }

//         if (indexToInsert) {
//           assignedEmployees.splice(indexToInsert, 0, employeeToAdd);
//         } else {
//           assignedEmployees.push(employeeToAdd);
//         }
//       } else if (assignedEmployees[0].score === score) {
//         const emp1AsignedLength = (
//           employeeAndAssignedSu[assignedEmployees[0].employee.name] || []
//         ).length;

//         const emp2AsignedLength = (employeeAndAssignedSu[name] || []).length;

//         if (emp1AsignedLength > emp2AsignedLength) {
//           assignedEmployees[0] = employeeToAdd;
//         }
//       } else if (assignedEmployees[0].score < score) {
//         assignedEmployees[0] = employeeToAdd;

//         for (let i = 1; i < assignedEmployees.length; i++) {
//           const emp1AsignedLength = (
//             employeeAndAssignedSu[assignedEmployees[i].employee.name] || []
//           ).length;

//           const emp2AsignedLength = (employeeAndAssignedSu[name] || []).length;

//           if (
//             score > assignedEmployees[i].score ||
//             (score === assignedEmployees[i].score &&
//               emp1AsignedLength > emp2AsignedLength)
//           ) {
//             const toMove = assignedEmployees[i];
//             assignedEmployees[i] = assignedEmployees[i - 1];
//             assignedEmployees[i - 1] = toMove;
//           }
//         }
//       }
//     });

//     if (!suAndAssignedEmployees[task.su]) {
//       suAndAssignedEmployees[task.su] = [];
//     }

//     assignedEmployees.forEach((assignedEmp) => {
//       if (!suAndAssignedEmployees[task.su].includes(assignedEmp.employee.name)
//       ) {
//         suAndAssignedEmployees[task.su].push(assignedEmp.employee.name);
//       }

//       if (!employeeAndAssignedSu[assignedEmp.employee.name]) {
//         employeeAndAssignedSu[assignedEmp.employee.name] = [];
//         employeeAndAssignedTasks[assignedEmp.employee.name] = [];
//       }

//       if (!employeeAndAssignedSu[assignedEmp.employee.name].includes(task.su)) {
//         employeeAndAssignedSu[assignedEmp.employee.name].push(task.su);
//       }
//       employeeAndAssignedTasks[assignedEmp.employee.name].push(task);
//     });
//   });

//   return {
//     suAndAssignedEmployees,
//     employeeAndAssignedSu,
//     employeeAndAssignedTasks,
//   };
// };

// console.log({ employeeAndAssignedSu, suAndAssignedEmployees });

// Object.entries(employeeAndAssignedTasks).forEach(([employee, tasks]) => {
//     console.log(`\n`);
//     console.log(`........................................`);
//     console.log(`............ ${employee} ...............`);
//     const target = employees.find((emp) => emp.name === employee);

//     console.log(
//         `${employee} is a ${target.role}. shift: ${target.shift.start} - ${target.shift.end}`,
//     );
//     console.log(`........................................`);
//     console.log(`${employee} was assigned the following tasks:`);

//     tasks.forEach((task) => {
//         console.log(task);
//     });
// });
