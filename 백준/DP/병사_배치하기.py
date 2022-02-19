from array import array


n = int(input())
arr = list(map(int, input().split()))

d = [0] * (n+1)
d[0] = arr[0]
cnt = 0

for i in range(1,  n-1):
    if d[i-1] + arr[i] > d[i-1] + arr[i+1]:
        d[i] = d[i - 1] + arr[i]

    else:
        if arr[i + 1] > arr[i - 1]:
            arr[i + 1] = 0
            d[i] = d[i-1] + arr[i]
            cnt += 1
        else:
            arr[i] = 0
            d[i] = d[i - 1]
            cnt += 1

print(cnt)

arr.reverse()

d = [1] * n
for i in range(1, n):
    for j in range(0, i):
        if arr[j] < arr[i]:
            d[i] = max(d[i], d[j] + 1)

print(n-max(d))
