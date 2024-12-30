function towerBuilder(nFloors) {
    let tower = [];

    let maxWidth = 2 * nFloors - 1;

    for (let i = 0; i < nFloors; i++) {
        let numStars = 2 * i + 1;
        let numSpaces = (maxWidth - numStars) / 2;

        let floor = ' '.repeat(numSpaces) + '*'.repeat(numStars) + ' '.repeat(numSpaces);

        tower.push(floor);
    }

    return tower;
}