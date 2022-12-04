start_B = [
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
]

start_W = [
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
]

n, m = map(int(input().split()))

field = [[] for _ in range(n)]
for i in range(n):
    line = input().strip()
    for j in range(m):
        field[i].append(line[j])

result = 64

for i in range(n - 7):
    for j in range(m - 7):

        count1 = 0
        count2 = 0

        for r in range(8):
            for c in range(8):
                if field[i + r][j + c] != start_B[r][c]:
                    count1 += 1

                if field[i + r][j + c] != start_W[r][c]:
                    count2 += 1
            result = min(result, count1, count2)

print(result)
