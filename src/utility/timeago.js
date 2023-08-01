export const timeAgo = (createdAt) => {
	// Convert the createdAt string to a Date object
	const createdAtDate = new Date(createdAt);

	// Get the current time
	const currentDate = new Date();

	// Calculate the time difference in milliseconds
	const timeDifference = currentDate - createdAtDate;

	// Define time units in milliseconds
	const minute = 60 * 1000;
	const hour = 60 * minute;
	const day = 24 * hour;
	const month = 30 * day;
	const year = 12 * month;

	// Calculate the time ago based on the time difference
	if (timeDifference < minute) {
		return "just now";
	} else if (timeDifference < hour) {
		const minutesAgo = Math.floor(timeDifference / minute);
		return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
	} else if (timeDifference < day) {
		const hoursAgo = Math.floor(timeDifference / hour);
		return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
	} else if (timeDifference < month) {
		const daysAgo = Math.floor(timeDifference / day);
		return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
	} else if (timeDifference < year) {
		const monthsAgo = Math.floor(timeDifference / month);
		return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
	} else {
		const yearsAgo = Math.floor(timeDifference / year);
		return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
	}
};

// Example usage:
const createdAt = "2023-07-30T03:19:53.421+00:00";
console.log(timeAgo(createdAt)); // Output: "just now" (if the time difference is less than a minute)
