let nums = [];
        let n = prompt("Enter Array Size : ");
        for(let  i=0; i<n; i++) {
            nums[i] = prompt(`Enter num ${i+1}: `);
        }
        //let nums = [7,1,5,3,6,4];
        //let n = nums.length;
        let min = nums[0];
        let max = 0;
        for(let i=1; i<n; i++)
        {
            if(nums[i] > min)
            {
                let profit = nums[i] - min;
                if(profit > max)
                    max = profit;
            }
            else
            {
                min = nums[i];
            }
        }
        document.write("Enetered array: " + nums);
        document.write("  Answer:" + max);