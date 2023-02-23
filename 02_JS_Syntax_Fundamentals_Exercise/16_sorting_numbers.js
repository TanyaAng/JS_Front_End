function sortNumbers(arr) {
    let sortedArr = arr.sort((x,y) => x-y);


    let middleIdx = Math.ceil(sortedArr.length/2);
    let smallNums = sortedArr.slice(0, middleIdx);
    let largeNums = sortedArr.slice(middleIdx, sortedArr.length);


    let result = [];
    let maxLength=Math.max(smallNums.length, largeNums.length);
    for (let i = 0; i < maxLength; i++) {
      result.push(smallNums[i]);
      if (i < largeNums.length) {
        result.push(largeNums[largeNums.length - 1 - i]);
      }
    }

    return result;
  }


function sortNumbers(arr) {
  let sortedArr =[...arr].sort((x,y) => x-y);
  let step=0;
  let result=[];
  while (sortedArr.length>0){
    if (step%2==0){
      let firstEl = sortedArr.shift();
      result.push(firstEl);
    } else {
      let lastEl=sortedArr.pop();
      result.push(lastEl);
    }
    step++;
  }
  return result;
}


sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);