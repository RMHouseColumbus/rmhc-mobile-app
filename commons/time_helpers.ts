export const getHour = (time: Date) => {
  let h = time.getHours();
  const m = time.getMinutes();
  const x = h >= 12 ? "pm" : "am";
  h = h % 12;
  h = h ? h : 12;
  const final = m < 10 ? "0" + m : m;
  return h + ":" + final + " " + x;
};

export const dateRangeString = (start: Date, end: Date) =>
  `${start.toDateString()} ${getHour(start)}-${getHour(end)}`;
