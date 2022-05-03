import dayjs from 'dayjs';
export const timeConvert = (date) => {
	return dayjs(date).format('DD-MM YYYY');
};
