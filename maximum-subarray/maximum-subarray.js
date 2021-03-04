/**
 * @param {number[]} nums
 * @return {number}
 */

// var maxSubArray = function(nums) {
//     for (let i = 1; i < nums.length; i++){
//         nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//     }
//     return Math.max(...nums);
// };


var maxSubArray = function(nums) {
      var maxSoFar = nums[0];
      var maxEndingHere = nums[0];
      
      for (var i = 1; i < nums.length; i++) {          
        maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);  
      }

      return maxSoFar;
}