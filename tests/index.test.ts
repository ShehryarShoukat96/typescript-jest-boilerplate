import {
    Point,
    getSum,
} from "../src";

describe('Test', function () {
    it('getSum() validation', function () {
        const point: Point = {x: 5, y: 0};
        const result: number = getSum(point);

        const expectedSum: number = 6;

        expect(result).toStrictEqual(expectedSum);
    });
});
