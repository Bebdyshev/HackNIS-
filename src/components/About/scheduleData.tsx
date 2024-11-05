import { Event } from "@/types/event";

const scheduleData: Event[] = [
  {
    id: 1,
    name: "Check In",
    time: "10:00",
    isColored: true,
    day: 1,
  },
  {
    id: 2,
    name: "Opening Ceremony",
    time: "11:00",
    isColored: false,
    day: 1,
  },
  {
    id: 5,
    name: "Lunch Break",
    time: "14:00",
    isColored: false,
    day: 1,
  },
  {
    id: 9,
    name: "Day 1 Wrap-Up",
    time: "18:30",
    isColored: false,
    day: 1,
  },
  {
    id: 12,
    name: "Case Study Presentations",
    time: "11:30",
    isColored: true,
    day: 2,
  },
  {
    id: 13,
    name: "Lunch Break",
    time: "13:00",
    isColored: false,
    day: 2,
  },
  {
    id: 16,
    name: "Closing Ceremony",
    time: "17:30",
    isColored: false,
    day: 2,
  },
];

export default scheduleData;
