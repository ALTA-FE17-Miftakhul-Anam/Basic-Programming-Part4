//Total Maksimum dari deret Bilangan (Tanpa Recursive)
function maxSequence(arr: number[]): number {
    let maxSum = 0;
    let currentSum = 0;

    for (let num of arr) {
        currentSum = Math.max(0, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6])); // 7
console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])); // 7
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6])); // 8
console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6])); // 12
