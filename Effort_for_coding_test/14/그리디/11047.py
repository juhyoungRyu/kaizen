# 11047 동전0

n, k = map(int, input().split())
coin = [x for x in range(n)]
cnt = 0

for i in range(n) :
    coin[i] = int(input())

for i in reversed(range(n)) :
        cnt += k // coin[i]
        k = k % coin[i]

print(cnt)

