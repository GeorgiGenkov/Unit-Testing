import { lookupChar } from './charLookUp.js'
import { expect } from "chai";

describe('lookupChar:', () => {
    it('should return undefined if a non-string element is given as first parameter', () => {
        // Arrange
        const inputString1 = 22;
        const inputString2 = {};
        const inputString3 = [];
        const inputString4 = null;
        const inputInt = 2;

        // Act
        const result1 = lookupChar(inputString1, inputInt);
        const result2 = lookupChar(inputString2, inputInt);
        const result3 = lookupChar(inputString3, inputInt);
        const result4 = lookupChar(inputString4, inputInt);

        // Assert
        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
        expect(result3).to.be.undefined;
        expect(result4).to.be.undefined;
    });

    it('should return undefined if a non-integer element is given as second parameter', () => {
        // Arrange
        const inputString = "testing string";
        const inputInt1 = 2.2;
        const inputInt2 = "2";
        const inputInt3 = null;
        const inputInt4 = [];

        // Act
        const result1 = lookupChar(inputString, inputInt1);
        const result2 = lookupChar(inputString, inputInt2);
        const result3 = lookupChar(inputString, inputInt3);
        const result4 = lookupChar(inputString, inputInt4);

        // Assert
        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
        expect(result3).to.be.undefined;
        expect(result4).to.be.undefined;
    });

    it('should return incorrect index if the second parameter is an integer element but with invalid value', () => {
        // Arrange
        const inputString = "testing string";
        const inputInt1 = -22;
        const inputInt2 = 22;
        const inputInt3 = 15;
        const inputInt4 = -1;

        // Act
        const result1 = lookupChar(inputString, inputInt1);
        const result2 = lookupChar(inputString, inputInt2);
        const result3 = lookupChar(inputString, inputInt3);
        const result4 = lookupChar(inputString, inputInt4);

        // Assert
        expect(result1).to.equals("Incorrect index");
        expect(result2).to.equals("Incorrect index");
        expect(result3).to.equals("Incorrect index");
        expect(result4).to.equals("Incorrect index");
    });

    it('should return correct index if valid parameter values are given', () => {
        // Arrange
        const inputString1 = "testing string";
        const inputString2 = "testing";
        const inputString3 = "string";
        const inputString4 = "str";
        const inputInt1 = 7;
        const inputInt2 = 6;
        const inputInt3 = 1;
        const inputInt4 = 0;

        // Act
        const result1 = lookupChar(inputString1, inputInt1);
        const result2 = lookupChar(inputString2, inputInt2);
        const result3 = lookupChar(inputString3, inputInt3);
        const result4 = lookupChar(inputString4, inputInt4);

        // Assert
        expect(result1).to.equals(" ");
        expect(result2).to.equals("g");
        expect(result3).to.equals("t");
        expect(result4).to.equals("s");
    });
});