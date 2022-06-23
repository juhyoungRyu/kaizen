n, m = map(int, input().split())
s = []
q = []
dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]

for _ in range(n):
    s.append(list(input()))

q = [[0, 0]]
s[0][0] = 1

while q:
    a, b = q[0][0], q[0][1]
    del q[0]

    for i in range(4):

        x = a + dx[i]
        y = b + dy[i]

        if 0 <= x < n and 0 <= y < m and s[x][y] == "1":
            q.append([x, y])
            s[x][y] = s[a][b] + 1

print(s[n - 1][m - 1])
