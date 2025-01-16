import moment from 'moment';
import { isStringValue } from '../data-util/DataHandling';

export const GET_DISPLAY_DATE_FORMAT = 'DD-MMM-YYYY';
export const GET_DISPLAY_TIME_FORMAT = 'LT';

export const getDateFormat = (data) => {
    if (isStringValue(data)) {
        return moment(new Date(data)).format(GET_DISPLAY_DATE_FORMAT);
    } else {
        return '';
    }
};

export const getTimeFormat = (data) => {
    if (isStringValue(data)) {
        return moment(new Date(data)).format(GET_DISPLAY_TIME_FORMAT);
    } else {
        return '';
    }
};

export const getCurrentDate = (data) => {
    return moment().format(GET_DISPLAY_DATE_FORMAT);
};

export const addDaysToDate = (date, numOfDays, dateFormat) => {
    if (dateFormat) {
        let newdate = moment(new Date(date)).add(numOfDays, 'd').toDate();
        return moment(newdate).format(dateFormat);
    } else {
        return moment(new Date(date)).add(numOfDays, 'd').toDate();
    }
};