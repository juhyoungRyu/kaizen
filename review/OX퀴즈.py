t = int(input())
for i in range(t):
    s = list(input())
    cnt = 1
    sum = 0
    for i in s:
        if i == "O":
            sum += cnt
            cnt += 1
        else:
            cnt = 1
    print(sum)