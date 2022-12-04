n = int(input())
score = list(map(int, input().split()))
s_max = max(score)

new_list = []
for i in score:
    new_list.append(i/s_max *100)
avg = sum(new_list)/n
print(avg)