n = int(input())
num = []

for _ in range(n):
    num.append(int(input()))

num = sorted(set(num))

for i in num:
    print(i)

# n = int(input())
# num = []
# for _ in range(n):
#     a = int(input())
#     num.append(a)
# num.sort()
# for i in range(n):
#     print(num[i])