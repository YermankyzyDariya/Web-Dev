def sum13(nums):
    total = 0
    skip = False  
    for n in nums:
        if n == 13:
            skip = True
            continue
        if skip:
            skip = False
            continue
        total += n
    return total
print(sum13([1 , 13 , 6 , 7]))
