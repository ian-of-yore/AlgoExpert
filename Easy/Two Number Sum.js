function twoNumberSum(array, targetSum) {
    // Write your code here.
    let map = {};

    for (const element of array) {
        let required = targetSum - element;
        if (required in map) {
            return [element, required];
        }
        else {
            map[element] = true;
        }
    }

    return [];
}