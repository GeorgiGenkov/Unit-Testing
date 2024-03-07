import { isOddOrEven } from './isOddOrEven.js'
import { expect} from "chai";

describe('isOddOrEven:', () => {
    it('should return undefined if a non-string value is given', () => {
        // Arrange
        const input1 = 22;
        const input2 = null;
        const input3 = [];
        const input4 = {};

        // Act
        const result1 = isOddOrEven(input1);
        const result2 = isOddOrEven(input2);
        const result3 = isOddOrEven(input3);
        const result4 = isOddOrEven(input4);

        // Assert
        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
        expect(result3).to.be.undefined;
        expect(result4).to.be.undefined;
    });

    it('should return odd if a string with odd length value is given', () => {
        // Arrange
        const input1 = "12345";

        // Act
        const result1 = isOddOrEven(input1);

        // Assert
        expect(result1).to.equals('odd');

    });

    it('should return even if a string with even length value is given', () => {
        // Arrange
        const input1 = "1234";

        // Act
        const result1 = isOddOrEven(input1);

        // Assert
        expect(result1).to.equals('even');

    });
});