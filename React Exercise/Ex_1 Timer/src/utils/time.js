import { padZero } from "./number";

export const minutesToSeconds = (minutes) => {
    return minutes * 60;
};

export const secondsToMinutes = (seconds) => {
    return seconds / 60;
};

export const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
};