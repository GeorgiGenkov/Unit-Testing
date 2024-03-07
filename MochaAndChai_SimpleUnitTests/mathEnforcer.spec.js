import { mathEnforcer } from "./mathEnforcer.js";
import { expect } from "chai";

describe('mathEnforcer:', () => {
    describe('addFive:', () => {
        it('should return undefined if a non-number value is given', () => {
            // Arrange
            const input1 = "15";
            const input2 = null;
            const input3 = [];
            const input4 = {};

            // Act
            const result1 = mathEnforcer.addFive(input1);
            const result2 = mathEnforcer.addFive(input2);
            const result3 = mathEnforcer.addFive(input3);
            const result4 = mathEnforcer.addFive(input4);

            // Assert
            expect(result1).to.be.undefined;
            expect(result2).to.be.undefined;
            expect(result3).to.be.undefined;
            expect(result4).to.be.undefined;
        });

        it('should return a valid value if a number value is given', () => {
            // Arrange
            const input = -20;
            const input1 = 5;
            const input2 = -5;
            const input3 = 2.2;
            const input4 = 2.222222222;

            // Act
            const result = mathEnforcer.addFive(input);
            const result1 = mathEnforcer.addFive(input1);
            const result2 = mathEnforcer.addFive(input2);
            const result3 = mathEnforcer.addFive(input3);
            const result4 = mathEnforcer.addFive(input4);

            // Assert
            expect(result).to.equals(-15);
            expect(result1).to.equals(10);
            expect(result2).to.equals(0);
            expect(result3).to.equals(7.2);
            expect(result4).to.be.closeTo(7.22, 0.01);
        });
    });

    describe('subtractTen:', () => {
        it('should return undefined if a non-number value is given', () => {
            // Arrange
            const input1 = "115";
            const input2 = {};
            const input3 = undefined;
            const input4 = [];

            // Act
            const result1 = mathEnforcer.subtractTen(input1);
            const result2 = mathEnforcer.subtractTen(input2);
            const result3 = mathEnforcer.subtractTen(input3);
            const result4 = mathEnforcer.subtractTen(input4);

            // Assert
            expect(result1).to.be.undefined;
            expect(result2).to.be.undefined;
            expect(result3).to.be.undefined;
            expect(result4).to.be.undefined;
        });

        it('should return a valid value if a number value is given', () => {
            // Arrange
            const input = -15;
            const input1 = 15;
            const input2 = 10;
            const input3 = 2.2;
            const input4 = 2.22222222;

            // Act
            const result = mathEnforcer.subtractTen(input);
            const result1 = mathEnforcer.subtractTen(input1);
            const result2 = mathEnforcer.subtractTen(input2);
            const result3 = mathEnforcer.subtractTen(input3);
            const result4 = mathEnforcer.subtractTen(input4);

            // Assert
            expect(result).to.equals(-25);
            expect(result1).to.equals(5);
            expect(result2).to.equals(0);
            expect(result3).to.equals(-7.8);
            expect(result4).to.be.closeTo(-7.78, 0.01);
        });
    });

    describe('sum:', () => {
        it('should return undefined if non-number values are given', () => {
            // Arrange
            const input = 22;
            const input1 = "115";
            const input2 = {};
            const input3 = undefined;
            const input4 = [];

            // Act
            const result1 = mathEnforcer.sum(input, input1);
            const result2 = mathEnforcer.sum(input2, input);
            const result3 = mathEnforcer.sum(input, input3);
            const result4 = mathEnforcer.sum(input4, input1);

            // Assert
            expect(result1).to.be.undefined;
            expect(result2).to.be.undefined;
            expect(result3).to.be.undefined;
            expect(result4).to.be.undefined;
        });

        it('should return a valid value if number type values are given', () => {
            // Arrange
            const input = 0;
            const input1 = 15;
            const input2 = -10;
            const input3 = 2.2;
            const input4 = 2.22222222;
            const input5 = -2.2;

            // Act
            const result1 = mathEnforcer.sum(input1, input);
            const result2 = mathEnforcer.sum(input2, input1);
            const result3 = mathEnforcer.sum(input3, input);
            const result4 = mathEnforcer.sum(input4, input1);
            const result5 = mathEnforcer.sum(input5, input3);
            const result6 = mathEnforcer.sum(input2, input5);

            // Assert
            expect(result1).to.equals(15);
            expect(result2).to.equals(5);
            expect(result3).to.equals(2.2);
            expect(result4).to.be.closeTo(17.22, 0.01);
            expect(result5).to.equals(0);
            expect(result6).to.equals(-12.2);
        });
    });
});