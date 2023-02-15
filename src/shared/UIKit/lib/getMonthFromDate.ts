export const getMonthFromDate = (date: Date) =>
  numberToDateFormat(date.getUTCMonth() + 1);
export const numberToDateFormat = (number: number) =>
  number <= 10 ? '0' + number : number.toString();
