"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let start = 0;
    let mid = 0;
    let end = nums.length - 1;
    while (mid <= end) {
        if (nums[mid] === 0) {
            [nums[start], nums[mid]] = [nums[mid], nums[start]];
            start++;
            mid++;
        }
        else if (nums[mid] === 2) {
            [nums[mid], nums[end]] = [nums[end], nums[mid]];
            end--;
        }
        else {
            mid++;
        }
    }
    return nums;
}
console.log(sortColors([2, 0, 2, 1, 1, 0])); // expected [0,0,1,1,2,2]
console.log(sortColors([2, 1, 1, 0])); // expected [0,1,1,2]
