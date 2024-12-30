function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let mergedIntervals = [];

    for (let i = 0; i < intervals.length; i++) {
        let currentInterval = intervals[i];

        if (mergedIntervals.length === 0 || currentInterval[0] > mergedIntervals[mergedIntervals.length - 1][1]) {
            mergedIntervals.push(currentInterval);
        } else {
            mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], currentInterval[1]);
        }
    }

    let sum = 0;
    for (let interval of mergedIntervals) {
        sum += interval[1] - interval[0];
    }

    return sum;
}