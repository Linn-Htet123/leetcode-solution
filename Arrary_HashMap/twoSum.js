"use strict";
function twoSumRecursive(nums, target, currentIndex = 0, MapIndex = {}) {
    if (currentIndex >= nums.length) {
        return undefined;
    }
    const numberToSum = target - nums[currentIndex];
    if (numberToSum in MapIndex) {
        return [currentIndex, MapIndex[numberToSum]];
    }
    MapIndex[nums[currentIndex]] = currentIndex;
    return twoSumRecursive(nums, target, currentIndex + 1, MapIndex);
}
console.log(twoSumRecursive([1, 3, 4], 5));
//++++++++++++++++++++++++++++++++++ OR +++++++++++++++++++++++++++++++++++++++++++
function twoSum(nums, target) {
    let MapIndex = {};
    for (let i = 0; i <= nums.length; i++) {
        let numberToSum = target - nums[i];
        if (numberToSum in MapIndex)
            return [i, MapIndex[numberToSum]];
        MapIndex[nums[i]] = i;
    }
    return [0, 0];
}
