t = int(input())
btn = [300, 60, 10]
used = [0, 0, 0]

if t % 10 != 0:
    print(-1)
else:
    for i in range(3):
        if btn[i] <= t:
            used[i] += t // btn[i]
            t %= btn[i]
    for i in used:
        print(i, end=" ")
