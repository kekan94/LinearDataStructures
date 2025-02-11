function efficientSolution(heights) {
    let totalWater = 0;
    let leftPointer = 0;
    let rightPointer = heights.length - 1;
    let leftBound = 0;
    let rightBound = 0;
    
    while (leftPointer < rightPointer) {
      if (heights[leftPointer] <= heights[rightPointer]) {
        if (heights[leftPointer] > leftBound) {
          leftBound = heights[leftPointer];
        }
        totalWater += leftBound - heights[leftPointer];
        leftPointer++;
      } else {
        if (heights[rightPointer] > rightBound) {
          rightBound = heights[rightPointer];
        }
        totalWater += rightBound - heights[rightPointer];
        rightPointer--; 
      }
    console.log(`LeftPointer: ${leftPointer}`);
    console.log(`RightPointer: ${rightPointer}`);
    }
    return totalWater;
  }
  
  const testArray = [1, 2, 3, 4];
  console.log(`Total rainwater collected: ${efficientSolution(testArray)}`);