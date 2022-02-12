n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

ans = 0

a.sort()
b.sort(reverse=True)

for i in range(n):
    ans += a[i] * b[i]

print(ans)
