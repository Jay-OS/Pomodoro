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

export const millisecondsToMinutesAndSeconds = (milliseconds: number) => {
    const totalSeconds = millisecondsToSeconds(milliseconds);
    return {
        minutes: parseInt((totalSeconds / 60).toString()),
        seconds: totalSeconds % 60,
    };
};

export const millisecondsToMinutesAndSecondsString = (milliseconds: number) => {
    const minutesAndSeconds = millisecondsToMinutesAndSeconds(milliseconds);
    return {
        minutes: toTwoDigitString(minutesAndSeconds.minutes),
        seconds: toTwoDigitString(minutesAndSeconds.seconds),
    };
};

const millisecondsToSeconds = (milliseconds: number) => {
    return parseInt((milliseconds / 1000).toString());
};

const toTwoDigitString = (number: number) => {
    return number.toLocaleString('en-GB', {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
};
