export interface Point {
    x: number;

    y: number;
}

/**
 * Function to get the x and y in Point
 * @param point: Point
 * @return sum: number
 */
export const getSum = (point: Point): number => (point.x + point.y);
