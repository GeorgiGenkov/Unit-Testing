// When an array of numbers is given - the function returns information about the array: min/max values within the array and the array length
export function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return undefined;
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max, length: arr.length };
}