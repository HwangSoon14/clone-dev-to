export const ConvertDate = {
	StartTheDay: () => {
		return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0);
	},
    EndOfDay: () => {
        return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59, 999);
    }
};
