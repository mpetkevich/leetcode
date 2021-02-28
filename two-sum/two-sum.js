/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];   
    outer: for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ( nums[i] + nums[j] == target) {
                console.log (`i=${i}, j=${j} | nums[i], nums[j] = ${nums[i]} , ${nums[j]}`);
                result = [i, j];
                break outer;
            }
        }
    }
        
    return result;
};