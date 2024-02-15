const testData = {
    employees: [
        {
            name: "Mandy",
            role: "care assistant",
            shift: {
                start: "08:00am",
                end: "12:00pm",
            },
        },
        {
            name: "Mary",
            role: "care assistant",
            shift: {
                start: "12:00pm",
                end: "06:00pm",
            },
        },
        {
            name: "Star",
            role: "nurse",
            shift: {
                start: "08:00am",
                end: "12:00pm",
            },
        },
        // {
        //     name: "John",
        //     role: "nurse",
        //     shift: {
        //         start: "12:00pm",
        //         end: "06:00pm",
        //     },
        // },
        // {
        //     name: "Emily",
        //     role: "care assistant",
        //     shift: {
        //         start: "08:00am",
        //         end: "12:00pm",
        //     },
        // },
        // {
        //     name: "David",
        //     role: "nurse",
        //     shift: {
        //         start: "12:00pm",
        //         end: "06:00pm",
        //     },
        // },
        // {
        //     name: "Jane",
        //     role: "care assistant",
        //     shift: {
        //         start: "08:00am",
        //         end: "12:00pm",
        //     },
        // },
        // {
        //     name: "Martha",
        //     role: "care assistant",
        //     shift: {
        //         start: "12:00pm",
        //         end: "06:00pm",
        //     },
        // },
        // {
        //     name: "Chun",
        //     role: "nurse",
        //     shift: {
        //         start: "08:00am",
        //         end: "12:00pm",
        //     },
        // },
        // {
        //     name: "Dave",
        //     role: "nurse",
        //     shift: {
        //         start: "12:00pm",
        //         end: "06:00pm",
        //     },
        // },
        // {
        //     name: "Janith",
        //     role: "care assistant",
        //     shift: {
        //         start: "08:00am",
        //         end: "12:00pm",
        //     },
        // },
        // {
        //     name: "MaJane",
        //     role: "care assistant",
        //     shift: {
        //         start: "12:00pm",
        //         end: "06:00pm",
        //     },
        // },
        // {
        //     name: "Damble",
        //     role: "nurse",
        //     shift: {
        //         start: "08:00am",
        //         end: "12:00pm",
        //     },
        // },
        // {
        //     name: "MaPaul",
        //     role: "nurse",
        //     shift: {
        //         start: "12:00pm",
        //         end: "06:00pm",
        //     },
        // },
        // {
        //     name: "Yun",
        //     role: "nurse",
        //     shift: {
        //         start: "08:00am",
        //         end: "12:00pm",
        //     },
        // },
    ],

    tasks: [
        // {
        //     supportPersonel: "care assistant",
        //     noSupportPersonel: 2,
        //     time: "09:00am",
        //     su: "Jane Smith",
        // },
        // {
        //     supportPersonel: "nurse",
        //     noSupportPersonel: 2,
        //     time: "12:00pm",
        //     su: "Jane Smith",
        // },
        // {
        //     supportPersonel: "care assistant",
        //     noSupportPersonel: 1,
        //     time: "04:00pm",
        //     su: "Jane Smith",
        // },
        {
            supportPersonel: "nurse",
            noSupportPersonel: 2,
            time: "02:24pm",
            su: "Jane Smith",
        },
        {
            supportPersonel: "care assistant",
            noSupportPersonel: 1,
            time: "10:00am",
            su: "Martha Paul",
        },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 2,
        //     time: '09:00am',
        //     su: 'Mary Jane',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '12:00pm',
        //     su: 'Mary Jane',
        // },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 1,
        //     time: '04:00pm',
        //     su: 'Mary Jane',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '02:24pm',
        //     su: 'Mary Jane',
        // },
        {
            supportPersonel: 'care assistant',
            noSupportPersonel: 1,
            time: '10:00am',
            su: 'Martha Paul',
        },
        {
            supportPersonel: 'care assistant',
            noSupportPersonel: 2,
            time: '09:00am',
            su: 'Mary Jane',
        },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '12:00pm',
        //     su: 'Mary Jane',
        // },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 1,
        //     time: '04:00pm',
        //     su: 'Mary Jane',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '02:24pm',
        //     su: 'Mary Jane',
        // },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 2,
        //     time: '09:00am',
        //     su: 'Jane Smith',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '12:00pm',
        //     su: 'Jane Smith',
        // },
        {
            supportPersonel: 'care assistant',
            noSupportPersonel: 1,
            time: '04:00pm',
            su: 'Jane Smith',
        },
        {
            supportPersonel: 'nurse',
            noSupportPersonel: 2,
            time: '02:24pm',
            su: 'Jane Smith',
        },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 2,
        //     time: '09:00am',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '12:00pm',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 1,
        //     time: '04:00pm',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '02:24pm',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 2,
        //     time: '09:00am',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '12:00pm',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 1,
        //     time: '04:00pm',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '02:24pm',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 2,
        //     time: '09:00am',
        //     su: 'Jane Smith',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '12:00pm',
        //     su: 'Jane Smith',
        // },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 1,
        //     time: '04:00pm',
        //     su: 'Jane Smith',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '02:24pm',
        //     su: 'Jane Smith',
        // },
        {
            supportPersonel: 'care assistant',
            noSupportPersonel: 1,
            time: '10:00am',
            su: 'Martha Paul',
        },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 2,
        //     time: '09:00am',
        //     su: 'Chun Yun',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '12:00pm',
        //     su: 'Chun Yun',
        // },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 1,
        //     time: '04:00pm',
        //     su: 'Chun Yun',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '02:24pm',
        //     su: 'Chun Yun',
        // },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 1,
        //     time: '10:00am',
        //     su: 'Chun Yun',
        // },
        {
            supportPersonel: 'care assistant',
            noSupportPersonel: 2,
            time: '09:00am',
            su: 'Chun Yun',
        },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '12:00pm',
        //     su: 'Chun Yun',
        // },
        // {
        //     supportPersonel: 'care assistant',
        //     noSupportPersonel: 1,
        //     time: '04:00pm',
        //     su: 'Chun Yun',
        // },
        {
            supportPersonel: 'nurse',
            noSupportPersonel: 2,
            time: '02:24pm',
            su: 'Chun Yun',
        },
        {
            supportPersonel: 'nurse',
            noSupportPersonel: 2,
            time: '08:00am',
            su: 'Chun Yun',
        },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '09:00am',
        //     su: 'Jane Smith',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '10:00am',
        //     su: 'Mary Jane',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '11:00am',
        //     su: 'Dave Bramble',
        // },
        {
            supportPersonel: 'nurse',
            noSupportPersonel: 2,
            time: '12:00pm',
            su: 'Martha Paul',
        },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '08:00am',
        //     su: 'Martha Paul',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '09:00am',
        //     su: 'Chun Yun',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '10:00am',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '11:00am',
        //     su: 'Jane Smith',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '12:00pm',
        //     su: 'Mary Jane',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '08:00am',
        //     su: 'Martha Paul',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '09:00am',
        //     su: 'Mary Jane',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '10:00am',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '11:00am',
        //     su: 'Chun Yun',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '12:00pm',
        //     su: 'Chun Yun',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '08:00am',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '09:00am',
        //     su: 'Jane Smith',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '10:00am',
        //     su: 'Mary Jane',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '11:00am',
        //     su: 'Dave Bramble',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '12:00pm',
        //     su: 'Martha Paul',
        // },
        // {
        //     supportPersonel: 'nurse',
        //     noSupportPersonel: 2,
        //     time: '08:00am',
        //     su: 'Martha Paul',
        // },
        {
            supportPersonel: 'nurse',
            noSupportPersonel: 2,
            time: '09:00am',
            su: 'Chun Yun',
        },
        {
            supportPersonel: 'nurse',
            noSupportPersonel: 2,
            time: '10:00am',
            su: 'Dave Bramble',
        },


    ],
};

export default testData;
