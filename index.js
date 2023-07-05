function findPairsWithSum(arr, target){
    let pairs = [];
    let set = new Set();
  
    for (let num of arr) {
      let x = target - num;
      if (set.has(x)) {
        pairs.push([num, x]);
      }
      set.add(num);
    }
  
    return pairs;
  }
  
  function sort(arr1, arr2){
    let merged = arr1.concat(arr2);
    merged.sort((a, b) => a - b);
    return merged;
  }
  
  function findCombinationsWithDoubleTarget(arr, target){
    let doubledTarget = target * 2;
    var combinations = [];
    let ans = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === doubledTarget) {
          combinations.push([arr[i], arr[j]]);
        }
      }
    }
//    console.log(doubledTarget)
    return combinations;
  }


const input = [1, 3, 2, 2, -4, -6, -2, 8];
  const target = 4;
  

  const pairsWithTargetSum = findPairsWithSum(input, target);
  console.log("target sum = ", pairsWithTargetSum);
  
 
  const mergedAndSorted = sort(input, []);
  console.log("sorted = ", mergedAndSorted);
  

  const combinationsWithDoubleTarget = findCombinationsWithDoubleTarget(mergedAndSorted,target)
  console.log("Combinations with double target sum = ",combinationsWithDoubleTarget);