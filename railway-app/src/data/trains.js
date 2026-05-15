export const trains = [
  {
    id: "1",
    number: "742 К",
    route: "Київ → Львів",
    departureDate: "2023-12-01",
    departureTime: "06:30",
    duration: "5 год 15 хв",
    wagons: [
      { id: "w1", number: 1, type: "Купе", seats: 36 },
      { id: "w2", number: 2, type: "Плацкарт", seats: 54 },
    ],
  },
  {
    id: "2",
    number: "105 Ш",
    route: "Одеса → Київ",
    departureDate: "2023-12-01",
    departureTime: "22:15",
    duration: "9 год 10 хв",
    wagons: [
      { id: "w3", number: 5, type: "Люкс", seats: 18 },
      { id: "w4", number: 6, type: "Купе", seats: 36 },
    ],
  },
  {
    id: "3",
    number: "038 К",
    route: "Київ → Запоріжжя",
    departureDate: "2023-12-02",
    departureTime: "14:00",
    duration: "8 год 30 хв",
    wagons: [{ id: "w5", number: 3, type: "Плацкарт", seats: 54 }],
  },
];
