// timeUtils.js
exports.getTimeDifference = (createdAt) => {
    if (createdAt === undefined || isNaN(new Date(createdAt))) {
        return 'long time';
    }
    const currentDate = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference = currentDate - createdDate;

    // Calculate seconds, minutes, hours, days, months, and years
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    // Calculate remaining months after years
    const remainingMonths = months % 12;

    // Determine the appropriate unit
    if (years > 0) {
        if (remainingMonths > 0) {
            return `${years} ${years === 1 ? 'year' : 'years'} and ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
        } else {
            return years + (years === 1 ? ' year' : ' years');
        }
    } else if (months > 0) {
        return months + (months === 1 ? ' month' : ' months');
    } else if (days > 0) {
        return days + (days === 1 ? ' day' : ' days');
    } else if (hours > 0) {
        return hours + (hours === 1 ? ' hour' : ' hours');
    } else if (minutes > 0) {
        return minutes + (minutes === 1 ? ' minute' : ' minutes');
    } else {
        return seconds < 5 ? 'few seconds' : seconds + ' seconds';
    }
};
