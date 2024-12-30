function pigIt(str) {
    return str.split(/(\W+)/).map(word => {
        if (/[a-zA-Z]/.test(word)) {
            return word.slice(1) + word[0] + 'ay';
        }
        return word;
    }).join(''); 
}