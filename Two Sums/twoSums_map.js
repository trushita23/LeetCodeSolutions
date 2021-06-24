/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
 const len = nums.length;
    let indexes = [];
    let numMap = new Map();
    for(let i=0;i<len;i++){
        numMap.set(nums[i],i);
    }
    for(let i=0;i<len;i++){
        let numIndex =numMap.get(target-nums[i]);
        if(numIndex && numIndex !=i)
        {
            indexes[0]=i;
            indexes[1]=numIndex;
            break;
        }
    }
    return indexes;
};
