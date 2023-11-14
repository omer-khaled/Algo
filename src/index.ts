import linearSearch from "./search Algo/linearSeacrh.js";
import binarySearch from "./search Algo/binarySearch.js";
import bubbleSort from "./sorting Algo/bubbleSort.js";
import insertionSort from "./sorting Algo/insertionSort.js";
import selectionSort from "./sorting Algo/selectionSort.js";
import mergeSort from "./sorting Algo/mergeSort.js";
import quickSort from "./sorting Algo/quickSort.js";

/* Search Algorithms */
// Linear Search => O(n)
console.log('Linear Search');
console.log(linearSearch([1,4,6,8,9,2],2));
console.log(linearSearch([1,4,6,8,9,2],100));

// binary Search => O(log n)
console.log('Binary Search');
console.log(binarySearch([10,20,25,68],100));
console.log(binarySearch([10,20,25,100,120,500],100));

/* Sorting Algorithms */

// work by swaping elements that in wrong order
    /*
        [6,9,5,3]
        every loop put the largest number in correct position in last array
        loop one => 
        [6,9,5,3]
        [6,5,9,3]
        [6,5,3,9]
        loop two =>
        [5,6,3,9]
        [5,3,6,9]
        loop three =>
        [3,5,6,9]
    */
   // bubble Sort => O(n^2)
   
console.log('Buuble Sort');
console.log(bubbleSort([99,2,5,6,78,33]));


// selectionSort => O(n^2)
console.log('selection Sort');
console.log(selectionSort([99,2,5,6,78,33]));

// insertionSort => O(n^2)
console.log('insertion Sort');
console.log(insertionSort([99,2,5,6,78,33]));

// insertionSort => O(nlogn)
// space => o(n)
console.log('Merge Sort');
console.log(mergeSort([99,2,5,6,78,33]));


// insertionSort => O(nlogn)
// space => o(n)
console.log('quick Sort');
console.log(quickSort([99,2,5,6,78,33]));