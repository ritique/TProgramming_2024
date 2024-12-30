function moveZeros(arr) {
    let nonZeroElements = [];
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            nonZeroElements.push(arr[i]);
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        nonZeroElements.push(0);
    }

    return nonZeroElements;
}