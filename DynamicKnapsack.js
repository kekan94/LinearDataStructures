const dynamicKnapsack = function(weightCap, weights, values) {
    const numItem = weights.length;
    const matrix = new Array(numItem);
    
    for (let index = 0; index <= numItem; index++) {
      matrix[index] = new Array(weightCap + 1);
      for (let weight = 0; weight <= weightCap; weight++) {
      // Write your code here:
        if (index == 0 || weight == 0) {
          matrix[index][weight] = 0;
        } else if (weights[index - 1] <= weight) {
            const includeItem = values[index - 1] + matrix[index - 1][weight - weights[index - 1]];
            const excludeItem = matrix[index - 1][weight];
            matrix[index][weight] = Math.max(includeItem, excludeItem);
        } else {
            matrix[index][weight] = matrix[index - 1][weight];
        }
      }
    }
    return matrix[numItem][weightCap]; 
  };
  
  // Use this to test your function:

  const weightCap = 50;
  const weights = [31, 10, 20, 19, 4, 3, 6];
  const values = [70, 20, 39, 37, 7, 5, 10];
  console.log(dynamicKnapsack(weightCap, weights, values));

  /*
   [[0, 0, 0, 0, 0],
   [0, 5, 5, 5, 5],
   [0, 5, 10, 10, 10],
   [0, 5, 10, 15, 15],
   [0, 5, 10, 15, 20]]
  */
 
  const weightCap1 = 4;
  const weights1 = [1, 2, 3, 4];
  const values1 = [5, 10, 3, 20];
  console.log(dynamicKnapsack(weightCap1, weights1, values1));

