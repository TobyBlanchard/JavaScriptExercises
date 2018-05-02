//  Given a month number, between 1 and 12, and a year, print the number of days in that month - accounting for leap years.

let month = 2 
let year = 2016;
let days = 0;

		if(month === 4 || month === 6 || month === 9 || month === 11){
			days = 30;
			console.log(`${month}`, days);
		}else if(month === 2){
			if((year % 100 === 0) || (year % 400 === 0) || (year % 4 === 0)){
				days = 29;
				console.log(year, " is a leap year");
				console.log(`${month}`, days);				
			}else{
				days = 28;
				console.log(`${month}`, days);
			}
		}else{
			days = 30;
			console.log(`${month}`, days);
		} 
	








