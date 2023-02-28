let div1 = document.querySelector('.resultBuble');
let div2 = document.querySelector('.resultInsertion');
let numbers = [7,1,0,3,6,2,9,8,4,-1]
let numbers2 = [7,1,0,3,6,2,9,8,4,-1]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
        await sleep(500)
        div1.innerHTML=arr.toString()
      }
      if (noSwaps) break;
      div1.innerHTML=arr.toString()
    }
    return arr;
  }
 console.log(bubbleSort(numbers))

async function insertionSort(array) {
  let length = array.length;
  for (let i = 1; i < length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j+1] = array[j];
      j--;
      await sleep(500)
      div2.innerHTML=array.toString()
    }
    array[j+1] = key;
    await sleep(500)
    div2.innerHTML=array.toString()
  }
  return array;
}
console.log(insertionSort(numbers2)); 
 
