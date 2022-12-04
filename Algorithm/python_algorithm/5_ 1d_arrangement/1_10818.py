import sys
input = sys.stdin.readline
n = input()

# 반복문을 사용해서 푸는 방법
num_list = list(map(int, input().split()))
n_max = num_list[0]
n_min = num_list[0]
for i in num_list:
    if i > n_max:
        n_max = i
    if i < n_min:
        n_min = i
print(n_min, n_max, end="")

# 내장함수 max와 min을 사용해서 푸는 방버

num_list = list(map(int, input().split))
print(min(num_list), max(num_list), end="")