function pythagoreanTriplets(array) {
    const sortedArray = array.toSorted((a, b) => a - b);
    console.log(sortedArray);
    let counter = 0;
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = i + 1; j < sortedArray.length; j++) {
            for (let k = j + 1; k < sortedArray.length; k++) {
                if (sortedArray[i] * sortedArray[i] + sortedArray[j] * sortedArray[j] === sortedArray[k] * sortedArray[k]) {
                    console.log(`You have the following triplet: [${sortedArray[i]}, ${sortedArray[j]}, ${sortedArray[k]}]`);
                    counter++;
                }
            }
        }
    }
    if (counter === 0) {
        console.log(`You have not found a Pythagorean triplet`);
    }
}

pythagoreanTriplets([21, 35, 3, 12, 13, 5, 4, 1, 8, 16, 20, 10]);
