import dayjs from "dayjs";

export function formatDatesAgo(date) {
    const targetDate = dayjs(date);
    return targetDate.fromNow();
}
