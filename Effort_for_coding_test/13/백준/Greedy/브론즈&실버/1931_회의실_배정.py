n = int(input())
meet_time = [[0] * 2 for _ in range(n)]
cnt = 1

for i in range(n):
    a, b = map(int, input().split())
    meet_time[i][0] = a
    meet_time[i][1] = b

meet_time.sort(key=lambda x: (x[1], x[0]))


end_time = meet_time[0][1]

for i in range(1, n):
    if meet_time[i][0] >= end_time:
        cnt += 1
        end_time = meet_time[i][1]

print(cnt)
