a,b = input().split()
a = int(a[::-1])
b = int(b[::-1])
if a > b:
    print(a)
elif b > a:
    print(b)