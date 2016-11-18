// @flow

export function shuffleArray<T>(originalArray: Array<T>): Array<T> {
    let j, x, i;
    let copyArray = [...originalArray];

    for (i = copyArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = copyArray[i - 1];
        copyArray[i - 1] = copyArray[j];
        copyArray[j] = x;
    }

    return copyArray;
}