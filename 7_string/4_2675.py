n = int(input())
for i in range(n):
    p,s = input().split()
    for j in range(len(s)):
        print(s[j] * int(p), end="")
    print()