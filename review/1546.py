n = int(input())
s = list(map(int,input().split()))
max_n = max(s)
sum = 0
for i in range(n):
    new_s = s[i] / max_n *100
    sum += new_s
print(sum/n)

# 처음으로 나만의 코드로 맞았다 but 비효율적임