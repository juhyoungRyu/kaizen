# 잘라야하는 체스판의 크기가 정해져있고, 경우의 수가 2개밖에 안되니 하드코딩으로 짜둠
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


# N: 세로 길이 / M: 가로 길이
N, M = map(int, input().split(" "))

# 인풋 받아서 8*8 배열에 저장
field = [[] for _ in range(N)]
for i in range(N):
    line = input().strip()
    for j in range(M):
        field[i].append(line[j])

# 결과값 64(8*8)로 셋팅
result = 64

# N*M 크기의 보드를 8*8 크기로 자르기 -> 8*8의 시작점(0,0)이 될 애 고르기
for i in range(N - 7):
    for j in range(M - 7):

        count1 = 0
        count2 = 0

        # 시작점: field[i][j]
        for r in range(8):
            for c in range(8):

                # 시작점부터 가로로 8, 세로로 8까지 돌면서
                # B로 시작하는 체스판과 몇개가 다른지 카운팅
                if field[i + r][j + c] != start_B[r][c]:
                    count1 += 1

                # W로 시작하는 체스판과 몇개가 다른지 카운팅
                if field[i + r][j + c] != start_W[r][c]:
                    count2 += 1

        # 가장 작은 값으로 result 갱신
        result = min(result, count1, count2)

# 최종 결과값 출력
print(result)
