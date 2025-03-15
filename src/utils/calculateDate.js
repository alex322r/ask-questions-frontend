
export default function calculateDate(createAt) {

    const DAY_IN_MS = 1000 * 60 * 60 * 24;

    const date = new Date(createAt);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    // calculate if diff is today
    if (diff < DAY_IN_MS) {
        return 'Today';
    } else if (diff < DAY_IN_MS * 2) {
        return 'Yesterday';
    } else if (diff < DAY_IN_MS * 29) {
        return `${Math.floor(diff / DAY_IN_MS)} days ago`;
    } else if (diff < DAY_IN_MS * 365) {
        return `${Math.floor(diff / (DAY_IN_MS * 30))} months ago`;
    } else {
        return `${Math.floor(diff / (DAY_IN_MS * 365))} years ago`;
    }

}