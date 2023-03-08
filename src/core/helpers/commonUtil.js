import { months } from "../constant/dateConstants";

export const getDate = () => {
    const { day, month, year } = getCurrentTime();
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}/${month + 1}/${year}`;
    return currentDate;
}

export const validateReminder = (reminder) => {
    debugger;
    const { hr, min, day, month, year } = reminder;
    const enteredDate = new Date(year, months.indexOf(month), day, hr, min);
    if (enteredDate.getTime() < (new Date()).getTime()) {
        return false;
    }
    return true;
}
/**
 *
 * @param { } date1 
 * @param {*} date2 
 * @returns 
 */
export const compareDates = (date1, date2) => {
    debugger;
    // Date formate dd/mm/yyyy
    const [dd1, mm1, yy1] = date1.split('/');
    const [dd2, mm2, yy2] = date2.split('/');
    const timeStamp1 = new Date(yy1, mm1, dd1).getTime();
    const timeStamp2 = new Date(yy2, mm2, dd2).getTime();
    if (timeStamp1 > timeStamp2) {
        return 1;
    }
    if (timeStamp1 < timeStamp2) {
        return -1;
    }
    return 0;
}

const getCurrentTime = () => {
    const date = new Date();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return { minutes, hours, day, month, year }
}

