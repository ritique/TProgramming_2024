function sum_pairs(ints, s) {

    let seen = new Map();

    for (let i = 0; i < ints.length; i++) {
        let current = ints[i];
        let complement = s - current;

        if (seen.has(complement)) {
            return [complement, current];
        }
        seen.set(current, i);
    }
    return undefined;
}