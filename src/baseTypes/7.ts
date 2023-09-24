/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

const weekend = {
	saturday: Days.Saturday,
	sanday: Days.Sunday,
};

function isWeekend(day: Days): boolean {
	if (weekend) {
		return true;
	} else {
		return false;
	}
}
