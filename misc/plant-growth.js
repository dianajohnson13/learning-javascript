function plantGrowth(species, inchesPerHourInDark, inchesPerHourInSun) {
	return function growthInDays(days, availableDailySun) {

		var dailyInchesGrownInSun = availableDailySun * inchesPerHourInSun;
		var dailyInchesGrownInDark = (24 - availableDailySun) * inchesPerHourInDark;

		var totalgrowth = (dailyInchesGrownInSun + dailyInchesGrownInDark) * days;

		console.log("According to my calculations, if you give your " + species +
			" plant " + availableDailySun + " hours of sunlight per day over the course of " + days + 
			" days, it will grow appoximately " + totalgrowth + " inches. Wow! It sure is growing fast!")
	}
}

var aloe = plantGrowth("aloe", 1, 3)

aloe(4, 6)
