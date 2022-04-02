export function range(min, max) {
    if(max === undefined) {
        max = min;
        min = 0;
    }

    return Array.from({length: 1+max - min}).map( (_d,i)  => i+ min);
}
