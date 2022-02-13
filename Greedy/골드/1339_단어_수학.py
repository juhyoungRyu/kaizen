import re


n = int(input())
ls = [input() for _ in range(n)]

alphabet = [0 for _ in range(26)]

for l in ls:
    i = 0
    while l:
        now = l[-1]

        alphabet[ord(now) - ord("A")] += pow(10, i)
        i += 1
        l = l[:-1]

alphabet.sort(reverse=True)

ans = 0

for i in range(9, 0, -1):
    ans += i * alphabet[9 - i]
    # print(i * alphabet[9 - i])

print(ans)
