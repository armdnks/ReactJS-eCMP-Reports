export default function dateFormatter(date) {
  const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const MONTHS = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const newDate = new Date(date);
  return (
    DAYS[newDate.getDay()] +
    ", " +
    MONTHS[newDate.getMonth()].slice(0, 3) +
    " " +
    newDate.getDate() +
    " " +
    newDate.getFullYear()
  );
}
