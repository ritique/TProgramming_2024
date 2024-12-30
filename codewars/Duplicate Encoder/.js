function duplicateEncode(word) {
    let lowerCaseWord = word.toLowerCase();

    let frequencyMap = {};
    for (let char of lowerCaseWord) {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }

    let result = '';
    for (let char of lowerCaseWord) {
        if (frequencyMap[char] > 1) {
            result += ')';
        } else {
            result += '(';
        }
    }

    return result;
}