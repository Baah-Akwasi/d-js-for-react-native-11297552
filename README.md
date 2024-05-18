# 11297552

## Explanation of how tasks were solved

## Task 1

The map method is used to create a new array by applying a function to each element of the original array.
So within the map callback function:
I used the modulo % to check whether a number is even or odd.If the number is even, it is squared and if the number is odd, it is tripled.
The new array with the processed numbers is returned.

## Task 2

The format array string function takes an array of strings and numbers and checks if they are of the same length. If they are not, The user is prompted to give an array of the same length.
I used the map function to create a new array modifying each string to the corresponding number. If then number is even, The string is then converted to Uppercase and if the number is odd it is converted to lowercase.

## Task 3

The function first checks if the lengths of originalNames and modifiedNames are the same. If not, it prompts the user.The map function is used to iterate over the originalNames array. For each name:
It creates an object with id set to the current index plus 1 (to start the ID from 1).
It assigns originalName from the originalNames array and modifiedName from the modifiedNames array at the same index.
