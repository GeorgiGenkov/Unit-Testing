import { analyzeArray } from "./arrayAnalyzer.js";
import { expect } from "chai";

describe('analyzeArray:', () => {
    it('should return undefined if an empty array or non-array input is given', () => {
        // Arrange
        const inputArray1 = [];
        const inputArray2 = [ "2", "22", 2 ];
        const inputArray3 = "array";
        const inputArray4 = 22;

        // Act
        const result1 = analyzeArray(inputArray1);
        const result2 = analyzeArray(inputArray2);
        const result3 = analyzeArray(inputArray3);
        const result4 = analyzeArray(inputArray4);

        // Assert
        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
        expect(result3).to.be.undefined;
        expect(result4).to.be.undefined;
    });

    it('should return a valid output if valid edge cases are given', () => {
        // Arrange
        const inputArray1 = [ 22 ];
        const inputArray2 = [ 22, 22, 22, 22 ];
        const inputArray3 = [ 22, 2 ];
        const inputArray4 = [ 22, 2, 22 ];

        // Act
        const result1 = analyzeArray(inputArray1);
        const result2 = analyzeArray(inputArray2);
        const result3 = analyzeArray(inputArray3);
        const result4 = analyzeArray(inputArray4);

        // Assert
        expect(result1).to.deep.equal( { min: 22, max: 22, length: 1 });
        expect(result2).to.deep.equal( { min: 22, max: 22, length: 4 });
        expect(result3).to.deep.equal( { min: 2, max: 22, length: 2 });
        expect(result4).to.deep.equal( { min: 2, max: 22, length: 3 });
    });

    it('should return a valid output if valid values are given', () => {
        // Arrange
        const inputArray1 = [ 22, 11, -2 ];
        const inputArray2 = [ 22, -22, 12, -12 ];
        const inputArray3 = [ 22, 0 ];
        const inputArray4 = [ 22, 2, 0, -22.2 ];

        // Act
        const result1 = analyzeArray(inputArray1);
        const result2 = analyzeArray(inputArray2);
        const result3 = analyzeArray(inputArray3);
        const result4 = analyzeArray(inputArray4);

        // Assert
        expect(result1).to.deep.equal( { min: -2, max: 22, length: 3 });
        expect(result2).to.deep.equal( { min: -22, max: 22, length: 4 });
        expect(result3).to.deep.equal( { min: 0, max: 22, length: 2 });
        expect(result4).to.deep.equal( { min: -22.2, max: 22, length: 4 });
    });
});