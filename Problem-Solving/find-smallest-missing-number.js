/**
 * Given a sorted array of n distinct numbers where each number is in the range from 0 to m-1 and m > n.
 * Find the smallest number that is missing from the array.
 * Examples
 *  Input: {0, 1, 2, 6, 9}, n = 5, m = 10
Output: 3

Input: {4, 5, 10, 11}, n = 4, m = 12
Output: 0

Input: {0, 1, 2, 3}, n = 4, m = 5
Output: 4

Input: {0, 1, 2, 3, 4, 5, 6, 7, 10}, n = 9, m = 11
Output: 8
 */

function findNumber(values) {

  if (values.length == 0)
  	return -1;
    
  for (let i = 0; i < values.length; ++i) {
    if (i < values[i]) {
			return i
    }
  }

  return values[values.length-1]+1;
}

console.log(
	findNumber([0, 1, 2, 6, 9]),
	findNumber([4, 5, 10, 11]),
  findNumber([0, 1, 2, 3]),
  findNumber([0, 1, 2, 3, 4, 5, 6, 7, 10]),
  findNumber([])
);

//3 0 4 8 -1
