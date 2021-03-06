const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

export const formatDate = () => {
	const date = new Date();
	const month = months[date.getMonth()];
	const day = date.getDate();
	const year = date.getFullYear();
	return `${month} ${day < 10 ? '0' + day : day}, ${year}`;
};
