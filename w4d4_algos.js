// selectionSort(arr) -  a slightly better sort!
// O(n^2) performance, but should be better than bubble sort
// return the array sorted in-place - don't create a new one

// this relies on finding the minimum item in a subsection of the array, so try
// writing another function:
// minIndex(arr, start, end) - returns the index of the smallest item found between indexes start and end


function minIndex(arr, start, end) {
    var indexOfSmallestElement = start;
    for (var i=start;i<=end;i++) {
        if(arr[i]<arr[indexOfSmallestElement]){
            indexOfSmallestElement = i;
        }
    }
    return indexOfSmallestElement;
}


var test_array = [9, 0, 4, 1, 2, 7];
console.log(minIndex(test_array, 0, 7)); // should return 1 - 0 is at the first index
console.log(minIndex(test_array, 3, 6)); // should return 5 - 1 is at the fourth index
console.log(minIndex(test_array, 1, 4)); // should return 1 - 0 is still at the first index
console.log(minIndex(test_array, 2, 4)); // should return 2 - 4 is at the second
// index, even though there's another 4 in the range we can settle for the first one

// once you get that done, you can use it to implement selectionSort

function selectionSort(arr) {
    for (var i=0;i<arr.length;i++) {
        // let x = minIndex(arr,i,arr.length); --> NOT QUITE FINISHED YET!
        // if (arr[x] < arr[i]):
        //     arr[i] = arr[x]
    }
    return arr;
}

y = selectionSort(test_array);
console.log(y)

// bonus: can you do it without minIndex? you definitely can