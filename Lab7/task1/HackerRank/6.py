
string = input()
sub_string = input()

count = 0
start = 0


while True:
   
    index = string.find(sub_string, start)
    if index == -1:
        break
    count += 1
    start = index + 1  

print(count)
