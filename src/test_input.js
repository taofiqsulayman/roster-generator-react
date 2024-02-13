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
  ],

  tasks: [
    {
      supportPersonel: "care assistant",
      noSupportPersonel: 2,
      time: "09:00am",
      su: "Jane smith",
    },
    {
      supportPersonel: "nurse",
      noSupportPersonel: 2,
      time: "12:00pm",
      su: "Jane smith",
    },
    {
      supportPersonel: "care assistant",
      noSupportPersonel: 1,
      time: "04:00pm",
      su: "Jane smith",
    },
    {
      supportPersonel: "nurse",
      noSupportPersonel: 2,
      time: "02:24pm",
      su: "Jane smith",
    },
    {
      supportPersonel: "care assistant",
      noSupportPersonel: 1,
      time: "10:00am",
      su: "Martha paul",
    },
    {
        supportPersonel: 'care assistant',
        noSupportPersonel: 2,
        time: '09:00am',
        su: 'Mary Jane',
    },
    {
        supportPersonel: 'nurse',
        noSupportPersonel: 2,
        time: '12:00pm',
        su: 'Mary Jane',
    },
    {
        supportPersonel: 'care assistant',
        noSupportPersonel: 1,
        time: '04:00pm',
        su: 'Mary Jane',
    },
    {
        supportPersonel: 'nurse',
        noSupportPersonel: 2,
        time: '02:24pm',
        su: 'Mary Jane',
    },
  ],
};

export default testData;
