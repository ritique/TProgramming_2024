function radians(deg: number): number {
	return deg * (Math.PI / 180)
}

function calculate(a: number, b: number, x: number): number {
    return (Math.pow(b, 3) + Math.pow(Math.sin(radians(a * x)), 2)) / (Math.acos(x * b * x) + Math.pow(Math.E, (-x / 2)));
}

export function taskA(a: number, b: number, xStart: number, xEnd: number, xDelta: number): number[] { 
    const answer: number[] = [];
    if (xDelta === 0) {
        return [];
    }
    if (xDelta > 0) {
        for (let i = xStart; i <= xEnd; i += xDelta) {
            answer.push(calculate(a, b, i));  
        }
    } else {
        for (let i = xStart; i >= xEnd; i += xDelta) {
            answer.push(calculate(a, b, i));
        }
    }
    return answer;
}

export function taskB(a: number, b: number, xes: number[]): number[] { 
    const answer: number[] = [];
    if (xes.length === 0) {
        return [];
    }
    for (let i of xes) {
        answer.push(calculate(a, b, i));
    }
    return answer
}