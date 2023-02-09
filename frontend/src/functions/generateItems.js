function generateDates() {
  const dates = [];
  for (let i = 0; i < 31; i++) {
    dates.push(i + 1);
  }
  return dates;
}
function generateMonths() {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Des',
  ];
  return months;
}
function generateYear() {
  const years = [];
  let currentYear = new Date().getFullYear();
  for (let i = 1950; i <= currentYear; i++) {
    years.push(i);
  }
  return years.sort((a, b) => b - a);
}
export { generateDates, generateMonths, generateYear };
