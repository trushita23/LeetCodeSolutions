/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexes = [];
    let len = nums.length;
    for(let i=0;i<nums.length;i++){
        let first = target - nums[i];
        for(let j=0;j<len;j++){
            if(j!==i){
                if(nums[j]===first){
                    indexes[0]=i;
                    indexes[1]=j;
                    break;
                }
            }
        }
        if(indexes.length){
            break;
        }
    }
    return indexes;
};
