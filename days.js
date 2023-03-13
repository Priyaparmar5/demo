const { isleap } = require('node-calendar');
var calendar = require('node-calendar');
var cal = new calendar.Calendar(calendar.SUNDAY);
var year = cal.yeardayscalendar(2023);

function getNumberOfDays(start,end)
{
    const date1 = new Date(now);
    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = date2.getTime() - date1.getTime();

    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}