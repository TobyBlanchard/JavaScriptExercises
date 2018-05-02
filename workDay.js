let daysOfWeek = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
for(i = 0; i < daysOfWeek.length; i++){
	if((daysOfWeek[i] === `Saturday`) || (daysOfWeek[i] === `Sunday`)){
		console.log("Day of the week is ",daysOfWeek[i], ", Sleep in!");
	}
	else{
		console.log("Day of the week is ",daysOfWeek[i], ", Go to Work!")
	}
}