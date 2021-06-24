var twoSum = function(nums, target) {
 const len = nums.length;
    let indexes = [];
    let numMap = new Map();
    for(let i=0;i<len;i++){
        numMap.set(nums[i],i);
    }
    for(let i=0;i<len;i++){
        if(numMap.get(target-nums[i]) && numMap.get(target-nums[i])!=i)
        {
            indexes[0]=i;
            indexes[1]=numMap.get(target-nums[i]);
            break;
        }
    }
    return indexes;
};
