//leap year or not 

var calendar = require('node-calendar');

var x=calendar.leapdays(1990, 2050); 
var y=calendar.leapdays(2000, 2005); 

var y1=calendar.isleap(2023); 
var y2=calendar.isleap(2012); 


console.log("leap days between 1990-2050"+x);
console.log("leap days between 2000-2005"+y);

console.log(y1);
console.log(y2);

var x1 =new calendar.Calendar(1).monthdatescalendar(2013, 5);
console.log(x1);

var s= calendar.month_name;
console.log(s);

console.log(Date);

var cal = new calendar.Calendar(calendar.SUNDAY);
var yearCalendar = cal.yeardayscalendar(2004);
console.log(yearCalendar);
