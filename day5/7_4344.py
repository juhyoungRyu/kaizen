c = int(input())
for i in range(c):
    n = list(map(int, input().split()))
    avg = sum(n[1:]) / n[0]
    cnt = 0
    for score in n[1:]:
        if score > avg:
            cnt += 1
    rate = cnt / n[0] *100
    print(f'{rate:.3f}%')