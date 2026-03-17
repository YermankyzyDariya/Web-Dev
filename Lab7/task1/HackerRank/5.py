
lst = []


N = int(input())

for _ in range(N):
  
    command_parts = input().split()
    cmd = command_parts[0]

    if cmd == "insert":
        index = int(command_parts[1])
        value = int(command_parts[2])
        lst.insert(index, value)
    elif cmd == "print":
        print(lst)
    elif cmd == "remove":
        value = int(command_parts[1])
        lst.remove(value)
    elif cmd == "append":
        value = int(command_parts[1])
        lst.append(value)
    elif cmd == "sort":
        lst.sort()
    elif cmd == "pop":
        lst.pop()
    elif cmd == "reverse":
        lst.reverse()
