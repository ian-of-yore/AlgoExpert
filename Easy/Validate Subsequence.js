function isValidSubsequence(array, sequence) {
    // Write your code here.
    let count = 0, j = 0;

    for (let i = 0; i < array.length; i++) {
        if (sequence[j] === array[i]) {
            count++;
            j++;
        }
    }

    return sequence.length === count;
}