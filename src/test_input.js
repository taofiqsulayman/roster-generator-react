const testData = {
    serviceUsers: [
        {
            name: "User 1",
            tasks: [
                {
                    description: "Task 1 for User 1",
                    startTime: "08:00:00",
                    endTime: "09:00:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 2 for User 1",
                    startTime: "10:30:00",
                    endTime: "11:30:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 3 for User 1",
                    startTime: "13:00:00",
                    endTime: "14:00:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 4 for User 1",
                    startTime: "15:30:00",
                    endTime: "17:30:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 5 for User 1",
                    startTime: "18:00:00",
                    endTime: "20:00:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 6 for User 1",
                    startTime: "20:30:00",
                    endTime: "22:30:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 7 for User 1",
                    startTime: "10:00:00",
                    endTime: "10:30:00",
                    recommendedStaff: "Nurse",
                },
            ],
        },
        {
            name: "User 2",
            tasks: [
                {
                    description: "Task 1 for User 2",
                    startTime: "08:00:00",
                    endTime: "10:00:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 2 for User 2",
                    startTime: "10:30:00",
                    endTime: "12:30:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 3 for User 2",
                    startTime: "13:00:00",
                    endTime: "15:00:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 4 for User 2",
                    startTime: "15:30:00",
                    endTime: "17:30:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 5 for User 2",
                    startTime: "18:00:00",
                    endTime: "20:00:00",
                    recommendedStaff: "Nurse",
                },
            ],
        },
        {
            name: "User 3",
            tasks: [
                {
                    description: "Task 1 for User 3",
                    startTime: "08:00:00",
                    endTime: "10:00:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 2 for User 3",
                    startTime: "10:30:00",
                    endTime: "12:30:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 3 for User 3",
                    startTime: "13:00:00",
                    endTime: "15:00:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 4 for User 3",
                    startTime: "15:30:00",
                    endTime: "17:30:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 5 for User 3",
                    startTime: "18:00:00",
                    endTime: "20:00:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 6 for User 3",
                    startTime: "20:30:00",
                    endTime: "22:30:00",
                    recommendedStaff: "Care Assistant",
                },
            ],
        },
        {
            name: "User 4",
            tasks: [
                {
                    description: "Task 1 for User 4",
                    startTime: "08:00:00",
                    endTime: "10:00:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 2 for User 4",
                    startTime: "10:30:00",
                    endTime: "12:30:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 3 for User 4",
                    startTime: "13:00:00",
                    endTime: "15:00:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 4 for User 4",
                    startTime: "15:30:00",
                    endTime: "17:30:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 5 for User 4",
                    startTime: "18:00:00",
                    endTime: "20:00:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 6 for User 4",
                    startTime: "20:30:00",
                    endTime: "22:30:00",
                    recommendedStaff: "Care Assistant",
                },
            ],
        },
        {
            name: "User 5",
            tasks: [
                {
                    description: "Task 1 for User 5",
                    startTime: "08:00:00",
                    endTime: "10:00:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 2 for User 5",
                    startTime: "10:30:00",
                    endTime: "12:30:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 3 for User 5",
                    startTime: "13:00:00",
                    endTime: "15:00:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 4 for User 5",
                    startTime: "15:30:00",
                    endTime: "17:30:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 5 for User 5",
                    startTime: "18:00:00",
                    endTime: "20:00:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 6 for User 5",
                    startTime: "20:30:00",
                    endTime: "22:30:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 7 for User 5",
                    startTime: "22:00:00",
                    endTime: "23:00:00",
                    recommendedStaff: "Nurse",
                },
            ],
        },
        {
            name: "User 6",
            tasks: [
                {
                    description: "Task 1 for User 6",
                    startTime: "08:00:00",
                    endTime: "10:00:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 2 for User 6",
                    startTime: "10:30:00",
                    endTime: "12:30:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 3 for User 6",
                    startTime: "13:00:00",
                    endTime: "15:00:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 4 for User 6",
                    startTime: "15:30:00",
                    endTime: "17:30:00",
                    recommendedStaff: "Care Assistant",
                },
                {
                    description: "Task 5 for User 6",
                    startTime: "18:00:00",
                    endTime: "20:00:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 6 for User 6",
                    startTime: "20:30:00",
                    endTime: "22:30:00",
                    recommendedStaff: "Nurse",
                },
                {
                    description: "Task 7 for User 6",
                    startTime: "23:00:00",
                    endTime: "23:30:00",
                    recommendedStaff: "Nurse",
                },
            ],
        },
    ],

    employees: [
        {
            name: "John Doe",
            jobTitle: "Care Assistant",
            shiftStart: "08:00:00",
            shiftEnd: "16:00:00",
        },
        {
            name: "Jane Smith",
            jobTitle: "Nurse",
            shiftStart: "08:00:00",
            shiftEnd: "16:00:00",
        },
        {
            name: "Bob Johnson",
            jobTitle: "Care Assistant",
            shiftStart: "10:00:00",
            shiftEnd: "18:00:00",
        },
        {
            name: "Emily Davis",
            jobTitle: "Nurse",
            shiftStart: "10:00:00",
            shiftEnd: "18:00:00",
        },
        {
            name: "Alex Turner",
            jobTitle: "Care Assistant",
            shiftStart: "12:00:00",
            shiftEnd: "20:00:00",
        },
        {
            name: "Sara White",
            jobTitle: "Nurse",
            shiftStart: "12:00:00",
            shiftEnd: "20:00:00",
        },
        {
            name: "Mike Brown",
            jobTitle: "Care Assistant",
            shiftStart: "14:00:00",
            shiftEnd: "22:00:00",
        },
    ],
};

export default testData;
