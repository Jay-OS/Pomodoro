export const minutesToHoursAndMinutes = (minutes: number) => {
    const hoursAndMinutes = {
        hours: Math.floor(minutes / 60),
        minutes: minutes % 60,
    };

    return hoursAndMinutes;
};

export const minutesToHoursAndMinutesString = (minutes: number) => {
    const hoursAndMinutes = minutesToHoursAndMinutes(minutes);
    return `${hoursAndMinutes.hours}h ${hoursAndMinutes.minutes}m`;
};

export const minutesToMilliseconds = (minutes: number) => {
    return minutes * 60 * 1000;
};
