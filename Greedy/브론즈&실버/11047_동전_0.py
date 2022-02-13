n, k = map(int, input().split())
coin_list = []
cnt = 0

for _ in range(n):
    coin_list.append(int(input()))

for i in reversed(range(n)):
    cnt += k // coin_list[i]
    k = k % coin_list[i]

print(cnt)
