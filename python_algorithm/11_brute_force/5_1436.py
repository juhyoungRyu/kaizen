# n = int(input())
# nth = 666
# result = 0

# if n == 1:
#     result = nth
# elif n >= 2:
#     result = str(n - 1) + str(nth)

# print(int(result))

n = int(input())
cnt = 0
nn = 666
while True:
    if "666" in str(nn):
        cnt += 1
    if cnt == n:
        print(nn)
        break
    nn += 1
