function anagramDifference(w1, w2) {
    let frequencyMap1 = createFrequencyMap(w1);
    let frequencyMap2 = createFrequencyMap(w2);

    let removals = 0;

    for (let char in frequencyMap1) {
        if (frequencyMap2[char]) {
            removals += Math.abs(frequencyMap1[char] - frequencyMap2[char]);
            frequencyMap2[char] = 0;
        } else {
            removals += frequencyMap1[char];
        }
    }

    for (let char in frequencyMap2) {
        removals += frequencyMap2[char];
    }

    return removals;
}

function createFrequencyMap(word) {
    let frequencyMap = {};
    for (let char of word) {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }
    return frequencyMap;
}