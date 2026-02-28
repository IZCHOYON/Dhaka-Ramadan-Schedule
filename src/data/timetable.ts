export interface RamadanDay {
  ramadan: number;
  date: string; // ISO format or simple string for matching
  day: string;
  sehri: string; // "HH:mm"
  iftar: string;  // "HH:mm"
}

export const RAMADAN_TIMETABLE: RamadanDay[] = [
  { ramadan: 1, date: "2026-02-19", day: "Thursday", sehri: "05:12", iftar: "17:58" },
  { ramadan: 2, date: "2026-02-20", day: "Friday", sehri: "05:11", iftar: "17:58" },
  { ramadan: 3, date: "2026-02-21", day: "Saturday", sehri: "05:11", iftar: "17:59" },
  { ramadan: 4, date: "2026-02-22", day: "Sunday", sehri: "05:10", iftar: "17:59" },
  { ramadan: 5, date: "2026-02-23", day: "Monday", sehri: "05:09", iftar: "18:00" },
  { ramadan: 6, date: "2026-02-24", day: "Tuesday", sehri: "05:08", iftar: "18:00" },
  { ramadan: 7, date: "2026-02-25", day: "Wednesday", sehri: "05:08", iftar: "18:01" },
  { ramadan: 8, date: "2026-02-26", day: "Thursday", sehri: "05:07", iftar: "18:01" },
  { ramadan: 9, date: "2026-02-27", day: "Friday", sehri: "05:06", iftar: "18:02" },
  { ramadan: 10, date: "2026-02-28", day: "Saturday", sehri: "05:05", iftar: "18:02" },
  { ramadan: 11, date: "2026-03-01", day: "Sunday", sehri: "05:05", iftar: "18:03" },
  { ramadan: 12, date: "2026-03-02", day: "Monday", sehri: "05:04", iftar: "18:03" },
  { ramadan: 13, date: "2026-03-03", day: "Tuesday", sehri: "05:03", iftar: "18:04" },
  { ramadan: 14, date: "2026-03-04", day: "Wednesday", sehri: "05:02", iftar: "18:04" },
  { ramadan: 15, date: "2026-03-05", day: "Thursday", sehri: "05:01", iftar: "18:04" },
  { ramadan: 16, date: "2026-03-06", day: "Friday", sehri: "05:00", iftar: "18:05" },
  { ramadan: 17, date: "2026-03-07", day: "Saturday", sehri: "04:59", iftar: "18:06" },
  { ramadan: 18, date: "2026-03-08", day: "Sunday", sehri: "04:58", iftar: "18:06" },
  { ramadan: 19, date: "2026-03-09", day: "Monday", sehri: "04:57", iftar: "18:07" },
  { ramadan: 20, date: "2026-03-10", day: "Tuesday", sehri: "04:57", iftar: "18:07" },
  { ramadan: 21, date: "2026-03-11", day: "Wednesday", sehri: "04:56", iftar: "18:07" },
  { ramadan: 22, date: "2026-03-12", day: "Thursday", sehri: "04:55", iftar: "18:08" },
  { ramadan: 23, date: "2026-03-13", day: "Friday", sehri: "04:54", iftar: "18:08" },
  { ramadan: 24, date: "2026-03-14", day: "Saturday", sehri: "04:53", iftar: "18:09" },
  { ramadan: 25, date: "2026-03-15", day: "Sunday", sehri: "04:52", iftar: "18:09" },
  { ramadan: 26, date: "2026-03-16", day: "Monday", sehri: "04:51", iftar: "18:10" },
  { ramadan: 27, date: "2026-03-17", day: "Tuesday", sehri: "04:50", iftar: "18:10" },
  { ramadan: 28, date: "2026-03-18", day: "Wednesday", sehri: "04:49", iftar: "18:10" },
  { ramadan: 29, date: "2026-03-19", day: "Thursday", sehri: "04:48", iftar: "18:11" },
  { ramadan: 30, date: "2026-03-20", day: "Friday", sehri: "04:47", iftar: "18:11" },
];
