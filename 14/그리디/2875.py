# 2875 대회 or 인턴

n,m,k = map(int, input().split())
cnt = 0

while n >= 2 and m >= 1 and m + n >= k + 3 :
    n -= 2
    m -= 1
    cnt += 1

print(cnt)