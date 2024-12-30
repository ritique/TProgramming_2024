function productFib(prod) {
    let a = 0, b = 1;

    while (a * b < prod) {
        let nextFib = a + b;
        a = b;
        b = nextFib;
    }

    if (a * b === prod) {
        return [a, b, true];
    } else {
        return [a, b, false];
    }
}
