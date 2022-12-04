n = int(input())

ans = 1000 - n
etc = [500, 100, 50, 10, 5, 1]
cnt = 0

for i in range(len(etc)):
    if etc[i] <= ans:
        cnt += ans // etc[i]
        ans %= etc[i]

print(cnt)
