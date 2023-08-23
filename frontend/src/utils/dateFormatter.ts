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
  'Dec',
];
export const formatDate = (date: Date) => {
  const month = months[date.getMonth()];
  return `${date.getDate()} ${month} ${date.getFullYear()}`;
};
