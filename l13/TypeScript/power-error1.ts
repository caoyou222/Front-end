function power(base: number,exponent: number): number {
    var result: number = 1;
    for (var i: number = 0; i < exponent; i++) {
      result = result * base;
    }
    return result;
}

power("one",3);