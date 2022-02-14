n = int(input())
path = list(map(int, input().split()))
price = list(map(int, input().split()))

answer = 0
liter = price[0]

for i in range(len(path)):
    answer += path[i] * liter
    if liter > price[i + 1]:
        liter = price[i + 1]

print(answer)
