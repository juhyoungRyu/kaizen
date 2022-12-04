# 골드바흐의 추측
## 짝수 n의 골드바흐 파티션을 구하라
def prime_list(n):
    sieve = [True] * n
    m = int(n ** 0.5)
    for i in range(2, m + 1):
        if sieve[i] == True:
            for j in range(i+i, n, i):
                sieve[j] = False
    return sieve

def Gold(primes, n):
    index = 0
    while True:
        if primes[n // 2 - index] and primes[n // 2 + index]:
            return(n // 2 - index, n // 2 + index)
        index += 1

primes = prime_list(10001)

for _ in range(int(input())):
    n = int(input())
    answer = Gold(primes, n)
    print(answer[0], answer[1])
