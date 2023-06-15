const dateNow = new Date();
export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dayName = days[dateNow.getDay()];
const dayOfMonth = dateNow.getDate();
const monthName = monthNames[dateNow.getMonth()];

export const formattedDateNow = `${dayName} ${dayOfMonth} ${monthName}`;