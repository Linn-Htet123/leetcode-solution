function twoSumRecursive(
  nums: number[],
  target: number,
  currentIndex: number = 0,
  MapIndex: Record<number, number> = {}
): number[] | undefined {
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

function twoSum(nums: number[], target: number): number[] {
  let MapIndex: Record<number, number> = {};
  for (let i = 0; i <= nums.length; i++) {
    let numberToSum = target - nums[i];
    if (numberToSum in MapIndex) return [i, MapIndex[numberToSum]];
    MapIndex[nums[i]] = i;
  }
  return [0, 0];
}
