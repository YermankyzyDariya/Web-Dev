def centered_average(nums):
    nums_sorted = sorted(nums)          
    trimmed = nums_sorted[1:-1]         
    return sum(trimmed) // len(trimmed) 
print(centered_average([1 , 2 , 3 ,4]))
