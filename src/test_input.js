const testData = {
  serviceUsers: [
    {
      name: "John Smith [User 1]",
      tasks: [
        {
          description:
            "Administer morning medications Acetaminophen and Lisinopril",
          startTime: "00:00:00",
          endTime: "00:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with morning hygiene routine",
          startTime: "00:45:00",
          endTime: "02:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer 2 O'Clock morning medications",
          startTime: "02:00:00",
          endTime: "02:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with gardening activities",
          startTime: "07:00:00",
          endTime: "08:30:00",
          recommendedStaff: "Care Assistant",
        },

        {
          description: "Assist with morning hygiene routine",
          startTime: "09:00:00",
          endTime: "10:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Tests and diagonistics",
          startTime: "11:00:00",
          endTime: "13:00:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Lunchtime and socialization",
          startTime: "13:00:00",
          endTime: "15:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer afternoon medications Metformin, Warfarin",
          startTime: "15:00:00",
          endTime: "16:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description:
            "Enjoy afternoon tea and relaxation, escort for family visits",
          startTime: "16:45:00",
          endTime: "17:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Games or watch TV",
          startTime: "17:30:00",
          endTime: "18:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Serve Dinner",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Evening Medications",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Care Assistant",
        },
      ],
    },
    {
      name: "Sarah Martinez [User 2]",
      tasks: [
        {
          description:
            "Administer morning medications Acetaminophen and Lisinopril",
          startTime: "00:00:00",
          endTime: "00:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with morning hygiene routine",
          startTime: "00:45:00",
          endTime: "02:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer 2 O'Clock morning medications",
          startTime: "02:00:00",
          endTime: "02:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with gardening activities",
          startTime: "07:00:00",
          endTime: "08:30:00",
          recommendedStaff: "Care Assistant",
        },

        {
          description: "Assist with morning hygiene routine",
          startTime: "09:00:00",
          endTime: "10:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Tests and diagonistics",
          startTime: "11:00:00",
          endTime: "13:00:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Lunchtime and socialization",
          startTime: "13:00:00",
          endTime: "15:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer afternoon medications Metformin, Warfarin",
          startTime: "15:00:00",
          endTime: "16:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description:
            "Enjoy afternoon tea and relaxation, escort for family visits",
          startTime: "16:45:00",
          endTime: "17:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Games or watch TV",
          startTime: "17:30:00",
          endTime: "18:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Serve Dinner",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Evening Medications",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Care Assistant",
        },
      ],
    },
    {
      name: "Micheal Brown [User 3]",
      tasks: [
        {
          description:
            "Administer morning medications Acetaminophen and Lisinopril",
          startTime: "00:00:00",
          endTime: "00:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with morning hygiene routine",
          startTime: "00:45:00",
          endTime: "02:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer 2 O'Clock morning medications",
          startTime: "02:00:00",
          endTime: "02:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with gardening activities",
          startTime: "07:00:00",
          endTime: "08:30:00",
          recommendedStaff: "Care Assistant",
        },

        {
          description: "Assist with morning hygiene routine",
          startTime: "09:00:00",
          endTime: "10:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Tests and diagonistics",
          startTime: "11:00:00",
          endTime: "13:00:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Lunchtime and socialization",
          startTime: "13:00:00",
          endTime: "15:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer afternoon medications Metformin, Warfarin",
          startTime: "15:00:00",
          endTime: "16:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description:
            "Enjoy afternoon tea and relaxation, escort for family visits",
          startTime: "16:45:00",
          endTime: "17:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Games or watch TV",
          startTime: "17:30:00",
          endTime: "18:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Serve Dinner",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Evening Medications",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Care Assistant",
        },
      ],
    },
    {
      name: "Varun Arun [User 4]",
      tasks: [
        {
          description:
            "Administer morning medications Acetaminophen and Lisinopril",
          startTime: "00:00:00",
          endTime: "00:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with morning hygiene routine",
          startTime: "00:45:00",
          endTime: "02:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer 2 O'Clock morning medications",
          startTime: "02:00:00",
          endTime: "02:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with gardening activities",
          startTime: "07:00:00",
          endTime: "08:30:00",
          recommendedStaff: "Care Assistant",
        },

        {
          description: "Assist with morning hygiene routine",
          startTime: "09:00:00",
          endTime: "10:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Tests and diagonistics",
          startTime: "11:00:00",
          endTime: "13:00:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Lunchtime and socialization",
          startTime: "13:00:00",
          endTime: "15:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer afternoon medications Metformin, Warfarin",
          startTime: "15:00:00",
          endTime: "16:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description:
            "Enjoy afternoon tea and relaxation, escort for family visits",
          startTime: "16:45:00",
          endTime: "17:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Games or watch TV",
          startTime: "17:30:00",
          endTime: "18:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Serve Dinner",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Evening Medications",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Care Assistant",
        },
      ],
    },
    {
      name: "Anita Achu [User 5]",
      tasks: [
        {
          description:
            "Administer morning medications Acetaminophen and Lisinopril",
          startTime: "00:00:00",
          endTime: "00:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with morning hygiene routine",
          startTime: "00:45:00",
          endTime: "02:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer 2 O'Clock morning medications",
          startTime: "02:00:00",
          endTime: "02:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with gardening activities",
          startTime: "07:00:00",
          endTime: "08:30:00",
          recommendedStaff: "Care Assistant",
        },

        {
          description: "Assist with morning hygiene routine",
          startTime: "09:00:00",
          endTime: "10:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Tests and diagonistics",
          startTime: "11:00:00",
          endTime: "13:00:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Lunchtime and socialization",
          startTime: "13:00:00",
          endTime: "15:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer afternoon medications Metformin, Warfarin",
          startTime: "15:00:00",
          endTime: "16:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description:
            "Enjoy afternoon tea and relaxation, escort for family visits",
          startTime: "16:45:00",
          endTime: "17:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Games or watch TV",
          startTime: "17:30:00",
          endTime: "18:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Serve Dinner",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Evening Medications",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Care Assistant",
        },
      ],
    },
    {
      name: "Justin Lee [User 6]",
      tasks: [
        {
          description:
            "Administer morning medications Acetaminophen and Lisinopril",
          startTime: "00:00:00",
          endTime: "00:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with morning hygiene routine",
          startTime: "00:45:00",
          endTime: "02:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer 2 O'Clock morning medications",
          startTime: "02:00:00",
          endTime: "02:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Assist with gardening activities",
          startTime: "07:00:00",
          endTime: "08:30:00",
          recommendedStaff: "Care Assistant",
        },

        {
          description: "Assist with morning hygiene routine",
          startTime: "09:00:00",
          endTime: "10:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Tests and diagonistics",
          startTime: "11:00:00",
          endTime: "13:00:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Lunchtime and socialization",
          startTime: "13:00:00",
          endTime: "15:00:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer afternoon medications Metformin, Warfarin",
          startTime: "15:00:00",
          endTime: "16:30:00",
          recommendedStaff: "Nurse",
        },
        {
          description:
            "Enjoy afternoon tea and relaxation, escort for family visits",
          startTime: "16:45:00",
          endTime: "17:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Games or watch TV",
          startTime: "17:30:00",
          endTime: "18:30:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Serve Dinner",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Care Assistant",
        },
        {
          description: "Administer Evening Medications",
          startTime: "19:00:00",
          endTime: "19:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Nurse",
        },
        {
          description: "Watch and Monitor Patient resting patterns",
          startTime: "20:00:00",
          endTime: "23:45:00",
          recommendedStaff: "Care Assistant",
        },
      ],
    },
  ],

  employees: [
    {
      name: "John Doe",
      jobTitle: "Care Assistant",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },
    {
      name: "Jane Smith",
      jobTitle: "Nurse",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },
    {
      name: "Bob Johnson",
      jobTitle: "Care Assistant",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },
    {
      name: "Kelly Davis",
      jobTitle: "Nurse",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },
    {
      name: "Alex Turner",
      jobTitle: "Care Assistant",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },
    {
      name: "Sara White",
      jobTitle: "Nurse",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },
    {
      name: "Mike Brown",
      jobTitle: "Care Assistant",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },
    {
      name: "Bobby Brown",
      jobTitle: "Care Assistant",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },
    {
      name: "Cindy Brown",
      jobTitle: "Care Assistant",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },
    {
      name: "Randy White",
      jobTitle: "Nurse",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },
    {
      name: "Mattew White",
      jobTitle: "Nurse",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },
    {
      name: "Thomas White",
      jobTitle: "Nurse",
      shiftStart: "00:00:00",
      shiftEnd: "08:00:00",
    },

    // =======
    {
      name: "Mobley Ray",
      jobTitle: "Care Assistant",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },
    {
      name: "David Newmann",
      jobTitle: "Nurse",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },
    {
      name: "Joyce Adebiyi",
      jobTitle: "Care Assistant",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },
    {
      name: "Kelly Davis",
      jobTitle: "Nurse",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },
    {
      name: "Redman Wang",
      jobTitle: "Care Assistant",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },
    {
      name: "Josephine Miles",
      jobTitle: "Nurse",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },
    {
      name: "Michelle Liu",
      jobTitle: "Care Assistant",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },
    {
      name: "Celeste Brown",
      jobTitle: "Care Assistant",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },
    {
      name: "Poja Dutt",
      jobTitle: "Care Assistant",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },
    {
      name: "Miles Ward",
      jobTitle: "Nurse",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },
    {
      name: "Eliot Anderson",
      jobTitle: "Nurse",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },
    {
      name: "Jeff White",
      jobTitle: "Nurse",
      shiftStart: "08:00:00",
      shiftEnd: "16:00:00",
    },

    // =======
    {
      name: "John Foss",
      jobTitle: "Care Assistant",
      shiftStart: "16:00:00",
      shiftEnd: "23:59:00",
    },
    {
      name: "Kelvin Stone",
      jobTitle: "Nurse",
      shiftStart: "16:00:00",
      shiftEnd: "23:59:00",
    },
    {
      name: "Paul Wilson",
      jobTitle: "Care Assistant",
      shiftStart: "16:00:00",
      shiftEnd: "23:59:00",
    },
    {
      name: "Seymour Ewers",
      jobTitle: "Nurse",
      shiftStart: "16:00:00",
      shiftEnd: "23:59:00",
    },
    {
      name: "Lynn Turner",
      jobTitle: "Care Assistant",
      shiftStart: "16:00:00",
      shiftEnd: "23:59:00",
    },
    {
      name: "Lara Croft",
      jobTitle: "Nurse",
      shiftStart: "16:00:00",
      shiftEnd: "23:59:00",
    },
    {
      name: "Sam Sepai",
      jobTitle: "Care Assistant",
      shiftStart: "16:00:00",
      shiftEnd: "23:59:00",
    },
    {
      name: "Darlene Anderson",
      jobTitle: "Care Assistant",
      shiftStart: "16:00:00",
      shiftEnd: "23:59:00",
    },
    {
      name: "Tony Wellick",
      jobTitle: "Care Assistant",
      shiftStart: "16:00:00",
      shiftEnd: "23:59:00",
    },
    {
      name: "Alex Turner",
      jobTitle: "Care Assistant",
      shiftStart: "16:00:00",
      shiftEnd: "23:00:00",
    },
    {
      name: "Vitoria Smith",
      jobTitle: "Nurse",
      shiftStart: "16:00:00",
      shiftEnd: "23:59:00",
    },
    {
      name: "Angela White",
      jobTitle: "Nurse",
      shiftStart: "16:00:00",
      shiftEnd: "23:59:00",
    },
  ],
};

export default testData;

// const testData = {
//     serviceUsers: [
//         {
//             name: "User 1",
//             tasks: [
//                 {
//                     description: "Task 1 for User 1",
//                     startTime: "08:00:00",
//                     endTime: "09:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 2 for User 1",
//                     startTime: "10:30:00",
//                     endTime: "11:30:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 3 for User 1",
//                     startTime: "13:00:00",
//                     endTime: "14:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 4 for User 1",
//                     startTime: "15:30:00",
//                     endTime: "17:30:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 5 for User 1",
//                     startTime: "18:00:00",
//                     endTime: "20:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 6 for User 1",
//                     startTime: "20:30:00",
//                     endTime: "22:30:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 7 for User 1",
//                     startTime: "10:00:00",
//                     endTime: "10:30:00",
//                     recommendedStaff: "Nurse",
//                 },
//             ],
//         },
//         {
//             name: "User 2",
//             tasks: [
//                 {
//                     description: "Task 1 for User 2",
//                     startTime: "08:00:00",
//                     endTime: "10:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 2 for User 2",
//                     startTime: "10:30:00",
//                     endTime: "12:30:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 3 for User 2",
//                     startTime: "13:00:00",
//                     endTime: "15:00:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 4 for User 2",
//                     startTime: "15:30:00",
//                     endTime: "17:30:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 5 for User 2",
//                     startTime: "18:00:00",
//                     endTime: "20:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//             ],
//         },
//         {
//             name: "User 3",
//             tasks: [
//                 {
//                     description: "Task 1 for User 3",
//                     startTime: "08:00:00",
//                     endTime: "10:00:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 2 for User 3",
//                     startTime: "10:30:00",
//                     endTime: "12:30:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 3 for User 3",
//                     startTime: "13:00:00",
//                     endTime: "15:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 4 for User 3",
//                     startTime: "15:30:00",
//                     endTime: "17:30:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 5 for User 3",
//                     startTime: "18:00:00",
//                     endTime: "20:00:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 6 for User 3",
//                     startTime: "20:30:00",
//                     endTime: "22:30:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//             ],
//         },
//         {
//             name: "User 4",
//             tasks: [
//                 {
//                     description: "Task 1 for User 4",
//                     startTime: "08:00:00",
//                     endTime: "10:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 2 for User 4",
//                     startTime: "10:30:00",
//                     endTime: "12:30:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 3 for User 4",
//                     startTime: "13:00:00",
//                     endTime: "15:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 4 for User 4",
//                     startTime: "15:30:00",
//                     endTime: "17:30:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 5 for User 4",
//                     startTime: "18:00:00",
//                     endTime: "20:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 6 for User 4",
//                     startTime: "20:30:00",
//                     endTime: "22:30:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//             ],
//         },
//         {
//             name: "User 5",
//             tasks: [
//                 {
//                     description: "Task 1 for User 5",
//                     startTime: "08:00:00",
//                     endTime: "10:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 2 for User 5",
//                     startTime: "10:30:00",
//                     endTime: "12:30:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 3 for User 5",
//                     startTime: "13:00:00",
//                     endTime: "15:00:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 4 for User 5",
//                     startTime: "15:30:00",
//                     endTime: "17:30:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 5 for User 5",
//                     startTime: "18:00:00",
//                     endTime: "20:00:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 6 for User 5",
//                     startTime: "20:30:00",
//                     endTime: "22:30:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 7 for User 5",
//                     startTime: "22:00:00",
//                     endTime: "23:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//             ],
//         },
//         {
//             name: "User 6",
//             tasks: [
//                 {
//                     description: "Task 1 for User 6",
//                     startTime: "08:00:00",
//                     endTime: "10:00:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 2 for User 6",
//                     startTime: "10:30:00",
//                     endTime: "12:30:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 3 for User 6",
//                     startTime: "13:00:00",
//                     endTime: "15:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 4 for User 6",
//                     startTime: "15:30:00",
//                     endTime: "17:30:00",
//                     recommendedStaff: "Care Assistant",
//                 },
//                 {
//                     description: "Task 5 for User 6",
//                     startTime: "18:00:00",
//                     endTime: "20:00:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 6 for User 6",
//                     startTime: "20:30:00",
//                     endTime: "22:30:00",
//                     recommendedStaff: "Nurse",
//                 },
//                 {
//                     description: "Task 7 for User 6",
//                     startTime: "23:00:00",
//                     endTime: "23:30:00",
//                     recommendedStaff: "Nurse",
//                 },
//             ],
//         },
//     ],

//     employees: [
//         {
//             name: "John Doe",
//             jobTitle: "Care Assistant",
//             shiftStart: "08:00:00",
//             shiftEnd: "16:00:00",
//         },
//         {
//             name: "Jane Smith",
//             jobTitle: "Nurse",
//             shiftStart: "08:00:00",
//             shiftEnd: "16:00:00",
//         },
//         {
//             name: "Bob Johnson",
//             jobTitle: "Care Assistant",
//             shiftStart: "10:00:00",
//             shiftEnd: "18:00:00",
//         },
//         {
//             name: "Emily Davis",
//             jobTitle: "Nurse",
//             shiftStart: "10:00:00",
//             shiftEnd: "18:00:00",
//         },
//         {
//             name: "Alex Turner",
//             jobTitle: "Care Assistant",
//             shiftStart: "12:00:00",
//             shiftEnd: "20:00:00",
//         },
//         {
//             name: "Sara White",
//             jobTitle: "Nurse",
//             shiftStart: "12:00:00",
//             shiftEnd: "20:00:00",
//         },
//         {
//             name: "Mike Brown",
//             jobTitle: "Care Assistant",
//             shiftStart: "14:00:00",
//             shiftEnd: "22:00:00",
//         },
//     ],
// };

// export default testData;
