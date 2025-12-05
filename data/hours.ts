export type DayHours = {
    day: string;
    open: string;
    close: string;
    isClosed?: boolean;
};

export const hoursData: DayHours[] = [
    { day: "Monday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Tuesday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Wednesday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Thursday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Friday", open: "11:00 AM", close: "11:00 PM" },
    { day: "Saturday", open: "11:00 AM", close: "11:00 PM" },
    { day: "Sunday", open: "11:00 AM", close: "9:00 PM" },
];
