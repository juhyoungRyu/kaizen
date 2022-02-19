n = int(input())
w = [0 for _ in range(n)]
ans = []

for i in range(n):
    w[i] = int(input())

# for i in range(len(w), 0, -1):
#     w[len(w) - i] = w[len(w) - i] * i

w.sort(reverse=True)

for i in range(n):
    ans.append(w[i] * (i + 1))

print((ans))
