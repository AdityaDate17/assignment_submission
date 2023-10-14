const prompt=require("prompt-sync")({sigint:true}); 

function bubbleSortDescending(arr) {
    let len = arr.length;
    let swapped;
    
    for (let pass = 0; pass < len; pass++) {
      swapped = false;
      
      for (let i = 0; i < len - pass - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          // Swap the elements if they are in the wrong order (descending)
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      
      if (!swapped) {
        break; // If no swaps were made in a pass, the array is sorted, and we can exit the loop
      }
    }
    
    return arr;
  }
  
  // Prompt the user to enter a list of numbers separated by commas
  const input = prompt("Enter a list of numbers");
  
  // Split the input string into an array
  const numbers = input.split(',').map(item => parseInt(item));
  
  // Sort the array in descending order using bubble sort
  bubbleSortDescending(numbers);
  
  // Display the sorted array
  console.log("Sorted Array in Descending Order :", numbers);
  