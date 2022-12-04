a = []
for i in range(1,11):
    n = int(input())
    a.append(n % 42)
a = set(a)
print(len(a))
