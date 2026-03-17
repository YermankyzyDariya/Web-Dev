from collections import Counter


n = int(input())

shoe_sizes = list(map(int, input().split()))

stock = Counter(shoe_sizes)


num_customers = int(input())

earnings = 0


for _ in range(num_customers):
    size, price = map(int, input().split())
    if stock[size] > 0:  
        earnings += price
        stock[size] -= 1  

print(earnings)
