export interface RamadanDay {
  ramadan: number;
  date: string; // ISO format or simple string for matching
  day: string;
  sehri: string; // "HH:mm"
  iftar: string;  // "HH:mm"
}

export interface PrayerTimes {
  date: string;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
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

export const PRAYER_TIMES: PrayerTimes[] = [
  { date: "2026-02-18", fajr: "05:14", sunrise: "06:29", dhuhr: "12:12", asr: "15:28", maghrib: "17:55", isha: "19:07" },
  { date: "2026-02-19", fajr: "05:13", sunrise: "06:29", dhuhr: "12:12", asr: "15:29", maghrib: "17:56", isha: "19:07" },
  { date: "2026-02-20", fajr: "05:12", sunrise: "06:28", dhuhr: "12:12", asr: "15:29", maghrib: "17:57", isha: "19:08" },
  { date: "2026-02-21", fajr: "05:12", sunrise: "06:27", dhuhr: "12:12", asr: "15:29", maghrib: "17:57", isha: "19:08" },
  { date: "2026-02-22", fajr: "05:11", sunrise: "06:26", dhuhr: "12:12", asr: "15:30", maghrib: "17:58", isha: "19:09" },
  { date: "2026-02-23", fajr: "05:10", sunrise: "06:26", dhuhr: "12:12", asr: "15:30", maghrib: "17:58", isha: "19:09" },
  { date: "2026-02-24", fajr: "05:09", sunrise: "06:25", dhuhr: "12:12", asr: "15:30", maghrib: "17:59", isha: "19:10" },
  { date: "2026-02-25", fajr: "05:09", sunrise: "06:24", dhuhr: "12:11", asr: "15:30", maghrib: "17:59", isha: "19:10" },
  { date: "2026-02-26", fajr: "05:08", sunrise: "06:23", dhuhr: "12:11", asr: "15:30", maghrib: "18:00", isha: "19:11" },
  { date: "2026-02-27", fajr: "05:07", sunrise: "06:22", dhuhr: "12:11", asr: "15:31", maghrib: "18:00", isha: "19:11" },
  { date: "2026-02-28", fajr: "05:06", sunrise: "06:22", dhuhr: "12:11", asr: "15:31", maghrib: "18:01", isha: "19:12" },
  { date: "2026-03-01", fajr: "05:05", sunrise: "06:21", dhuhr: "12:11", asr: "15:31", maghrib: "18:01", isha: "19:12" },
  { date: "2026-03-02", fajr: "05:05", sunrise: "06:20", dhuhr: "12:11", asr: "15:31", maghrib: "18:02", isha: "19:12" },
  { date: "2026-03-03", fajr: "05:04", sunrise: "06:19", dhuhr: "12:10", asr: "15:31", maghrib: "18:02", isha: "19:13" },
  { date: "2026-03-04", fajr: "05:03", sunrise: "06:18", dhuhr: "12:10", asr: "15:31", maghrib: "18:03", isha: "19:13" },
  { date: "2026-03-05", fajr: "05:02", sunrise: "06:17", dhuhr: "12:10", asr: "15:31", maghrib: "18:03", isha: "19:14" },
  { date: "2026-03-06", fajr: "05:01", sunrise: "06:16", dhuhr: "12:10", asr: "15:31", maghrib: "18:03", isha: "19:14" },
  { date: "2026-03-07", fajr: "05:00", sunrise: "06:15", dhuhr: "12:09", asr: "15:31", maghrib: "18:04", isha: "19:15" },
  { date: "2026-03-08", fajr: "04:59", sunrise: "06:14", dhuhr: "12:09", asr: "15:31", maghrib: "18:04", isha: "19:15" },
  { date: "2026-03-09", fajr: "04:58", sunrise: "06:13", dhuhr: "12:09", asr: "15:31", maghrib: "18:05", isha: "19:16" },
  { date: "2026-03-10", fajr: "04:57", sunrise: "06:12", dhuhr: "12:09", asr: "15:32", maghrib: "18:05", isha: "19:16" },
  { date: "2026-03-11", fajr: "04:57", sunrise: "06:12", dhuhr: "12:08", asr: "15:32", maghrib: "18:06", isha: "19:16" },
  { date: "2026-03-12", fajr: "04:56", sunrise: "06:11", dhuhr: "12:08", asr: "15:32", maghrib: "18:06", isha: "19:17" },
  { date: "2026-03-13", fajr: "04:55", sunrise: "06:10", dhuhr: "12:08", asr: "15:31", maghrib: "18:07", isha: "19:17" },
  { date: "2026-03-14", fajr: "04:54", sunrise: "06:09", dhuhr: "12:08", asr: "15:31", maghrib: "18:07", isha: "19:18" },
  { date: "2026-03-15", fajr: "04:53", sunrise: "06:08", dhuhr: "12:07", asr: "15:31", maghrib: "18:07", isha: "19:18" },
  { date: "2026-03-16", fajr: "04:52", sunrise: "06:07", dhuhr: "12:07", asr: "15:31", maghrib: "18:08", isha: "19:19" },
  { date: "2026-03-17", fajr: "04:51", sunrise: "06:06", dhuhr: "12:07", asr: "15:31", maghrib: "18:08", isha: "19:19" },
  { date: "2026-03-18", fajr: "04:50", sunrise: "06:05", dhuhr: "12:06", asr: "15:31", maghrib: "18:09", isha: "19:19" },
  { date: "2026-03-19", fajr: "04:49", sunrise: "06:04", dhuhr: "12:06", asr: "15:31", maghrib: "18:09", isha: "19:20" },
];
