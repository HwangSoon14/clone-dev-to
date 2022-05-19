export const auth = (user) => {
    if(Object.keys(user).length > 0) {
        return true;
    }
    return false;

};
