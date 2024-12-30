function toCamelCase(str) {
    let words = str.split(/[-_]/);

    let camelCaseWords = words.map((word, index) => {
        if (index === 0) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return camelCaseWords.join('');
}