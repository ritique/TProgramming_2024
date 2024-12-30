function permutations(string) {
    if (string.length === 0) return [];

    function permute(chars, prefix = '') {
        if (chars.length === 0) {
            result.add(prefix);
            return;
        }

        for (let i = 0; i < chars.length; i++) {
            let currentChar = chars[i];
            let remainingChars = chars.slice(0, i) + chars.slice(i + 1);
            permute(remainingChars, prefix + currentChar);
        }
    }

    let result = new Set();
    permute(string);

    return Array.from(result);
}