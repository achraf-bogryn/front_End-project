export const PI = 3.14;

export function getCircumReference(radius) {
    return 2 * PI * radius;
}
export function getArea(radius) {
    return PI * radius * radius;
}
export function getVolume(radius) {
    return (4 / 3) * PI * Math.pow(radius, 3);
}