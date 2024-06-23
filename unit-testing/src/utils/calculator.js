export const sum = (a, b) => Number(a) + Number(b);
export const devide = (a, b) => {
    if (b === 0) {
        throw new Error('Can not devide by 0');
    }
    
    return a / b;
};