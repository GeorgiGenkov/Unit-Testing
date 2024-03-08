// When a string is given - the function returns an information regarding the string length: "even" if the string length is even and "odd" if the string length is odd
export function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
