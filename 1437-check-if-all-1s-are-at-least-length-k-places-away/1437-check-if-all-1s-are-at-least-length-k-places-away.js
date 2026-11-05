var kLengthApart = function(nums, k) {
    let previous = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {

            // Check distance between consecutive 1s
            if (previous !== -1 && i - previous - 1 < k) {
                return false;
            }

            // Update previous 1's index
            previous = i;
        }
    }

    return true;
};