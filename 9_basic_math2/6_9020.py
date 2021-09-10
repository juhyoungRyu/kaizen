# 골드바흐의 추측
## 짝수 n의 골드바흐 파티션을 구하라
def Goldbach():
    check = [False, False] + [True] * 10000
    for i in range(2, 101):
        if check[i] == True:
            for j in range(i + i, 10001, i):
                check[i] = False
    t = int(input())
    for _ in range(t):
        n = int(input())

        A = n // 2
        B = A
        for _ in range(10000):
            if check[A] and check[B]:
                print(A, B)
            A -= 1
            B += 1

Goldbach()