c = int(input())
for i in range(c):
    n_num = list(map(int, input().split()))
    avg = sum(n_num[1:]) / n_num[0]
    cnt = 0
    for score in n_num[1:]:
        if(score > avg):
            cnt +=1
    rate = cnt / n_num[0] *100
    print(f"{rate:.3f}%")