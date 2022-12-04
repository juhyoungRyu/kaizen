 t = int(input())

for _ in range(t):
    k = int(input()) #층
    n = int(input()) #호
    f0 = [x for x in range(1, n+1)] #t0이라는 배열을 생성, 1~호수까지
    for i in range(k):
        for j in range(1, n): #인덱스로 사용할 i를 반복문으로 생성, 인덱스라서 그냥 n임
            f0[j] += f0[j-1] #그 전 번호를 이번 번호에 더해서 재저장, 그걸 인덱스만큼 반복 즉 마지막 저장값이 완성
    print(f0[-1])