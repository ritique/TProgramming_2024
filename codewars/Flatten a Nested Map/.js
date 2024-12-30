function flattenMap(map, parentKey = '', result = {}) {
    for (let key in map) {
        if (map.hasOwnProperty(key)) {
            let newKey = parentKey ? `${parentKey}/${key}` : key;

            if (typeof map[key] === 'object' && map[key] !== null && !Array.isArray(map[key])) {
                flattenMap(map[key], newKey, result);
            } else {
                result[newKey] = map[key];
            }
        }
    }
    return result;
}