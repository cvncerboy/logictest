const isAnagrams = (arr) => {
    let sortedArr = arr.map(item => item.split('').sort().join(''));
    let setArr = new Set(sortedArr);
    let reducedObj = {};
    for (let setItem of setArr) {
      let indexArr = sortedArr.reduce((acc, cur, index) => {
        if (setItem === cur) {
          acc.push(index);
        }
        return acc;
      }, []);
      reducedObj[setItem] = indexArr;
    }
    let finalArr = [];
    for (let reduceItem in reducedObj) {
      finalArr.push(reducedObj[reduceItem].map(item => arr[item]));
    }
    return finalArr;
  }
  console.log(isAnagrams(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']));