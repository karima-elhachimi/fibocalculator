var fibonacci = exports.fibonacci = function(maxNumber) {
    let sequence = [];
    sequence[0] = 0;
    sequence[1] = 1;
    for (let i = 2; i <= maxNumber; i++) {
        sequence[i] = sequence[i-2] + sequence[i-1];
    }
    return sequence;
};