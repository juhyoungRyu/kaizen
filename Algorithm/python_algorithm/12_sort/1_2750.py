n = int(input())
num = []
for _ in range(n):
    a = int(input())
    num.append(a)

for i in range(len(num)):
    for j in range(i + 1):
        if num[i] < num[j]:
            num[i], num[j] = num[j], num[i]

for x in range(n):
    print(num[x])
