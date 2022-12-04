n, m = map(int, input().split())
money_value = []

for _ in range(n):
    money_value.append(int(input()))

d = [10001] * (m+1)

d[0] = 0
for i in range(n):
    for j in range(money_value[i], m + 1):
        if d[j - money_value[i]] != 10001:
            d[j] = min(d[j], d[j - money_value[i]] + 1)

if d[m] == 10001:
    print(-1)
else:
    print(d[m])
