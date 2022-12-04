import math

a, b, v = map(int, input().split())
# a= 올라가는 길이, b= 떨어지는길이, v= 나무높이

day = math.ceil((v - a) / (a - b)) + 1
print(day)
