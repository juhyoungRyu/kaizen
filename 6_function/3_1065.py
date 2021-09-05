n = int(input())
o_num = 0

for i in range(1, n+1):
    if i <= 99:
        o_num += 1
    else:
        num = list(map(int, str(i)))
        if num[0] - num[1] == num[1] - num[2]:
            o_num += 1
print(o_num)